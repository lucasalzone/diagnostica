# Install node.js
In this tutorial show how to install and configure nodejs on windows.

## Download And Install
From official site (https://nodejs.org/it/) download node-vx.xx.x-os.msi stable versione, and then click on it for installation.
- accept term and condition of license
- set installation path
- accept default configuration
- click and install

### check installation
Open terminal and write
> npm version

you must show something like:

> { npm: '3.10.10',
  ares: '1.10.1-DEV',
  http_parser: '2.7.0',
  icu: '58.2',
  modules: '48',
  node: '6.10.2',
  openssl: '1.0.2k',
  uv: '1.9.1',
 v8: '5.1.281.98',
  zlib: '1.2.11' }

## What is node.js

Nodejs is a multi-thread runtime for javascript application. It's event based and is asyncronous.

### A simple web-server with node.js
In this example we show how to create a simple http server on local machine.

```javascript
var http = require('http');

var server = http.createServer(function(request, response) {
  // magic happens here!
});	
```

## npm
Npm is a package manager for javascript.
When install Node.js, the system install also **npm** tools, that enabled node to install and run plugin.
To install new plugin we can use

- npm **-i** plugin-name: install plugin (-g option install globally, save / save-dev / save-optional install as dependencies)
- npm **install npm@latest -g**: update npm to last version
- npm init: create package.json file (javascript pom :P)
- npm update: update all package to last version.


## Gulp
### install globally
npm install --global gulp-cli

### install on project
npm install --save-dev gulp

### create gulp.js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

## Grunt
Grunt is a task runner.
With grunt we can execute task for compilation, minify, test, and more.

### Installation
From terminal:

> npm install -g grunt-cli
> npm install -g grunt-init
> (on project) npm i grunt --save-dev

### package.json 
To work with grunt, we must before configure it on project.
To create a defualt package.json with grunt write:

> grunt-init


  