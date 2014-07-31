TousLeTemps.TimezoneRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('timezone',
                                      params.timezone_id);
    }
});
