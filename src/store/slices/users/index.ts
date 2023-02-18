import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
    modifyUser: (state, action: PayloadAction<User>) => {
      const editedUser = action.payload;

      const foundUser = state.find((user: User) => user.id === editedUser.id);

      if (editedUser.name && foundUser) foundUser.name = editedUser.name;
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      const userToDelete = action.payload;
      state = state.filter((user: User) => user.id !== userToDelete.id);
    },
    resetUser: () => initialState,
  },
});

export const { createUser, modifyUser, deleteUser, resetUser } =
  usersSlice.actions;

export default usersSlice.reducer;
