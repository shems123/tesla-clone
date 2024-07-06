import {configureStore} from  "@reduxjs/toolkit";
import carReducer from "./features/car/carSlice.js";

 const store = configureStore({
    reducer: {
        car: carReducer,
    }
});

export default store;