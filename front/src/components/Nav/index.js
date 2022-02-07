//Styles
import { useState } from "react";
import { Link } from "react-router-dom";
import { Content, Wrapper, NameText, DateText } from "./Nav.styles";

const Nav = () => {
  const [date, setDate] = useState(new Date());
  const dateString = date
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
  return (
    <Wrapper>
      <Content>
        <Link to={"/"}>
          <NameText>Weather Forecast</NameText>
        </Link>
        <DateText>{formattedDate}</DateText>
      </Content>
    </Wrapper>
  );
};
export default Nav;
