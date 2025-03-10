import {
  secretPassword,
  secretAccountToken,
  authHeaderAccessToken,
  secretInvalidToken,
} from '../maskedSecrets';

export const data = [
  {
    name: 'wootric',
    description: 'Wrong Account Token Passed',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretInvalidToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              context: {},
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: JSON.stringify({
              message:
                'Access token could not be generated due to {"error":"Not found","status":404}',
              destinationResponse: { response: { error: 'Not found', status: 404 }, status: 500 },
            }),
            statTags: {
              destType: 'WOOTRIC',
              errorCategory: 'network',
              errorType: 'retryable',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 500,
          },
        ],
      },
    },
  },
  {
    name: 'wootric',
    description: 'Identify call for creating user',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Bangalore',
                  name: 'Dummy User 2',
                  email: 'dummyUser2@gmail.com',
                  phone: '+19123456777',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              endpoint: 'https://api.wootric.com/v1/end_users',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  email: 'dummyUser2@gmail.com',
                  phone_number: '+19123456777',
                  last_surveyed: '1642685961',
                  external_created_at: '1611149961',
                  external_id: 'dummyId2',
                  'properties[city]': 'Bangalore',
                  'properties[name]': 'Dummy User 2',
                  'properties[title]': 'SDE',
                  'properties[gender]': 'Male',
                  'properties[company]': 'Rudderstack',
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
    name: 'wootric',
    description: 'Identify call for creating user without-sending email and sending phone number',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Bangalore',
                  name: 'Dummy User 2',
                  phone: '+19123456777',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              endpoint: 'https://api.wootric.com/v1/end_users',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  phone_number: '+19123456777',
                  last_surveyed: '1642685961',
                  external_created_at: '1611149961',
                  external_id: 'dummyId2',
                  'properties[city]': 'Bangalore',
                  'properties[name]': 'Dummy User 2',
                  'properties[title]': 'SDE',
                  'properties[gender]': 'Male',
                  'properties[company]': 'Rudderstack',
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
    name: 'wootric',
    description: 'Identify call for creating user without-sending phone number and sending email',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  email: 'dummyUser2@gmail.com',
                  city: 'Bangalore',
                  name: 'Dummy User 2',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              endpoint: 'https://api.wootric.com/v1/end_users',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  email: 'dummyUser2@gmail.com',
                  last_surveyed: '1642685961',
                  external_created_at: '1611149961',
                  external_id: 'dummyId2',
                  'properties[city]': 'Bangalore',
                  'properties[name]': 'Dummy User 2',
                  'properties[title]': 'SDE',
                  'properties[gender]': 'Male',
                  'properties[company]': 'Rudderstack',
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
    name: 'wootric',
    description: 'Identify call for creating user without sending traits',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'email/phone number are missing. At least one parameter must be provided',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description: 'Identify call for creating user without-sending (email and phone number)',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Mumbai',
                  name: 'Dummy User 1',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'email/phone number are missing. At least one parameter must be provided',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description: 'Identify call for updating existing user with wootric end user id',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  title: 'VP',
                  gender: 'Male',
                },
                externalId: [
                  {
                    type: 'wootricEndUserId',
                    id: '490635419',
                  },
                ],
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              method: 'PUT',
              endpoint: 'https://api.wootric.com/v1/end_users/490635419',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  last_surveyed: '1642685961',
                  'properties[Department]': 'Marketing',
                  'properties[product_plan]': 'Web',
                  'properties[revenue amount]': '5000',
                  'properties[title]': 'VP',
                  'properties[gender]': 'Male',
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
    name: 'wootric',
    description:
      'Identify call for updating existing user with (wootric externalId/ rudderstack userId)',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  title: 'VP',
                  gender: 'Male',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              method: 'PUT',
              endpoint: 'https://api.wootric.com/v1/end_users/486438462',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  last_surveyed: '1642685961',
                  'properties[title]': 'VP',
                  'properties[gender]': 'Male',
                  'properties[city]': 'Mumbai',
                  'properties[name]': 'Dummy User 1',
                  'properties[company]': 'Rudderstack',
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
    name: 'wootric',
    description: 'Identify call for updating user traits/properties',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'identify',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Udaipur',
                  name: 'Dummy User 1 New',
                  title: 'SDE-2',
                  gender: 'Male',
                  company: 'Rudderstack',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              method: 'PUT',
              endpoint: 'https://api.wootric.com/v1/end_users/486438462',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  last_surveyed: '1642685961',
                  'properties[city]': 'Udaipur',
                  'properties[name]': 'Dummy User 1 New',
                  'properties[title]': 'SDE-2',
                  'properties[gender]': 'Male',
                  'properties[company]': 'Rudderstack',
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
    name: 'wootric',
    description: 'Track call with existing userId and event type as create response',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              properties: {
                feedbackScore: 7,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                ip: '0.0.0.0',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Mumbai',
                  name: 'Dummy User 1',
                  email: 'dummyUser1@gmail.com',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'create response',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              endpoint: 'https://api.wootric.com/v1/end_users/486438462/responses',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  score: 7,
                  ip_address: '0.0.0.0',
                  origin_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  text: 'Simple, Easy to use, Reliable, Affordable Product',
                  created_at: '1611149961',
                  'end_user[properties][city]': 'Mumbai',
                  'end_user[properties][name]': 'Dummy User 1',
                  'end_user[properties][title]': 'SDE',
                  'end_user[properties][gender]': 'Male',
                  'end_user[properties][company]': 'Rudderstack',
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
    name: 'wootric',
    description: 'Track call with non-existing userId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              properties: {
                feedbackScore: 7,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                ip: '0.0.0.0',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'create response',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'No user found with userId : dummyId2',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description: 'Track call with non-existing wootricEndUserId',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              channel: 'web',
              properties: {
                feedbackScore: 7,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                ip: '0.0.0.0',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                externalId: [
                  {
                    type: 'wootricEndUserId',
                    id: '12345',
                  },
                ],
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'create response',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'No user found with wootric end user Id : 12345',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description:
      'Track call with existing userId and event type as create response and score out of bound',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              properties: {
                feedbackScore: 12,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                ip: '0.0.0.0',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'create response',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'Invalid Score',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description: 'Track call with existing userId and event type as create decline',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              properties: {
                feedbackScore: 9,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'create decline',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
              endpoint: 'https://api.wootric.com/v1/end_users/486438462/declines',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeaderAccessToken,
              },
              params: {},
              body: {
                JSON: {},
                JSON_ARRAY: {},
                XML: {},
                FORM: {
                  origin_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
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
    name: 'wootric',
    description: 'Track call with non-existing userId and event type as create decline',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId2',
              channel: 'web',
              properties: {
                feedbackScore: 9,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'create decline',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'No user found with userId : dummyId2',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description: 'Track call with event type other than create response or decline',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              properties: {
                feedbackScore: 7,
                feedbackText: 'Simple, Easy to use, Reliable, Affordable Product',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                ip: '0.0.0.0',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Mumbai',
                  name: 'Dummy User 1',
                  email: 'dummyUser1@gmail.com',
                  phone: '+19123456789',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
                Wootric: {
                  eventType: 'random',
                },
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'Event Type not supported',
            statTags: {
              destType: 'WOOTRIC',
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
    name: 'wootric',
    description: 'Track call with missing event type in integration object',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination: {
              Config: {
                username: 'wootricfakeuser@example.com',
                password: secretPassword,
                accountToken: secretAccountToken,
              },
              ID: 'wootric-1234',
            },
            message: {
              type: 'track',
              sentAt: '2022-01-20T13:39:21.033Z',
              userId: 'dummyId1',
              channel: 'web',
              properties: {
                feedbackScore: 3,
                feedbackText: 'Too Slow!!!',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.2.20',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  path: '/Testing/App_for_LaunchDarkly/ourSdk.html',
                  title: 'Document',
                  search: '',
                  tab_url: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/ourSdk.html',
                  referrer: 'http://127.0.0.1:7307/Testing/App_for_LaunchDarkly/',
                  initial_referrer: '$direct',
                  referring_domain: '127.0.0.1:7307',
                  initial_referring_domain: '',
                },
                locale: 'en-US',
                ip: '0.0.0.0',
                screen: {
                  width: 1440,
                  height: 900,
                  density: 2,
                  innerWidth: 536,
                  innerHeight: 689,
                },
                traits: {
                  city: 'Mumbai',
                  name: 'Dummy User 1',
                  email: 'dummyUser1@gmail.com',
                  phone: '+19123456789',
                  title: 'SDE',
                  gender: 'Male',
                  company: 'Rudderstack',
                  createdAt: '2021-01-20T13:39:21.032Z',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.2.20',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
              },
              rudderId: '553b5522-c575-40a7-8072-9741c5f9a647',
              messageId: '831f1fa5-de84-4f22-880a-4c3f23fc3f04',
              anonymousId: 'bf412108-0357-4330-b119-7305e767823c',
              integrations: {
                All: true,
              },
              originalTimestamp: '2022-01-20T13:39:21.032Z',
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
            error: 'Event Type is missing from Integration object',
            statTags: {
              destType: 'WOOTRIC',
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
];
