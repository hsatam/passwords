'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'passwords',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
        apiKey: 'AIzaSyCOaixAHhpOpYw4nW1oYXLgNHlG2QRYYmU',
        authDomain: 'pwd130371.firebaseapp.com',
        databaseURL: 'https://pwd130371.firebaseio.com',
        storageBucket: 'pwd130371.appspot.com',
    },
    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com",
      'frame-src': "'self' https://*.firebaseio.com",
      'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
