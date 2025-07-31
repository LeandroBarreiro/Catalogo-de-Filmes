import { useState } from "react";

const [search, setSearch] = useState("");

function SearchBar(props) {
  return (
    <div className="flex justify-center items-center">
      <input
        className=" border-2 border-gray-300 p-2 mt-20 rounded-2xl hover:border-red-600 transition-all duration-300"
        type="search"
        placeholder="Buscar Filme"
      />
    </div>
  );
}

export default SearchBar;
