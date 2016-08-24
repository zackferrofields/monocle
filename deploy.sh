#!/bin/bash

set -o errexit # Exit on error

git subtree --prefix examples/todomvc/public push origin gh-pages
