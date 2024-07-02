import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tireListReducer from "./slices/tireListSlice";

const rootReducer = combineReducers({
    tireList: tireListReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
