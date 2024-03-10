import { Wish } from '@/components/atoms';
import Divider from '@/components/atoms/Divider/Divider';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SignUpLink from '@/components/atoms/SIgnUpLink/SignUpLink';
import SocialLoginButton from '@/components/atoms/SocialLoginButton/SocialLoginButton';
import pb from '@/utils/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectLoginPage() {
  let navigate = useNavigate();

  const [reviewData, setReviewData] = useState([]);
  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleTest = () => {
    console.log(reviewData[0].cafeId);
  };

  const handleCheck = async () => {
    const records = await pb.collection('review').getList(1, 2, {
      sort: '-created',
    });

    console.log(records.items);

    setReviewData(records.items);
    // console.log('loader', productReview);

    // console.log(userDataState);
  };

  useEffect(() => {
    handleCheck();
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="mx-auto flex h-full w-full min-w-375pxr max-w-680pxr flex-col">
          <div
            className="mb-44pxr mt-197pxr flex justify-center pt-10"
            onClick={handleTest}
          >
            <img src="/images/biglogo2.svg" alt="카페어디 빅사이즈 로고" />
          </div>

          <div className="flex flex-col gap-4">
            <div onClick={handleLoginPage} className="mx-20pxr">
              <LoginButton>로그인</LoginButton>
            </div>
            <Divider />
            <SocialLoginButton />
            <SignUpLink />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectLoginPage;
