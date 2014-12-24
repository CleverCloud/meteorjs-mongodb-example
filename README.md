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
2. Create a Node.js application and choose your application (here, it would be BlackYoup/clever-meteorjs) within the Github suggestions
3. Create a MongoDB addon and go in its configuration panel, copy ``Hostname``, ``Database``, ``User`` and ``Password`` somewhere (in a text file for exemple)
4. Go in your Node.js application, panel "Environment Variables" and create a variable with name ``MONGO_URL`` and value ``mongodb://<user>:<password>@<host>/<database>``. (These values are the one of your MongoDB addon you've just copied)
5. Make it run by clicking on the "Play" top-right button
6. Read deployment logs
7. Visit your application by clicking on the "Arrow" top-right button
8. Have fun :)

### Why do I need to create a MongoDB addon on CleverCloud ? Meteor already has its own...

Yes, it does. But your application is created in a virtual machine. If you stop / restart / your application, the virtual machine is destroyed and you will loose your mongodb database. The addon will allow you to keep your data, have automatic backups and more system resources for your meteor.js application.
