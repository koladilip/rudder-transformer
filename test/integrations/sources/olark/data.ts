export const data = [
  {
    name: 'olark',
    description: 'Olark webhook response',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                kind: 'Conversation',
                id: 'ho6HrHxoabmm6q0G103JU0JFaor0BobA',
                manuallySubmitted: false,
                items: [
                  {
                    kind: 'OfflineMessage',
                    timestamp: '1669285628.796693',
                    body:
                      'name: test rudderlabs\n' +
                      'email: ruddertest@gmail.com\n' +
                      'Message: I am Fine',
                  },
                ],
                tags: [],
                visitor: {
                  kind: 'Visitor',
                  id: '45WjM9eMYwJ7cJMo103JU0JaForAA6Db',
                  fullName: 'test',
                  emailAddress: 'ruddertest@gmail.com',
                  ip: '',
                  country: 'India',
                  countryCode: 'IN',
                  browser: 'Chrome 105.0.0.0',
                  operatingSystem: 'Macintosh',
                  conversationBeginPage: 'http://localhost:5503/',
                },
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  type: 'track',
                  event: 'Conversation',
                  traits: {},
                  userId: '45WjM9eMYwJ7cJMo103JU0JaForAA6Db',
                  context: {
                    os: { name: 'Macintosh' },
                    page: { url: 'http://localhost:5503/' },
                    traits: {
                      name: 'test',
                      email: 'ruddertest@gmail.com',
                      country: 'India',
                    },
                    browser: { name: 'Chrome', version: '105.0.0.0' },
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Olark' },
                  },
                  properties: {
                    tags: [],
                    items: [
                      {
                        body:
                          'name: test rudderlabs\n' +
                          'email: ruddertest@gmail.com\n' +
                          'Message: I am Fine',
                        kind: 'OfflineMessage',
                        timestamp: '1669285628.796693',
                      },
                    ],
                  },
                  integrations: { Olark: false },
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'olark',
    description: 'Olark webhook response',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                kind: 'Conversation',
                id: 'NOTAREALTRANSCRIPT5LGcbVTa3hKBRB',
                manuallySubmitted: false,
                items: [
                  {
                    kind: 'MessageToVisitor',
                    nickname: 'Olark operator',
                    operatorId: '6208911878914048',
                    timestamp: '1473774819.263083',
                    body: 'Hi from an operator',
                  },
                  {
                    kind: 'MessageToOperator',
                    nickname: 'Returning Visitor | USA (San Francisco, CA) #7617',
                    timestamp: '1473774821.411154',
                    body: 'Hi from a visitor',
                    visitor_nickname: 'Olark Visitor',
                  },
                ],
                tags: ['test_example'],
                visitor: {
                  kind: 'Visitor',
                  id: 'NOTAREALVISITORIDS5LGl6QUrK2OaPP',
                  fullName: 'Olark',
                  phoneNumber: '5555555555',
                  emailAddress: 'support+integrationtest@olark.com',
                  ip: '',
                  city: 'San Francisco',
                  region: 'CA',
                  country: 'United States',
                  countryCode: 'US',
                  organization: 'Visitor Organization',
                  browser: 'Internet Explorer 11',
                  operatingSystem: 'Windows',
                  referrer: 'http://www.olark.com',
                  conversationBeginPage: 'http://www.olark.com',
                  chat_feedback: {
                    overall_chat: 4,
                    responsiveness: 5,
                    knowledge: 4,
                    friendliness: 5,
                  },
                },
                operators: {
                  '6208911878914048': {
                    kind: 'Operator',
                    id: '6208911878914048',
                    nickname: 'integration',
                    emailAddress: 'integration-accounts@rudderstack.com',
                    username: 'integration-accounts-92750bc547',
                  },
                },
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  type: 'track',
                  event: 'Conversation',
                  traits: {
                    organization: 'Visitor Organization',
                    chat_feedback: {
                      knowledge: 4,
                      friendliness: 5,
                      overall_chat: 4,
                      responsiveness: 5,
                    },
                  },
                  userId: 'NOTAREALVISITORIDS5LGl6QUrK2OaPP',
                  context: {
                    os: { name: 'Windows' },
                    page: {
                      url: 'http://www.olark.com',
                      referrer: 'http://www.olark.com',
                    },
                    traits: {
                      city: 'San Francisco',
                      name: 'Olark',
                      email: 'support+integrationtest@olark.com',
                      phone: '5555555555',
                      region: 'CA',
                      country: 'United States',
                    },
                    browser: { name: 'Internet Explorer', version: '11' },
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Olark' },
                  },
                  properties: {
                    tags: ['test_example'],
                    items: [
                      {
                        body: 'Hi from an operator',
                        kind: 'MessageToVisitor',
                        nickname: 'Olark operator',
                        timestamp: '1473774819.263083',
                        operatorId: '6208911878914048',
                      },
                      {
                        body: 'Hi from a visitor',
                        kind: 'MessageToOperator',
                        nickname: 'Returning Visitor | USA (San Francisco, CA) #7617',
                        timestamp: '1473774821.411154',
                        visitor_nickname: 'Olark Visitor',
                      },
                    ],
                  },
                  integrations: { Olark: false },
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'olark',
    description: 'Olark webhook response',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                kind: 'Conversation',
                id: 'ho6HrHxoabmm6q0G103JU0JFaor0BobA',
                manuallySubmitted: false,
                items: [
                  {
                    kind: 'OfflineMessage',
                    timestamp: '1669288532.567071',
                    body:
                      'name: test rudderstack\n' + 'email: rudder14@gmail.com\n' + 'Message: veavv',
                  },
                ],
                tags: [],
                groups: [
                  {
                    kind: 'Group',
                    id: 'ca77f4296fb7568909ad864aebf48201',
                    name: 'Group 1',
                  },
                ],
                visitor: {
                  kind: 'Visitor',
                  id: '45WjM9eMYwJ7cJMo103JU0JaForAA6Db',
                  fullName: 'test rudderstack',
                  emailAddress: 'rudder14@gmail.com',
                  ip: '',
                  country: 'India',
                  countryCode: 'IN',
                  browser: 'Chrome 105.0.0.0',
                  operatingSystem: 'Macintosh',
                  conversationBeginPage: 'http://localhost:5503/',
                },
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  type: 'track',
                  event: 'Conversation',
                  traits: {},
                  userId: '45WjM9eMYwJ7cJMo103JU0JaForAA6Db',
                  context: {
                    os: { name: 'Macintosh' },
                    page: { url: 'http://localhost:5503/' },
                    traits: {
                      name: 'test rudderstack',
                      email: 'rudder14@gmail.com',
                      country: 'India',
                    },
                    browser: { name: 'Chrome', version: '105.0.0.0' },
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Olark' },
                  },
                  properties: {
                    tags: [],
                    items: [
                      {
                        body:
                          'name: test rudderstack\n' +
                          'email: rudder14@gmail.com\n' +
                          'Message: veavv',
                        kind: 'OfflineMessage',
                        timestamp: '1669288532.567071',
                      },
                    ],
                  },
                  integrations: { Olark: false },
                },
                {
                  name: 'Group 1',
                  type: 'group',
                  traits: { kind: 'Group' },
                  userId: '45WjM9eMYwJ7cJMo103JU0JaForAA6Db',
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Olark' },
                  },
                  groupId: 'ca77f4296fb7568909ad864aebf48201',
                  integrations: { Olark: false },
                },
              ],
            },
          },
        ],
      },
    },
  },
];
