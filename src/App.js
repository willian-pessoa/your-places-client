import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

import { AuthContext } from "./shared/context/auth-context"
import { useCallback, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => setIsLoggedIn(true), [])
  const logout = useCallback(() => setIsLoggedIn(false), [])

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route exact path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </>
    )
  } else {
    routes = (
      <>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route path="/*" element={<Navigate to="/auth" />} />
      </>
    )
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            {routes}
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
