import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
	displayHeader: boolean;
	displayFooter: boolean;
}

const initialState: AppState = {
	displayFooter: true,
	displayHeader: true,
};

export const appSlice = createSlice({
	name: "app",

	initialState,

	reducers: {
		setDisplayHeader: (state, action: PayloadAction<boolean>) => {
			state.displayHeader = action.payload;
		},
		setDisplayFooter: (state, action: PayloadAction<boolean>) => {
			state.displayFooter = action.payload;
		},
	},
});

export const { setDisplayHeader, setDisplayFooter } = appSlice.actions;

export default appSlice.reducer;
