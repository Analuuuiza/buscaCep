import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuscaCep from "../components/BuscaCepForm";
import Cadastro from "../components/Cadastro";
import Listagem from "../components/Listagem";
import Editar from "../components/Editar";

const AppRouter = () => {
    return (
       <BrowserRouter>
         <Routes>
           <Route path="buscacep" element={<BuscaCep />}></Route>
           <Route path="cadastro" element={<Cadastro />}></Route>
           <Route path="listagem" element={<Listagem  />}></Route>
           <Route path="/editar/:id"element={<Editar />}></Route>

        </Routes>
       </BrowserRouter>
    );
}
 export default AppRouter;