TousLeTemps.TimezoneEditRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('timezone',
                                      this.modelFor('timezone').id);
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});
