/*global moment:true*/
TousLeTemps.TimezonesController = Ember.ObjectController.extend({
    init: function() {
        var timezones = [];

        for (var i in moment.tz._zones) {
            timezones.push({
                name: moment.tz._zones[i].name,
                offset: moment.tz._zones[i].offset[0]
            });
        }

        this.set('timezones', timezones);

        this._super();
    },

    selectedTimezone: null,

    actions: {
        add: function() {
            var timezone = this.store.createRecord('timezone', {
                name: this.get('selectedTimezone').name,
                offset: this.get('selectedTimezone').offset
            });

            timezone.save();
        },

        remove: function(timezone) {
            timezone.destroyRecord();
        }
    }
});
