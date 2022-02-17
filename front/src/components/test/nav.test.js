import { screen, render } from "@testing-library/react";
import App from "../../App";
const dateString = new Date()
  .toLocaleDateString("en-LT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
  .split(" ");
let dayNumber = dateString[2];
if (dayNumber == 1) dayNumber += "st";
if (dayNumber == 2) dayNumber += "nd";
if (dayNumber == 3) dayNumber += "rd";
if (dayNumber > 3) dayNumber += "th";
const formattedDate = `${dateString[0]} ${dateString[1]} ${dayNumber}`;
test("It should display correct date for the Nav", () => {
  render(<App />);
  expect(screen.getByText(formattedDate)).toBeTruthy();
});
