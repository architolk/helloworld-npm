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
