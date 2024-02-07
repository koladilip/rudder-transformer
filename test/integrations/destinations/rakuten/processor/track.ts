import {
  destination,
  commonOutputHeaders,
  commonProperties,
  endpoint,
  singleProductWithAllProperties,
} from './commonConfig';
import { transformResultBuilder } from '../../../testUtils';
export const trackSuccess = [
  {
    id: 'rakuten-test-track-success-1',
    name: 'rakuten',
    description:
      'Track call with properties.products with all properties in payload and one product containing all product properties and other containg some',
    scenario: 'Business',
    successCriteria:
      'Response should contain only properties and product payload and status code should be 200',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination,
            message: {
              type: 'track',
              event: 'product purchased',
              sentAt: '2021-01-25T16:12:02.048Z',
              userId: 'sajal12',
              channel: 'mobile',
              rudderId: 'b7b24f86-f7bf-46d8-b2b4-ccafc080239c',
              messageId: '1611588776408-ee5a3212-fbf9-4cbb-bbad-3ed0f7c6a2ce',
              properties: {
                ...commonProperties,
                products: [
                  { ...singleProductWithAllProperties },
                  {
                    sku: 'custom sku 1',
                    quantity: 5,
                    amount: 25,
                    name: 'name_1',
                  },
                  {
                    sku: 'custom sku 2',
                    name: 'SampleProduct',
                    quantity: 1,
                    amount: 30,
                    coupon: 'SALE50',
                  },
                ],
              },
              anonymousId: '9c6bd77ea9da3e68',
              integrations: {
                All: true,
              },
              originalTimestamp: '2021-01-25T15:32:56.409Z',
            },
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
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
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
            },
            output: transformResultBuilder({
              method: 'GET',
              endpoint,
              headers: commonOutputHeaders,
              params: {
                mid: 'dummyMarketingId',
                xml: 1,
                amtlist: '2000|2500|3000',
                brandlist: 'SampleBrand||',
                catidlist: '12345||',
                catlist: 'Electronics||',
                couponlist: 'SALE20||SALE50',
                disamtlist: '10.5||',
                distypelist: 'Percentage||',
                ismarketplacelist: 'N||',
                sequencelist: '123||',
                shipbylist: 'Express||',
                shipidlist: 'SHIP123||',
                qlist: '5|5|1',
                marginlist: '0.15||',
                markdownlist: '5||',
                taxexemptlist: 'N||',
                namelist: 'SampleProduct|name_1|SampleProduct',
                skulist: 'ABC123|custom sku 1|custom sku 2',
                issalelist: 'Y||',
                itmstatuslist: 'In Stock||',
                isclearancelist: 'Y||',
                ord: 'SampleOrderId',
                tr: 'SampleRanSiteID',
                land: '20240129_1200',
                date: '20240129_1300',
                altord: 'SampleAlternateOrderId',
                cur: 'INR',
                cc: 'Visa',
                commreason: 'SampleCommReason',
                iscomm: 'Y',
                consumed: '20240129_1400',
                coupon: 'SampleCoupon',
                custid: 'SampleCustomerId',
                custscore: 'A',
                custstatus: 'New',
                did: 'SampleDeviceId',
                disamt: '50.00',
                ordstatus: 'Pending',
                segment: 'SampleSegment',
                shipcountry: 'USA',
                shipped: '20240129_1500',
                sitename: 'SampleSiteName',
                storeid: '12345',
                storecat: 'Electronics',
              },
              userId: '',
            }),
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    id: 'rakuten-test-track-success-2',
    name: 'rakuten',
    description:
      'Track call with properties.products and no event in payload and products containing amount,price and quantity',
    scenario: 'Business+Framework',
    successCriteria:
      'Response should contain only properties and product payload and amount to be calculated from price*quantity where amount is not present and quantity taken as 1 by default and status code should be 200',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination,
            message: {
              type: 'track',
              sentAt: '2021-01-25T16:12:02.048Z',
              userId: 'sajal12',
              channel: 'mobile',
              rudderId: 'b7b24f86-f7bf-46d8-b2b4-ccafc080239c',
              messageId: '1611588776408-ee5a3212-fbf9-4cbb-bbad-3ed0f7c6a2ce',
              properties: {
                ...commonProperties,
                products: [
                  {
                    sku: 'custom sku 0',
                    amount: '125',
                    quantity: 1,
                    name: 'name_1',
                  },
                  {
                    sku: 'custom sku 1',
                    quantity: 5,
                    price: 25,
                    name: 'name_2',
                  },
                  {
                    sku: 'custom sku 2',
                    name: 'SampleProduct',
                    price: 30,
                    quantity: 1,
                    coupon: 'SALE50',
                  },
                ],
              },
              anonymousId: '9c6bd77ea9da3e68',
              integrations: {
                All: true,
              },
              originalTimestamp: '2021-01-25T15:32:56.409Z',
            },
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
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
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
            },
            output: transformResultBuilder({
              method: 'GET',
              endpoint,
              headers: commonOutputHeaders,
              params: {
                mid: 'dummyMarketingId',
                xml: 1,
                amtlist: '12500|12500|3000',
                couponlist: '||SALE50',
                namelist: 'name_1|name_2|SampleProduct',
                skulist: 'custom sku 0|custom sku 1|custom sku 2',
                qlist: '1|5|1',
                ord: 'SampleOrderId',
                tr: 'SampleRanSiteID',
                land: '20240129_1200',
                date: '20240129_1300',
                altord: 'SampleAlternateOrderId',
                cur: 'INR',
                cc: 'Visa',
                commreason: 'SampleCommReason',
                iscomm: 'Y',
                consumed: '20240129_1400',
                coupon: 'SampleCoupon',
                custid: 'SampleCustomerId',
                custscore: 'A',
                custstatus: 'New',
                did: 'SampleDeviceId',
                disamt: '50.00',
                ordstatus: 'Pending',
                segment: 'SampleSegment',
                shipcountry: 'USA',
                shipped: '20240129_1500',
                sitename: 'SampleSiteName',
                storeid: '12345',
                storecat: 'Electronics',
              },
              userId: '',
            }),
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    id: 'rakuten-test-track-success-3',
    name: 'rakuten',
    description:
      'Track call for products return or cancelled products containing amount,price and quantity where price is negative',
    scenario: 'Business',
    successCriteria:
      'Response should contain only properties and product payload and amount to be calculated from price*quantity where amount is negative and status code should be 200',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination,
            message: {
              type: 'track',
              sentAt: '2021-01-25T16:12:02.048Z',
              userId: 'sajal12',
              channel: 'mobile',
              rudderId: 'b7b24f86-f7bf-46d8-b2b4-ccafc080239c',
              messageId: '1611588776408-ee5a3212-fbf9-4cbb-bbad-3ed0f7c6a2ce',
              properties: {
                ...commonProperties,
                products: [
                  {
                    sku: 'custom sku 0',
                    quantity: 1,
                    amount: '-125',
                    name: 'name_1',
                  },
                  {
                    sku: 'custom sku 1',
                    quantity: 5,
                    price: -25,
                    name: 'name_2',
                  },
                ],
              },
              anonymousId: '9c6bd77ea9da3e68',
              integrations: {
                All: true,
              },
              originalTimestamp: '2021-01-25T15:32:56.409Z',
            },
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
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
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
            },
            output: transformResultBuilder({
              method: 'GET',
              endpoint,
              headers: commonOutputHeaders,
              params: {
                mid: 'dummyMarketingId',
                xml: 1,
                amtlist: '-12500|-12500',
                skulist: 'custom sku 0|custom sku 1',
                qlist: '1|5',
                ord: 'SampleOrderId',
                namelist: 'name_1|name_2',
                tr: 'SampleRanSiteID',
                land: '20240129_1200',
                date: '20240129_1300',
                altord: 'SampleAlternateOrderId',
                cur: 'INR',
                cc: 'Visa',
                commreason: 'SampleCommReason',
                iscomm: 'Y',
                consumed: '20240129_1400',
                coupon: 'SampleCoupon',
                custid: 'SampleCustomerId',
                custscore: 'A',
                custstatus: 'New',
                did: 'SampleDeviceId',
                disamt: '50.00',
                ordstatus: 'Pending',
                segment: 'SampleSegment',
                shipcountry: 'USA',
                shipped: '20240129_1500',
                sitename: 'SampleSiteName',
                storeid: '12345',
                storecat: 'Electronics',
              },
              userId: '',
            }),
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    id: 'rakuten-test-track-success-4',
    name: 'rakuten',
    description: 'Track call for Discount event ',
    scenario: 'Business',
    successCriteria:
      'Response should have last item of skulist as "Discount", qlist as 0 and amtlist as negative and status code should be 200',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            destination,
            message: {
              type: 'track',
              sentAt: '2021-01-25T16:12:02.048Z',
              userId: 'sajal12',
              channel: 'mobile',
              rudderId: 'b7b24f86-f7bf-46d8-b2b4-ccafc080239c',
              messageId: '1611588776408-ee5a3212-fbf9-4cbb-bbad-3ed0f7c6a2ce',
              properties: {
                orderId: 'SampleOrderId',
                tr: 'SampleRanSiteID',
                landTime: '20240129_1200',
                products: [
                  {
                    sku: 'custom sku 0',
                    quantity: 5,
                    amount: '125',
                    name: 'name_1',
                  },
                  {
                    sku: 'custom sku 1',
                    quantity: 5,
                    price: 25,
                    name: 'name_2',
                  },
                  {
                    sku: 'Discount',
                    quantity: 0,
                    amount: -500,
                    name: 'Discount',
                  },
                ],
              },
              anonymousId: '9c6bd77ea9da3e68',
              integrations: {
                All: true,
              },
              originalTimestamp: '2021-01-25T15:32:56.409Z',
            },
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
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
            metadata: {
              destinationId: 'dummyDestId',
              jobId: '1',
            },
            output: transformResultBuilder({
              method: 'GET',
              endpoint,
              headers: commonOutputHeaders,
              params: {
                mid: 'dummyMarketingId',
                xml: 1,
                namelist: 'name_1|name_2|Discount',
                amtlist: '12500|12500|-50000',
                skulist: 'custom sku 0|custom sku 1|Discount',
                qlist: '5|5|0',
                ord: 'SampleOrderId',
                tr: 'SampleRanSiteID',
                land: '20240129_1200',
              },
              userId: '',
            }),
            statusCode: 200,
          },
        ],
      },
    },
  },
];
