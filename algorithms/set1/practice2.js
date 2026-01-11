/**
 * You are given a function:

async function fetchScore(id: number): Promise<number> {
   // returns a score after random delay
}

Task:

Write:
async function fetchAllScores(ids: number[]): Promise<number>;


That:

Fetches all scores in parallel
Returns the total
Retries each failed call up to 2 times
Never fails — if still failing, treat score as 0

Focus:

Promise.all
retry logic
clean async control
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var studentData = [
    { "id": 1, "name": "Alice", "group": "A", "score": 91 },
    { "id": 2, "name": "Bob", "group": "B", "score": 85 },
    { "id": 3, "name": "Cara", "group": "A", "score": 77 },
    { "id": 4, "name": "Dan", "group": "B", "score": 93 }
];
// returns a score after random delay
function fetchScore(id) {
    return __awaiter(this, void 0, void 0, function () {
        var delay;
        return __generator(this, function (_a) {
            delay = Math.floor(Math.random() * 1000);
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        var student = studentData.find(function (d) { return d.id == id; });
                        if (student) {
                            resolve(student.score);
                        }
                        else {
                            reject(id);
                        }
                    }, delay);
                })];
        });
    });
}
function fetchAllScores(ids) {
    return __awaiter(this, void 0, void 0, function () {
        var results, total, _i, results_1, element, score;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.allSettled(ids.map(function (id) { return fetchScore(id); }))];
                case 1:
                    results = _a.sent();
                    total = 0;
                    _i = 0, results_1 = results;
                    _a.label = 2;
                case 2:
                    if (!(_i < results_1.length)) return [3 /*break*/, 7];
                    element = results_1[_i];
                    score = 0;
                    if (!(element.status === 'rejected')) return [3 /*break*/, 4];
                    return [4 /*yield*/, retry(element.reason)];
                case 3:
                    score = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    if (element.status === 'fulfilled') {
                        score = element.value;
                    }
                    _a.label = 5;
                case 5:
                    total = total + score;
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    ;
                    return [2 /*return*/, total];
            }
        });
    });
}
function retry(id_1) {
    return __awaiter(this, arguments, void 0, function (id, retries) {
        var score, err_1;
        if (retries === void 0) { retries = 0; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    score = 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    if (retries >= 2) {
                        return [2 /*return*/, score];
                    }
                    return [4 /*yield*/, fetchScore(id)];
                case 2:
                    score = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    retries++;
                    return [4 /*yield*/, retry(err_1, retries)];
                case 4:
                    score = _a.sent();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, score];
            }
        });
    });
}
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var success, failures;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchAllScores([1, 2, 3, 4])];
                case 1:
                    success = _a.sent();
                    console.log('The total with successes is', success);
                    return [4 /*yield*/, fetchAllScores([1, 9, 8, 4])];
                case 2:
                    failures = _a.sent();
                    console.log('The total with failures is', failures);
                    return [2 /*return*/];
            }
        });
    });
})();
/***
 * Move retry inside the Promise
 * async function fetchWithRetry(id: number, retries = 2): Promise<number> {
    try {
        return await fetchScore(id);
    } catch {
        if (retries === 0) return 0;
        return fetchWithRetry(id, retries - 1);
    }
}

async function fetchAllScores(ids: number[]): Promise<number> {
    const results = await Promise.all(ids.map(id => fetchWithRetry(id)));

    return results.reduce((sum, score) => sum + score, 0);
}

 */ 
