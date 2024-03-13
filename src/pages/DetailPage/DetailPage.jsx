import Wish from '@/components/atoms/Wish/Wish';
import pb, { pbImg } from '@/utils/pocketbase';
import { useEffect } from 'react';

import CategoryListName from '@/components/SwiperCafeList/CategoryListName';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import { HeaderBar } from '@/components/atoms';
import CafeInfoTab from '@/components/atoms/CafeInfoTab/CafeInfoTab';
import CafeReviewInfo from '@/components/atoms/CafeReviewInfo/CafeReviewInfo';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import ReviewButton from '@/components/atoms/ReviewButton/ReviewButton';
import { useActiveTabStore, useCafeStore, useRegionStore } from '@/store';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import DetailReview from './DetailReview';

function DetailPage() {
  const { region } = useRegionStore();
  const { cafe, setCafe } = useCafeStore();
  const { activeTab } = useActiveTabStore();
  const params = useParams();
  const cafeList = JSON.parse(sessionStorage.getItem('cafeList'));

  const { kakao } = window;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await pb.collection('cafe').getOne(params.id, {
          expand: 'hashtag',
        });
        setCafe(response);
        sessionStorage.setItem('cafe', JSON.stringify(response));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cafe?.cafeName) {
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
    }
  }, [cafe?.cafeName, activeTab]);

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
        <div className="w-full">
          <div className="flex items-start justify-between p-5">
            <div>
              <h2 className="mb-2 text-xl font-semibold">{cafe.cafeName}</h2>
              <p className="mb-4 text-xs text-greyscale-70">
                {cafe.description}
              </p>
              <CafeReviewInfo data={cafe} />
              <div>
                {cafe.expand
                  ? cafe.expand.hashtag.map((item) => (
                      <Hashtag
                        key={item.id}
                        icon={item.icon}
                        keyword={item.keyword}
                      />
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
          {activeTab === 'review' && cafe.reviewQuantity > 0 ? (
            <ReviewButton />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
