import React from "react";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import App from "../App";
import { DetailPage } from "../pages/DetailPage";
type routeProps = {};

const Rout = (props: routeProps) => {
  const pid = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={`/pages/detailPage/:pid`} element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
