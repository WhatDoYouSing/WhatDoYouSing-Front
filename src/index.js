import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <QueryClientProvider client={QueryClient}>
  //   <ReactQueryDevtools initialIsOpen={true} />
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </QueryClientProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
