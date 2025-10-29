import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import React from "react";
import store from "@/store/index";

// Create auth context

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
export default App;