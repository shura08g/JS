// npm install --global mocha
//PS D:\Programming\JavaScript> mocha --watch '.\Sum(1)(2)(3)_TDD.js'

var assert = require('assert');

// variant 1
/* function sum(a) {
    console.log(a);
    return (n) => {
        console.log(a + n);
        return (nn) => console.log(a + n + nn);
    }
} */

// variant 2
/*function sum(a) {
    console.log(a);
    return (n) => {
        sum(a + n);
        //return (nn) =>  sum(a + n + nn);
        return (nn) =>  { sum(a + n + nn); }
    }
}*/

// variant 3
/*function sum(a) {
    console.log(a);
    return (n) => {
        return sum(a + n);
    }
}*/

// variant 4
function sum(a) {
    a = parseInt(a) || 0;
    console.log(a);
    return (n) =>  sum(a + n);
}

// Tests

let history = [];
const old_console = console.log;

describe("test sum function", () => {
    before(() => {
        console.log = (...args) => { history.push(args); old_console.apply(this, args); }
    });

    afterEach(() => {
        history = [];
    });

    it("sum(1) // 1", () => {
        sum(1);
        assert.strictEqual(history[0][0], 1);
    });

    it("sum(1)(2) // 1 3", () => {
        sum(1)(2);
        assert.strictEqual(history[0][0], 1);
        assert.strictEqual(history[1][0], 3);
    });

    it("sum(1)(2)(3) // 1 3 6", () => {
        sum(1)(2)(3);
        assert.strictEqual(history[0][0], 1);
        assert.strictEqual(history[1][0], 3);
        assert.strictEqual(history[2][0], 6);
    });

    it("sum(1)(2)(3)(4)(5) // 1 3 6 10 15", () => {
        sum(1)(2)(3)(4)(5);
        assert.strictEqual(history[0][0], 1);
        assert.strictEqual(history[1][0], 3);
        assert.strictEqual(history[2][0], 6);
        assert.strictEqual(history[3][0], 10);
        assert.strictEqual(history[4][0], 15);
    });

    it("sum() // 0", () => {
        sum();
        assert.strictEqual(history[0][0], 0);
    });

    it("sum([]) // 0", () => {
        sum([]);
        assert.strictEqual(history[0][0], 0);
    });
});