import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content, BiggerWrapper } from "./Card.styles";

const Card = ({ id, country, city, adminArea, lon, lat, timezone }) => {
  return (
    <BiggerWrapper>
      <Link to={`forecast/${id}`}>
        <Wrapper>
          <Content>
            {country && <p> Country: {country}</p>}
            {city && <p>City: {city}</p>}
            {timezone && <p>Timezone: {timezone}</p>}
            {adminArea && <p>Admin Area: {adminArea}</p>}
            {lon && <p>Lon: {lon}</p>}
            {lat && <p>Lat: {lat}</p>}
          </Content>
        </Wrapper>
      </Link>
    </BiggerWrapper>
  );
};
export default Card;
