import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import Back from '@/components/atoms/Back/Back';

function SearchField({ onSearch }) {
  return (
    <div className="flex px-4 py-3">
      <Back />
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default SearchField;
