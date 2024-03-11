import { HeaderBar, TabBar } from '@/components/atoms';
import { useUserDataStore, useUserIdStore } from '@/store/useLoginStore';
import { useLoaderData } from 'react-router-dom';
import pb, { pbImg } from '@/utils/pocketbase';
import { useState, useEffect, useRef } from 'react';
import ReviewInfo from '@/components/atoms/ReviewInfo/ReviewInfo';
import CoffeeScore from '@/components/atoms/CoffeeScore/CoffeeScore';
import RatingScore from '@/components/atoms/RatingScore/RatingScore';
import ReviewWrite from '@/components/organisms/ReviewWrite/ReviewWrite';

function MyReviewPage() {
  const { userDataState } = useUserDataStore();
  const { UserId } = useUserIdStore();

  const [reviewRecord, setReviewRecord] = useState([]);
  const userReviewData = useLoaderData();

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

  // 리뷰 데이터 모음

  // const reviewRef = useRef(null);

  // const [reviewText, setReviewText] = useState('');
  // const [image, setImage] = useState(null);

  // const handleReviewCheck = (e) => {
  //   e.preventDefault();
  //   console.log('테스트', reviewRef.current.value);
  //   setReviewText(reviewRef.current.value);
  //   console.log('데이터 확인', reviewText);

  //   testRecord();
  // };

  const [rating, setRating] = useState(5);

  // const handleImageChange = (e) => {
  //   let reader = new FileReader();

  //   reader.onload = (e) => {
  //     // setImage(e.target.result);
  //     setImage(e.target.result);
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  //   console.log(image);
  //   console.log('test', e.target.files[0].name);
  //   console.log('test2', e.target.result);
  // };

  // // let reviewText = reviewRef.current.value;

  // // test data 2개는 매개변수로
  // const data = {
  //   cafeName: 'test',
  //   email: UserId,
  //   contents: reviewText,
  //   hashtag: ['12ewjx70uf8so14'],
  //   score: 3.5,
  // };

  // const testRecord = async () => {
  //   await pb
  //     .collection('review')
  //     .create(data)
  //     .then(() => {
  //       console.log(image);
  //       console.log(reviewText);
  //       alert('전송 완료 ');
  //     });
  // };
  useEffect(() => {
    handleReview();
  }, []);

  return (
    <div className="h-screen">
      <div className="mx-auto  h-full min-w-375pxr max-w-680pxr px-6">
        <HeaderBar name={'내가 쓴 리뷰'} />
        <button onClick={handleReview}>test</button>
        {/* <Link to="/myreview?size=123">
        데이터 가져오기(with &apos;?size=123&apos;)
      </Link> */}

        {/* <div>
          <div className="w-500pxr">
            <form
              onSubmit={handleReviewCheck}
              className="flex flex-col items-center gap-4 rounded-lg bg-white py-4"
            >
              <span className="text-lg font-semibold">리뷰 쓰기</span>
              <RatingScore rating={rating} setRating={setRating} />
              <textarea
                placeholder="구매하신 상품에 대해 리뷰를 남겨주세요"
                ref={reviewRef}
                className="h-300pxr w-300pxr overflow-auto rounded-md bg-slate-100"
              ></textarea>

              <div className="flex flex-col items-center">
                <input type="file" onChange={handleImageChange} />

                {image && <img src={image} alt="테스트 이미지" />}
              </div>

              <button
                type="submit"
                className="w-300pxr rounded-md bg-black py-4 text-white"
              >
                작성하기
              </button>
            </form>
          </div>
        </div> */}

        <ReviewWrite />

        {/* <imput type="file" onChange={handleImageUpload}></imput> */}

        {/* 카페 데이터 불러오기 */}

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
