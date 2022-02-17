import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
//Components
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import { GlobalStyle } from "./GlobalStyles";
import Nav from "./components/Nav";
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
    <Provider store={store}>
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
    </Provider>
  );
};
export default App;
