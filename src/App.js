import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Books from "./components/Books";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Nav />
        <Books />
      </main>
    </div>
  );
};

export default App;
