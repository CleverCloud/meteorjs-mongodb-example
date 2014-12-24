clever-meteor.js
=================================

Demo of Meteor.js on Clever-Cloud

## Install on your computer

First, install [NPM](https://npmjs.org). Then:
```
  npm start
```

It will download and install meteor.js for you in ~/.meteor (default)


## Deploy on Clever-Cloud

### Existing Application

If you already have an application with Meteor.js, all you have to do is:

1. Add the ``start.sh`` file from this repo to your project
2. Create a package.json file (with ``npm init``) and add in the ``scripts`` section: ``"start": "./start.sh"``

### Deploy on Clever-Cloud

If you don't already have an app, feel free to fork this one to test !

1. [Signup](https://api.clever-cloud.com/v2/github/signup) on Clever-Cloud with Github
2. Create a Node.js application and choose username/clever-meteorjs within the suggested github applications
3. Make it run by clicking on the "Play" top-right button
4. Read deployment logs
5. Visit your application by clicking on the "Arrow" top-right button
6. Have fun :)
