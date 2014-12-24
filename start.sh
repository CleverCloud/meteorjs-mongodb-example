#! /bin/bash

# Install Meteor.js
curl https://install.meteor.com/ | sh

# export its binary
export PATH=$PATH:/home/bas/.meteor

# launch application on port 8080
meteor --port 8080
