import { HeaderBar, TabBar } from '@/components/atoms';
import NoResult from '@/components/atoms/NoResult/NoResult';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useLoaderData } from 'react-router-dom';

export const fetchSearch = async ({ params }) => {
  const { keyword } = params;

  let data;

  if (keyword) {
    data = await pb.collection('cafe').getList(1, 10, {
      filter: `cafeName~"${keyword}"`,
      expand: ['hashtag', 'review'],
    });
  } else {
    data = await pb.collection('cafe').getList(1, 10, {});
  }

  return data;
};

function SearchResultPage() {
  const loadedData = useLoaderData();

  const totalResults = loadedData.items.length;
  return (
    <div className="flex h-svh flex-col">
      <HeaderBar name="카페 검색하기" />
      <SearchBar />
      <div className="px-5 py-4">
        총 <strong>{totalResults}</strong>건이 검색되었습니다.
      </div>
      {loadedData.items.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3">
          {loadedData.items.map((item) => (
            <CafeListItem key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <NoResult />
      )}
      <TabBar />
    </div>
  );
}

export default SearchResultPage;
