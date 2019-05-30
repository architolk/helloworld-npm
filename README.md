# The NPM hello world app

## Installation from scratch
With an empty folder, execute:

```
npm init -y
```

This wil create the package.json file. Ommit the `-y` switch to interact with the script and add your own changes.

```
npm install
```

This will install the dependencies in the node_modules directory and adds the package-lock.json file. Although this file is created, it should be committed to the git repo.

```
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install webpack-dev-server --save-dev
```

This will add the webpack and webpack-cli dependencies to the package.json file and installs the dependency modules. The third dependency adds a development http server to the environment.

## Basics for Webpack

The basics for webpack are described at [webpack: getting started](https://webpack.js.org/guides/getting-started).

The basics for development (including the webpack-dev-server) are described at [webpack: development](https://webpack.js.org/guides/development).

## Running

Start the demo with the following commands:

```
git clone git@github.com:architolk/helloworld-npm.git
cd helloworld-npm
npm install
npm start
```

(only the last command is actually needed to start the demo, the first three commands only need to be performed ones at installation).

Open your browser at http://localhost:8080 to see the hello world app.
