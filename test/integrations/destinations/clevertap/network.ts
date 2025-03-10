const dataDeliveryMocksData = [
  {
    httpReq: {
      url: 'https://api.clevertap.com/1/upload/test1',
      data: {
        d: [
          {
            type: 'profile',
            profileData: {
              Email: 'jamesDoe@gmail.com',
              Name: 'James Doe',
              Phone: '92374162212',
              Gender: 'M',
              Employed: true,
              DOB: '1614775793',
              Education: 'Science',
              Married: 'Y',
              'Customer Type': 'Prime',
              graduate: true,
              msg_push: true,
              msgSms: true,
              msgemail: true,
              msgwhatsapp: false,
              custom_tags: JSON.stringify(['Test_User', 'Interested_User', 'DIY_Hobby']),
              custom_mappings: JSON.stringify({ Office: 'Trastkiv', Country: 'Russia' }),
              address: JSON.stringify({
                city: 'kolkata',
                country: 'India',
                postalCode: 789223,
                state: 'WB',
                street: '',
              }),
            },
            identity: 'anon_id',
          },
        ],
      },
      params: { destination: 'clevertap' },
      headers: {
        'X-CleverTap-Account-Id': '476550467',
        'X-CleverTap-Passcode':
          'fbee74a147828e2932c701d19dc1f2dcfa4ac0048be3aa3a88d427090a59dc1c0fa002f1',
        'Content-Type': 'application/json',
        'User-Agent': 'RudderLabs',
      },
      method: 'POST',
    },
    httpRes: { data: { status: 'success', processed: 1, unprocessed: [] }, status: 200 },
  },
  {
    httpReq: {
      url: 'https://api.clevertap.com/1/upload/test2',
      data: {
        d: [
          {
            identity: 'anon-id-new',
            type: 'event',
            evtName: 'Web Page Viewed: Rudder',
            evtData: { title: 'Home', path: '/' },
          },
        ],
      },
      params: { destination: 'clevertap' },
      headers: {
        'X-CleverTap-Account-Id': 'fakeId123',
        'X-CleverTap-Passcode': 'fakePasscode123',
        'Content-Type': 'application/json',
        'User-Agent': 'RudderLabs',
      },
      method: 'POST',
    },
    httpRes: {
      data: { status: 'fail', error: 'Invalid Credentials', code: 401 },
      status: 401,
    },
  },
  {
    httpReq: {
      url: 'https://api.clevertap.com/1/upload/test3',
      data: {
        d: [{ identity: 'anon-id-new', type: 'event', evtData: { title: 'Home', path: '/' } }],
      },
      params: { destination: 'clevertap' },
      headers: {
        'X-CleverTap-Account-Id': '476550467',
        'X-CleverTap-Passcode':
          'fbee74a147828e2932c701d19dc1f2dcfa4ac0048be3aa3a88d427090a59dc1c0fa002f1',
        'Content-Type': 'application/json',
        'User-Agent': 'RudderLabs',
      },
      method: 'POST',
    },
    httpRes: { data: { status: 'fail', processed: 0, unprocessed: [] }, status: 200 },
  },
  {
    httpReq: {
      url: 'https://api.clevertap.com/1/upload/test4',
      method: 'POST',
    },
    httpRes: {
      data: {
        status: 'partial',
        processed: 2,
        unprocessed: [
          {
            status: 'fail',
            code: 509,
            error:
              'Event Name is incorrect. ErrorCode: 509 - Event name is mandatory. Skipped record number : 2',
            record: {
              evtData: {
                name: 1234,
                revenue: 4.99,
              },
              type: 'event',
              identity: 'user123',
            },
          },
        ],
      },
      status: 200,
    },
  },
];
const deleteNwData = [
  {
    httpReq: {
      method: 'post',
      url: 'https://api.clevertap.com/1/delete/profiles.json',
      data: {
        identity: [
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
        ],
      },
      headers: {
        'Content-Type': 'application/json',
        'X-CleverTap-Account-Id': 'testFail',
        'X-CleverTap-Passcode': 'tofail',
      },
    },
    httpRes: {
      data: {
        code: 400,
        message: 'Bad Req',
        status: 'Fail Case',
      },
      status: 400,
    },
  },
  {
    httpReq: {
      method: 'post',
      url: 'https://api.clevertap.com/1/delete/profiles.json',
      data: {
        identity: [
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
          'test_user_id',
          'user_sdk2',
        ],
      },
      headers: {
        'Content-Type': 'application/json',
        'X-CleverTap-Account-Id': 'testFail',
        'X-CleverTap-Passcode': 'tofail',
      },
      maxContentLength: 100000000,
    },
    httpRes: {
      status: 200,
      statusText: 'OK',
      data: {
        ' message': 'rpoxy',
      },
    },
  },
];
export const networkCallsData = [...deleteNwData, ...dataDeliveryMocksData];
