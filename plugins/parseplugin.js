var Parse = typeof window === 'undefined' ? require('parse/node') : require('parse');

import Vue from 'vue';
//import Parse from 'parse/node';

Parse.initialize('Whorizon');
Parse.serverURL = 'https://awk.danteh.net:1337/parse/';


Vue.use(Parse);