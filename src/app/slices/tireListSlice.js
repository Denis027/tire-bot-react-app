import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// eslint-disable-next-line
// import { tiresAPI } from "../../api/tiresAPI";
// eslint-disable-next-line
import { testAPI } from "../../api/testAPI";

export const tireListSlice = createSlice({
    name: "tireList",
    initialState: {
        isLoading: null,
        error: null,
        tireItems: [],
    },
    reducers: {
        setTires: (state, action) => {
            state.tireItems = action.payload;
        },
        seasonFilter: (state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        },
        widthFilter: (state, action) => {
            const nextState = { ...state };
            nextState.tireItems = nextState.tireItems.filter((item) => {
                if (action.payload.width === "") {
                    return true;
                } else {
                    return item.width === action.payload.width;
                }
            });
            console.log(nextState.tireItems);
            return nextState;
        },
        hightFilter: (state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        },
        diameterFilter: (state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        },
    },
    extraReducers: async (builder) => {
        builder
            .addCase(fetchTires.pending, (state) => {
                state.isLoading = "Loading";
                state.error = null;
            })
            .addCase(fetchTires.fulfilled, (state, action) => {
                state.isLoading = "Resolved";
                state.tireItems = action.payload;
            })
            .addCase(fetchTires.rejected, (state) => {
                state.isLoading = "error";
                state.error = "error";
            });
    },
});

export const fetchTires = createAsyncThunk("tireList/fetchTires", async () => {
    try {
        const response = await testAPI.getTest();
        return response;
    } catch (error) {
        console.log(error);
    }
});

export const {
    setTires,
    seasonFilter,
    widthFilter,
    hightFilter,
    diameterFilter,
} = tireListSlice.actions;

export default tireListSlice.reducer;
