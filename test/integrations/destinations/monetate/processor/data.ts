export const data = [
  {
    name: 'monetate',
    description: 'Test 0',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product Viewed',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { monetateId: '1234', product_id: 'prodId' },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  monetateId: '1234',
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '0.0.0.0' },
                    { eventType: 'monetate:context:ScreenSize', height: 22, width: 11 },
                    {
                      eventType: 'monetate:context:ProductDetailView',
                      products: [{ productId: 'prodId', sku: '' }],
                    },
                  ],
                  customerId: 'newUser',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 1',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product Viewed',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { monetateId: '1234' },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: "'product_id' is a required field for Product Viewed",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 2',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product List Viewed',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { monetateId: '1234', products: [{ product_id: 1 }, { product_id: 2 }] },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  monetateId: '1234',
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '0.0.0.0' },
                    { eventType: 'monetate:context:ScreenSize', height: 22, width: 11 },
                    { eventType: 'monetate:context:ProductThumbnailView', products: ['1', '2'] },
                  ],
                  customerId: 'newUser',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 3',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product Added',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                monetateId: '1234',
                currency: 'INR',
                product_id: 1,
                quantity: 1,
                cart_value: 250,
                sku: 'sku',
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  monetateId: '1234',
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '0.0.0.0' },
                    { eventType: 'monetate:context:ScreenSize', height: 22, width: 11 },
                    {
                      eventType: 'monetate:context:Cart',
                      cartLines: [
                        { pid: '1', sku: 'sku', quantity: 1, value: '250', currency: 'INR' },
                      ],
                    },
                  ],
                  customerId: 'newUser',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 4',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Signed Up',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { plan: 'trial', source: 'social' },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '0.0.0.0' },
                    { eventType: 'monetate:context:ScreenSize', height: 22, width: 11 },
                  ],
                  customerId: 'newUser',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 5',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              name: 'Homepage',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                page: {
                  url: 'https://example.com/homepage',
                  path: '/homepage',
                  referrer: 'https://google.com',
                },
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'screen',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [{ eventType: 'monetate:context:ScreenSize', height: 22, width: 11 }],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 6',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              name: 'Homepage',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                page: {
                  url: 'https://example.com/homepage',
                  path: '/homepage',
                  referrer: 'https://google.com',
                  category: 'category',
                },
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'page',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'https://example.com/homepage',
                      path: '/homepage',
                      categories: ['category'],
                    },
                    { eventType: 'monetate:context:Referrer', referrer: 'https://google.com' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 7',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                page: { url: 'https://example.com/homepage', referrer: 'https://google.com' },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              name: 'Homepage',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                path: '/homepage',
                referrer: 'https://google.com',
                url: 'https://example.com/homepage',
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'page',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:PageView', url: 'https://example.com/homepage' },
                    { eventType: 'monetate:context:Referrer', referrer: 'https://google.com' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 8',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product Added',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                currency: 'INR',
                product_id: 1,
                quantity: 1,
                cart_value: 250,
                page: {
                  url: 'url',
                  path: 'path',
                  category: 'category',
                  breadcrumbs: 'breadcrumbs',
                },
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: { Config: { retailerShortName: 'retailer', apiKey: 'api-key' } },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '0.0.0.0' },
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'url',
                      path: 'path',
                      categories: ['category'],
                      breadcrumbs: ['breadcrumbs'],
                    },
                    { eventType: 'monetate:context:ScreenSize', height: 22, width: 11 },
                    {
                      eventType: 'monetate:context:Cart',
                      cartLines: [
                        { pid: '1', sku: '', quantity: 1, value: '250', currency: 'INR' },
                      ],
                    },
                  ],
                  customerId: 'newUser',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 9',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2020-09-03T05:48:50.813Z',
              userId: 'user101',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { city: 'Bangalore', name: 'Manashi', country: 'India' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: 'ab1bb13b-037e-4269-b7ce-79262fbfd964',
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.813Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: 'Event type identify is not supported',
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 10',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Product Added',
              sentAt: '2020-09-03T05:48:50.815Z',
              userId: 'user101',
              channel: 'web',
              context: {
                ip: '11.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { city: 'Bangalore', name: 'Manashi', country: 'India' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '0189ef26-5b64-47af-bd4a-f369155b74b0',
              properties: { cart_value: 30, product_id: 'pp10001900011', user_actual_id: 12345 },
              anonymousId: 'anony11111111',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.814Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error:
              "'product_id', 'quantity', 'cart_value' are required fields and 'quantity' should be a number for Product Added",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 11',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              name: 'Home Page',
              type: 'page',
              sentAt: '2020-09-03T05:48:50.816Z',
              userId: 'user101',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'https://google.com',
                  path: 'https://google.com',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'google',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { city: 'Bangalore', name: 'Manashi', country: 'India' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '1d263f9b-d5e9-4a3b-ae4a-403129ef9b7c',
              properties: {
                url: 'https://google.com',
                name: 'Home Page',
                path: 'https://google.com',
                title: 'MIxpanel Test',
                search: '',
                referrer: 'google',
              },
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.816Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'https://google.com',
                      path: 'https://google.com',
                    },
                    { eventType: 'monetate:context:Referrer', referrer: 'google' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 12',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              name: 'Login Page Name',
              type: 'page',
              sentAt: '2020-09-03T05:48:50.820Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '22.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'https://geeks.com',
                  path: 'https://geeks.com',
                  title: 'LOGIN PAGE OF GEEKSFORGEEKS',
                  search: '',
                  referrer: 'geeksforgeeks',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                userId: 'user202',
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              category: 'Login Category',
              messageId: '8073f133-14cc-4b6b-8043-9e5bb8d17698',
              properties: {
                url: 'https://geeks.com',
                name: 'Login Page Name',
                path: 'https://geeks.com',
                title: 'LOGIN PAGE OF GEEKSFORGEEKS',
                search: '',
                category: 'Login Category',
                referrer: 'geeksforgeeks',
              },
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.819Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'https://geeks.com',
                      path: 'https://geeks.com',
                    },
                    { eventType: 'monetate:context:Referrer', referrer: 'geeksforgeeks' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 13',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Cart Viewed',
              sentAt: '2020-09-03T05:48:50.820Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '22.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '21e78620-748a-4c1c-8570-385206fc61d6',
              properties: {
                products: [
                  {
                    details: 'Apple iphone 7',
                    currency: 'INR',
                    quantity: '1',
                    product_id: 'p2022222',
                  },
                  { price: '90', details: 'Apple iphone 8', quantity: '2', product_id: 'p201111' },
                ],
              },
              anonymousId: 'anony222222222',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.820Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error:
              "'quantity', 'price' and 'product_id' are required fields and 'quantity' and 'price' should be a number for all products for Cart Viewed",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 14',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'cutom event track call',
              sentAt: '2020-09-03T05:48:50.821Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '11.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                userId: 'user101',
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: 'be896347-8e93-4e11-8d0a-67f08b33d969',
              properties: { details: 'this is custom trackl call' },
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.821Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '11.0.0.0' },
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: '/monetateRudder.html',
                    },
                    {
                      eventType: 'monetate:context:UserAgent',
                      userAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    },
                  ],
                  customerId: 'user202',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 15',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              name: 'My orders Page Name',
              type: 'page',
              sentAt: '2020-09-03T05:48:50.822Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '33.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: 'https://geeks.com',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'geeksforgeeks',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: 'e142299a-e819-4590-b99f-9f74d30d6354',
              properties: {
                url: 'http://localhost:1111/monetateRudder.html',
                name: 'My orders Page Name',
                path: 'https://geeks.com',
                title: 'MIxpanel Test',
                search: '',
                referrer: 'geeksforgeeks',
              },
              anonymousId: 'anony33333333',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.821Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: 'https://geeks.com',
                    },
                    { eventType: 'monetate:context:Referrer', referrer: 'geeksforgeeks' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 16',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Product Viewed',
              sentAt: '2020-09-03T05:48:50.823Z',
              userId: 'user202',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                userId: 'user101',
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '5fc62a0d-835b-45c9-bfea-f2f5e57340db',
              properties: {
                sku: '123',
                products: [{ product_id: 'p1234678' }],
                product_id: 'P303333333',
              },
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.822Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: '/monetateRudder.html',
                    },
                    {
                      eventType: 'monetate:context:UserAgent',
                      userAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    },
                    {
                      eventType: 'monetate:context:ProductDetailView',
                      products: [{ productId: 'P303333333', sku: '123' }],
                    },
                  ],
                  customerId: 'user202',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 17',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              name: 'ONly page name',
              type: 'page',
              sentAt: '2020-09-03T05:48:50.823Z',
              userId: 'user202',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '1aca7c68-148e-4ef3-a828-d89daf403632',
              properties: {
                url: 'http://localhost:1111/monetateRudder.html',
                name: 'ONly page name',
                path: '/monetateRudder.html',
                title: 'MIxpanel Test',
                search: '',
                referrer: 'http://localhost:1111/',
              },
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.823Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: '/monetateRudder.html',
                    },
                    { eventType: 'monetate:context:Referrer', referrer: 'http://localhost:1111/' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 18',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Order Completed',
              sentAt: '2020-09-03T05:48:50.824Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '11.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                moneateId: 'Monetate10111111',
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '19ef9a4e-fb49-42f2-8eba-b0bb7c934289',
              properties: {
                order_id: 'orderCompleted101',
                products: [
                  {
                    sku: 'sku 1 for order completed',
                    price: 8900,
                    currency: 'INR',
                    quantity: 1,
                    product_id: 'p2022222',
                  },
                  {
                    sku: 'sku 2 for order completed',
                    price: 90,
                    quantity: 2,
                    product_id: 'p201111',
                  },
                ],
              },
              anonymousId: 'anony11111111',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.824Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '11.0.0.0' },
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: '/monetateRudder.html',
                    },
                    {
                      eventType: 'monetate:context:UserAgent',
                      userAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    },
                    {
                      eventType: 'monetate:context:Purchase',
                      purchaseId: 'orderCompleted101',
                      purchaseLines: [
                        {
                          pid: 'p2022222',
                          sku: 'sku 1 for order completed',
                          quantity: 1,
                          value: '8900.00',
                          currency: 'INR',
                        },
                        {
                          pid: 'p201111',
                          sku: 'sku 2 for order completed',
                          quantity: 2,
                          value: '180.00',
                          currency: 'USD',
                        },
                      ],
                    },
                  ],
                  customerId: 'user202',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 19',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Order Completed',
              sentAt: '2020-09-03T05:48:50.824Z',
              channel: 'web',
              context: {
                ip: '11.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                moneateId: 'Monetate10111111',
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '19ef9a4e-fb49-42f2-8eba-b0bb7c934289',
              properties: {
                order_id: 'orderCompleted101',
                products: [
                  {
                    sku: 'sku 1 for order completed',
                    price: 8900,
                    currency: 'INR',
                    quantity: 1,
                    product_id: 'p2022222',
                  },
                  {
                    sku: 'sku 2 for order completed',
                    price: 90,
                    quantity: 2,
                    product_id: 'p201111',
                  },
                ],
              },
              anonymousId: 'anony11111111',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.824Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '11.0.0.0' },
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: '/monetateRudder.html',
                    },
                    {
                      eventType: 'monetate:context:UserAgent',
                      userAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    },
                    {
                      eventType: 'monetate:context:Purchase',
                      purchaseId: 'orderCompleted101',
                      purchaseLines: [
                        {
                          pid: 'p2022222',
                          sku: 'sku 1 for order completed',
                          quantity: 1,
                          value: '8900.00',
                          currency: 'INR',
                        },
                        {
                          pid: 'p201111',
                          sku: 'sku 2 for order completed',
                          quantity: 2,
                          value: '180.00',
                          currency: 'USD',
                        },
                      ],
                    },
                  ],
                  deviceId: 'anony11111111',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 20',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              name: 'ip check page name',
              type: 'page',
              sentAt: '2020-09-03T05:48:50.825Z',
              userId: 'user202',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'https://facebook.com',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { city: 'Sydney', phone: '909077777', country: 'Australia' },
                userId: 'user606',
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              category: 'ip check page category',
              messageId: 'd6aeaf93-d28b-4a60-b8af-2376bebc4094',
              properties: {
                url: 'https://facebook.com',
                name: 'ip check page name',
                path: '/monetateRudder.html',
                title: 'MIxpanel Test',
                search: '',
                category: 'ip check page category',
                referrer: 'http://localhost:1111/',
              },
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.825Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'https://facebook.com',
                      path: '/monetateRudder.html',
                    },
                    { eventType: 'monetate:context:Referrer', referrer: 'http://localhost:1111/' },
                  ],
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 21',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2020-09-04T08:59:41.568Z',
              userId: 'user202',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: {
                  city: 'Bangalore',
                  name: 'Manashi',
                  email: 'rudder@mysite.com',
                  country: 'India',
                },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '6debe993-9b1e-40ca-b2de-9054e86bcdd0',
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-04T08:59:41.567Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: 'Event type identify is not supported',
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 22',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              sentAt: '2020-09-04T08:59:41.568Z',
              userId: 'user202',
              channel: 'web',
              context: {
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: {
                  city: 'Bangalore',
                  name: 'Manashi',
                  email: 'rudder@mysite.com',
                  country: 'India',
                },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '6debe993-9b1e-40ca-b2de-9054e86bcdd0',
              anonymousId:
                'RudderEncrypt:U2FsdGVkX19Iqki3tnJjjeUzFWOegZjPY3iYQOPJJSQaTUxTWedGBeEOyFE/hfddGtmaZJnf/HBtc/EDoRjKEA==',
              integrations: { All: true },
              originalTimestamp: '2020-09-04T08:59:41.567Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: 'Event type is required',
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 23',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { density: 2 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              name: 'Homepage',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                page: {
                  url: 'https://example.com/homepage',
                  path: '/homepage',
                  referrer: 'https://google.com',
                },
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'screen',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: { JSON: { events: [], channel: 'channel' }, XML: {}, JSON_ARRAY: {}, FORM: {} },
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
    name: 'monetate',
    description: 'Test 24',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Order Completed',
              sentAt: '2020-09-03T05:48:50.824Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '11.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                moneateId: 'Monetate10111111',
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '19ef9a4e-fb49-42f2-8eba-b0bb7c934289',
              properties: {
                order_id: 'orderCompleted101',
                products: [
                  {
                    sku: 'sku 1 for order completed',
                    price: '8900',
                    currency: 'INR',
                    quantity: '1',
                  },
                  {
                    sku: 'sku 2 for order completed',
                    price: '90',
                    quantity: '2',
                    product_id: 'p201111',
                  },
                ],
              },
              anonymousId: 'anony11111111',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.824Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error:
              "'quantity', 'price' and 'product_id' are required fields and 'quantity' and 'price' should be a number for all products for Order Completed",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 25',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'track',
              event: 'Cart Viewed',
              sentAt: '2020-09-03T05:48:50.820Z',
              userId: 'user202',
              channel: 'web',
              context: {
                ip: '22.0.0.0',
                os: { name: '', version: '' },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.3',
                  namespace: 'com.rudderlabs.javascript',
                },
                page: {
                  url: 'http://localhost:1111/monetateRudder.html',
                  path: '/monetateRudder.html',
                  title: 'MIxpanel Test',
                  search: '',
                  referrer: 'http://localhost:1111/',
                },
                locale: 'en-GB',
                screen: { density: 2.5 },
                traits: { email: 'rudder@mysite.com' },
                library: { name: 'RudderLabs JavaScript SDK', version: '1.1.3' },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
              },
              messageId: '21e78620-748a-4c1c-8570-385206fc61d6',
              properties: {
                products: [
                  {
                    details: 'Apple iphone 7',
                    currency: 'INR',
                    quantity: 1,
                    price: 2345,
                    product_id: 'p2022222',
                  },
                  { price: 90, details: 'Apple iphone 8', quantity: 2, product_id: 'p201111' },
                ],
              },
              anonymousId: 'anony222222222',
              integrations: { All: true },
              originalTimestamp: '2020-09-03T05:48:50.820Z',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
              version: '1',
              type: 'REST',
              method: 'POST',
              endpoint: 'https://engine.monetate.net/api/engine/v1/decide/retailer',
              headers: { 'Content-Type': 'application/json' },
              params: {},
              body: {
                JSON: {
                  events: [
                    { eventType: 'monetate:context:IpAddress', ipAddress: '22.0.0.0' },
                    {
                      eventType: 'monetate:context:PageView',
                      url: 'http://localhost:1111/monetateRudder.html',
                      path: '/monetateRudder.html',
                    },
                    {
                      eventType: 'monetate:context:UserAgent',
                      userAgent:
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    },
                    {
                      eventType: 'monetate:context:Cart',
                      cartLines: [
                        {
                          pid: 'p2022222',
                          sku: '',
                          quantity: 1,
                          value: '2345.00',
                          currency: 'INR',
                        },
                        { pid: 'p201111', sku: '', quantity: 2, value: '180.00', currency: 'USD' },
                      ],
                    },
                  ],
                  customerId: 'user202',
                  channel: 'channel',
                },
                XML: {},
                JSON_ARRAY: {},
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
    name: 'monetate',
    description: 'Test 26',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product Added',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: {
                monetateId: '1234',
                currency: 'INR',
                quantity: 1,
                cart_value: 250,
                sku: 'sku',
              },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error:
              "'product_id', 'quantity', 'cart_value' are required fields and 'quantity' should be a number for Product Added",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 27',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product List Viewed',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { monetateId: '1234', products: [{}, { product_id: 2 }] },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: "'product_id' is a required field for all products for Product List Viewed",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 28',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product Viewed',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { monetateId: '1234' },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: "'product_id' is a required field for Product Viewed",
            statTags: {
              destType: 'MONETATE',
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
    name: 'monetate',
    description: 'Test 29',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
              context: {
                screen: { height: 22, width: 11 },
                device: {
                  id: 'df16bffa-5c3d-4fbb-9bce-3bab098129a7R',
                  manufacturer: 'Xiaomi',
                  model: 'Redmi 6',
                  name: 'xiaomi',
                },
                network: { carrier: 'Banglalink' },
                os: { name: 'android', version: '8.1.0' },
                traits: {
                  address: { city: 'Dhaka', country: 'Bangladesh' },
                  anonymousId: 'c82cbdff-e5be-4009-ac78-cdeea09ab4b1',
                },
                ip: '0.0.0.0',
              },
              traits: { address: { city: 'Kol', country: 'Ind' } },
              event: 'Product List Viewed',
              integrations: { All: true },
              message_id: 'a80f82be-9bdc-4a9f-b2a5-15621ee41df8',
              properties: { monetateId: '1234', products: { product_id: '1' } },
              timestamp: '2019-09-01T15:46:51.693229+05:30',
              type: 'track',
              userId: 'newUser',
            },
            destination: {
              Config: {
                monetateChannel: 'channel',
                retailerShortName: 'retailer',
                apiKey: 'api-key',
              },
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
            error: "'products' missing or not array in Product List Viewed",
            statTags: {
              destType: 'MONETATE',
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
