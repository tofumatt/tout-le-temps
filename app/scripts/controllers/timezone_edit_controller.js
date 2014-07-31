TousLeTemps.TimezoneEditController = Ember.ObjectController.extend({
    needs: 'timezone',
    actions: {
        save: function() {
            var _this = this;
            this.get('buffer').forEach(function(attr) {
                _this.get('controllers.timezone.model')
                     .set(attr.key, attr.value);
            });
            this.transitionToRoute('timezone',this.get('model'));
        }
    }
});
