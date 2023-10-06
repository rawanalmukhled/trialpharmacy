import React from "react";
import PharmacyItem from "./PharmacyItem";

const PharmacyList = () => {
  const medicines = [
    {
      Name: "Panadol",
      Price: "2 KD",
      image:
        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reborn/en_IE/product-detail/panadol-advance-compack-16/Panadol-Base-24s-(3D).png?auto=format",
    },
    {
      Name: "Advil",
      Price: "1.7 KD",
      image:
        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reborn/en_IE/product-detail/panadol-advance-compack-16/Panadol-Base-24s-(3D).png?auto=format",
    },
  ];

  const medicineList = medicines.map((medicine) => {
    return <PharmacyItem medicine={medicine} />;
  });

  return <div>{medicineList}</div>;
};

export default PharmacyList;
