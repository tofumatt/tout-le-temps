/*global moment:true*/
TousLeTemps.Timezone = DS.Model.extend({
    name: DS.attr('string'),
    offset: DS.attr('number')
});
