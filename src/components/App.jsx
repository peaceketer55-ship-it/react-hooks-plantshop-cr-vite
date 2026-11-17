
import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // Store all plants received from the backend
  const [plants, setPlants] = useState([]);

  // Store the text entered in the search field
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants when the application first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Add a new plant to the backend
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        setPlants((currentPlants) => [...currentPlants, data]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  }

  // Filter plants by name (case-insensitive)
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
}

export default App;
