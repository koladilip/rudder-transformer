import { authHeader1, secret1 } from '../maskedSecrets';
export const data = [
  {
    name: 'attentive_tag',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: { Config: { apiKey: secret1, signUpSourceId: '241654' } },
              metadata: { jobId: 1, userId: 'u1' },
              message: {
                anonymousId: '4eb021e9-a2af-4926-ae82-fe996d12f3c5',
                channel: 'web',
                context: {
                  locale: 'en-GB',
                  os: { name: '', version: '' },
                  traits: {
                    company: { id: 'abc123' },
                    createdAt: 'Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)',
                    email: 'test0@gmail.com',
                    phone: '+16465453911',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
                  externalId: [
                    { type: 'clientUsrId', id: 1 },
                    { type: 'shopifyId', id: 1 },
                    { type: 'klaviyoId', id: 1 },
                  ],
                },
                integrations: {
                  All: true,
                  attentive_tag: { signUpSourceId: '241654', identifyOperation: 'unsubscribe' },
                },
                messageId: 'e108eb05-f6cd-4624-ba8c-568f2e2b3f92',
                receivedAt: '2020-10-16T13:56:14.945+05:30',
                type: 'identify',
              },
            },
          ],
          destType: 'attentive_tag',
        },
        method: 'POST',
      },
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://api.attentivemobile.com/v1/subscriptions/unsubscribe',
                headers: {
                  Authorization: authHeader1,
                  'Content-Type': 'application/json',
                },
                params: {},
                body: {
                  JSON: { user: { phone: '+16465453911', email: 'test0@gmail.com' } },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
              },
              metadata: [{ jobId: 1, userId: 'u1' }],
              batched: false,
              statusCode: 200,
              destination: { Config: { apiKey: secret1, signUpSourceId: '241654' } },
            },
          ],
        },
      },
    },
  },
];
