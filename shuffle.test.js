/**
 * @jest-environment jsdom
 */

 const {shuffle} = require("./shuffle");

 beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Should shuffle questions", () => {
    test("Should shuffle questions", () => {
        expect(shuffle).toBe();
    });
});


