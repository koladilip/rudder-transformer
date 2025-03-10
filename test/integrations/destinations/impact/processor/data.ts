import { authHeader1, secret1, secret2 } from '../maskedSecrets';
export const data = [
  {
    name: 'impact',
    description: 'Identify Call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: ' user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: true,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  DeviceOs: 'ios',
                  AndroidId: 'id',
                  EventDate: 'NOW',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'user123',
                  PropertyId: '2323',
                  DeviceOsVer: '1.12.3',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  CustomerEmail: '0c57fe03e81357df3acc1340bc9e353688e8f69e',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: 'https://trkapi.impact.com/PageLoad',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Identify Call when enableIdentifyEvents is disabled from config',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: 'user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
            error: 'identify events are disabled from Config',
            statTags: {
              destType: 'IMPACT',
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
  {
    name: 'impact',
    description: 'Account SID is empty',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: 'user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: '',
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: true,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
            error: 'accountSID : are required fields',
            statTags: {
              destType: 'IMPACT',
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
  {
    name: 'impact',
    description: 'API Key is empty',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: 'user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: 'jskafsdhgfbjcdsxzjhfnerscd',
                apiKey: '',
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: true,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
            error: 'apiKey : are required fields',
            statTags: {
              destType: 'IMPACT',
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
  {
    name: 'impact',
    description: 'campaignId is empty',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: 'user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: 'jskafsdhgfbjcdsxzjhfnerscd',
                apiKey: 'hjsfbnrrcldkbnfsjknfdkfjne',
                campaignId: '',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: true,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
            error: 'campaignId : are required fields',
            statTags: {
              destType: 'IMPACT',
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
  {
    name: 'impact',
    description: 'Track Call with products array to test conversion endpoint',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                products: [
                  {
                    brand: 'zara',
                    category: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  OrderId: '9217374917471',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Order Completed',
                  ItemQuantity1: 1,
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Track Call with products array without any custom products mapping',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Product Purchased',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                products: [
                  {
                    brand: 'zara',
                    category: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: '',
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  OrderId: '9217374917471',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Product Purchased',
                  ItemQuantity1: 1,
                  ItemCategory1: 'wearables',
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description:
      'Track Call with products array to test conversion endpoint with a custom products mapping',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                products: [
                  {
                    brand: 'zara',
                    variant: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                    customRSProductField: 'customRSVal',
                  },
                ],
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                  {
                    from: 'customRSProductField',
                    to: 'customImpactProductField',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  OrderId: '9217374917471',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemCategory1: 'wearables',
                  ItemPrice1: 332,
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Order Completed',
                  ItemQuantity1: 1,
                  customImpactProductField1: 'customRSVal',
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description:
      'Track Call with products array to test conversion endpoint with a custom products mapping and custom property mapping',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                profit: 434,
                products: [
                  {
                    brand: 'zara',
                    variant: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  Money1: 434,
                  OrderId: '9217374917471',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemCategory1: 'wearables',
                  ItemPrice1: 332,
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Order Completed',
                  ItemQuantity1: 1,
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Track Call with products array to test conversion endpoint with OS as android',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                profit: 434,
                products: [
                  {
                    brand: 'zara',
                    variant: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: 'Android',
                  version: '9',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                device: {
                  id: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  advertisingId: '435o4GRlm',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  Money1: 434,
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  GoogAId: '435o4GRlm',
                  OrderId: '9217374917471',
                  DeviceOs: 'Android',
                  ItemSku1: 'G-32',
                  AndroidId: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  DeviceOsVer: '9',
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Order Completed',
                  ItemCategory1: 'wearables',
                  ItemQuantity1: 1,
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Track Call with products array to test conversion endpoint with OS as ios',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                profit: 434,
                products: [
                  {
                    brand: 'zara',
                    variant: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: 'iOS',
                  version: '15.2',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                device: {
                  id: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  advertisingId: '435o4GRlm',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppleIfa: '435o4GRlm',
                  AppleIfv: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  Money1: 434,
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  OrderId: '9217374917471',
                  DeviceOs: 'iOS',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  DeviceOsVer: '15.2',
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Order Completed',
                  ItemCategory1: 'wearables',
                  ItemQuantity1: 1,
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Page Call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'page',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: 'user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: true,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  DeviceOs: 'ios',
                  AndroidId: 'id',
                  EventDate: 'NOW',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'user123',
                  PropertyId: '2323',
                  DeviceOsVer: '1.12.3',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  CustomerEmail: '0c57fe03e81357df3acc1340bc9e353688e8f69e',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: 'https://trkapi.impact.com/PageLoad',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Screen Call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'screen',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'user123',
              channel: 'web',
              context: {
                os: {
                  name: 'android',
                  version: '1.12.3',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                traits: {
                  email: 'user123@email.com',
                  phone: '+917836362334',
                  userId: 'user123',
                },
                locale: 'en-US',
                device: {
                  token: 'token',
                  id: 'id',
                  type: 'ios',
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'sku',
                    to: 'ItemSku',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: true,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  DeviceOs: 'ios',
                  AndroidId: 'id',
                  EventDate: 'NOW',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'user123',
                  PropertyId: '2323',
                  DeviceOsVer: '1.12.3',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  CustomerEmail: '0c57fe03e81357df3acc1340bc9e353688e8f69e',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: 'https://trkapi.impact.com/PageLoad',
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Unsupported message type',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'group',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                products: [
                  {
                    brand: 'zara',
                    category: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
            error: 'Event type group is not supported',
            statTags: {
              destType: 'IMPACT',
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
    name: 'impact',
    description: 'Event type is empty',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: '',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                products: [
                  {
                    brand: 'zara',
                    category: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
            error: 'Event type is required',
            statTags: {
              destType: 'IMPACT',
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
    name: 'impact',
    description: 'Track Call with products array to test conversion endpoint',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Order Completed',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                brand: 'zara',
                category: 'wearables',
                name: 'Monopoly',
                price: 332,
                quantity: 1,
                sku: 'G-32',
              },
              context: {
                os: {
                  name: '',
                  version: '',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Purchased',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'App Installed',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  OrderId: '9217374917471',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Order Completed',
                  ItemCategory1: 'wearables',
                  ItemQuantity1: 1,
                  ItemPromoCode1: '10OFF-ROCKET',
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'impact',
    description: 'Track Call with products array to test conversion endpoint with event mapping',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              event: 'Product Ordered',
              type: 'track',
              sentAt: '2021-01-03T17:02:53.195Z',
              userId: 'Ujjwalab',
              channel: 'web',
              properties: {
                orderId: '9217374917471',
                coupon: '10OFF-ROCKET',
                clickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                profit: 434,
                products: [
                  {
                    brand: 'zara',
                    variant: 'wearables',
                    name: 'Monopoly',
                    price: 332,
                    quantity: 1,
                    sku: 'G-32',
                  },
                ],
              },
              context: {
                os: {
                  name: 'iOS',
                  version: '15.2',
                },
                app: {
                  name: 'RudderLabs JavaScript SDK',
                  build: '1.0.0',
                  version: '1.1.11',
                  namespace: 'com.rudderlabs.javascript',
                },
                device: {
                  id: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  advertisingId: '435o4GRlm',
                },
                locale: 'en-US',
                screen: {
                  density: 2,
                },
                library: {
                  name: 'RudderLabs JavaScript SDK',
                  version: '1.1.11',
                },
                campaign: {},
                userAgent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
              },
              rudderId: '8f8fa6b5-8e24-489c-8e22-61f23f2e364f',
              messageId: '2116ef8c-efc3-4ca4-851b-02ee60dad6ff',
              anonymousId: '97c46c81-3140-456d-b2a9-690d70aaca35',
              originalTimestamp: 'NOW',
            },
            destination: {
              Config: {
                accountSID: secret1,
                apiKey: secret2,
                campaignId: '23224',
                impactAppId: '2323',
                eventTypeId: '56446',
                enableEmailHashing: true,
                rudderToImpactProperty: [
                  {
                    from: 'properties.profit',
                    to: 'Money1',
                  },
                ],
                productsMapping: [
                  {
                    from: 'variant',
                    to: 'ItemCategory',
                  },
                ],
                enableIdentifyEvents: false,
                enablePageEvents: false,
                enableScreenEvents: false,
                actionEventNames: [
                  {
                    eventName: 'Product Ordered',
                  },
                ],
                installEventNames: [
                  {
                    eventName: 'Product Ordered',
                  },
                ],
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
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppleIfa: '435o4GRlm',
                  AppleIfv: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  Money1: 434,
                  AppName: 'RudderLabs JavaScript SDK',
                  OrderId: '9217374917471',
                  DeviceOs: 'iOS',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  DeviceOsVer: '15.2',
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Product Ordered',
                  ItemCategory1: 'wearables',
                  ItemQuantity1: 1,
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
          {
            output: {
              body: {
                XML: {},
                FORM: {
                  AppVer: '1.1.11',
                  AppleIfa: '435o4GRlm',
                  AppleIfv: '78c53c15-32a1-4b65-adac-bec2d7bb8fab',
                  Money1: 434,
                  AppName: 'RudderLabs JavaScript SDK',
                  ClickId: 'wEWU47yhtzBnU-CTug3:7Wv4UkAzMbzkZ2lTz80',
                  OrderId: '9217374917471',
                  DeviceOs: 'iOS',
                  ItemSku1: 'G-32',
                  EventDate: 'NOW',
                  ItemName1: 'Monopoly',
                  UserAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0',
                  AppPackage: '1.0.0',
                  CampaignId: '23224',
                  CustomerId: 'Ujjwalab',
                  ItemBrand1: 'zara',
                  ItemPrice1: 332,
                  DeviceOsVer: '15.2',
                  EventTypeId: '56446',
                  ImpactAppId: '2323',
                  DeviceLocale: 'en-US',
                  EventTypeCode: 'Product Ordered',
                  ItemCategory1: 'wearables',
                  ItemQuantity1: 1,
                  OrderPromoCode: '10OFF-ROCKET',
                  CustomProfileId: '97c46c81-3140-456d-b2a9-690d70aaca35',
                },
                JSON: {},
                JSON_ARRAY: {},
              },
              type: 'REST',
              files: {},
              method: 'POST',
              params: {},
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: authHeader1,
              },
              version: '1',
              endpoint: `https://api.impact.com/Advertisers/${secret1}/Conversions`,
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
];
