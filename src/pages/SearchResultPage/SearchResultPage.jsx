import { HeaderBar, TabBar } from '@/components/atoms';
import NoResult from '@/components/atoms/NoResult/NoResult';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useLoaderData } from 'react-router-dom';

export const fetchSearch = async ({ params }) => {
  console.log(params);
  const { keyword } = params;

  let data;

  if (keyword) {
    data = await pb.collection('cafe').getList(1, 10, {
      filter: `cafeName~"${keyword}"`,
    });
  } else {
    data = await pb.collection('cafe').getList(1, 10, {});
  }
  console.log(data);

  return data;
};

function SearchResultPage() {
  const loadedData = useLoaderData();

  console.log(loadedData);

  const totalResults = loadedData.items.length;
  return (
    <div className="flex h-full flex-col">
      <HeaderBar name="카페 검색하기" />
      <SearchBar />
      <span className="flex flex-col px-5 py-4">
        총 {totalResults}건이 검색되었습니다.
      </span>
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
