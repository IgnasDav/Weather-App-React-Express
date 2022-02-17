import { useDispatch, useSelector } from "react-redux";
import content from "../../content";
//Styles
import { Wrapper } from "./Search.styles";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => content.selectors.selectSearch(state));
  const searchError = useSelector((state) =>
    content.selectors.selectSearchError(state)
  );
  const setSearchValue = (e) => {
    dispatch(content.actions.setSearch(e.target.value));
  };

  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label className="search">
            <span className="flicker">Search</span> Cities{" "}
            <span className="fast-flicker">Forecast</span>:
          </label>
          <input
            type="search"
            placeholder="Search Location"
            required
            maxLength="30"
            onChange={setSearchValue}
            value={search || ""}
            name="Search Bar"
            aria-label="search-input"
          />
          {searchError && <h2>Invalid Input Field Value</h2>}
        </div>
      </form>
    </Wrapper>
  );
};

export default Search;
