/**
 * @jest-environment jsdom
 */

let beginGame;

  beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("game.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();


     beginGame = require("./script")
      });

      describe("game object contains correct keys", () => {
        test("correct answer key exists", () => {
            expect("incrementCorrectAnswer" in beginGame).toBe(true);
        });
        test("game object contains correct keys", () => {
          expect("incrementWrongAnswer" in beginGame).toBe(true);
        });
        test("shuffle function exists", () => {
          expect("shuffle" in beginGame).toBe(true);
        });
        test("showQuestion function exists", () => {
          expect("showQuestion" in beginGame).toBe(true);
        });
        test("listeners exist", () => {
          expect("initEventListeners" in beginGame).toBe(true);
        });
        test("Reset question after next button clicked", () => {
          expect("resetOptionStyle" in beginGame).toBe(true);
        });
        test("Disables another answer choice after first answer chosen", () => {
          expect("disableOptions" in beginGame).toBe(true);
        });
        });

      describe("beginGame works correctly", () => {
        beforeAll(() => {
          beginGame.incrementCorrectAnswer = 0;
          beginGame.incrementWrongAnswer = 0;
          document.getElementById("correct_answers").innerText = 0
          document.getElementById("incorrect_answers").innerText = 0
        });
        test("Correct answer score should be 0", () => {
          expect(beginGame.incrementCorrectAnswer).toEqual(0);
        });
        test("Incorrect answer score should be 0", () => {
          expect(beginGame.incrementWrongAnswer).toEqual(0);
        });
          test("should display 0 for the element with id of correct answers", () => {
            expect(document.getElementById("correct_answers").innerText).toEqual(0);
         });
         test("should display 0 for the element with id of incorrect answers", () => {
          expect(document.getElementById("incorrect_answers").innerText).toEqual(0);
         });
      });

    