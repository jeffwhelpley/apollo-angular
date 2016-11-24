/// <reference types="typed-graphql" />

declare module 'lodash.isfunction' {
  import main = require('lodash');
  export = main.isFunction;
}

declare module 'lodash.isobject' {
  import main = require('lodash');
  export = main.isObject;
}

declare module 'lodash.omit' {
  import main = require('lodash');
  export = main.omit;
}

declare module 'replace-constructor';
