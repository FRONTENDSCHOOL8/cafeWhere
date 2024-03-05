import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

function HashtagSearch() {
  const [tag, setTag] = useState({});

  useEffect(() => {
    const hastag = async () => {
      const allTags = await pb.collection('hashtag').getFullList();

      // 캐시에 저장
      localStorage.setItem('allTags', JSON.stringify(allTags));

      // 캐시에서 가져오기
      const cachedTags = JSON.parse(localStorage.getItem('allTags'));
      console.log(cachedTags);
      const atmosphereList = cachedTags.filter(
        (tag) => tag.category === '분위기'
      );
      const foodPriceList = cachedTags.filter(
        (tag) => tag.category === '음식/가격'
      );
      const facilitiesList = cachedTags.filter(
        (tag) => tag.category === '편의시설/기타'
      );
      setTag({
        foodPrice: foodPriceList,
        atmosphere: atmosphereList,
        facilities: facilitiesList,
      });
    };
    hastag();
    console.log(tag);
  }, []);

  return (
    <>
      <div className="px-5 py-3">
        <div className="flex flex-col gap-8 rounded-xl bg-white px-3 py-8">
          <h3 className="font-semibold">음식/가격</h3>
          <ul className="flex flex-wrap justify-start gap-2">
            {tag.foodPrice?.map((item) => (
              <li key={item.keyword}>
                <Hashtag icon={item.icon} keyword={item.keyword} />
              </li>
            ))}
          </ul>
          <h3 className="font-semibold">분위기</h3>
          <ul className="flex flex-wrap gap-2">
            {tag.atmosphere?.map((item) => (
              <li key={item.keyword}>
                <Hashtag icon={item.icon} keyword={item.keyword} />
              </li>
            ))}
          </ul>
          <h3 className="font-semibold">편의시설/기타</h3>
          <ul className="flex flex-wrap gap-2">
            {tag.facilities?.map((item) => (
              <li key={item.keyword}>
                <Hashtag icon={item.icon} keyword={item.keyword} />
              </li>
            ))}
          </ul>
          <h3 className="font-semibold">키워드 없음</h3>
          <ul className="flex flex-wrap gap-2">
            <li>
              <Hashtag keyword="선택할 키워드가 없어요" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HashtagSearch;
