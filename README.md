typescript-osx-primer
====================

a boilerplate repo to get up and running with TypeScript/Browserify on OS X

### Usage:
```bash
npm install -g gulp
npm install
tsd update -so
npm start
```

If all goes well, your browser will open to localhost:3000

Open your console and you should see some messages logged to console.

## How can I download the code?
You can clone this repo using git. From you command line, enter the following:

```bash
git clone https://github.com/mjw56/typescript-osx-primer.git
```

## Who is this for?
I made this for a friend to get up and running with TypeScript on OS X quickly.

## So how does this work?
It's using [gulp](http://gulpjs.com/) as the task runner. We're using a special tool for node
development called [browserify](http://browserify.org/). Browserify allows you to write CommonJS
code using require. Browserify does all the hard work to walk the dependency graph and bundle up
all your files into one. Also, it allows for special transformers for any transpilation you may need to do.
In our case, we're using tsify which transpiles TypeScript to ES5 compliant JavaScript using the 1.4.1 compiler.
Also, we have watchify running as well. Watchify will watch all of the files we have bundled. If we make a change
to any one of them, it will automatically re-bundle for you. Also, we're watching the bundle from a tool called browser-sync, so the changes will automatically be propagated to the browser. :D

## What is package.json and how do I use it?
package.json is the configuration file for npm. Basically, we can install packages from npm by running the command
```npm install <package-name> --save-dev```. The ```--save-dev``` portion of that command will actually write the package name to our local package.json file. This means that in the future, all someone would have to do is run the command ```npm install ``` and it will automatically go to the package.json file and install those packages which we had saved there! This is very useful for when we want to share a code repository with another developer. We should not have to move the dependencies around with the source code. The dependencies can be installed by the developer themselves when they use your codebase. You can read up on package.json more from the [official documentation](https://docs.npmjs.com/files/package.json).

## What is tsd.json and how do I use it?
tsd.json is the configuration file for TypeScript type definition files. Type definition files provide extra information about a code base. TypeScript can then use this information to improve IDE intelligence about existing JavaScript libraries that you are using (think intellisense). Also, it can safeguard against using wrong types for inputs and prevent general mistakes that developers are prone to make (spelling etc.). It works very similarly to npm and package.json, except it's storing the config in tsd.json file instead of package.json. You can read up more on it [here](https://github.com/DefinitelyTyped/tsd), including all the information you need to know for how to use it.

## Is this the best way to learn TypeScript?
If you're stuck outside of a Windows environment, I've found this setup to be most helpful
when wanting to write some TypeScript. That being said, Windows Visual Studio still has the
best support as of today. Some other IDE's are starting to offer some more support via plugins:

[Eclipse](https://github.com/palantir/eclipse-typescript)
[Sublime Text](https://github.com/Microsoft/ngconf2015demo/tree/master/sublimetext)

## How can I learn more about TypeScript?
[official handbook](http://www.typescriptlang.org/Handbook)

## License
MIT License
