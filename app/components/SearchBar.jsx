import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Search for Designs..."
        className="rounded-lg px-4 text-base h-[30px] bg-slate-100 w-52 outline-none"
      />
      <AiOutlineSearch />
    </div>
  );
};

export default SearchBar;
