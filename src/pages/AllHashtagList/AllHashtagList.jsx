import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

function CategoryHashtagList({ title, category }) {
  return (
    <>
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-wrap justify-start gap-2">
        {category?.map((item) => (
          <li key={item.id}>
            <Hashtag
              icon={item.icon}
              keyword={item.keyword}
              id={item.id}
              click
            />
          </li>
        ))}
      </ul>
    </>
  );
}

function AllHashtagList() {
  const [tag, setTag] = useState({});

  const fetchList = (category) => {
    // 캐시에서 가져오기
    const cachedTags = JSON.parse(sessionStorage.getItem('allTags'));
    return cachedTags.filter((tag) => tag.category === category);
  };

  useEffect(() => {
    const hastag = async () => {
      const allTags = await pb.collection('hashtag').getFullList();

      // 캐시에 저장
      sessionStorage.setItem('allTags', JSON.stringify(allTags));

      const atmosphere = fetchList('분위기');
      const foodPrice = fetchList('음식/가격');
      const facilities = fetchList('편의시설/기타');
      setTag({
        foodPrice,
        atmosphere,
        facilities,
      });
    };
    hastag();
  }, []);
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col gap-8 rounded-xl px-3">
        <CategoryHashtagList title="음식/가격" category={tag.foodPrice} />
        <CategoryHashtagList title="분위기" category={tag.atmosphere} />
        <CategoryHashtagList title="편의시설/기타" category={tag.facilities} />
        <h3 className="font-semibold">키워드 없음</h3>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Hashtag keyword="선택할 키워드가 없어요" click />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AllHashtagList;
