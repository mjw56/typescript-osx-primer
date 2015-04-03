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
