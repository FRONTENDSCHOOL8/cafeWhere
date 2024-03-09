import { HeaderBar, TabBar } from '@/components/atoms';
import { useUserDataStore, useUserIdStore } from '@/store/useLoginStore';
import { useLoaderData } from 'react-router-dom';
import pb, { pbImg } from '@/utils/pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewInfo from '@/components/atoms/ReviewInfo/ReviewInfo';

function MyReviewPage() {
  const { userDataState } = useUserDataStore();
  const { UserId } = useUserIdStore();

  const [reviewRecord, setReviewRecord] = useState([]);
  const userReviewData = useLoaderData();

  const [test, setTest] = useState([]);
  const handleReview = async () => {
    const records = await pb.collection('review').getList(1, 4, {
      sort: '-created',
      filter: `email="${UserId}"`,
    });

    console.log(userReviewData);
    console.log('UserId는', UserId);
    console.log('Userdata는', userDataState);
    console.log('db는', records.items);

    // const rdata = [{ ...records.items, imgurl: imageURL }];
    // const imageURL = pbImg(
    //   'ofcpmbz8qsj8nh9',
    //   'aoeeyehl39p9nwi',
    //   'kakao_talk_20230110_083752801_86IXwFsbgj.jpg'
    // );
    // const rdata = [{ ...records.items, imgurl: imageURL }];

    // console.log('rdata는', rdata);
    setReviewRecord(records.items);
  };
  const imageURL = pbImg(
    'ofcpmbz8qsj8nh9',
    'aoeeyehl39p9nwi',
    'kakao_talk_20230110_083752801_86IXwFsbgj.jpg'
  );

  useEffect(() => {
    handleReview();
  }, []);

  return (
    <div className="w-full">
      <HeaderBar name={'내가 쓴 리뷰'} />
      <button onClick={handleReview}>test</button>
      {/* <Link to="/myreview?size=123">
        데이터 가져오기(with &apos;?size=123&apos;)
      </Link> */}
      <div className="h-20 w-20">
        <img src={imageURL} alt="이미지 테스트" />
      </div>

      <ul className="flex flex-col gap-4">
        {reviewRecord.map((data, index) => {
          return (
            <li key={data.id} className="flex flex-col gap-2 bg-slate-400">
              <span>카페이름 : {data.cafeName}</span>
              <span>리뷰 정보 : {data.contents}</span>
              <span>점수 : {data.score}</span>

              <span>해시태그 : {data.hashtag}</span>
              <span>업로드 : {data.updated}</span>
              {/* <img
                src={pbImg(data.collectionId, data.id, data.image[0])}
                alt=""
                className="h-70pxr w-70pxr"
              /> */}

              <div className="flex gap-2">
                {data.image.map((img) => (
                  <img
                    className="h-90pxr w-90pxr"
                    src={pbImg(data.collectionId, data.id, img)}
                    alt="" //변경해야됨
                  />
                ))}
              </div>

              <br />
            </li>
          );
        })}
      </ul>
      {/* <ReviewInfo /> */}

      <TabBar />
    </div>
  );
}

export default MyReviewPage;

// 비동기 호출 get
export async function loader() {
  return await pb.collection('review').getList(1, 4, {
    sort: '-created',
  });
}
