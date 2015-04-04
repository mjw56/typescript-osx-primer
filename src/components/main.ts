import Helper = require('./helper');

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

export = Main;
