import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ServerApi } from "./uri";

const accessToken: string | null = localStorage.getItem("accessToken") || null;
const refreshToken: string | null =
  localStorage.getItem("refreshToken") || null;

const client = new ApolloClient({
  uri: ServerApi,
  cache: new InMemoryCache(),
  headers: {
    authorization: accessToken ? `Bearer ${accessToken}` : "",
    refresh_token: refreshToken ? `${refreshToken}` : "",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
