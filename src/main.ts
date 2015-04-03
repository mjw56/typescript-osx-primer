/// <reference path="../typings/node/node.d.ts" />
import Helper = require('./components/helper');

class Main {

  name;
  helper;

  constructor(name: string) {
    this.name = name;
    console.log(this.name)

    this.helper = new Helper();
    this.helper.sayHello();
  }

}

window.onload = () => {
  var main = new Main('start me up');
}
