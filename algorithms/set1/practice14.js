"use strict";
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
(() => {
    function numEvents(events, seconds) {
        const winds = [];
        for (const event of events) {
            winds.push([(event.t - seconds), event.t]);
        }
        const result = [];
        for (const wind of winds) {
            const eventsInWin = events.filter(event => event.t >= wind[0] && event.t <= wind[1]);
            const counts = eventsInWin.reduce((acc, eventInWin) => {
                if (!acc[eventInWin.user]) {
                    acc[eventInWin.user] = 1;
                }
                else {
                    acc[eventInWin.user] = acc[eventInWin.user] + 1;
                }
                return acc;
            }, {});
            result.push({ [wind[1]]: counts });
        }
        return result;
    }
    const events = [
        { t: 1, user: "A" },
        { t: 3, user: "A" },
        { t: 7, user: "B" },
        { t: 8, user: "A" }
    ];
    console.log(numEvents(events, 5));
})();
