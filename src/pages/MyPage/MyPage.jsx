import { HeaderBar, TabBar } from '@/components/atoms';
import { useUserDataStore } from '@/store/useLoginStore';
import { useNavigate } from 'react-router-dom';
import SelectLoginPage from '../SelectLoginPage/SelectLoginPage';
import { useTabStore } from '@/store';
import { useEffect } from 'react';

function PageSection({ title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4"
    >
      <span>{title}</span>
      <img src="/images/main/swiper/rightArrow.svg" alt={`${title}으로 이동`} />
    </div>
  );
}

function MyPage() {
  const loginCheck = sessionStorage.getItem('token');
  const navigate = useNavigate();
  const { setActiveTab } = useTabStore();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    navigate('/');
  };

  // const userDataState = JSON.parse(
  //   localStorage.getItem('pocketbase_auth')
  // ).model;

  const { userDataState } = useUserDataStore();

  useEffect(() => {
    setActiveTab('myicon');
  }, []);
  return (
    <div className="pb-32">
      {loginCheck ? (
        <div className="mx-auto">
          <HeaderBar name={'프로필'} showHomeBtn={true} />
          <img
            src="/images/mypageicon.svg"
            alt="마이페이지 이미지"
            className="mx-auto mt-24 rounded-[50%]"
          />

          <div className="mt-8 text-center text-20pxr font-bold">
            {userDataState.nickname}
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <div>리뷰 17</div>
            <div className="h-7 w-1pxr bg-[#d9d9d9]"></div>
            <div>찜목록 19</div>
          </div>

          <div className="mt-24 flex flex-col">
            <PageSection title="내 계정" />
            <PageSection title="비밀번호 변경" />
            <PageSection title="공지사항" />
            <PageSection title="설정" />
            <PageSection title="로그아웃" onClick={handleLogout} />
          </div>
          <TabBar />
        </div>
      ) : (
        <SelectLoginPage />
      )}
    </div>
  );
}
export default MyPage;
