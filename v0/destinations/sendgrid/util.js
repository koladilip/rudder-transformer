const logger = require("../../../logger");
const {
  CustomError,
  isObject,
  isEmptyObject,
  removeUndefinedAndNullValues,
  removeUndefinedAndNullAndEmptyValues,
  isEmpty
} = require("../../util");

const isValidBase64 = content => {
  const re = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  return re.test(String(content));
};

const payloadValidator = payload => {
  const updatedPayload = payload;

  if (!payload.template_id) {
    if (!payload.content) {
      throw new CustomError("Either template id or content is required.", 400);
    }
  }
  if (payload.personalizations && payload.personalizations.length < 1) {
    throw new CustomError("personalization field cannot be empty", 400);
  }
  if (payload.personalizations) {
    payload.personalizations.forEach((keys, index) => {
      const personalizationsArr = [];
      if (keys.to && (payload.subject || keys.subject)) {
        keys.to.forEach(keyto => {
          if (keyto.email) {
            personalizationsArr.push(keyto);
          }
        });
      } else {
        logger.error(`item at index ${index} dropped. to field is mandatory`);
      }
      updatedPayload.personalizations[index].to = personalizationsArr;
    });
  }
  if (payload.attachments) {
    payload.attachments.forEach((attachment, index) => {
      if (!attachment.content || !attachment.filename) {
        updatedPayload.attachments[index] = null;
        logger.error("content and filename are required for attachments");
      }
      if (
        payload.attachments.content &&
        !isValidBase64(payload.attachments.content)
      ) {
        updatedPayload.attachments[index] = null;
        logger.error("content should be base64 encoded");
      }
    });
  }
  if (!payload.from) {
    throw new CustomError("from is required field", 400);
  }
  if (payload.from && !payload.from.email) {
    throw new CustomError("email inside from object is required", 400);
  }
  if (payload.categories) {
    payload.categories.forEach((category, index) => {
      if (typeof category !== "string") {
        updatedPayload.categories[index] = String(category);
      }
    });
    payload.categories.splice(10);
  }
  if (payload.headers && !isObject(payload.headers)) {
    updatedPayload.headers = null;
  }
  if (payload.subject && payload.subject.length < 1) {
    delete updatedPayload.subject;
  }
  if (isEmptyObject(payload.reply_to)) {
    delete updatedPayload.reply_to;
  }
  if (payload.reply_to && !payload.reply_to.email) {
    logger.error("reply_to object requires email field");
    delete updatedPayload.reply_to;
  }
  if (payload.asm && payload.asm.groups_to_display && !payload.asm.group_id) {
    logger.error("group Id parameter is required in asm");
    delete updatedPayload.asm;
  }
  if (isEmptyObject(payload.asm)) {
    delete updatedPayload.asm;
  }
  return updatedPayload;
};

const isValidEvent = (Config, event) => {
  let flag = false;
  Config.eventNamesSettings.some(eventName => {
    if (
      eventName.event &&
      eventName.event.trim().length !== 0 &&
      eventName.event.trim().toLowerCase() === event
    ) {
      flag = true;
      return true;
    }
  });
  return flag;
};

const createList = Config => {
  const asmList = [];
  if (Config.groupsToDisplay && Config.groupsToDisplay.length > 0) {
    Config.groupsToDisplay.forEach(groups => {
      if (
        groups.groupId &&
        groups.groupId.trim() &&
        !Number.isNaN(Number(groups.groupId)) &&
        Number.isInteger(Number(groups.groupId))
      ) {
        asmList.push(Number(groups.groupId));
      }
    });
  }
  return asmList;
};

const createContent = Config => {
  const contentList = [];
  if (Config.contents && Config.contents.length > 0) {
    const len = Config.contents.length - 1;
    Config.contents.forEach((content, index) => {
      if (content.type && content.value) {
        contentList.push(content);
      } else if (index < len) {
        logger.error(
          `item at index ${index} dropped. type and value are required fields`
        );
      }
    });
  }
  return contentList;
};

const createAttachments = Config => {
  const attachmentList = [];
  if (Config.attachments && Config.attachments.length > 0) {
    const len = Config.attachments.length - 1;
    Config.attachments.forEach((attachment, index) => {
      if (attachment.content && attachment.filename) {
        attachmentList.push(removeUndefinedAndNullAndEmptyValues(attachment));
      } else if (index < len) {
        logger.error(
          `item at index ${index} dropped. content and type are required fields`
        );
      }
    });
  }
  return attachmentList;
};

const createMailSettings = (payload, iObj, Config) => {
  const updatedPayload = payload;
  updatedPayload.mail_settings = {
    bypass_list_management: {},
    bypass_spam_management: {},
    bypass_bounce_management: {},
    bypass_unsubscribe_management: {},
    footer: {},
    sandbox_mode: {}
  };
  updatedPayload.mail_settings.footer.enable = Config.footer;
  updatedPayload.mail_settings.footer.text = Config.footerText;
  updatedPayload.mail_settings.footer.html = Config.footerHtml;
  updatedPayload.mail_settings.sandbox_mode.enable = Config.sandboxMode;

  if (iObj && iObj.mailSettings) {
    const intObjMail = iObj.mailSettings;
    if (intObjMail.bypassListManagement) {
      updatedPayload.mail_settings.bypass_list_management.enable =
        intObjMail.bypassListManagement;
    } else {
      if (intObjMail.bypassSpamManagement) {
        updatedPayload.mail_settings.bypass_spam_management.enable =
          intObjMail.bypassSpamManagement;
      }
      if (intObjMail.bypassBounceManagement) {
        updatedPayload.mail_settings.bypass_bounce_management.enable =
          intObjMail.bypassBounceManagement;
      }
      if (intObjMail.bypassUnsubscribeManagement) {
        updatedPayload.mail_settings.bypass_unsubscribe_management.enable =
          intObjMail.bypassUnsubscribeManagement;
      }
    }
    if (intObjMail.footer) {
      updatedPayload.mail_settings.footer.enable = intObjMail.footer;
    }
    if (intObjMail.footerText) {
      updatedPayload.mail_settings.footer.text = intObjMail.footerText;
    }
    if (intObjMail.footerHtml) {
      updatedPayload.mail_settings.footer.html = intObjMail.footerHtml;
    }
    if (intObjMail.sandboxMode) {
      updatedPayload.mail_settings.sandbox_mode.enable = intObjMail.sandboxMode;
    }
  }
  if (isEmptyObject(payload.mail_settings.bypass_list_management)) {
    delete updatedPayload.mail_settings.bypass_list_management;
  }

  if (isEmptyObject(payload.mail_settings.bypass_spam_management)) {
    delete updatedPayload.mail_settings.bypass_spam_management;
  }
  if (isEmptyObject(payload.mail_settings.bypass_bounce_management)) {
    delete updatedPayload.mail_settings.bypass_bounce_management;
  }
  if (isEmptyObject(payload.mail_settings.bypass_unsubscribe_management)) {
    delete updatedPayload.mail_settings.bypass_unsubscribe_management;
  }
  if (isEmpty(updatedPayload.mail_settings.footer.text)) {
    updatedPayload.mail_settings.footer.text = null;
  }

  if (isEmpty(updatedPayload.mail_settings.footer.html)) {
    updatedPayload.mail_settings.footer.html = null;
  }
  updatedPayload.mail_settings.footer = removeUndefinedAndNullValues(
    updatedPayload.mail_settings.footer
  );
  updatedPayload.mail_settings = removeUndefinedAndNullValues(
    payload.mail_settings
  );
  return updatedPayload;
};

const createTrackSettings = (payload, Config) => {
  const updatedPayload = payload;
  updatedPayload.tracking_settings = {
    click_tracking: {},
    open_tracking: {},
    subscription_tracking: {},
    ganalytics: {}
  };
  updatedPayload.tracking_settings.click_tracking.enable = Config.clickTracking;
  updatedPayload.tracking_settings.click_tracking.enable_text =
    Config.clickTrackingEnableText;

  updatedPayload.tracking_settings.open_tracking.enable = Config.openTracking;
  updatedPayload.tracking_settings.open_tracking.substitution_tag =
    Config.openTrackingSubstitutionTag || null;

  updatedPayload.tracking_settings.subscription_tracking = {};
  updatedPayload.tracking_settings.subscription_tracking.enable =
    Config.subscriptionTracking || false;
  updatedPayload.tracking_settings.subscription_tracking.text =
    Config.text || null;
  updatedPayload.tracking_settings.subscription_tracking.html =
    Config.html || null;
  updatedPayload.tracking_settings.subscription_tracking.substitution_tag =
    Config.substitutionTag || null;

  updatedPayload.tracking_settings.ganalytics.enable = Config.ganalytics;
  updatedPayload.tracking_settings.ganalytics.utm_source =
    Config.utmSource || null;
  updatedPayload.tracking_settings.ganalytics.utm_medium =
    Config.utmMedium || null;
  updatedPayload.tracking_settings.ganalytics.utm_term = Config.utmTerm || null;
  updatedPayload.tracking_settings.ganalytics.utm_content =
    Config.utmContent || null;
  updatedPayload.tracking_settings.ganalytics.utm_campaign =
    Config.utmCampaign || null;

  updatedPayload.tracking_settings.ganalytics = removeUndefinedAndNullValues(
    payload.tracking_settings.ganalytics
  );
  updatedPayload.tracking_settings.subscription_tracking = removeUndefinedAndNullValues(
    payload.tracking_settings.subscription_tracking
  );
  updatedPayload.tracking_settings.ganalytics = removeUndefinedAndNullValues(
    payload.tracking_settings.ganalytics
  );
  updatedPayload.tracking_settings.open_tracking = removeUndefinedAndNullValues(
    payload.tracking_settings.open_tracking
  );
  updatedPayload.tracking_settings = removeUndefinedAndNullValues(
    payload.tracking_settings
  );
  return updatedPayload;
};

const fieldsFromConfig = (payload, Config) => {
  const updatedPayload = payload;
  if (!payload.from) {
    updatedPayload.from = {};
    updatedPayload.from.email = Config.fromEmail;
    updatedPayload.from.name = Config.fromName ? Config.fromName : null;
    updatedPayload.from = removeUndefinedAndNullValues(updatedPayload.from);
  }
  if (Config.templateId && !payload.template_id) {
    updatedPayload.template_id = Config.templateId;
  }
  const attachments = createAttachments(Config);
  if (attachments.length > 0 && !payload.attachments) {
    updatedPayload.attachments = attachments;
  }
  const content = createContent(Config);
  if (content.length > 0 && !payload.content) {
    updatedPayload.content = content;
  }
  if (!payload.subject) {
    updatedPayload.subject = Config.subject;
  }
  if (!payload.reply_to) {
    updatedPayload.reply_to = {};
    updatedPayload.reply_to.email = Config.replyToEmail
      ? Config.replyToEmail
      : null;
    updatedPayload.reply_to.name = Config.replyToName
      ? Config.replyToName
      : null;
  }
  return updatedPayload;
};

module.exports = {
  payloadValidator,
  isValidEvent,
  createList,
  createMailSettings,
  createTrackSettings,
  fieldsFromConfig
};
