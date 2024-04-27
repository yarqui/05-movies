import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchButton from "../SearchButton/SearchButton";

const Form = () => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.search.value.trim().toLowerCase();

    e.target.search.blur();

    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const val = searchParams.get("query");

    val && setValue(val);
  }, [searchParams]);

  return (
    <form className="my-5 flex justify-center" onSubmit={handleSubmit}>
      <div className="relative inline">
        <input
          type="text"
          name="search"
          value={value}
          onChange={handleChange}
          className="ml-auto mr-auto block w-72 rounded-full border-2 border-gray-200 bg-white py-4 pe-10 ps-4 text-center text-sm transition-colors placeholder:text-sm placeholder:font-light placeholder:text-gray-400 hover:border-gray-300 focus:border-gray-400 focus:outline-none"
          placeholder="Please, enter a movie name"
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default Form;
