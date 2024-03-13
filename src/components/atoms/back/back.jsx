import { useNavigate } from 'react-router-dom';

function Back() {
  // const handleClick = () => {
  //   return window.history.back();
  // };

  const backNavigation = useNavigate();

  const handleNavigateBack = () => {
    backNavigation(-1);
  };

  return (
    <button onClick={handleNavigateBack}>
      <svg
        width="15"
        height="13"
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M15 6.93033C15 6.37805 14.5523 5.93033 14 5.93033H2.83L7.50557 2.51293C7.98551 2.16214 8.03811 1.46537 7.61628 1.04651C7.26576 0.698463 6.70925 0.670651 6.32578 0.982014L1.05176 5.26436C0.022223 6.10032 0.0765628 7.68854 1.16083 8.45216L6.36023 12.114C6.73 12.3744 7.23351 12.3311 7.55332 12.0113C7.98561 11.579 7.89034 10.8543 7.361 10.5484L2.83 7.93033H14C14.5523 7.93033 15 7.48262 15 6.93033Z"
          fill="#757575"
        />
      </svg>
    </button>
  );
}

export default Back;
