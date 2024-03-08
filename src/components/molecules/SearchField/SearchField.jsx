import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import Back from '@/components/atoms/back/back';

function SearchField() {
  return (
    <div className="flex gap-3 px-4 py-3">
      <Back />
      <SearchBar />
    </div>
  );
}

export default SearchField;
