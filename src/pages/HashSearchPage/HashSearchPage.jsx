import { HeaderBar, TabBar } from '@/components/atoms';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import { useHashtagStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllHashtagList } from '..';

function HashSearchPage() {
  const navigate = useNavigate();
  const { hashtag, setHashtag } = useHashtagStore();
  const { setSearchHashtag } = useHashtagStore();
  const handleSubmitHashtag = (e) => {
    e.preventDefault();

    if (hashtag.length === 0) {
      alert('선택된 해시태그가 없습니다.');
      return;
    }
    fetchData();
    navigate('/hash');
  };

  useEffect(() => {
    setHashtag([]);
    setSearchHashtag({ items: [] });
  }, []);

  const fetchData = async () => {
    let filterQuery = hashtag?.map((tag) => `hashtag~'${tag}'`).join(' && ');
    const resultList = await pb.collection('cafe').getList(1, 50, {
      filter: filterQuery,
      expand: 'hashtag',
    });

    setSearchHashtag(resultList);
  };

  return (
    <div className="h-full">
      <div className="pb-32">
        <HeaderBar name="해시태그 검색" />
        <SearchBar />
        <AllHashtagList />
        <form onSubmit={handleSubmitHashtag}>
          <LoginButton>해시태그 검색</LoginButton>
        </form>
      </div>

      <TabBar />
    </div>
  );
}

export default HashSearchPage;
