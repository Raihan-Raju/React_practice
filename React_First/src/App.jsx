import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 




const App = () => {
  return (
    function App() {
      return (
        <BrowserRouter basename="/app">
          <Routes>
            <Route path="/" /> {/* 👈 Renders at /app/ */}
          </Routes>
        </BrowserRouter>
      );
    }
  );
};

export default App;