import "./App.css";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Home />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
