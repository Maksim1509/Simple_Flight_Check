import React from 'react';
import { useSelector } from 'react-redux';
import './favorites.scss';

const Favorites = () => {
  const { favoriteIds } = useSelector((state) => state.favoritesInfo);
  return (
    <p className="favorites">
      Добавлено в Избранное:
      <span className="favorites-count">{` ${favoriteIds.length} `}</span>
      рейсов
    </p>
  );
};

export default Favorites;
