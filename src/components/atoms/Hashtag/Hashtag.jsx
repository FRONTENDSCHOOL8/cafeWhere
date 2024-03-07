import { useState } from 'react';

// 검색 페이지에서만 클릭할 수 있도록 제어
function Hashtag({ icon, keyword, click }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleHashtagClick = () => {
    setIsClicked(!isClicked);
  };

  const className =
    click && isClicked
      ? 'hashtag-button bg-secondary3-colors text-white'
      : 'hashtag-button bg-[#F9F9F9] text-[#6B6B6B]';

  return (
    <button
      className={className}
      onClick={handleHashtagClick}
      checked={isClicked}
    >
      <span className="text-12pxr">{icon}</span>
      <span>{keyword}</span>
    </button>
  );
}

export default Hashtag;
