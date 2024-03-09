import { HeaderBar, TabBar } from '@/components/atoms';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useHashtagStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useState } from 'react';
import { AllHashtagList } from '..';

function HashSearchPage() {
  const { hashtag } = useHashtagStore();
  const [searchHashtag, setSearchHashtag] = useState({ items: [] });
  const handleSubmitHashtag = (e) => {
    e.preventDefault();

    if (hashtag.length === 0) {
      alert('선택된 해시태그가 없습니다.');
      return;
    }
    fetchData();
  };

  const fetchData = async () => {
    let filterQuery = hashtag?.map((tag) => `hashtag~'${tag}'`).join(' && ');
    const resultList = await pb.collection('cafe').getList(1, 50, {
      filter: filterQuery,
    });

    setSearchHashtag(resultList);
  };

  return (
    <>
      <HeaderBar name="해시태그 검색" />
      <SearchBar />
      <AllHashtagList />
      <form onSubmit={handleSubmitHashtag}>
        <LoginButton>해시태그 검색</LoginButton>
      </form>

      {searchHashtag.items.length > 0
        ? searchHashtag.items.map((item) => <CafeListItem data={item} />)
        : '없음'}
      <TabBar />
    </>
  );
}

export default HashSearchPage;
