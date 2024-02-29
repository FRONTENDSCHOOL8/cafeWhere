import favoritesIcon from '/images/wish/favorites.png';
import removeFavoritesIcon from '/images/wish/favorites-remove.png';
import { useState } from 'react';

const icon = {
  favorites: {
    src: favoritesIcon,
    alt: '찜하기',
  },
  removeFavorites: {
    src: removeFavoritesIcon,
    alt: '찜하기 해제',
  },
};

function Wish() {
  const [wish, setWish] = useState(false);
  return (
    <>
      {
        <img
          src={wish ? icon.favorites.src : icon.removeFavorites.src}
          alt={wish ? icon.favorites.alt : icon.removeFavorites.alt}
          className="cursor-pointer"
          onClick={() => {
            setWish(!wish);
          }}
        />
      }
    </>
  );
}

export default Wish;
