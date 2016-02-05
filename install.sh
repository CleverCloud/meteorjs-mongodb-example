#! /bin/bash

# Current path
currentPath=$(realpath ./)

# Install demeteorizer
cd ~/ && npm install demeteorizer

# Go back to our project
cd "$currentPath"

# Note: When using "meteorhacks:npm"
# to prevent the error: "unknown package: npm-container"
# (described in https://github.com/meteorhacks/npm/issues/49)
# uncomment the two following lines:
#meteor remove npm-container
#meteor run

# demeteorize the app
~/node_modules/.bin/demeteorizer -o my_app/

# Go inside our demeteorized app to install modules
cd my_app/bundle/programs/server/

# Install modules
npm install
