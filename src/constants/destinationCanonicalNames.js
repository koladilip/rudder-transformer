const DestHandlerMap = {
  ga360: 'ga',
  salesforce_oauth: 'salesforce',
};

const DestCanonicalNames = {
  facebook_conversions: [
    'fb_conversions',
    'fb conversions',
    'FacebookConversions',
    'Facebook Conversions',
    'FB Conversions',
    'Facebook_Conversions',
  ],
  fb_pixel: [
    'fb_pixel',
    'fb pixel',
    'FacebookPixel',
    'Facebook Pixel',
    'FB Pixel',
    'Facebook_Pixel',
  ],
  ometria: ['Ometria', 'ometria', 'OMETRIA'],
  sendgrid: ['sendgrid', 'Sendgrid', 'SENDGRID'],
  dcm_floodlight: [
    'dcm floodlight',
    'dcm_floodlight',
    'DCM Floodlight',
    'DCM_Floodlight',
    'DCMFloodlight',
    'dcmfloodlight',
  ],
  new_relic: ['new relic', 'new_relic', 'New Relic', 'New_Relic', 'NewRelic', 'newrelic'],
  attentive_tag: [
    'attentive tag',
    'attentive_tag',
    'Attentive Tag',
    'Attentive_Tag',
    'AttentiveTag',
    'attentivetag',
  ],
  webhook: ['webhook', 'Webhook', 'WebHook', 'WEBHOOK'],
  mailchimp: ['mailchimp', 'MailChimp', 'MAILCHIMP'],
  mautic: ['MAUTIC', 'mautic', 'Mautic'],
  mailjet: ['MAILJET', 'MailJet', 'mailjet', 'Mailjet'],
  kafka: ['KAFKA', 'kafka', 'Kafka'],
  azure_event_hub: ['AZURE_EVENT_HUB', 'azure_event_hub', 'AzureEventHub'],
  confluent_cloud: ['CONFLUENT_CLOUD', 'confluent_cloud', 'ConfluentCloud'],
  vero: ['vero', 'Vero', 'VERO'],
  pinterest: ['pinterest', 'Pinterest', 'PINTEREST', 'pinterestConversion'],
  rockerbox: ['rockerbox', 'ROCKERBOX', 'Rockerbox', 'RockerBox', 'rockerBox'],
  canny: ['canny', 'Canny', 'CANNY'],
  one_signal: ['one signal', 'one_signal', 'One Signal', 'One_Signal', 'OneSignal', 'onesignal'],
  wootric: ['wootric', 'Wootric', 'WOOTRIC'],
  clickup: ['ClickUp', 'clickup', 'CLICKUP', 'clickUp', 'Clickup'],
  zapier: ['zapier', 'Zapier', 'ZAPIER'],
  shynet: ['shynet', 'SHYNET', 'shyNet', 'ShyNet'],
  woopra: ['WOOPRA', 'Woopra', 'woopra'],
  monday: ['monday', 'MONDAY', 'monDay', 'MonDay'],
  mailmodo: [
    'mail modo',
    'mail_modo',
    'Mail Modo',
    'Mail_Modo',
    'MailModo',
    'mailmodo',
    'MAILMODO',
    'mailModo',
  ],
  user: ['user', 'USER', 'User', 'User.com', 'user.com', 'USER.com'],
  engage: ['engage', 'Engage', 'ENGAGE'],
  june: ['june', 'JUNE', 'June'],
  factorsai: ['FACTORSAI', 'factorsAI', 'FactorsAi', 'factorsAi'],
  snapchat_custom_audience: [
    'snapchat custom audience',
    'snap chat custom audience',
    'snapchat_custom_audience',
    'snapchatCustomAudience',
    'Snapchat Custom Audience',
    'snapchatcustomaudience',
    'SNAPCHAT CUSTOM AUDIENCE',
    'SNAPCHAT_CUSTOM_AUDIENCE',
    'SNAPCHATCUSTOMAUDIENCE',
  ],
  CAMPAIGN_MANAGER: [
    'campaign manager',
    'campain Manager',
    'CAMPAIGN MANAGER',
    'campaignManager',
    'campaign_manager',
    'CAMPAIGN_MANAGER',
  ],
  gainsight_px: [
    'GAINSIGHT_PX',
    'GAINSIGHTPX',
    'gainsightPx',
    'Gainsight PX',
    'gainsight px',
    'Gainsight Px',
  ],
  awin: ['awin', 'Awin', 'AWIN'],
  sendinblue: ['sendinblue', 'SENDINBLUE', 'Sendinblue', 'SendinBlue'],
  ga4: ['GA4', 'ga4', 'Ga4', 'Google Analytics 4', 'googleAnalytics4', 'Google Analytics 4 (GA4)'],
  pipedream: ['Pipedream', 'PipeDream', 'pipedream', 'PIPEDREAM'],
  pagerduty: ['pagerduty', 'PAGERDUTY', 'PagerDuty', 'Pagerduty', 'pagerDuty'],
  adobe_analytics: [
    'adobe_analytics',
    'ADOBE_ANALYTICS',
    'adobe analytics',
    'adobeAnalytics',
    'Adobe Analytics',
    'adobeanalytics',
    'ADOBE ANALYTICS',
    'ADOBEANALYTICS',
  ],
  criteo_audience: [
    'criteo audience',
    'criteoAudience',
    'Criteo Audience',
    'criteoaudience',
    'CRITEO AUDIENCE',
    'CRITEO_AUDIENCE',
    'CRITEOAUDIENCE',
  ],
  optimizely_fullstack: [
    'Optimizely Fullstack',
    'OPTIMIZELY FULLSTACK',
    'optimizely fullstack',
    'OptimizelyFullstack',
    'Optimizely_Fullstack',
    'optimizely_fullstack',
  ],
  vitally: ['vitally', 'Vitally', 'VITALLY'],
  courier: ['Courier', 'courier', 'COURIER'],
  TWITTER_ADS: [
    'twitter ads',
    'twitter Manager',
    'TWITTER ADS',
    'twitterADS',
    'twitter_ads',
    'TWITTER_ADS',
  ],
  BRAZE: ['BRAZE', 'Braze', 'braze'],
};

module.exports = { DestHandlerMap, DestCanonicalNames };
