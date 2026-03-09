import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail1 from "./pages/Detail1";

const App = () => {
  return (
    <>
      <Routes>
        {/* Halaman Utama */}
        <Route index element={<Home />} />

        {/* Halaman Detail (Gunakan path internal yang bersih) */}
        <Route path="/jumlahkeracunanmbg" element={<Detail1 />} />
      </Routes>
    </>
  );
};

export default App;
