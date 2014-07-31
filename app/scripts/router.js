TousLeTemps.Router.map(function () {
    this.route('clock');

    this.resource('timezones');
    this.resource('timezone.new', {path: '/timezone/new'});
    this.resource('timezone', {path: '/timezones/:timezone_id'}, function() {
        this.route('edit');
    });
});
