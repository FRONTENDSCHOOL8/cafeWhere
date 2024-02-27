import React from 'react';

function HeaderBar(props) {
  const handleCheck = () => {
    console.log(props.name);
  };

  return (
    <div>
      <div className="justify-center">
        <div className="flex min-w-375pxr max-w-680pxr items-center justify-between py-4">
          <button type="button" className="gap-10pxr" onClick={handleCheck}>
            <img src="/images/login/arrow.svg" alt="뒤로가기" />
          </button>

          <span className=" text-black">{props.name}</span>

          {props.showHomeBtn ? (
            <button type="button" className="" onClick={handleCheck}>
              <img
                className="justify-center"
                src="/images/login/HomeIcon.svg"
                alt="홈으로 가기"
              />
            </button>
          ) : (
            <div className="h-22pxr w-22pxr"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
