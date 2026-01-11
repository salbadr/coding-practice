/**
 *
 * Q14:
 You are given logs:
[
  { timestamp: 1000, user: "A" },
  { timestamp: 1030, user: "B" },
  { timestamp: 1060, user: "A" }
]

Return number of events per minute bucket:
Minute = timestamp // 60
Output:
{
  16: { A: 1 },
  17: { B: 1, A: 1 }
}

(1000→16, 1030→17, etc.)

 */
(function () {
    var logs = [
        { timestamp: 1000, user: "A" },
        { timestamp: 1030, user: "B" },
        { timestamp: 1030, user: "A" },
        { timestamp: 1060, user: "A" }
    ];
    function numEventsPerBucket(logs) {
        return logs.reduce(function (acc, event) {
            var _a;
            var minute = Math.floor(event.timestamp / 60);
            if (!acc[minute]) {
                acc[minute] = (_a = {}, _a[event.user] = 1, _a);
            }
            else if (!acc[minute][event.user]) {
                acc[minute][event.user] = 1;
            }
            else if (acc[minute][event.user]) {
                acc[minute][event.user] = acc[minute][event.user] + 1;
            }
            return acc;
        }, {});
    }
    console.log(numEventsPerBucket(logs));
})();
