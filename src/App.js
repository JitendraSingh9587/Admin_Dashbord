import "@fontsource/roboto";
import './App.css';
import RoutesWrapper from './Components/Routers/RoutesWrapper';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
}

export default App;
