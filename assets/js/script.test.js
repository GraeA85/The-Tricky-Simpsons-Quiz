/**
 * @jest-environment jsdom
 */

const {beginGame, incrementCorrectAnswer, incrementWrongAnswer} = require("./script");

describe("Game"), () => {


    
     describe("Correct score increments when correct answer chosen", () => {
    test.only("Should increase the players score by 1", () => {
        expect(incrementCorrectAnswer).toBe(+1);
    })
});

describe("Incorrect score increments when incorrect answer chosen", () => {
    test("Should increase the players score by 1", () => {
        expect(incrementWrongAnswer).toBe(+1);
    });

});
}