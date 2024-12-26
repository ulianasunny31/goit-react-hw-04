 import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <header>
          <form>
    <button type="submit"><FaSearch /></button>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    
  </form>
</header>

  )
}

export default SearchBar