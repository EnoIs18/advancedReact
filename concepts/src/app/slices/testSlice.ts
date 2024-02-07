import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState: {
    holidays: []
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
} = {
    holidays: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
};

const selectSelf = (state: any) => state.holidays;

export const selectHolidaysState = createSelector(selectSelf, (state) => state);

export const selectAllHolidays = createSelector(
    selectHolidaysState,
    (state) => state.holidays
);

export const holidaysSlice = createSlice({
    name: "holidays",
    initialState,
    reducers: {
        resetHolidaysState: () => initialState,
    },
    //   extraReducers: (builder) =>
    //     builder
    //       .addMatcher(
    //         appEndpoints.endpoints.getHolidays.matchFulfilled,
    //         (state, { payload }) => {
    //           state.isError = false;
    //           state.isLoading = false;
    //           state.holidays = payload;
    //           state.isSuccess = true;
    //         }
    //       )
    //       .addMatcher(
    //         appEndpoints.endpoints.getHolidays.matchPending,
    //         (state, { payload }) => {
    //           state.isError = false;
    //           state.isLoading = true;
    //           state.holidays = [];
    //           state.isSuccess = false;
    //         }
    //       )
    //       .addMatcher(
    //         appEndpoints.endpoints.getHolidays.matchRejected,
    //         (state, { payload }) => {
    //           state.isError = true;
    //           state.isLoading = false;
    //           state.holidays = [];
    //           state.isSuccess = false;
    //         }
    //       ),
});

export const { resetHolidaysState } = holidaysSlice.actions;
