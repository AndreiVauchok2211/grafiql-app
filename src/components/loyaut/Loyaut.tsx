import { NavLink, Outlet } from 'react-router-dom';

export function Loyaut() {
  return (
    <div className="container-app">
      <header className="header-form">
        <NavLink to="/">Welcome</NavLink>
        <NavLink to="/graphiql">GraphiQL</NavLink>
        <NavLink to="/signup">LogIn/SigUp</NavLink>
      </header>
      <Outlet />
      <footer>GraficQL2023</footer>
    </div>
  );
}
