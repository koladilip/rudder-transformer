import { secretApiToken } from '../maskedSecrets';

export const data = [
  {
    name: 'clickup',
    description: 'Invalid priority',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                priority: 0,
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error:
              'Invalid value specified for priority. Value must be Integer and in range "[1,4]"',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Custom field: Invalid phone number',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                keyToCustomFieldName: [
                  {
                    from: 'phone',
                    to: 'Phone Number',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                phone: '9999999999',
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'The provided phone number is invalid',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Custom field: Invalid email',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                keyToCustomFieldName: [
                  {
                    from: 'email',
                    to: 'Email',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                email: 'test.com',
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'The provided email is invalid',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Custom field: Invalid url',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                keyToCustomFieldName: [
                  {
                    from: 'url',
                    to: 'Url',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                url: 'www.test.com',
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'The provided url is invalid',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Custom field: Invalid location latitude',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                keyToCustomFieldName: [
                  {
                    from: 'location',
                    to: 'Location',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                location: {
                  lat: -100,
                  lng: 124,
                  formattedAddress: 'Gold Coast QLD, Australia',
                },
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Invalid value specified for latitude. Latitude must be in range "[-90, 90]"',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Custom field: Invalid rating',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                keyToCustomFieldName: [
                  {
                    from: 'rating',
                    to: 'Rating',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                rating: '7',
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'Invalid value specified for rating. Value must be in range "[0,5]"',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Creating task with valid custom fields values',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                keyToCustomFieldName: [
                  {
                    from: 'industry',
                    to: 'Industry',
                  },
                  {
                    from: 'Payment Status',
                    to: 'Payment Status',
                  },
                  {
                    from: 'labelKey',
                    to: 'Labels',
                  },
                  {
                    from: 'locationKey',
                    to: 'Location',
                  },
                  {
                    from: 'phone',
                    to: 'Phone Number',
                  },
                  {
                    from: 'email',
                    to: 'Email',
                  },
                  {
                    from: 'url',
                    to: 'Url',
                  },
                  {
                    from: 'rating',
                    to: 'Rating',
                  },
                  {
                    from: 'plan',
                    to: 'Plan',
                  },
                  {
                    from: 'contactTitle',
                    to: 'Contact Title',
                  },
                  {
                    from: 'date',
                    to: 'Date',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                description: 'Creating task with valid custom fields values',
                tags: ['testing', 'custom fields'],
                timeEstimate: 10800000,
                status: 'Ready',
                priority: 1,
                dueDate: '2022-02-25T13:39:21.032Z',
                includeDueDateTime: true,
                startDate: '2022-01-20T13:39:21.032Z',
                includeStartDateTime: 'true',
                notifyAll: false,
                industry: 'Retail',
                'Payment Status': 'Pending',
                labelKey: ['option 1', 'option 2', 'option 3'],
                locationKey: {
                  lat: -20,
                  lng: 124,
                  formattedAddress: 'Gold Coast QLD, Australia',
                },
                phone: '+12233445567',
                email: 'test123@example.com',
                url: 'https://www.rudderstack.com/',
                rating: 3,
                plan: 'Business',
                contactTitle: 'VP of Operations',
                date: '2022-02-25T13:39:21.032Z',
              },
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://api.clickup.com/api/v2/list/correctListId123/task',
              headers: {
                'Content-Type': 'application/json',
                Authorization: secretApiToken,
              },
              params: {},
              body: {
                JSON: {
                  name: 'Product Viewed',
                  description: 'Creating task with valid custom fields values',
                  tags: ['testing', 'custom fields'],
                  time_estimate: 10800000,
                  status: 'Ready',
                  priority: 1,
                  due_date: 1645796361032,
                  due_date_time: true,
                  start_date: 1642685961032,
                  start_date_time: 'true',
                  notify_all: false,
                  custom_fields: [
                    {
                      id: 'a5f5044a-cbad-4caf-bcbb-4cd32bd8db7c',
                      value: 'c7f9b6f5-cd98-4609-af10-68a8710cc1bf',
                    },
                    {
                      id: '22eaffee-ffec-4c3b-bdae-56e69d55eecd',
                      value: '7afcb6fb-cec8-41d8-bf0c-039a9db28460',
                    },
                    {
                      id: '19d3ac4e-2b1e-4569-b33e-ff86c7d94d6e',
                      value: [
                        '32c81c1c-cf53-4829-92f5-0f0270d27a45',
                        '7e24f329-9dd9-4e68-b426-2c70af6f9347',
                      ],
                    },
                    {
                      id: 'ea6c1e48-2abf-4328-b228-79c213e147c8',
                      value: {
                        location: {
                          lat: -20,
                          lng: 124,
                        },
                        formatted_address: 'Gold Coast QLD, Australia',
                      },
                    },
                    {
                      id: 'c9b83d91-b979-4b34-b4bd-88bf9cf2b9a6',
                      value: '+12233445567',
                    },
                    {
                      id: 'ebe825fb-92de-41ce-a29c-25018da039b4',
                      value: 'test123@example.com',
                    },
                    {
                      id: 'b01b32fd-94d3-43e6-9f31-2c855ff169cd',
                      value: 'https://www.rudderstack.com/',
                    },
                    {
                      id: 'f431cda3-a575-4a05-ba8d-583d9b6cb2df',
                      value: 3,
                    },
                    {
                      id: '4b7a29be-e261-4340-8f3f-e6de838473e5',
                      value: 'c5032049-8c05-44e9-a000-3a071d457b8f',
                    },
                    {
                      id: '4bfebc00-9d4a-40d1-aef8-5a87b610186c',
                      value: 'VP of Operations',
                    },
                    {
                      id: '666f74bf-6d87-41f3-8735-ccf0efe066dd',
                      value: 1645796361032,
                    },
                  ],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Creating task with assignees',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Product Viewed',
              properties: {
                taskName: 'Transformer Testing',
              },
              context: {
                externalId: [
                  {
                    type: 'clickUpAssigneeId',
                    id: 61205104,
                  },
                  {
                    type: 'clickUpAssigneeId',
                    id: 61217234,
                  },
                  {
                    type: 'clickUpAssigneeId',
                    id: 61228575,
                  },
                ],
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://api.clickup.com/api/v2/list/correctListId123/task',
              headers: {
                'Content-Type': 'application/json',
                Authorization: secretApiToken,
              },
              params: {},
              body: {
                JSON: {
                  name: 'Transformer Testing',
                  assignees: [61205104, 61217234, 61228575],
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Event filtering : Sending non whitelisted event when some events are whitelisted',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                whitelistedEvents: [
                  {
                    eventName: 'Anonymous Page Visit',
                  },
                  {
                    eventName: 'Product Viewed',
                  },
                  {
                    eventName: '',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Credit Card Added',
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error:
              'The event was discarded as it was not allow listed in the destination configuration',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Event filtering : No event is whitelisted',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
                whitelistedEvents: [
                  {
                    eventName: '',
                  },
                  {
                    eventName: '',
                  },
                  {
                    eventName: '',
                  },
                ],
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'Credit Card Added',
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error:
              'The event was discarded as it was not allow listed in the destination configuration',
            statTags: {
              destType: 'CLICKUP',
              errorCategory: 'dataValidation',
              errorType: 'instrumentation',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
  {
    name: 'clickup',
    description: 'Creating task using listId from externalId array',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiToken: secretApiToken,
                listId: 'correctListId123',
              },
              ID: 'clickup-1234',
            },
            message: {
              type: 'track',
              event: 'anonymous page visit',
              context: {
                externalId: [
                  {
                    type: 'clickUpListId',
                    id: 'correctListId456',
                  },
                ],
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
            },
          },
        ],
      },
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://api.clickup.com/api/v2/list/correctListId456/task',
              headers: {
                'Content-Type': 'application/json',
                Authorization: secretApiToken,
              },
              params: {},
              body: {
                JSON: {
                  name: 'anonymous page visit',
                },
                JSON_ARRAY: {},
                XML: {},
                FORM: {},
              },
              files: {},
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
];
