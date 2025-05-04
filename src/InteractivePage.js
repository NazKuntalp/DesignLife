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

        {buildings.map((building) => (
          <div
            key={building.id}
            className="clickable-area"
            style={{
              left: `${building.x}%`,
              top: `${building.y}%`,
              position: "absolute",
              cursor: "pointer",
              width: "20px",  // Alan boyutu
              height: "20px",
              backgroundColor: "red",
              borderRadius: "50%",
            }}
            onClick={() => handleBuildingClick(building)}
          ></div>
        ))}

        {activeBuilding && (
          <div className="info-bubble">
            {buildings
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
