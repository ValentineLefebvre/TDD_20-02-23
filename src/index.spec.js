"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore see https://github.com/jest-community/jest-extended#setup
var matchers = require("jest-extended");
expect.extend(matchers);
test("That's a test!", function () {
    expect(1 + 1).toEqual(2);
});
test("jest-extended is included", function () {
    expect([1, 0]).toIncludeSameMembers([0, 1]);
});
