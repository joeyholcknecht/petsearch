import { useState } from "react";
import pets from "./data";
import PetList from "./components/PetList";

function App() {
  const [search, setSearch] = useState("");

  // Filter pets by animal or name (works with upper or lower case)
  const text = search.toLowerCase().trim();
  const filteredPets = pets.filter(
    (pet) =>
      pet.animal.toLowerCase().includes(text) ||
      pet.name.toLowerCase().includes(text)
  );

  return (
    <div className="page d-flex justify-content-center align-items-center">
      <div className="container bg-white bg-opacity-75 rounded-4 shadow p-4 my-4 pet-box">
        <PetList pets={filteredPets} search={search} setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
