demo-meteorjs
=================================

Demo of deploying a Meteor.js application to Clever-Cloud

## Preparations before pushing your code to Clever-Cloud

If you already have a Meteor.js application, all you have to do is:

1. Add the ``install.sh`` file from this repo to your project and make it executable ``chmod a+x install.sh``
2. Add the ``package.json`` file from this repo to your project and customize it for your needs but be sure to leave the ``scripts`` section untouched: ``"scripts": { "install": "./install.sh", "start": "node my_app/main.js" }``

### Deploying to Clever-Cloud

If you don't already have an app, feel free to fork this one to test !

1. [Signup](https://api.clever-cloud.com/v2/github/signup) on Clever-Cloud with Github
2. Create a Node.js application
3. Create a MongoDB addon and copy the ``Connection URI`` in the ``Configuration`` panel
4. Go to "Environment Variables", add a ``MONGO_URL`` key with the ``Connection URI`` you've just copied as a value
5. Add the variable ``ROOT_URL`` with the value ``http://<your-app-id>.cleverapps.io``
6. Add the remote Clever-Cloud repo to your project => ``git remote add clever git+ssh://git@push.par.clever-cloud.com/<your-app-id>.git``
7. Push your code to Clever-Cloud => ``git push clever master``
8. Watch the logs and wait for your app to start
9. Visit your application by clicking on the "Arrow" top-right button
10. Have fun :)
