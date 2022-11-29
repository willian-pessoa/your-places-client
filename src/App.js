import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import NewPlace from "./places/pages/NewPlace.page";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/places/new" element={<NewPlace />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
