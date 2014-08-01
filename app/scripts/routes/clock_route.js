TousLeTemps.ClockRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('timezone');
    }
});
