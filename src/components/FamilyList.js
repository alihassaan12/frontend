import React from 'react';

const FamilyList = ({ families }) => {
  return (
    <div>
      <h2>Family List</h2>
      <ul>
        {families.map(family => (
          <li key={family.id}>{family.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FamilyList;
