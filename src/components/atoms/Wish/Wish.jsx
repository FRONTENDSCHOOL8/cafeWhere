import favoritesIcon from '/images/wish/favorites.svg';
import removeFavoritesIcon from '/images/wish/favorites-remove.svg';
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

function Wish({ customSize = '' }) {
  const [wish, setWish] = useState(false);
  return (
    <>
      {
        <img
          src={wish ? icon.favorites.src : icon.removeFavorites.src}
          alt={wish ? icon.favorites.alt : icon.removeFavorites.alt}
          className={`cursor-pointer ${customSize}`}
          onClick={() => {
            setWish(!wish);
          }}
        />
      }
    </>
  );
}

export default Wish;
