(function () {
    var teams = [
        {
            email: 'a@abc.com',
            time: 10.6
        },
        {
            email: 'a@abc.com',
            time: 14.5
        },
        {
            email: 'a@abc.com',
            time: 56.75
        },
        {
            email: 'a@abc.com',
            time: 30.21
        },
        {
            email: 'b@abc.com',
            time: 12.44
        },
        {
            email: 'b@abc.com',
            time: 24.61
        },
        {
            email: 'b@abc.com',
            time: 33.31
        },
    ];
    /**
     * [
     * {'a':12312}.
     * ]
     */
    function calculateAveragePerTeam() {
        var teamSum = teams.reduce(function (accumulator, team) {
            if (!accumulator[team.email]) {
                accumulator[team.email] = { time: 0, numOfReplies: 1 };
                return accumulator;
            }
            accumulator[team.email].time = accumulator[team.email].time + team.time;
            accumulator[team.email].numOfReplies = accumulator[team.email].numOfReplies + 1;
            return accumulator;
        }, {});
        var result = {};
        for (var group in teamSum) {
            var _a = teamSum[group], time = _a.time, numOfReplies = _a.numOfReplies;
            result[group] = Number((time / numOfReplies).toFixed(2));
        }
        return result;
    }
    console.log(calculateAveragePerTeam());
})();
