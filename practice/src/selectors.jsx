import { createSelector } from '@reduxjs/toolkit';

const selectUser = (state) => state.user.user;

export const selectCurrentUser = createSelector(
    selectUser,
    (user) => user
)