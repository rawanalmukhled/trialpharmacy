import React from "react";

const PharmacyItem = ({ medicine }) => {
  return (
    <>
      <div>
        <h4>{medicine.Name}</h4>
        <h4>{medicine.Price}</h4>
        <img src={medicine.image} />
      </div>
    </>
  );
};

export default PharmacyItem;
