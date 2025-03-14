import { authHeader1, secret1 } from '../maskedSecrets';
export const data = [
  {
    name: 'drip',
    description: 'Test 0',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '',
                enableUserCreation: true,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'identify',
              traits: {
                email: 'test1@gmail.com',
                firstName: 'James',
                lastName: 'Doe',
                phone: '237416221',
                customFields: {
                  filter1: 'filterval1',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/subscribers',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  subscribers: [
                    {
                      email: 'test1@gmail.com',
                      first_name: 'James',
                      last_name: 'Doe',
                      phone: '237416221',
                      ip_address: '0.0.0.0',
                      custom_fields: {
                        filter1: 'filterval1',
                      },
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 1',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '',
                enableUserCreation: true,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'identify',
              traits: {
                email: '12324adfgs',
                firstName: 'James',
                lastName: 'Doe',
                phone: '237416221',
                customFields: {
                  filter1: 'filterval1',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
            error: 'dripId or email is required for the call',
            statTags: {
              destType: 'DRIP',
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
    name: 'drip',
    description: 'Test 2',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '',
                enableUserCreation: true,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'identify',
              traits: {
                email: 'test1@gmail.com',
                name: 'James Doe',
                phone: '237416221',
                filter1: 'filterval1',
                filter2: 'filterval2',
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/subscribers',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  subscribers: [
                    {
                      email: 'test1@gmail.com',
                      first_name: 'James',
                      last_name: 'Doe',
                      phone: '237416221',
                      ip_address: '0.0.0.0',
                      custom_fields: {
                        filter1: 'filterval1',
                        filter2: 'filterval2',
                      },
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 3',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: true,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'identify',
              traits: {
                email: 'test1@gmail.com',
                name: 'James Doe',
                phone: '237416221',
                filter1: 'filterval1',
                filter2: 'filterval2',
                tags: ['tag1', 'tag2'],
                startingEmailIndex: 1,
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/campaigns/915194776/subscribers',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  subscribers: [
                    {
                      email: 'test1@gmail.com',
                      starting_email_index: 1,
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 4',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: true,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'testing',
              properties: {
                email: 'user1@gmail.com',
                customFields: {
                  field1: 'val1',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/events',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      email: 'user1@gmail.com',
                      properties: {
                        field1: 'val1',
                      },
                      action: 'testing',
                      occurred_at: '2019-10-14T09:03:17.562Z',
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 5',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: true,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: '',
              properties: {
                email: 'user1@gmail.com',
                custom_fields: {
                  field1: 'val1',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
            error: 'Event name is required',
            statTags: {
              destType: 'DRIP',
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
    name: 'drip',
    description: 'Test 6',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: false,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'testing',
              properties: {
                email: 'identified_user@gmail.com',
                customFields: {
                  field1: 'val1',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/events',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      email: 'identified_user@gmail.com',
                      properties: {
                        field1: 'val1',
                      },
                      action: 'testing',
                      occurred_at: '2019-10-14T09:03:17.562Z',
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 7',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: false,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'testing',
              properties: {
                email: 'identified_user@gmail.com',
                field1: 'val1',
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/events',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      email: 'identified_user@gmail.com',
                      properties: {
                        field1: 'val1',
                      },
                      action: 'testing',
                      occurred_at: '2019-10-14T09:03:17.562Z',
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 8',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: false,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'testing',
              properties: {
                email: 'unidentified_user@gmail.com',
                field1: 'val1',
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
            error: 'Error occurred while checking user : error response not found',
            statTags: {
              destType: 'DRIP',
              errorCategory: 'network',
              errorType: 'aborted',
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
    name: 'drip',
    description: 'Test 9',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: false,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'checkout started',
              properties: {
                email: 'identified_user@gmail.com',
                field1: 'val1',
                affiliation: 'my_custom_order',
                order_id: '456445746',
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v3/1809802/shopper_activity/order',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  action: 'placed',
                  email: 'identified_user@gmail.com',
                  occurred_at: '2019-10-14T09:03:17.562Z',
                  order_id: '456445746',
                  provider: 'my_custom_order',
                },
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
    name: 'drip',
    description: 'Test 10',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: false,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'checkout started',
              properties: {
                email: 'identified_user@gmail.com',
                field1: 'val1',
                affiliation: 'my_custom_order',
                order_id: '456445746',
                products: [
                  {
                    name: 'shirt',
                    price: 11.16,
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v3/1809802/shopper_activity/order',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  action: 'placed',
                  email: 'identified_user@gmail.com',
                  occurred_at: '2019-10-14T09:03:17.562Z',
                  order_id: '456445746',
                  provider: 'my_custom_order',
                  items: [
                    {
                      name: 'shirt',
                      price: 11.16,
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 11',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '915194776',
                enableUserCreation: false,
              },
            },
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.0.0',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.0.0',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
                locale: 'en-US',
                ip: '0.0.0.0',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
              },
              messageId: '84e26acc-56a5-4835-8233-591137fca468',
              session_id: '3049dc4c-5a95-4ccd-a3e7-d74a7e411f22',
              originalTimestamp: '2019-10-14T09:03:17.562Z',
              type: 'track',
              event: 'checkout',
              properties: {
                email: 'identified_user@gmail.com',
                field1: 'val1',
                customFields: {
                  field2: 'val2',
                },
              },
              integrations: {
                All: true,
              },
              sentAt: '2019-10-14T09:03:22.563Z',
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
              endpoint: 'https://api.getdrip.com/v2/1809802/events',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  events: [
                    {
                      action: 'checkout',
                      email: 'identified_user@gmail.com',
                      occurred_at: '2019-10-14T09:03:17.562Z',
                      properties: {
                        field2: 'val2',
                      },
                    },
                  ],
                },
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
    name: 'drip',
    description: 'Test 12',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                apiKey: secret1,
                accountId: '1809802',
                campaignId: '',
                enableUserCreation: true,
              },
            },
            message: {
              type: 'identify',
              event: 'identify',
              userId: 'user@1',
              channel: 'mobile',
              context: {
                os: {
                  name: 'Android',
                  version: '13',
                },
                app: {
                  name: 'rudderstack',
                  build: '5425',
                  version: '2.4.1',
                },
                device: {
                  id: '8b048b94cbec4fcf',
                  name: 'o1q',
                  type: 'Android',
                  model: 'SM-G991U',
                  manufacturer: 'samsung',
                },
                locale: 'en-US',
                traits: {
                  id: 'ruddertest@gmail.com',
                  email: 'ruddertest@gmail.com',
                  title: 'Social Impact Program Manager',
                  skills: [
                    {
                      id: 134,
                      name: 'Business Development',
                      tagGroupId: 2,
                      parentTagId: 134,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 96,
                      name: 'Communications',
                      tagGroupId: 2,
                      parentTagId: 96,
                      huddleVisible: true,
                      onboardVisible: true,
                    },
                    {
                      id: 489,
                      name: 'Construction',
                      tagGroupId: 2,
                      parentTagId: 489,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 671,
                      name: 'Data Analysis',
                      tagGroupId: 2,
                      parentTagId: 671,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 676,
                      name: 'Engineering: Mechanical',
                      tagGroupId: 2,
                      parentTagId: 676,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 189,
                      name: 'Operations',
                      tagGroupId: 2,
                      parentTagId: 189,
                      huddleVisible: true,
                      onboardVisible: true,
                    },
                    {
                      id: 194,
                      name: 'Product Management',
                      tagGroupId: 2,
                      parentTagId: 194,
                      huddleVisible: true,
                      onboardVisible: true,
                    },
                    {
                      id: 195,
                      name: 'Program Management',
                      tagGroupId: 2,
                      parentTagId: 195,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 199,
                      name: 'R&D',
                      tagGroupId: 2,
                      parentTagId: 199,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 102,
                      name: 'Sales',
                      tagGroupId: 2,
                      parentTagId: 102,
                      huddleVisible: true,
                      onboardVisible: true,
                    },
                  ],
                  userId: 'ruddertest@gmail.com',
                  address: 'Chicago, IL, USA',
                  industry: 'Education',
                  lastName: 'test',
                  lastname: 'test',
                  verified: false,
                  firstName: 'rudder',
                  firstname: 'rudder',
                  interests: [
                    {
                      id: 649,
                      name: 'Adaptation',
                      tagGroupId: 4,
                      parentTagId: 745,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 663,
                      name: 'Carbon removal and sequestration',
                      tagGroupId: 4,
                      parentTagId: 761,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 664,
                      name: 'Clean Energy and Energy Efficiency',
                      tagGroupId: 4,
                      parentTagId: 259,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 654,
                      name: 'Climate Science and Earth Systems',
                      tagGroupId: 4,
                      parentTagId: 744,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 650,
                      name: 'Corporate Sustainability',
                      tagGroupId: 4,
                      parentTagId: 650,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 651,
                      name: 'Finance & Risk',
                      tagGroupId: 4,
                      parentTagId: 651,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 652,
                      name: 'Food and Agriculture',
                      tagGroupId: 4,
                      parentTagId: 652,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                    {
                      id: 665,
                      name: 'Transport',
                      tagGroupId: 4,
                      parentTagId: 665,
                      huddleVisible: false,
                      onboardVisible: false,
                    },
                  ],
                  isDeleted: false,
                  anonymousId: '8b048b94cbec4fcf',
                  jobFunction: 'Program manager',
                  reminderType: 1,
                  jobPreferences: {
                    motivationStr:
                      'I am looking for a job in climate change.,I want to learn about climate change.,I’d like to connect with other climate enthusiasts.',
                    searchUrgency: 'As soon as possible',
                    maxCompensation: 0,
                    minCompensation: 0,
                  },
                  visibilityType: 'public',
                  'Linkedin-Signin': true,
                  hubbleOnboarded: false,
                  sharePreference: false,
                  notificationType: 0,
                  shortDescription: 'Social Impact Program Manager',
                  jobProfileComplete: false,
                  noOfMonthExperience: 0,
                  onboarding_completed: 'Yes',
                },
                library: {
                  name: 'com.rudderstack.android.sdk.core',
                  version: '1.8.1',
                },
                timezone: 'America/Chicago',
                sessionId: 1681096824,
                userAgent: 'Dalvik/2.1.0 (Linux; U; Android 13; SM-G991U Build/TP1A.220624.014)',
              },
              rudderId: 'f701966c-5568-4500-92ba-4e9023c8fe31',
              messageId: '77b53247-177f-4ca3-a6b4-aa7558fec280',
              request_ip: '75.209.176.135',
              anonymousId: '8b048b94cbec4fcf',
              integrations: {
                All: true,
              },
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
              endpoint: 'https://api.getdrip.com/v2/1809802/subscribers',
              headers: {
                Authorization: authHeader1,
                'Content-Type': 'application/json',
              },
              params: {},
              body: {
                XML: {},
                JSON_ARRAY: {},
                FORM: {},
                JSON: {
                  subscribers: [
                    {
                      email: 'ruddertest@gmail.com',
                      user_id: 'user@1',
                      address1: 'Chicago, IL, USA',
                      last_name: 'test',
                      first_name: 'rudder',
                      custom_fields: {
                        title: 'Social Impact Program Manager',
                        industry: 'Education',
                        verified: false,
                        isDeleted: false,
                        jobFunction: 'Program manager',
                        reminderType: 1,
                        jobPreferences: {
                          motivationStr:
                            'I am looking for a job in climate change.,I want to learn about climate change.,I’d like to connect with other climate enthusiasts.',
                          searchUrgency: 'As soon as possible',
                          maxCompensation: 0,
                          minCompensation: 0,
                        },
                        visibilityType: 'public',
                        hubbleOnboarded: false,
                        sharePreference: false,
                        notificationType: 0,
                        shortDescription: 'Social Impact Program Manager',
                        jobProfileComplete: false,
                        noOfMonthExperience: 0,
                        onboarding_completed: 'Yes',
                      },
                    },
                  ],
                },
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
