export const data = [
  {
    name: 'slack',
    description: 'Webhook url verificatin event',
    module: 'source',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            ***REMOVED***,
            challenge: '3eZbrw1aB10FEMAGAZd4FyFQ',
            type: 'url_verification',
          },
        ],
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            outputToSource: {
              body: 'eyJjaGFsbGVuZ2UiOiIzZVpicncxYUIxMEZFTUFHQVpkNEZ5RlEifQ==',
              contentType: 'application/json',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'slack',
    description: 'Team joined event',
    module: 'source',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            event: {
              type: 'team_join',
              user: {
                id: 'W012CDE',
                name: 'johnd',
                real_name: 'John Doe',
              },
            },
            type: 'event_callback',
            event_id: 'Ev06TJ0NG5',
            event_time: 1709441309,
            token: 'REm276ggfh72Lq',
            team_id: 'T0GFJL5J7',
            context_team_id: 'T0GFJL5J7',
            context_enterprise_id: null,
            api_app_id: 'B02SJMHRR',
            authorizations: [
              {
                enterprise_id: null,
                team_id: 'T0GFJL5J7',
                user_id: 'U04G7H550',
                is_bot: true,
                is_enterprise_install: false,
              },
            ],
            is_ext_shared_channel: false,
            event_context: 'eJldCI65436EUEpMSFhgfhg76joiQzAxRTRQTEIxMzUifQ',
          },
        ],
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
                  context: {
                    library: {
                      name: 'unknown',
                      version: 'unknown',
                    },
                    integration: {
                      name: 'SLACK',
                    },
                    externalId: [
                      {
                        type: 'slackUserId',
                        id: 'W012CDE',
                      },
                    ],
                  },
                  integrations: {
                    SLACK: false,
                  },
                  type: 'identify',
                  event: 'Team Join',
                  anonymousId: '2bc5ae2825a712d3d154cbdacb86ac16c278',
                  originalTimestamp: '2024-03-03T04:48:29.000Z',
                  sentAt: '2024-03-03T04:48:29.000Z',
                  properties: {
                    type: 'team_join',
                    user: {
                      id: 'W012CDE',
                      name: 'johnd',
                      real_name: 'John Doe',
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
];
