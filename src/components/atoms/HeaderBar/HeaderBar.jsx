import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderBar(props) {
  let backNavigation = useNavigate();

  const handleCheck = () => {
    console.log(props.name);
    backNavigation('../');
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="ml-5 mr-5 flex items-center justify-between py-4">
          <button type="button" onClick={handleCheck}>
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
