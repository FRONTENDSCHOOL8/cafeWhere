import { useHashtagStore } from '@/store';
import { useState } from 'react';

// 검색 페이지에서만 클릭할 수 있도록 제어
function Hashtag({ icon, keyword, id, click }) {
  const [isClicked, setIsClicked] = useState(false);
  const { hashtag, setHashtag } = useHashtagStore();

  const handleHashtagClick = () => {
    setIsClicked(!isClicked);

    if (isClicked) {
      setHashtag(hashtag.filter((tagId) => tagId !== id));
    } else {
      if (!hashtag.includes(id)) {
        setHashtag([...hashtag, id]);
      }

      console.log(hashtag);
    }
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
      id={id}
    >
      <span className="text-12pxr">{icon}</span>
      <span>{keyword}</span>
    </button>
  );
}

export default Hashtag;
