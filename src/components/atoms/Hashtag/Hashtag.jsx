import { useHashtagStore } from '@/store';
import { useState } from 'react';

// 검색 페이지에서만 클릭할 수 있도록 제어
function Hashtag({ icon, keyword, click, test, handleClickEvent }) {
  const [isClicked, setIsClicked] = useState(false);
  const { hashtag, setHashtag } = useHashtagStore();

  const handleHashtagClick = () => {
    setIsClicked(!isClicked);
    handleClickEvent?.();
  };

  // 아이콘 없는 해시태그 클릭 함수
  const toggle =
    test && isClicked
      ? 'hashtag-button mr-1 mb-6pxr hidden'
      : 'hashtag-button bg-[#F9F9F9] text-[#6B6B6B] mr-1 mb-6pxr';

  const className =
    click && isClicked
      ? 'hashtag-button bg-secondary3-colors mr-1 mb-6pxr text-white'
      : 'hashtag-button bg-[#F9F9F9] text-[#6B6B6B] mr-1 mb-6pxr';

  const isIcon = icon ? <span className="text-12pxr">{icon}</span> : '';

  return (
    <button
      className={className && toggle}
      onClick={handleHashtagClick}
      checked={isClicked}
      // id={id} // 효진님이랑 충돌로 인한 에러로 인한 주석처리 나중에 쓸지 말지 추후 고민할 예정
    >
      {isIcon}
      <span>{keyword}</span>
    </button>
  );
}

export default Hashtag;
