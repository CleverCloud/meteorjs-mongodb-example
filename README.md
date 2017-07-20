# MeteorJS as Clever Cloud application

## Deploying to Clever-Cloud

If you don't already have an app, feel free to fork this one to test !

* [Signup](https://api.clever-cloud.com/v2/github/signup) on Clever-Cloud with Github
* Register an [SSH key](https://github.com/CleverCloud/demo-meteorjs)
* Create a MetorJS application
* Create a MongoDB addon and copy the ``Connection URI`` in the ``Configuration`` panel
* Go to "Environment Variables", add a ``MONGO_URL`` key with the ``Connection URI`` you've just copied as a value (because of `MONGO_URL` environment variable name, you can't directly link your add-on).
* Add the variable ``ROOT_URL`` with a valid HTTP url (e.g.``http://<your-app-id>.cleverapps.io`` or the url your application will use)
* Be sure the PORT environment variable exists and is equal to 8080
* Add the remote Clever-Cloud repo to your project => ``git remote add clever git+ssh://git@push.par.clever-cloud.com/<your-app-id>.git``
* Push your code to Clever-Cloud => ``git push clever master``
* Watch the logs and wait for your app to start
* Visit your application by clicking on the "Arrow" top-right button
* Have fun :*