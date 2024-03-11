import SelectRegion from './../SelectRegion/SelectRegion';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <>
      <div className="flex items-center justify-between px-5 pt-5">
        <Link to="/region">
          <img src="/images/main/header/mapLogo.svg" alt="지도로 이동" />
        </Link>

        <Link to="/">
          <img src="/images/main/header/mainLogo.svg" alt="메인 로고" />
        </Link>

        <button type="button">
          <img src="/images/main/header/searchIcon.svg" alt="검색창으로 이동" />
        </button>
      </div>
      <SelectRegion />
    </>
  );
}

export default MainHeader;
