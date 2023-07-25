const data = [
  {
    name: 'eventbridge',
    description: 'Test 0',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.1.2',
                },
                traits: {
                  abc: '1234',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.2',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
                locale: 'en-GB',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
                page: {
                  path: '/tests/html/ecomm_test.html',
                  referrer: 'http://0.0.0.0:1112/tests/html/',
                  search: '',
                  title: 'GA Ecommerce Test',
                  url: 'http://0.0.0.0:1112/tests/html/ecomm_test.html',
                },
              },
              type: 'track',
              messageId: '9116b734-7e6b-4497-ab51-c16744d4487e',
              originalTimestamp: '2020-06-24T12:05:19.394Z',
              anonymousId: '38e169a1-3234-46f7-9ceb-c1a6a69005fe',
              userId: '123',
              event: 'Checkout Started',
              properties: {
                order_id: '5241735',
                value: 31.98,
                revenue: 31.98,
                shipping: 4,
                coupon: 'APPARELSALE',
                currency: 'GBP',
                products: [
                  {
                    id: 'product-bacon-jam',
                    sku: 'sku-1',
                    category: 'Merch',
                    name: 'Food/Drink',
                    brand: '',
                    variant: 'Extra topped',
                    price: 3,
                    quantity: 2,
                    currency: 'GBP',
                    position: 1,
                    value: 6,
                    typeOfProduct: 'Food',
                    url: 'https://www.example.com/product/bacon-jam',
                    image_url: 'https://www.example.com/product/bacon-jam.jpg',
                  },
                  {
                    id: 'product-t-shirt',
                    sku: 'sku-2',
                    category: 'Merch',
                    name: 'T-Shirt',
                    brand: 'Levis',
                    variant: 'White',
                    price: 12.99,
                    quantity: 1,
                    currency: 'GBP',
                    position: 2,
                    value: 12.99,
                    typeOfProduct: 'Shirt',
                    url: 'https://www.example.com/product/t-shirt',
                    image_url: 'https://www.example.com/product/t-shirt.jpg',
                  },
                  {
                    id: 'offer-t-shirt',
                    sku: 'sku-3',
                    category: 'Merch',
                    name: 'T-Shirt-on-offer',
                    brand: 'Levis',
                    variant: 'Black',
                    price: 12.99,
                    quantity: 1,
                    currency: 'GBP',
                    value: 12.99,
                    coupon: 'APPARELSALE',
                    typeOfProduct: 'Shirt',
                    url: 'https://www.example.com/product/offer-t-shirt',
                    image_url: 'https://www.example.com/product/offer-t-shirt.jpg',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2020-06-24T12:05:19.395Z',
            },
            destination: {
              Config: {
                region: '*****',
                accessKeyID: '*****',
                accessKey: '*****',
                eventBusName: 'rudder-test1',
                detailType: 'newDetailType',
                resourceID: [
                  {
                    arn: 'arn:aws:events:*****:*****:event-bus/rudder-test1',
                  },
                  {
                    arn: 'arn:aws:events:*****:*****:event-bus/rudder-test2',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              DetailType: 'newDetailType',
              Detail:
                '{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.2"},"traits":{"abc":"1234"},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.2"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36","locale":"en-GB","os":{"name":"","version":""},"screen":{"density":2},"page":{"path":"/tests/html/ecomm_test.html","referrer":"http://0.0.0.0:1112/tests/html/","search":"","title":"GA Ecommerce Test","url":"http://0.0.0.0:1112/tests/html/ecomm_test.html"}},"type":"track","messageId":"9116b734-7e6b-4497-ab51-c16744d4487e","originalTimestamp":"2020-06-24T12:05:19.394Z","anonymousId":"38e169a1-3234-46f7-9ceb-c1a6a69005fe","userId":"123","event":"Checkout Started","properties":{"order_id":"5241735","value":31.98,"revenue":31.98,"shipping":4,"coupon":"APPARELSALE","currency":"GBP","products":[{"id":"product-bacon-jam","sku":"sku-1","category":"Merch","name":"Food/Drink","brand":"","variant":"Extra topped","price":3,"quantity":2,"currency":"GBP","position":1,"value":6,"typeOfProduct":"Food","url":"https://www.example.com/product/bacon-jam","image_url":"https://www.example.com/product/bacon-jam.jpg"},{"id":"product-t-shirt","sku":"sku-2","category":"Merch","name":"T-Shirt","brand":"Levis","variant":"White","price":12.99,"quantity":1,"currency":"GBP","position":2,"value":12.99,"typeOfProduct":"Shirt","url":"https://www.example.com/product/t-shirt","image_url":"https://www.example.com/product/t-shirt.jpg"},{"id":"offer-t-shirt","sku":"sku-3","category":"Merch","name":"T-Shirt-on-offer","brand":"Levis","variant":"Black","price":12.99,"quantity":1,"currency":"GBP","value":12.99,"coupon":"APPARELSALE","typeOfProduct":"Shirt","url":"https://www.example.com/product/offer-t-shirt","image_url":"https://www.example.com/product/offer-t-shirt.jpg"}]},"integrations":{"All":true},"sentAt":"2020-06-24T12:05:19.395Z"}',
              EventBusName: 'rudder-test1',
              Resources: [
                'arn:aws:events:*****:*****:event-bus/rudder-test1',
                'arn:aws:events:*****:*****:event-bus/rudder-test2',
              ],
              Source: 'rudderstack',
              userId: '123',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'eventbridge',
    description: 'Test 1',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.1.2',
                },
                traits: {
                  abc: '1234',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.2',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
                locale: 'en-GB',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
                page: {
                  path: '/tests/html/ecomm_test.html',
                  referrer: 'http://0.0.0.0:1112/tests/html/',
                  search: '',
                  title: 'GA Ecommerce Test',
                  url: 'http://0.0.0.0:1112/tests/html/ecomm_test.html',
                },
              },
              type: 'track',
              messageId: '9116b734-7e6b-4497-ab51-c16744d4487e',
              originalTimestamp: '2020-06-24T12:05:19.394Z',
              anonymousId: '38e169a1-3234-46f7-9ceb-c1a6a69005fe',
              event: 'Checkout Started',
              properties: {
                order_id: '5241735',
                value: 31.98,
                revenue: 31.98,
                shipping: 4,
                coupon: 'APPARELSALE',
                currency: 'GBP',
                products: [
                  {
                    id: 'product-bacon-jam',
                    sku: 'sku-1',
                    category: 'Merch',
                    name: 'Food/Drink',
                    brand: '',
                    variant: 'Extra topped',
                    price: 3,
                    quantity: 2,
                    currency: 'GBP',
                    position: 1,
                    value: 6,
                    typeOfProduct: 'Food',
                    url: 'https://www.example.com/product/bacon-jam',
                    image_url: 'https://www.example.com/product/bacon-jam.jpg',
                  },
                  {
                    id: 'product-t-shirt',
                    sku: 'sku-2',
                    category: 'Merch',
                    name: 'T-Shirt',
                    brand: 'Levis',
                    variant: 'White',
                    price: 12.99,
                    quantity: 1,
                    currency: 'GBP',
                    position: 2,
                    value: 12.99,
                    typeOfProduct: 'Shirt',
                    url: 'https://www.example.com/product/t-shirt',
                    image_url: 'https://www.example.com/product/t-shirt.jpg',
                  },
                  {
                    id: 'offer-t-shirt',
                    sku: 'sku-3',
                    category: 'Merch',
                    name: 'T-Shirt-on-offer',
                    brand: 'Levis',
                    variant: 'Black',
                    price: 12.99,
                    quantity: 1,
                    currency: 'GBP',
                    value: 12.99,
                    coupon: 'APPARELSALE',
                    typeOfProduct: 'Shirt',
                    url: 'https://www.example.com/product/offer-t-shirt',
                    image_url: 'https://www.example.com/product/offer-t-shirt.jpg',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2020-06-24T12:05:19.395Z',
            },
            destination: {
              Config: {
                region: '*****',
                accessKeyID: '*****',
                accessKey: '*****',
                eventBusName: 'rudder-test1',
                detailType: 'newDetailType',
                resourceID: [
                  {
                    arn: 'arn:aws:events:*****:*****:event-bus/rudder-test1',
                  },
                  {
                    arn: 'arn:aws:events:*****:*****:event-bus/rudder-test2',
                  },
                ],
              },
              Enabled: true,
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              DetailType: 'newDetailType',
              Detail:
                '{"channel":"web","context":{"app":{"build":"1.0.0","name":"RudderLabs JavaScript SDK","namespace":"com.rudderlabs.javascript","version":"1.1.2"},"traits":{"abc":"1234"},"library":{"name":"RudderLabs JavaScript SDK","version":"1.1.2"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36","locale":"en-GB","os":{"name":"","version":""},"screen":{"density":2},"page":{"path":"/tests/html/ecomm_test.html","referrer":"http://0.0.0.0:1112/tests/html/","search":"","title":"GA Ecommerce Test","url":"http://0.0.0.0:1112/tests/html/ecomm_test.html"}},"type":"track","messageId":"9116b734-7e6b-4497-ab51-c16744d4487e","originalTimestamp":"2020-06-24T12:05:19.394Z","anonymousId":"38e169a1-3234-46f7-9ceb-c1a6a69005fe","event":"Checkout Started","properties":{"order_id":"5241735","value":31.98,"revenue":31.98,"shipping":4,"coupon":"APPARELSALE","currency":"GBP","products":[{"id":"product-bacon-jam","sku":"sku-1","category":"Merch","name":"Food/Drink","brand":"","variant":"Extra topped","price":3,"quantity":2,"currency":"GBP","position":1,"value":6,"typeOfProduct":"Food","url":"https://www.example.com/product/bacon-jam","image_url":"https://www.example.com/product/bacon-jam.jpg"},{"id":"product-t-shirt","sku":"sku-2","category":"Merch","name":"T-Shirt","brand":"Levis","variant":"White","price":12.99,"quantity":1,"currency":"GBP","position":2,"value":12.99,"typeOfProduct":"Shirt","url":"https://www.example.com/product/t-shirt","image_url":"https://www.example.com/product/t-shirt.jpg"},{"id":"offer-t-shirt","sku":"sku-3","category":"Merch","name":"T-Shirt-on-offer","brand":"Levis","variant":"Black","price":12.99,"quantity":1,"currency":"GBP","value":12.99,"coupon":"APPARELSALE","typeOfProduct":"Shirt","url":"https://www.example.com/product/offer-t-shirt","image_url":"https://www.example.com/product/offer-t-shirt.jpg"}]},"integrations":{"All":true},"sentAt":"2020-06-24T12:05:19.395Z"}',
              EventBusName: 'rudder-test1',
              Resources: [
                'arn:aws:events:*****:*****:event-bus/rudder-test1',
                'arn:aws:events:*****:*****:event-bus/rudder-test2',
              ],
              Source: 'rudderstack',
              userId: '38e169a1-3234-46f7-9ceb-c1a6a69005fe',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'eventbridge',
    description: 'Test 2',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              channel: 'web',
              context: {
                app: {
                  build: '1.0.0',
                  name: 'RudderLabs JavaScript SDK',
                  namespace: 'com.rudderlabs.javascript',
                  version: '1.1.2',
                },
                traits: {
                  abc: '1234',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.2',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
                locale: 'en-GB',
                os: {
                  name: '',
                  version: '',
                },
                screen: {
                  density: 2,
                },
                page: {
                  path: '/tests/html/ecomm_test.html',
                  referrer: 'http://0.0.0.0:1112/tests/html/',
                  search: '',
                  title: 'GA Ecommerce Test',
                  url: 'http://0.0.0.0:1112/tests/html/ecomm_test.html',
                },
              },
              type: 'track',
              messageId: '9116b734-7e6b-4497-ab51-c16744d4487e',
              originalTimestamp: '2020-06-24T12:05:19.394Z',
              anonymousId: '38e169a1-3234-46f7-9ceb-c1a6a69005fe',
              userId: '123',
              event: 'Checkout Started',
              properties: {
                order_id: '5241735',
                value: 31.98,
                revenue: 31.98,
                shipping: 4,
                coupon: 'APPARELSALE',
                currency: 'GBP',
                products: [
                  {
                    id: 'product-bacon-jam',
                    sku: 'sku-1',
                    category: 'Merch',
                    name: 'Food/Drink',
                    brand: '',
                    variant: 'Extra topped',
                    price: 3,
                    quantity: 2,
                    currency: 'GBP',
                    position: 1,
                    value: 6,
                    typeOfProduct: 'Food',
                    url: 'https://www.example.com/product/bacon-jam',
                    image_url: 'https://www.example.com/product/bacon-jam.jpg',
                  },
                  {
                    id: 'product-t-shirt',
                    sku: 'sku-2',
                    category: 'Merch',
                    name: 'T-Shirt',
                    brand: 'Levis',
                    variant: 'White',
                    price: 12.99,
                    quantity: 1,
                    currency: 'GBP',
                    position: 2,
                    value: 12.99,
                    typeOfProduct: 'Shirt',
                    url: 'https://www.example.com/product/t-shirt',
                    image_url: 'https://www.example.com/product/t-shirt.jpg',
                  },
                  {
                    id: 'offer-t-shirt',
                    sku: 'sku-3',
                    category: 'Merch',
                    name: 'T-Shirt-on-offer',
                    brand: 'Levis',
                    variant: 'Black',
                    price: 12.99,
                    quantity: 1,
                    currency: 'GBP',
                    value: 12.99,
                    coupon: 'APPARELSALE',
                    typeOfProduct: 'Shirt',
                    url: 'https://www.example.com/product/offer-t-shirt',
                    image_url: 'https://www.example.com/product/offer-t-shirt.jpg',
                  },
                ],
              },
              integrations: {
                All: true,
              },
              sentAt: '2020-06-24T12:05:19.395Z',
            },
            destination: {
              Enabled: true,
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'EventBridge: received empty config, dropping event',
            statTags: {
              destType: 'EVENTBRIDGE',
              errorCategory: 'dataValidation',
              errorType: 'configuration',
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

module.exports = {
  data,
};
