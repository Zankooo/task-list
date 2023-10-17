
import Tasks from "./components/Tasks/Tasks";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header ></Header>
      <div className="container">
        <Tasks></Tasks>
      </div>
  </main>
  );
}

export default App;
