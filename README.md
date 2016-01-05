# skeleton
A javascript skeleton project utilizing industry popular tooling.

## Environment Setup

The industry-standard workflow for web application development using Node.js consists of [Node Package Manager (`npm`)](https://www.npmjs.com/) and [`bower`](http://bower.io/) as dependency management tools, [`grunt`](http://gruntjs.com/) as a build automation tool, and [`eslint`](http://eslint.org/) as a JavaScript source-code linter.

If you have these packages installed, continue to [Installing Dependencies and Building Project](#installing-dependencies-and-building-project). Otherwise, continue below.

### Installing `node` and `npm`

#### Recommended

The easiest way to install `node` and `npm` is via [nodejs.org/en/download](https://nodejs.org/en/download/). This method works for all platforms (Windows, OS X, Linux, SunOS, ARM, etc.). Note that `npm` comes packaged with `node`. They also provide a [Docker](https://www.docker.com/) Image and the source code.

#### Alternative

For more advanced users, you may wish to install Node and NPM using the [Node Version Manager (NVM)](https://github.com/creationix/nvm). Note: `nvm` does not support Windows and has some issues with FreeBSD.

To install `nvm`, use

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
```

or

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
```

Once `nvm` is installed, you can install the latest release by simply running

```
nvm install stable
```

### Installing `bower`

Once `npm` is installed, installing `bower` is as simple as

```
npm install -g bower
```

Note: the `-g` flag in `npm install` instructs `npm` to place the package in the global scope in your environment.

### Installing `grunt`

Similar to installing `bower`, `grunt` can be installed with

```
npm install -g grunt-cli
```

### Installing `eslint`

```
npm install -g eslint
```

## Project Installation

1. Open a terminal (or cmd-prompt) and execute the following in the base of the project folder where `package.json` is located. This will install required dependencies for the project as well as required development dependencies for `grunt`.

    ```
    npm install
    ```

2. Run the following command in the folder where `bower.json` is located. This will install any front-end dependencies listed in `bower.json`.

    ```
    bower install
    ```

3. Run `grunt` in the folder where `Gruntfile.js` is located. This will execute the automated build script.

    ```
    grunt
    ```
