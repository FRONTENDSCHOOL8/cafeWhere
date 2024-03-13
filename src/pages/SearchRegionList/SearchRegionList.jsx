import { HeaderBar } from '@/components/atoms';
import SelectRegion from '@/components/atoms/SelectRegion/SelectRegion';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useCafeListStore, useRegionStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';

function SearchRegionList() {
  const { region } = useRegionStore();
  const { setCafeList } = useCafeListStore();
  const cafeList = JSON.parse(sessionStorage.getItem('cafeList'));
  const { kakao } = window;

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await pb.collection('cafe').getList(1, 50, {
        filter: `address~'${region}'`,
        sort: '-created',
      });

      setCafeList(resultList.items);
      sessionStorage.setItem('cafeList', JSON.stringify(resultList.items));
    };
    fetchData();

    const mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(`${region} 카페`, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
  }, [region]);

  return (
    <>
      <HeaderBar name={<SelectRegion />} showHomeBtn />

      <div id="map" className="mb-3 mt-[-12px] h-237pxr w-full"></div>

      <div className="flex flex-col gap-3">
        {cafeList?.map((data) => (
          <CafeListItem key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default SearchRegionList;
