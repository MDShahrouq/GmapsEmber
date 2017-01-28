import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({ 
      lat: 12.969388, 
      lng: 77.579098,
      zoom: 4
    });
  }
});
