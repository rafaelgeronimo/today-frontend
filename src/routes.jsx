import { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContext } from "./contexts/auth";

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

function Routes() {
  const { userData } = useContext(AuthContext);
  const localStorageToken = localStorage.getItem('@today:token');
  return (
    <BrowserRouter>
      <Route exact path="/" component={ !!userData ? Tasks : Login } />
      <Route path="/tasks" component={ !!localStorageToken ? Login : Tasks } />
      <Route path="/profile" component={ Profile } />
    </BrowserRouter>
  );
}

export default Routes;
