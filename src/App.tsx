import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Weather from './pages/weather/Weather';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Weather />}>
        {/* <Route index element={<Counter />} />
        <Route path="teams" element={<Counter />}>
          <Route path=":teamId" element={<Counter />} />
          <Route path="new" element={<Counter />} />
          <Route index element={<Counter />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
