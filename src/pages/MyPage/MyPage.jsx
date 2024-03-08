import { HeaderBar, TabBar } from '@/components/atoms';
import { useNavigate } from 'react-router-dom';
import SelectLoginPage from '../SelectLoginPage/SelectLoginPage';
import { useUserDataStore, useUserIdStore } from '@/store/useLoginStore';
import pb from '@/utils/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

/* 나중에 컴포넌트분리용 */
// function PageSection({ title }) {
//   return (
//     <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
//       <span>{title}</span>
//       <img src="/images/main/swiper/rightArrow.svg" alt={`${title}으로 이동`} />
//     </div>
//   );
// }

function MyPage() {
  const [userData, setUserData] = useState({});
  const loginCheck = sessionStorage.getItem('token');

  const navigate = useNavigate();

  const test = 'qllgr0lfq2fxadq';

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    navigate('/');
  };

  const { UserId } = useUserIdStore();

  const { userDataState } = useUserDataStore();

  const productReview = useLoaderData();

  // const handleUserId = async () => {
  //   pb.collection('users')
  //     .getOne(UserId)
  //     .then((viewId) => {
  //       console.log('현재 정보', viewId.username);
  //       setUserData(viewId);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleCheck = async () => {
    // const records = await pb.collection('review').getList(1, 2, {
    //   sort: '-created',
    // });

    const records = await pb.collection('review').getList(1, 4, {
      sort: '-created',
      filter: `email="${UserId}"`,
    });

    // const records = await pb.collection('review').getOne('aoeeyehl39p9nwi');

    console.log('이건 db에서 가져온것', records);
    // console.log('loader', productReview);

    console.log('이건 loader로 가져온 것 ', productReview.items);
    // console.log(userDataState);
    console.log('이건 유저 id', UserId);
  };

  return (
    <div>
      {loginCheck ? (
        <div className="h-screen">
          <div className=" mx-auto h-full min-w-375pxr max-w-680pxr">
            <HeaderBar name={'프로필'} showHomeBtn={true} />
            <img
              src="/images/mypageicon.svg"
              alt="마이페이지 이미지"
              className="mx-auto mt-24 rounded-[50%]"
            />

            <div className="mt-8 text-center text-20pxr font-bold">
              {userDataState.username}
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <div>리뷰 17</div>
              <div className="h-7 w-1pxr bg-[#d9d9d9]"></div>
              <div>찜목록 19</div>
              <div className="h-7 w-1pxr bg-[#d9d9d9]"></div>
              <div>쿠폰 0</div>
            </div>

            <div className="mt-24 flex flex-col">
              {/* <PageSection title="내 계정" />
              <PageSection title="비밀번호 변경" />
              <PageSection title="리뷰관리" />
              <PageSection title="찜 목록" />
              <PageSection title="공지사항" /> */}

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>내 계정</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="내 계정으로 이동"
                />
              </div>
              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>비밀번호 변경</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="비밀번호 변경으로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>리뷰관리</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="리뷰관리로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>찜 목록</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="찜 목록으로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>공지사항</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="공지사항으로 이동"
                />
              </div>

              <div
                className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4"
                onClick={handleCheck}
              >
                <span>설정</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="설정으로 이동"
                />
              </div>
              <div
                className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4"
                onClick={handleLogout}
              >
                <span>로그아웃</span>
                <img src="/images/main/swiper/rightArrow.svg" alt="로그아웃" />
              </div>
            </div>
            <TabBar />
          </div>
        </div>
      ) : (
        <SelectLoginPage />
      )}
    </div>
  );
}

export default MyPage;

// 비동기 호출 get
// export async function loader() {
//   return await pb.collection('review').getList(1, 4, {
//     sort: '-created',
//     // filter: `email="${UserId}"`,
//   });
// }
