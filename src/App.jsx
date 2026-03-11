import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail1 from "./pages/Detail1";
import TableuDiabetes from "./pages/TableuDiabates";

const App = () => {
  return (
    <>
      <Routes>
        {/* Halaman Utama */}
        <Route index element={<Home />} />

        {/* Halaman Detail (Gunakan path internal yang bersih) */}
        <Route path="/jumlahkeracunanmbg" element={<Detail1 />} />
        <Route path="/tableudiabates" element={<TableuDiabetes />} />
      </Routes>
    </>
  );
};

export default App;
