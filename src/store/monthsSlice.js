const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    // monthsList: [
    //     'January',
    //     'Feburary',
    //     'March'
    // ]
    monthsList:[]
};

export const monthsSlice = createSlice({
    name: "months",
    initialState,
    reducers: {
        setMonthsList: (state, action) => {
            state.monthsList = action.payload;
        }
    }
});

export const { setMonthsList } = monthsSlice.actions;
export default monthsSlice.reducer;