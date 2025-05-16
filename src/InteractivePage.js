import React, { useState } from "react";
import myImage from "./Assets/Test2.jpeg"
import "./InteractivePage.css";  // CSS dosyasını da dahil ediyoruz

const buildingData3 = [
    {
        id: 1,
        name: 'Test Bina 1',
        description: 'Bu bina yüksek katlı bir ofis binasıdır.',
        coordinates: { top: 34, left: 30, width: 53, height: 17 },
        color: "green",
        zIndex: 10
    },
    {
        id: 2,
        name: 'Test Bina 2',
        description: 'Test Bina 2',
        coordinates: { top: 46, left: 1, width: 51, height: 16 },
        color: "blue",
        zIndex: 20
    },
    {
        id: 3,
        name: 'Test Bina 3',
        description: 'Bu bina yüksek katlı bir ofis binasıdır.',
        coordinates: { top: 50, left: 48, width: 51, height: 18 },
        color: "purple",
        zIndex: 30
    },

    {
        id: 4,
        name: 'Test Bina 4',
        description: 'Test Bina 4',
        coordinates: { top: 61, left: 1, width: 62, height: 14 },
        color: "yellow",
        zIndex: 40
    },

    {
        id: 5,
        name: 'Test Bina 5',
        description: 'Bu bina yüksek katlı bir ofis binasıdır.',
        coordinates: { top: 67, left: 52, width: 48, height: 19 },
        color: "orange",
        zIndex: 50
    }, {
        id: 6,
        name: 'Test Bina 6',
        description: 'Bu bina büyük bir alışveriş merkezidir.',
        coordinates: { top: 74, left: 0, width: 42, height: 26 },
        color: "red",
        zIndex: 60

    },
    {
        id: 7,
        name: 'Test Bina 7',
        description: 'Bu bina yüksek katlı bir ofis binasıdır.',
        coordinates: { top: 77, left: 41, width: 46, height: 23 },
        color: "cyan",
        zIndex: 70
    },
    {
        id: 8,
        name: 'Test Bina 8',
        description: 'Bu bina yüksek katlı bir ofis binasıdır.',
        coordinates: { top: 88, left: 66, width: 34, height: 12 },
        color: "black",
        zIndex: 80
    },];

export default function InteractivePage() {
    const [activeBuilding, setActiveBuilding] = useState(null);

    const handleBuildingClick = (building) => {
        setActiveBuilding(activeBuilding === building.id ? null : building.id);
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src={myImage} alt="Binalar" className="building-image" />
                {buildingData3.map((building) => (
                    <div
                        key={building.id}
                        className="clickable-area"
                        style={{
                            top: `${building.coordinates.top}%`,
                            left: `${building.coordinates.left}%`,
                            width: `${building.coordinates.width}%`,
                            height: `${building.coordinates.height}%`,
                            position: "absolute",
                            backgroundColor: building.color ? `${building.color}` : null,
                            zIndex: building.zIndex ? `${building.zIndex}` : null,
                            cursor: "pointer",
                            borderRadius: "20%",
                            opacity: "0.5"
                        }}
                        onClick={() => handleBuildingClick(building)}
                    ></div>
                ))}

                {activeBuilding && (
                    <div className="info-bubble">
                        {buildingData3
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
