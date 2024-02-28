// 백업용 최후의 발악 삭제 금지 🆘
import { useState } from 'react';

const inputCheckBox = `ml-17pxr h-24pxr w-24pxr appearance-none bg-[url('/public/images/JoinCheckBox/uncheckbox.svg')] bg-cover bg-center bg-no-repeat align-middle checked:bg-[url('/public/images/JoinCheckBox/ischeckbox.svg')]`;
const isImg = `ml-17pxr h-24pxr w-24pxr appearance-none bg-[url('/public/images/JoinCheckBox/ischeckbox.svg')] bg-cover bg-center bg-no-repeat align-middle `;
const checkBoxLabel = 'ml-6pxr align-middle text-14pxr text-[#3E3B37]';

function CheckBox() {
  // 전체 선택 함수
  const [allCheckList, setAllCheckList] = useState(false);

  const handleAllClick = () => {
    setAllCheckList(!allCheckList);
  };

  return (
    <div className="bg-greyscale-10 mx-20pxr w-375pxr font-semibold">
      <div className="border-greyscale-30 grid h-90pxr content-center rounded-t-lg border border-b-0 pr-50pxr">
        {/* 전체 선택 */}
        <div>
          {allCheckList ? (
            <input
              className={inputCheckBox}
              type="checkbox"
              name="allCheck"
              id="allCheck"
              onClick={handleAllClick}
            />
          ) : (
            <input
              className={isImg}
              type="checkbox"
              name="allCheck"
              id="allCheck"
              onClick={handleAllClick}
            />
          )}
          <label className={checkBoxLabel} htmlFor="allCheck">
            전체 동의
          </label>
        </div>
        <span className="ml-17pxr mt-8pxr inline-block  text-10pxr  text-[#868686]">
          서비스 이용약관, 개인정보 수집 및 이용, 마케팅 이용에 대한 안내를
          읽었으며 아래 내용에 모두 동의합니다.
        </span>
      </div>
      {/* 컴포넌트 분해 할거 ${라벨 이름 쓸거} {`스타일 css 공통적인거`}*/}
      <div className="border-greyscale-30 h-50pxr border border-b-0">
        <div className="mt-10pxr">
          {/* <input
            className={inputCheckBox}
            type="checkbox"
            name="check-1"
            id="check-1"
          /> */}
          {allCheckList ? (
            <input
              className={inputCheckBox}
              type="checkbox"
              name="check-1"
              id="check-1"
            />
          ) : (
            <input
              className={isImg}
              type="checkbox"
              name="check-1"
              id="check-1"
            />
          )}
          <label className={checkBoxLabel} htmlFor="check-1">
            [필수] 만 14세 이상입니다.
          </label>
        </div>
      </div>
      <div className="border-greyscale-30 h-50pxr border border-b-0">
        <div className="mt-10pxr">
          {/* <input
            className={inputCheckBox}
            type="checkbox"
            name="check-2"
            id="check-2"
          /> */}
          {allCheckList ? (
            <input
              className={inputCheckBox}
              type="checkbox"
              name="check-2"
              id="check-2"
            />
          ) : (
            <input
              className={isImg}
              type="checkbox"
              name="check-2"
              id="check-2"
            />
          )}
          <label className={checkBoxLabel} htmlFor="check-2">
            [필수] 카페어디 이용약관
          </label>
        </div>
      </div>
      <div className="border-greyscale-30 h-50pxr border border-b-0">
        <div className="mt-10pxr">
          {/* <input
            className={inputCheckBox}
            type="checkbox"
            name="check-3"
            id="check-3"
          /> */}
          {allCheckList ? (
            <input
              className={inputCheckBox}
              type="checkbox"
              name="check-3"
              id="check-3"
            />
          ) : (
            <input
              className={isImg}
              type="checkbox"
              name="check-3"
              id="check-3"
            />
          )}
          <label className={checkBoxLabel}>
            [필수] 개인정보 수집 및 이용 동의
          </label>
        </div>
      </div>
      <div className="border-greyscale-30 h-50pxr border">
        <div className="mt-10pxr">
          {/* <input
            className={inputCheckBox}
            type="checkbox"
            name="check-4"
            id="check-4"
          /> */}
          {allCheckList ? (
            <input
              className={inputCheckBox}
              type="checkbox"
              name="check-4"
              id="check-4"
            />
          ) : (
            <input
              className={isImg}
              type="checkbox"
              name="check-4"
              id="check-4"
            />
          )}
          <label className={checkBoxLabel}>[선택] 광고성 정보 수신 동의</label>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
