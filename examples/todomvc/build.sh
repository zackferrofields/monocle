#!/bin/bash

set -o errexit # Exit on error

cp ./node_modules/todomvc-common/base.js ./dist/base.js # Copy `todomvc-common` scripts
cp ./node_modules/todomvc-common/base.css ./dist/base.css # Copy `todomvc-common` styles
cp ./node_modules/todomvc-app-css/index.css ./dist/app.css # Copy `todomvc-app-css` styles
