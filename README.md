demo-meteorjs
=================================

Demo of deploying a Meteor.js application to Clever-Cloud

## Preparations before pushing your code to Clever-Cloud

If you already have a Meteor.js application, all you have to do is:

1. Add the ``install.sh`` file from this repo to your project and make it executable ``chmod a+x install.sh``
2. Add the ``package.json`` file from this repo to your project and customize it for your needs but be sure to leave the ``scripts`` section untouched: ``"scripts": { "install": "./install.sh", "start": "node my_app/main.js" }``
3. Use [GIT](https://git-scm.com/) to version this application

## Node v0.10.40 needed

As of 27/09/15, if you want to use your own ``package.json`` file, be sure to specify the ``engines > node`` field to ``^0.10.40``.
A submodule of demeteorizer (fibers@1.0.1) won't compile with above node versions.

### Deploying to Clever-Cloud

If you don't already have an app, feel free to fork this one to test !

1. [Signup](https://api.clever-cloud.com/v2/github/signup) on Clever-Cloud with Github
2. Register an [SSH key](https://github.com/CleverCloud/demo-meteorjs)
3. Create a Node.js application
4. Create a MongoDB addon and copy the ``Connection URI`` in the ``Configuration`` panel
5. Go to "Environment Variables", add a ``MONGO_URL`` key with the ``Connection URI`` you've just copied as a value
6. Add the variable ``ROOT_URL`` with a valid HTTP url (e.g.``http://<your-app-id>.cleverapps.io`` or the url your application will use)
7. Be sure the PORT environment variable exists and is equal to 8080
8. Add the remote Clever-Cloud repo to your project => ``git remote add clever git+ssh://git@push.par.clever-cloud.com/<your-app-id>.git``
9. Push your code to Clever-Cloud => ``git push clever master``
10. Watch the logs and wait for your app to start
11. Visit your application by clicking on the "Arrow" top-right button
12. Have fun :)
