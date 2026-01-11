/**
 * Q18:
 Given:
events = [
  { t: 1, user:"A" },
  { t: 3, user:"A" },
  { t: 7, user:"B" },
  { t: 8, user:"A" }
]

Return number of events per user in last 5 seconds relative to each event.

output [
  { t: 1, counts: { A: 1 } },
  { t: 3, counts: { A: 2 } },
  { t: 7, counts: { A: 1, B: 1 } },
  { t: 8, counts: { A: 2, B: 1 } }
]
 */
(function () {
    function numEvents(events, seconds) {
        var winds = [];
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            winds.push([(event_1.t - seconds), event_1.t]);
        }
        var result = [];
        var _loop_1 = function (wind) {
            var _b;
            var eventsInWin = events.filter(function (event) { return event.t >= wind[0] && event.t <= wind[1]; });
            var counts = eventsInWin.reduce(function (acc, eventInWin) {
                if (!acc[eventInWin.user]) {
                    acc[eventInWin.user] = 1;
                }
                else {
                    acc[eventInWin.user] = acc[eventInWin.user] + 1;
                }
                return acc;
            }, {});
            result.push((_b = {}, _b[wind[1]] = counts, _b));
        };
        for (var _a = 0, winds_1 = winds; _a < winds_1.length; _a++) {
            var wind = winds_1[_a];
            _loop_1(wind);
        }
        return result;
    }
    var events = [
        { t: 1, user: "A" },
        { t: 3, user: "A" },
        { t: 7, user: "B" },
        { t: 8, user: "A" }
    ];
    console.log(numEvents(events, 5));
})();
