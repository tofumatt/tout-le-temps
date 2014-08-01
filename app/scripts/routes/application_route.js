TousLeTemps.ApplicationRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('clock');
    }
});
