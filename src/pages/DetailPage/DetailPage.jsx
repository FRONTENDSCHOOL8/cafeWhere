import { useEffect } from 'react';
import pb, { pbImg } from '@/utils/pocketbase';
import Wish from '@/components/atoms/Wish/Wish';

import { useParams } from 'react-router-dom';
import { HeaderBar } from '@/components/atoms';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import CafeInfoTab from '@/components/atoms/CafeInfoTab/CafeInfoTab';
import {
  useActiveTabStore,
  useCafeListStore,
  useCafeStore,
  useRegionStore,
} from '@/store';
import DetailInfo from './DetailInfo';
import DetailReview from './DetailReview';
import CategoryListName from '@/components/SwiperCafeList/CategoryListName';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import HashtagCard from '@/components/organisms/DetailReviewList/HashtagCard';

function DetailPage() {
  const { region } = useRegionStore();
  const { cafe, setCafe } = useCafeStore();
  const { cafeList } = useCafeListStore();
  const { activeTab } = useActiveTabStore();
  const params = useParams();

  const { kakao } = window;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await pb.collection('cafe').getOne(params.id, {
          expand: 'hashtag',
        });
        setCafe({ ...response });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    kakao.maps.load(() => {
      const places = new kakao.maps.services.Places();

      const callback = (result, status) => {
        if (status === kakao.maps.services.Status.OK && result) {
          const staticMapContainer = document.getElementById('staticMap');
          const staticMapOption = {
            center: new kakao.maps.LatLng(result[0].y, result[0].x),
            level: 3,
            marker: {
              position: new kakao.maps.LatLng(result[0].y, result[0].x),
            },
          };
          new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
        }
      };
      places.keywordSearch(cafe?.cafeName, callback);
    });
  }, [cafe, activeTab]);

  if (!cafe) {
    return <div>Loading...</div>;
  }
  const imageURL = pbImg(cafe?.collectionId, cafe?.id, cafe?.mainImage);

  return (
    <div className="h-full pb-12">
      <HeaderBar showHomeBtn />

      <div key={cafe.id} className="mx-auto w-full">
        <img
          src={imageURL}
          alt={cafe?.cafeName}
          className="max-h-360pxr w-full"
        />
        <>
          <div className="flex items-start justify-between p-5">
            <div>
              <h2 className="mb-2 text-xl font-semibold">{cafe.cafeName}</h2>
              <p className="mb-4 text-xs text-greyscale-70">
                {cafe.description}
              </p>
              <p className="mb-4 text-sm">
                평점: <span>{cafe.score.toFixed(1)}</span> 리뷰 (
                {cafe.reviewQuantity})
              </p>
              <div>
                {cafe.expand
                  ? cafe.expand.hashtag.map((item) => (
                      <Hashtag icon={item.icon} keyword={item.keyword} />
                    ))
                  : ''}
              </div>
            </div>
            <Wish customSize="w-12 h-12" />
          </div>

          <CafeInfoTab />
          {activeTab === 'info' ? <DetailInfo /> : <DetailReview />}

          <div className="mt-12">
            <CategoryListName>{region} 카페 추천</CategoryListName>
            <SwiperCafeList data={cafeList} />
          </div>
        </>
      </div>
    </div>
  );
}

export default DetailPage;
