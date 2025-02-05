import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </Router>
  );
};

export default App;
