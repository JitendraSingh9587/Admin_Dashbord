import "@fontsource/roboto";
import './App.css';
import AuthRoutesWrapper from './Components/Routers/AuthRoutesWrapper';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoutesWrapper from "./Components/Routers/ProtectedRoutesWrapper";

function App() {
  return (
    <BrowserRouter>
      <AuthRoutesWrapper />
      <ProtectedRoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
