//Styles
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import { Wrapper } from "./Search.styles";

const Search = () => {
  const { setSearch, searchError, search } = useContext(SearchContext);
  const setSearchValue = (e) => {
    setSearch(e.target.value);
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
