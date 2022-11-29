import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import NewPlace from "./places/pages/NewPlace.page";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
