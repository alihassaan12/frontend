import React, { useState } from "react";

const FamilyForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Family Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FamilyForm;
