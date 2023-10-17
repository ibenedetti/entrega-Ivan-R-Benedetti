import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
        <ItemListContainer greeting="Bienvenidos a Buff Capybara!" />
    </div>
  );
}

export default App;
