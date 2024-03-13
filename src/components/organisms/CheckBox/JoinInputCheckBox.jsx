import { useState, useEffect, useRef } from 'react';

const inputCheckBox = `ml-17pxr h-24pxr w-24pxr appearance-none bg-[url('/images/join/uncheckbox.svg')] bg-cover bg-center bg-no-repeat align-middle checked:bg-[url('/images/join/ischeckbox.svg')]`;
const checkBoxLabel = 'ml-6pxr align-middle text-14pxr text-[#3E3B37]';

function CheckBox() {
  // * 변수관리
  const allCheck = useRef(false);
  // * 각각의 input창 false로 상태관리
  const [check, setCheck] = useState({
    check_1: false,
    check_2: false,
    check_3: false,
    check_4: false,
  });

  // ~ 각각의 체크가 true일때 전체 선택도 true 바뀌어야되는 함수 (미완)
  useEffect(() => {
    allCheck.current =
      check.check_1 && check.check_2 && check.check_3 && check.check_4;
  }, [check]);

  // * 각각의 클릭시 이벤트 함수
  const HandleCheckList = (e) => {
    const currentName = e.currentTarget.name;
    console.log(currentName);
    setCheck({
      ...check,
      [currentName]: !check[currentName],
    });
  };

  // * 전체 선택 함수
  const HandelAllCheckItems = () => {
    allCheck.current = !allCheck.current;
    setCheck({
      check_1: allCheck.current,
      check_2: allCheck.current,
      check_3: allCheck.current,
      check_4: allCheck.current,
    });
  };

  return (
    <div className="bg-greyscale-10 font-semibold">
      <div className="grid h-90pxr content-center rounded-t-lg border border-b-0 border-greyscale-30 pr-50pxr">
        <div>
          <input
            className={inputCheckBox}
            type="checkbox"
            name="allCheck"
            id="allCheck"
            onChange={HandelAllCheckItems}
            checked={allCheck.current}
          />
          <label className={checkBoxLabel} htmlFor="allCheck">
            전체 동의
          </label>
        </div>
        <span className="ml-17pxr mt-8pxr inline-block  text-10pxr  text-[#868686]">
          서비스 이용약관, 개인정보 수집 및 이용, 마케팅 이용에 대한 안내를
          읽었으며 아래 내용에 모두 동의합니다.
        </span>
      </div>
      <div className="h-50pxr border border-b-0 border-greyscale-30">
        <div className="mt-10pxr">
          <input
            className={inputCheckBox}
            type="checkbox"
            name="check_1"
            id="check-1"
            checked={check.check_1}
            onChange={HandleCheckList}
          />
          <label className={checkBoxLabel} htmlFor="check-1">
            [필수] 만 14세 이상입니다.
          </label>
        </div>
      </div>
      <div className="h-50pxr border border-b-0 border-greyscale-30">
        <div className="mt-10pxr">
          <input
            className={inputCheckBox}
            type="checkbox"
            name="check_2"
            id="check-2"
            checked={check.check_2}
            onChange={HandleCheckList}
          />
          <label className={checkBoxLabel} htmlFor="check-2">
            [필수] 카페어디 이용약관
          </label>
        </div>
      </div>
      <div className="h-50pxr border border-b-0 border-greyscale-30">
        <div className="mt-10pxr">
          <input
            className={inputCheckBox}
            type="checkbox"
            name="check_3"
            id="check-3"
            checked={check.check_3}
            onChange={HandleCheckList}
          />
          <label className={checkBoxLabel} htmlFor="check-3">
            [필수] 개인정보 수집 및 이용 동의
          </label>
        </div>
      </div>
      <div className="h-50pxr border border-greyscale-30">
        <div className="mt-10pxr">
          <input
            className={inputCheckBox}
            type="checkbox"
            name="check_4"
            id="check-4"
            checked={check.check_4}
            onChange={HandleCheckList}
          />
          <label className={checkBoxLabel} htmlFor="check-4">
            [선택] 광고성 정보 수신 동의
          </label>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
