import "./App.scss";
import { GlobalProvider } from "./Components/Global";
import Nav from "./Components/Nav";
import Routes from "./Components/Routes";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Nav></Nav>
        <Routes></Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
