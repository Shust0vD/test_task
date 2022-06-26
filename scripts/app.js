'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('activity', 'activity.html', true),
            new Route('map', 'map.html'),
            new Route('time', 'time.html')
        ]);
    }
    init();
}());
