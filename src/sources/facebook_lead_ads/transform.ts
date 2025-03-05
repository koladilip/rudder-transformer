import { TransformationError } from '@rudderstack/integrations-lib';
import get from 'get-value';
import Message = require('../message');
import { EventType } from '../../constants';
import { InputEventType, OutputEventType } from './type';
import { SourceInputV2 } from '../../types';
import { generateUUID } from '../../v0/util';

const {
  removeUndefinedAndNullValues,
  getBodyFromV2SpecPayload,
  unwrapArrayValues,
} = require('../../v0/util');

const mapping = require('./mapping.json');

function processEvent(inputEvent: InputEventType): any {
  const unwrappedInputEvent = unwrapArrayValues(inputEvent);

  if (Object.keys(unwrappedInputEvent).length === 0) {
    throw new Error('input event must have at least one field');
  }

  const message = new Message(`FacebookLeadAds`);

  // set event type identify
  message.setEventType(EventType.IDENTIFY);

  // setting traits based on mapping
  message.setPropertiesV2(unwrappedInputEvent, mapping);

  // set and transform originalTimestamp to ISO 8601 from mm/dd/yyyy hh:mm
  const date: Date = new Date(`${unwrappedInputEvent.created_time} UTC`);
  if (!Number.isNaN(date.getTime())) {
    message.setProperty('originalTimestamp', date.toISOString());
  }

  // set anonymous id if userId unavailable
  if (!get(message, 'userId')) {
    message.setProperty('anonymousId', generateUUID());
  }

  // add everything as it is in context.traits
  if (!message.context.traits) message.context.traits = {};
  Object.assign(message.context.traits, unwrappedInputEvent);

  return message;
}

const process = (payload: SourceInputV2) => {
  const event = getBodyFromV2SpecPayload(payload);
  try {
    const response: OutputEventType = processEvent(event);
    return removeUndefinedAndNullValues(response);
  } catch (error) {
    throw new TransformationError(`Error while processing event: ${error}`);
  }
};

export { process };
