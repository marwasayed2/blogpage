// src/redux/Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";        // اسم جديد لـ appSlice
import basketReducer from "./slices/basketSlice";  // اسم جديد لـ basketSlice
import productReducer from "./slices/productSlice"; // اسم جديد لـ productSlice

const store = configureStore({
  reducer: {
    app: appReducer,        // استخدام الاسم الجديد هنا
    basket: basketReducer,  // استخدام الاسم الجديد هنا
    product: productReducer, // استخدام الاسم الجديد هنا
  },
});

export default store;
