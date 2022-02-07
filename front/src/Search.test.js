import { fireEvent, render, getByLabelText } from "@testing-library/react";
import { useState } from "react";
//Component
const Search = () => {
  const [search, setSearch] = useState("");
  const setSearchValue = (e) => {
    const re = /^[a-zA-Z\s]{0,30}$/;
    if (re.exec(e.target.value)) {
      setSearch(e.target.value);
    }
  };
  return (
    <>
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
            placeholder="Search Loaction"
            required
            maxLength="30"
            onChange={setSearchValue}
            value={search || ""}
            name="Search Bar"
            aria-label="search-input"
          />
        </div>
      </form>
    </>
  );
};
const setup = () => {
  const utils = render(<Search />);
  const input = utils.getByLabelText("search-input");
  return {
    input,
    ...utils,
  };
};
test("It should not allow numbers and other symbols", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "123'][" } });
  expect(input.value).toBe("");
});
test("Search input shows string value", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "London" } });
  expect(input.value).toBe("London");
});
test("on initial render, the search is empty", () => {
  const { input } = setup();
  expect(input.value).toBe("");
});
