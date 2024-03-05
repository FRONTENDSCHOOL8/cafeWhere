import { useState } from 'react';

// 검색 페이지에서만 클릭할 수 있도록 제어
function Hashtag({ icon, keyword }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleHashtagClick = () => {
    setIsClicked(!isClicked);
  };

  const className = isClicked
    ? 'inline-flex items-start gap-1 rounded border border-transparent bg-secondary3-colors px-2 py-1 text-10pxr font-semibold leading-5 text-white shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)]'
    : 'inline-flex items-start gap-1 rounded border border-transparent bg-[#F9F9F9] px-2 py-1 text-10pxr font-semibold leading-5 text-[#6B6B6B] shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)] ';

  return (
    <button
      className={className}
      onClick={handleHashtagClick}
      cheked={isClicked}
    >
      <span className="text-12pxr">{icon}</span>
      <span>{keyword}</span>
    </button>
  );
}

export default Hashtag;
