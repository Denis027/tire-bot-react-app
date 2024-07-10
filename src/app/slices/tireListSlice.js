import {
    buildCreateSlice,
    asyncThunkCreator,
} from "@reduxjs/toolkit";
import { testAPI } from "../../api/testAPI";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const tireListSlice = createSliceWithThunks({
    name: "tireList",
    initialState: {
        status: null,
        error: null,
        tireItems: [],
    },
    selectors: {
        selectTireList: (state) => state,
        selectTireItems: (state) => state.tireItems,
    },

    reducers: (create) => ({
        fetchTires: create.asyncThunk(
            async () => {
                try {
                    const response = await testAPI.getTest();
                    return response;
                } catch (error) {
                    console.log(error);
                }
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.tireItems = action.payload;
                },
                rejected: (state) => {
                    state.status = "error";
                    state.error = "error";
                },
            }
        ),

        seasonFilter: create.reducer((state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        }),
        widthFilter: create.reducer((state, action) => {
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
        }),
        hightFilter: create.reducer((state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        }),
        diameterFilter: create.reducer((state, action) => {
            state.tireItems = state.tireItems.filter((item) => {
                if (action.payload.season === "") {
                    return true;
                } else {
                    return item.season === action.payload.season;
                }
            });
        }),
    }),
});

export const {
    setTires,
    seasonFilter,
    widthFilter,
    hightFilter,
    diameterFilter,
    fetchTires,
} = tireListSlice.actions;

export const { selectTireItems, selectTireList } = tireListSlice.selectors;

export default tireListSlice.reducer;
