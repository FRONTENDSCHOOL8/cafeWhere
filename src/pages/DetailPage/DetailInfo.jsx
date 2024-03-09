import { useCafeStore } from '@/store';
import clock from '/images/detail/clock.svg';
import phone from '/images/detail/phone.svg';
import location from '/images/detail/location.svg';
function DetailInfo() {
  const { cafe } = useCafeStore();

  const info = cafe.facilityInformation.split(', ');

  return (
    <div className="p-5">
      <>
        <h3 className="mb-3 text-lg font-semibold">기본 정보</h3>
        <div className="mb-3 flex flex-col gap-3 pl-2">
          <div className="flex items-start gap-3">
            <img src={clock} alt="영업시간 안내" className="mt-1.5" />
            <span
              dangerouslySetInnerHTML={{
                __html: cafe?.businessHours,
              }}
            />
          </div>
          <div className="flex gap-3">
            <img src={phone} alt="연락처" />
            <span>{cafe.storePhoneNumber}</span>
          </div>
          <div className="flex gap-3">
            <img src={location} alt="장소" />
            <span>{cafe.address}</span>
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
  );
}

export default DetailInfo;
