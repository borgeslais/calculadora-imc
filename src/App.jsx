import './global.scss';
import React, { useState, useEffect } from "react";
import TabelaIMC from "./components/Tabela/index";
import Perfil from "./components/Perfil/index";
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <div>
        <Perfil/>
        <section>
        <Formulario />
          <section>
            <TabelaIMC />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;