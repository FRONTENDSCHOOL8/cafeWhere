function CheckBox() {
  return (
    <div className="mx-20pxr w-375pxr font-semibold">
      <div className="grid h-90pxr content-center rounded-t-lg bg-[#F8F8F8] pr-50pxr">
        <div>
          <input
            className="InputCheckBox"
            type="checkbox"
            name="allCheck"
            id="allCheck"
          />
          <label className="CheckBoxLabel" htmlFor="allCheck">
            전체 동의
          </label>
        </div>
        <span className="ml-17pxr mt-8pxr inline-block  text-10pxr  text-[#868686]">
          서비스 이용약관, 개인정보 수집 및 이용, 마케팅 이용에 대한 안내를
          읽었으며 아래 내용에 모두 동의합니다.
        </span>
      </div>
      {/* 컴포넌트 분해 할거 */}
      <div className="h-50pxr border border-b-0 border-[#EAEAEA]">
        <div className="mt-10pxr">
          <input
            className="InputCheckBox"
            type="checkbox"
            name="allCheck"
            id="check-1"
          />
          <label className="CheckBoxLabel" htmlFor="check-1">
            [필수] 만 14세 이상입니다.
          </label>
        </div>
      </div>
      <div className="h-50pxr border border-b-0 border-[#EAEAEA]">
        <div className="mt-10pxr">
          <input
            className="InputCheckBox"
            type="checkbox"
            name="allCheck"
            id="check-2"
          />
          <label className="CheckBoxLabel" htmlFor="check-2">
            [필수] 카페어디 이용약관
          </label>
        </div>
      </div>
      <div className="h-50pxr border border-b-0 border-[#EAEAEA]">
        <div className="mt-10pxr">
          <input
            className="InputCheckBox"
            type="checkbox"
            name="allCheck"
            id="check-3"
          />
          <label className="CheckBoxLabel" htmlFor="check-3">
            [필수] 개인정보 수집 및 이용 동의
          </label>
        </div>
      </div>
      <div className="h-50pxr border border-[#EAEAEA]">
        <div className="mt-10pxr">
          <input
            className="InputCheckBox"
            type="checkbox"
            name="allCheck"
            id="check-4"
          />
          <label className="CheckBoxLabel" htmlFor="check-4">
            [선택] 광고성 정보 수신 동의
          </label>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
