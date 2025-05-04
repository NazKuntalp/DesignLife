import React, { useState } from "react";
import myImage from "./Assets/buildings.jpg"
import "./InteractivePage.css";  // CSS dosyasını da dahil ediyoruz

// Fotoğraf üzerindeki binaları temsil eden tıklanabilir alanlar
const buildings = [
  { id: 1, name: "Bina 1", description: "Bina 1 hakkında bilgi burada." , x: 30, y: 50 },
  { id: 2, name: "Bina 2", description: "Bina 2 hakkında bilgi burada." , x: 60, y: 30 },
  { id: 3, name: "Bina 3", description: "Bina 3 hakkında bilgi burada." , x: 45, y: 70 },
  { id: 4, name: "Bina 4", description: "Bina 4 hakkında bilgi burada." , x: 80, y: 85 },
];

const buildingData = [
    {
      id: 1,
      name: 'Alışveriş Merkezi',
      description: 'Bu bina büyük bir alışveriş merkezidir.',
      //coordinates: { top: 320, left: 358, width: 224, height: 513 }
      coordinates: { top: 34, left: 28, width: 16, height: 56 }
    
    },
    {
      id: 2,
      name: 'Ofis Binası',
      description: 'Bu bina yüksek katlı bir ofis binasıdır.',
      //coordinates: { top: 81, left: 648, width: 250, height: 774 }
      coordinates: { top: 5, left: 50, width: 20, height: 90 }
    },
  ];

  
export default function InteractivePage() {
  const [activeBuilding, setActiveBuilding] = useState(null);

  const handleBuildingClick = (building) => {
    setActiveBuilding(activeBuilding === building.id ? null : building.id);
  };

  return (
    <div className="container">
      <h1>Fotoğraf Üzerindeki Binalar</h1>
      <div className="image-container">
        <img src={myImage} alt="Binalar" className="building-image" />

        {buildingData.map((building) => (
          <div
            key={building.id}
            className="clickable-area"
            style={{
                top: `${building.coordinates.top}%`,
                left: `${building.coordinates.left}%`,
                width: `${building.coordinates.width}%`,
                height: `${building.coordinates.height}%`,
              position: "absolute",
              cursor: "pointer",
              borderRadius: "20%",
            }}
            onClick={() => handleBuildingClick(building)}
          ></div>
        ))}

        {activeBuilding && (
          <div className="info-bubble">
            {buildingData
              .filter((building) => building.id === activeBuilding)
              .map((building) => (
                <div key={building.id}>
                  <h3>{building.name}</h3>
                  <p>{building.description}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
