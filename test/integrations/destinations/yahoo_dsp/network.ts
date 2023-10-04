export const networkCallsData = [
  {
    httpReq: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: 'grant_type=client_credentials&scope=dsp-api-access&realm=dsp&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=***REMOVED***,
      method: 'POST',
      url: 'https://id.b2b.yahooinc.com/identity/oauth2/access_token',
    },
    httpRes: {
      data: {
        access_token: 'testAuthToken',
        expires_in: 3599,
        scope: 'dsp-api-access',
        token_type: 'Bearer',
      },
      status: 200,
    },
  },
];
