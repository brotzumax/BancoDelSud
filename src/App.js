import './App.css';
import Header from './components/Header';
import { BrowserRouter} from "react-router-dom";
import Provider from './context/Context';
import MainPage from './components/MainPage';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <MainPage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
