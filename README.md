typescript-osx-primer
====================

a boilerplate repo to get up and running with TypeScript/Browserify on OS X

### Usage:
```bash
npm install && npm start
```

If all goes well, your browser will open to localhost:3000

Open your console and you should see "hello from main!" (very exciting, I know :))

It may complain it can't find a gulp reference.. in that case install it globally:

```bash
npm install -g gulp
```

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
That is debatable. Microsoft Visual Studio offers the best experience. If you can get access to a
Windows VM with latest Visual Studio, I would say learn on there. If not, this will allow you to
write TypeScript code and compile it to run it in the browser.

## How can I learn more about TypeScript?
[official handbook](http://www.typescriptlang.org/Handbook)

## License
MIT License
