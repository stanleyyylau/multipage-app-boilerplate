# multipage-app-boilerplate
A multipage app boilerplate with ES6+Sass+Webpack+eslint support

## How to use
+ To start developer server run ``webpack-dev-server`` and go to ``http://localhost:8080/src/view/index/index.html``
+ To start production build, run ``webpack -p``, output will be in dist folder

## Attention
+ ``src/view/sass/`` is where common sass components are stored
+ ``src/view/pug/`` is where common pug components are stored
+ ``[name].js`` should import ``[name].sass`` and all your style should be in ``[name].sass``
+ if new pages are added, edit ``entry`` at ``webpack.config.js`` file and ``html-webpack-plugin``

## Improvements needed
+ Should be able to copy static js files to ``dist`` folder to avoid bundling of these files
