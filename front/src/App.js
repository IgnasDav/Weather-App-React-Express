import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
//Components
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import { GlobalStyle } from "./GlobalStyles";
import { SearchProvider } from "./context/SearchContext";
import { ForecastProvider } from "./context/ForecastsContext";
import { SingleCityForecastProvider } from "./context/SingleCityForecastContext";
import Nav from "./components/Nav";
import { LocationProvider } from "./context/LocationContext";
import NotFound from "./Pages/NotFound";
export const LocationDisplay = () => {
  const location = useLocation();
  return (
    <div datee-tesid="location-display" className="d-none">
      {location.pathname}
    </div>
  );
};
const App = () => {
  return (
    <>
      <SearchProvider>
        <ForecastProvider>
          <LocationProvider>
            <SingleCityForecastProvider>
              <Router>
                <Nav />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/forecast/:id" element={<Forecast />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <GlobalStyle />
                <LocationDisplay />
              </Router>
            </SingleCityForecastProvider>
          </LocationProvider>
        </ForecastProvider>
      </SearchProvider>
    </>
  );
};
export default App;
