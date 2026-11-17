
import React from "react";

function NewPlantForm({ onAddPlant }) {
  function handleSubmit(event) {
    event.preventDefault();

    // Get the form whether the event comes from the form or button
    const form = event.currentTarget.form || event.currentTarget;

    const formData = new FormData(form);

    const newPlant = {
      name: formData.get("name"),
      image: formData.get("image"),
      price: formData.get("price"),
    };

    onAddPlant(newPlant);

    form.reset();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
        />

        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />

        <button type="button" onClick={handleSubmit}>
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
