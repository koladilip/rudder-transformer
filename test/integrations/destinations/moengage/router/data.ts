export const data = [
  {
    name: 'moengage',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                anonymousId: '4eb021e9-a2af-4926-ae82-fe996d12f3c5',
                channel: 'web',
                context: {
                  timezone: 'Asia/Tokyo',
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.1.6',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.1.6',
                  },
                  locale: 'en-GB',
                  os: {
                    name: '',
                    version: '',
                  },
                  page: {
                    path: '/testing/script-test.html',
                    referrer: '',
                    search: '',
                    title: '',
                    url: 'http://localhost:3243/testing/script-test.html',
                  },
                  screen: {
                    density: 2,
                  },
                  traits: {
                    company: {
                      id: 'abc123',
                    },
                    createdAt: 'Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)',
                    email: 'rudderTest@gmail.com',
                    name: 'Rudder Test',
                    plan: 'Enterprise',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
                },
                event: 'Order Completed',
                integrations: {
                  All: true,
                },
                messageId: 'a0adfab9-baf7-4e09-a2ce-bbe2844c324a',
                originalTimestamp: '2020-10-16T08:10:12.782Z',
                properties: {
                  checkout_id: 'what is checkout id here??',
                  coupon: 'APPARELSALE',
                  currency: 'GBP',
                  order_id: 'transactionId',
                  products: [
                    {
                      brand: '',
                      category: 'Merch',
                      currency: 'GBP',
                      image_url: 'https://www.example.com/product/bacon-jam.jpg',
                      name: 'Food/Drink',
                      position: 1,
                      price: 3,
                      product_id: 'product-bacon-jam',
                      quantity: 2,
                      sku: 'sku-1',
                      typeOfProduct: 'Food',
                      url: 'https://www.example.com/product/bacon-jam',
                      value: 6,
                      variant: 'Extra topped',
                    },
                    {
                      brand: 'Levis',
                      category: 'Merch',
                      currency: 'GBP',
                      image_url: 'https://www.example.com/product/t-shirt.jpg',
                      name: 'T-Shirt',
                      position: 2,
                      price: 12.99,
                      product_id: 'product-t-shirt',
                      quantity: 1,
                      sku: 'sku-2',
                      typeOfProduct: 'Shirt',
                      url: 'https://www.example.com/product/t-shirt',
                      value: 12.99,
                      variant: 'White',
                    },
                    {
                      brand: 'Levis',
                      category: 'Merch',
                      coupon: 'APPARELSALE',
                      currency: 'GBP',
                      image_url: 'https://www.example.com/product/offer-t-shirt.jpg',
                      name: 'T-Shirt-on-offer',
                      position: 1,
                      price: 12.99,
                      product_id: 'offer-t-shirt',
                      quantity: 1,
                      sku: 'sku-3',
                      typeOfProduct: 'Shirt',
                      url: 'https://www.example.com/product/offer-t-shirt',
                      value: 12.99,
                      variant: 'Black',
                    },
                  ],
                  revenue: 31.98,
                  shipping: 4,
                  value: 31.98,
                },
                receivedAt: '2020-10-16T13:40:12.792+05:30',
                request_ip: '[::1]',
                sentAt: '2020-10-16T08:10:12.783Z',
                timestamp: '2020-10-16T13:40:12.791+05:30',
                type: 'track',
                userId: 'rudder123',
              },
              metadata: {
                jobId: 1,
              },
              destination: {
                ID: '1iuTZs6eEZVMm6GjRBe6bNShaL3',
                Name: 'MoEngage Testing',
                DestinationDefinition: {
                  ID: '1iu4802Tx27kNC4KNYYou6D8jzL',
                  Name: 'MOENGAGE',
                  DisplayName: 'MoEngage',
                  Config: {
                    destConfig: {
                      defaultConfig: ['apiId', 'apiKey', 'region'],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                    ],
                  },
                },
                Config: {
                  apiId: 'W0ZHNMPI2O4KHJ48ZILZACRA',
                  apiKey: 'dummyApiKey',
                  eventDelivery: false,
                  eventDeliveryTS: 1602757086384,
                  region: 'US',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              message: {
                anonymousId: '4eb021e9-a2af-4926-ae82-fe996d12f3c5',
                channel: 'web',
                context: {
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.1.6',
                  },
                  library: {
                    name: 'RudderLabs JavaScript SDK',
                    version: '1.1.6',
                  },
                  locale: 'en-GB',
                  os: {
                    name: '',
                    version: '',
                  },
                  page: {
                    path: '/testing/script-test.html',
                    referrer: '',
                    search: '',
                    title: '',
                    url: 'http://localhost:3243/testing/script-test.html',
                  },
                  screen: {
                    density: 2,
                  },
                  traits: {
                    company: {
                      id: 'abc123',
                    },
                    createdAt: 'Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)',
                    email: 'rudderTest@gmail.com',
                    name: 'Rudder Test',
                    plan: 'Enterprise',
                  },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
                },
                integrations: {
                  All: true,
                },
                messageId: 'e108eb05-f6cd-4624-ba8c-568f2e2b3f92',
                originalTimestamp: '2020-10-16T08:26:14.938Z',
                receivedAt: '2020-10-16T13:56:14.945+05:30',
                request_ip: '[::1]',
                sentAt: '2020-10-16T08:26:14.939Z',
                timestamp: '2020-10-16T13:56:14.944+05:30',
                type: 'identify',
                userId: 'rudder123',
              },
              metadata: {
                jobId: 2,
              },
              destination: {
                ID: '1iuTZs6eEZVMm6GjRBe6bNShaL3',
                Name: 'MoEngage Testing',
                DestinationDefinition: {
                  ID: '1iu4802Tx27kNC4KNYYou6D8jzL',
                  Name: 'MOENGAGE',
                  DisplayName: 'MoEngage',
                  Config: {
                    destConfig: {
                      defaultConfig: ['apiId', 'apiKey', 'region'],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                    ],
                  },
                },
                Config: {
                  apiId: 'W0ZHNMPI2O4KHJ48ZILZACRA',
                  apiKey: 'dummyApiKey',
                  eventDelivery: false,
                  eventDeliveryTS: 1602757086384,
                  region: 'US',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
          destType: 'moengage',
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
                endpoint: 'https://api-01.moengage.com/v1/event/W0ZHNMPI2O4KHJ48ZILZACRA',
                headers: {
                  'Content-Type': 'application/json',
                  '***REMOVED***,
                  Authorization: 'Basic VzBaSE5NUEkyTzRLSEo0OFpJTFpBQ1JBOmR1bW15QXBpS2V5',
                },
                params: {},
                body: {
                  JSON: {
                    customer_id: 'rudder123',
                    type: 'event',
                    actions: [
                      {
                        action: 'Order Completed',
                        attributes: {
                          checkout_id: 'what is checkout id here??',
                          coupon: 'APPARELSALE',
                          currency: 'GBP',
                          order_id: 'transactionId',
                          'products[0].brand': '',
                          'products[0].category': 'Merch',
                          'products[0].currency': 'GBP',
                          'products[0].image_url': 'https://www.example.com/product/bacon-jam.jpg',
                          'products[0].name': 'Food/Drink',
                          'products[0].position': 1,
                          'products[0].price': 3,
                          'products[0].product_id': 'product-bacon-jam',
                          'products[0].quantity': 2,
                          'products[0].sku': 'sku-1',
                          'products[0].typeOfProduct': 'Food',
                          'products[0].url': 'https://www.example.com/product/bacon-jam',
                          'products[0].value': 6,
                          'products[0].variant': 'Extra topped',
                          'products[1].brand': 'Levis',
                          'products[1].category': 'Merch',
                          'products[1].currency': 'GBP',
                          'products[1].image_url': 'https://www.example.com/product/t-shirt.jpg',
                          'products[1].name': 'T-Shirt',
                          'products[1].position': 2,
                          'products[1].price': 12.99,
                          'products[1].product_id': 'product-t-shirt',
                          'products[1].quantity': 1,
                          'products[1].sku': 'sku-2',
                          'products[1].typeOfProduct': 'Shirt',
                          'products[1].url': 'https://www.example.com/product/t-shirt',
                          'products[1].value': 12.99,
                          'products[1].variant': 'White',
                          'products[2].brand': 'Levis',
                          'products[2].category': 'Merch',
                          'products[2].coupon': 'APPARELSALE',
                          'products[2].currency': 'GBP',
                          'products[2].image_url':
                            'https://www.example.com/product/offer-t-shirt.jpg',
                          'products[2].name': 'T-Shirt-on-offer',
                          'products[2].position': 1,
                          'products[2].price': 12.99,
                          'products[2].product_id': 'offer-t-shirt',
                          'products[2].quantity': 1,
                          'products[2].sku': 'sku-3',
                          'products[2].typeOfProduct': 'Shirt',
                          'products[2].url': 'https://www.example.com/product/offer-t-shirt',
                          'products[2].value': 12.99,
                          'products[2].variant': 'Black',
                          revenue: 31.98,
                          shipping: 4,
                          value: 31.98,
                        },
                        platform: 'web',
                        app_version: '1.1.6',
                        current_time: '2020-10-16T13:40:12.791+05:30',
                        user_timezone_offset: 32400,
                      },
                    ],
                  },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
                userId: '4eb021e9-a2af-4926-ae82-fe996d12f3c5',
              },
              metadata: [
                {
                  jobId: 1,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1iuTZs6eEZVMm6GjRBe6bNShaL3',
                Name: 'MoEngage Testing',
                DestinationDefinition: {
                  ID: '1iu4802Tx27kNC4KNYYou6D8jzL',
                  Name: 'MOENGAGE',
                  DisplayName: 'MoEngage',
                  Config: {
                    destConfig: {
                      defaultConfig: ['apiId', 'apiKey', 'region'],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                    ],
                  },
                },
                Config: {
                  apiId: 'W0ZHNMPI2O4KHJ48ZILZACRA',
                  apiKey: 'dummyApiKey',
                  eventDelivery: false,
                  eventDeliveryTS: 1602757086384,
                  region: 'US',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://api-01.moengage.com/v1/customer/W0ZHNMPI2O4KHJ48ZILZACRA',
                headers: {
                  'Content-Type': 'application/json',
                  '***REMOVED***,
                  Authorization: 'Basic VzBaSE5NUEkyTzRLSEo0OFpJTFpBQ1JBOmR1bW15QXBpS2V5',
                },
                params: {},
                body: {
                  JSON: {
                    customer_id: 'rudder123',
                    type: 'customer',
                    attributes: {
                      name: 'Rudder Test',
                      email: 'rudderTest@gmail.com',
                      created_time: 'Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)',
                      'company.id': 'abc123',
                      createdAt: 'Thu Mar 24 2016 17:46:45 GMT+0000 (UTC)',
                      plan: 'Enterprise',
                    },
                  },
                  JSON_ARRAY: {},
                  XML: {},
                  FORM: {},
                },
                files: {},
                userId: '4eb021e9-a2af-4926-ae82-fe996d12f3c5',
              },
              metadata: [
                {
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1iuTZs6eEZVMm6GjRBe6bNShaL3',
                Name: 'MoEngage Testing',
                DestinationDefinition: {
                  ID: '1iu4802Tx27kNC4KNYYou6D8jzL',
                  Name: 'MOENGAGE',
                  DisplayName: 'MoEngage',
                  Config: {
                    destConfig: {
                      defaultConfig: ['apiId', 'apiKey', 'region'],
                    },
                    excludeKeys: [],
                    includeKeys: [],
                    supportedSourceTypes: [
                      'android',
                      'ios',
                      'web',
                      'unity',
                      'amp',
                      'cloud',
                      'reactnative',
                    ],
                  },
                },
                Config: {
                  apiId: 'W0ZHNMPI2O4KHJ48ZILZACRA',
                  apiKey: 'dummyApiKey',
                  eventDelivery: false,
                  eventDeliveryTS: 1602757086384,
                  region: 'US',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
        },
      },
    },
  },
];
