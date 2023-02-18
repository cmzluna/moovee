import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectFavorites } from "../../store/slices/favorites";
import Collection from "../Collection";

const Favorites = () => {
  const favoritesList = useAppSelector(selectFavorites);

  console.log("favoritesList ==> ", favoritesList);

  return (
    <div>
      <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        {favoritesList.length ? (
          <Collection data={favoritesList} title="Your favorites" />
        ) : (
          <h2>No favorites yet...</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
