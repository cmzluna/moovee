import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../types";
import { RootState } from "../..";

const initialState: Movie[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.push(action.payload);
    },

    removeFavorite: (state, action: PayloadAction<Movie>) => {
      const favoriteToDelete = action.payload;
      return state.filter(
        (favorite: Movie) => favorite.id !== favoriteToDelete.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites;

export default favoritesSlice.reducer;
