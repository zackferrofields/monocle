#!/bin/bash

set -o errexit # Exit on error

git subtree --prefix examples/todomvc push origin gh-pages
