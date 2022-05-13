import { HashRouter, Routes, Route, NavLink } from "react-router-dom";

function RouterExample() {
  return (
    <HashRouter>
      <NavLink to="/" activeClassName="active">
        Inicio
      </NavLink>
      <NavLink to="/agregar" activeClassName="active">
        Agregar
      </NavLink>
      <Routes>
        <Route exact path="/" element={<h2>Inicio</h2>} />
        <Route exact path="/agregar" element={<h2>Artista</h2>} />
      </Routes>
    </HashRouter>
  );
}

export default RouterExample;
