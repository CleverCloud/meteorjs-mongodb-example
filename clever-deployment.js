Clicks = new Mongo.Collection("clicks");

if (Meteor.isClient) {
  Template.hello.helpers({
    clicks: function () {
      return Clicks.findOne({});
    }
  });

  Template.hello.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Meteor.call('update', e.target.getAttribute('data-id'));
    }
  });
}

Meteor.methods({
  update: function(counterID){
    Clicks.update(counterID, {$inc: {counter: +1}});
  }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Clicks.find().count() <= 0){
      Clicks.insert({
        counter: 0
      });
    }
  });
}
