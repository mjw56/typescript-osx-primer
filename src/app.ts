/// <reference path="../typings/node/node.d.ts" />
import Main = require('./components/main');
import HN = require('./components/hn')
var Firebase = require('firebase');

window.onload = () => {
  var main = new Main('start me up');
  var hn = new HN(Firebase);
}
