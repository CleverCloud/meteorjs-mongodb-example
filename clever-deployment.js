Clicks = new Mongo.Collection("clicks");

if (Meteor.isClient) {
  Template.hello.helpers({
    clicks() {
      return Clicks.findOne({});
    }
  });

  Template.hello.events({
    "click button"(e) {
      Meteor.callAsync("update", e.target.getAttribute("data-id"));
    }
  });
}

Meteor.methods({
  async update(counterID) {
    await Clicks.updateAsync(counterID, { $inc: { counter: 1 } });
  }
});

if (Meteor.isServer) {
  Meteor.startup(async function () {
    const count = await Clicks.find().countAsync();
    if (count <= 0) {
      await Clicks.insertAsync({ counter: 0 });
    }
  });
}
