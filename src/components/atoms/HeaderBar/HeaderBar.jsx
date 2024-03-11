import { useNavigate } from 'react-router-dom';

function HeaderBar(props) {
  const backNavigation = useNavigate();

  const handleNavigateBack = () => {
    console.log(props.name);
    backNavigation(-1);
  };

  return (
    <div className="flex flex-col">
      <div className="ml-5 mr-5 flex items-center justify-between py-4">
        <button type="button" onClick={handleNavigateBack}>
          <img src="/images/login/arrow.svg" alt="뒤로가기" />
        </button>

        <span className="text-xl font-bold">{props.name}</span>

        {props.showHomeBtn ? (
          <button type="button" className="" onClick={handleNavigateBack}>
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
  );
}

export default HeaderBar;
