import "@fontsource/roboto";
import './App.css';
import AuthRoutesWrapper from './Components/Routers/AuthRoutesWrapper';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthRoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
