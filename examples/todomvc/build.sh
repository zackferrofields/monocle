#!/bin/bash

set -o errexit # Exit on error

cp ./node_modules/todomvc-common/base.js ./public/base.js # Copy `todomvc-common` scripts
cp ./node_modules/todomvc-common/base.css ./public/base.css # Copy `todomvc-common` styles
cp ./node_modules/todomvc-app-css/index.css ./public/app.css # Copy `todomvc-app-css` styles
