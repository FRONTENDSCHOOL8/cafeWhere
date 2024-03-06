import React, { useEffect, useState } from 'react';
import pb, { pbImg } from '@/utils/pocketbase';
import Wish from '@/components/atoms/Wish/Wish';
import clock from '/images/detail/clock.svg';
import phone from '/images/detail/phone.svg';
import location from '/images/detail/location.svg';
import { useParams } from 'react-router-dom';
import { HeaderBar } from '@/components/atoms';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import CafeInfoTab from '@/components/atoms/CafeInfoTab/CafeInfoTab';

function DetailPage() {
  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await pb.collection('cafe').getOne(params.id);
        setData({ ...response });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

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

      places.keywordSearch(data?.cafeName, callback);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const imageURL = pbImg(data?.collectionId, data?.id, data?.mainImage);
  const info = data.facilityInformation.split(', ');

  return (
    <>
      <HeaderBar showHomeBtn />

      <div key={data.id} className="mx-auto w-full">
        <img
          src={imageURL}
          alt={data?.cafeName}
          className="max-h-480pxr w-full"
        />
        <>
          <div className="flex items-start justify-between p-5">
            <div>
              <h2 className="mb-2 text-xl font-semibold">{data.cafeName}</h2>
              <p className="mb-4 text-xs text-greyscale-70">
                {data.description}
              </p>
              <p className="mb-4 text-sm">
                평점: <span>{data.score.toFixed(1)}</span> 리뷰 (
                {data.reviewQuantity})
              </p>
              <div className="h-">
                <Hashtag icon={'☕'} keyword={'커피가 맛있어요'} />
              </div>
            </div>
            <Wish customSize="w-12 h-12" />
          </div>

          <CafeInfoTab />

          <div className="p-5">
            <>
              <h3 className="mb-3 text-lg font-semibold">기본 정보</h3>
              <div className="mb-3 flex flex-col gap-3 pl-2">
                <div className="flex items-start gap-3">
                  <img src={clock} alt="영업시간 안내" className="mt-1.5" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data?.businessHours,
                    }}
                  />
                </div>
                <div className="flex gap-3">
                  <img src={phone} alt="연락처" />
                  <span>{data.storePhoneNumber}</span>
                </div>
                <div className="flex gap-3">
                  <img src={location} alt="장소" />
                  <span>{data.address}</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">시설정보</h3>
                  <div className="flex flex-wrap gap-2">
                    {info.map((infoItem) => (
                      <span className="rounded-xl border bg-white px-2 py-1 text-center text-xs">
                        {infoItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>

            <div className="mt-5">
              <h3 className="mb-3 text-lg font-semibold">찾아가는 길</h3>
              <div id="staticMap" className="h-300pxr w-full"></div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default DetailPage;
