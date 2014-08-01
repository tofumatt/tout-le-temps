TousLeTemps.ApplicationSerializer = DS.IndexedDBSerializer.extend();
TousLeTemps.ApplicationAdapter = DS.IndexedDBAdapter.extend({
    // autoIncrement: true,
    databaseName: 'TousLeTemps',
    version: 1,
    migrations: function() {
        this.addModel('timezone');
    }
});
