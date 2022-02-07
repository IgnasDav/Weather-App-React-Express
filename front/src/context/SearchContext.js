import { createContext, useState } from "react";
const SEARCH_KEY = "search/value";
const DEFAULT_SEARCH = localStorage.getItem(SEARCH_KEY) || "";
const DEFAULT_SEARCH_ERROR = null;

const SearchContext = createContext({
  search: DEFAULT_SEARCH,
  searchError: DEFAULT_SEARCH_ERROR,
  setSearch: () => {
    throw new Error(
      "You are trying to use search functionality outside SearchProvider "
    );
  },
  setSearchError: () => {
    throw new Error(
      "You are trying to use search functionality outside SearchProvider "
    );
  },
});

const SearchProvider = ({ children }) => {
  const re = /^[a-zA-Z\s]{0,30}$/;
  const [search, setSearch] = useState(DEFAULT_SEARCH);
  const [searchError, setSearchError] = useState(DEFAULT_SEARCH_ERROR);

  const setSearchWithValidation = (value) => {
    if (!re.exec(value)) setSearchError(true);
    else {
      setSearchError(false);
      setSearch(value);
    }
  };
  // If we need to search query to persist after reloading
  //   useEffect(() => {
  //     localStorage.setItem(SEARCH_KEY, search);
  //   }, [search]);

  return (
    <SearchContext.Provider
      value={{
        setSearch: setSearchWithValidation,
        searchError,
        search,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
export { SearchProvider };
