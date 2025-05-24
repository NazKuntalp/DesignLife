import React, { useState } from "react";
import myImage2 from "./Assets/LastBuildings.png"
import Logo from "./Assets/Logo2.png"
import "./InteractivePage.css";  // CSS dosyasını da dahil ediyoruz

const buildingData3 = [
    {
        id: "bauhaus",
        name: 'BAUHAUS',
        content: `
  <p>
    The Bauhaus, founded in 1919 in Weimar, Germany by architect Walter Gropius, revolutionized 20th-century design education and practice through its radical approach to unifying all creative disciplines.
  </p>

  <p>
    Operating until 1933 when it was closed under Nazi pressure, the school rejected the traditional separation between fine arts and applied crafts, instead promoting a functional aesthetic where form followed function.
  </p>

  <p>
    Its innovative curriculum combined practical workshop training with theoretical studies, pioneering modern design principles that emphasized simplicity, geometric forms, and industrial production.
  </p>

  <p>
    Faculty luminaries including Wassily Kandinsky, Paul Klee, Marcel Breuer, and Ludwig Mies van der Rohe developed influential approaches to typography, furniture, textiles, architecture, and visual communication that continue to shape our built environment today.
  </p>

  <p>
    After its closure, Bauhaus masters emigrated worldwide, particularly to America, where they established design programs that disseminated Bauhaus principles globally, cementing the school's legacy as the single most influential design movement of the modern era.
  </p>
`, coordinates: { top: 4, left: 30, width: 31, height: 35 },
        //color: "green",
        zIndex: 10
    },
    {
        id: "ideo",
        name: 'IDEO',
        content: `
  <p>
    IDEO, founded in 1991 through the merger of David Kelley Design and ID Two, stands as one of the world's most influential design consultancies.
  </p>

  <p>
    The firm revolutionized the design industry by popularizing "design thinking," a human-centered approach that integrates user needs, technological possibilities, and business requirements.
  </p>

  <p>
    From creating Apple's first mouse to transforming healthcare experiences and reimagining educational systems, IDEO's multidisciplinary teams have shaped countless products and services that impact daily life.
  </p>

  <p>
    Their collaborative methodology—bringing together diverse perspectives from anthropologists to engineers—has become a gold standard for innovation, while their emphasis on rapid prototyping and iterative design has influenced how organizations worldwide approach problem-solving.
  </p>

  <p>
    IDEO's global impact extends beyond physical products to service design, organizational transformation, and social innovation, cementing their reputation as pioneers who have fundamentally changed how we think about design's role in business and society.
  </p>
`, coordinates: { top: 18, left: 13, width: 30, height: 25 },
        //color: "blue",
        zIndex: 20
    },
    {
        id: "frog",
        name: 'FROG',
        content: `
  <p>
    Frog Design, founded in 1969 by Hartmut Esslinger in Germany's Black Forest as "esslinger design," revolutionized product design by introducing emotional aesthetics to counter the purely functional approach prevalent at the time.
  </p>

  <p>
    The firm gained international recognition through its groundbreaking work for electronics brands like WEGA and Sony, creating iconic products including the standalone television and the Walkman.
  </p>

  <p>
    In 1982, the company was renamed "frog design" when it expanded to California after Steve Jobs commissioned them to develop Apple's design language, resulting in the celebrated Apple IIc system that earned Time Magazine's "Design of the Year" and a place in the Whitney Museum's permanent collection.
  </p>

  <p>
    Throughout its evolution, frog has continuously adapted to technological shifts, expanding from industrial design to incorporate software, digital experiences, and comprehensive brand ecosystems.
  </p>

  <p>
    Now part of Capgemini Invent, frog continues to shape how people interact with technology and services, applying design thinking to create innovative strategies, complex ecosystems, and entirely new businesses across industries worldwide.
  </p>
`, coordinates: { top: 17, left: 49, width: 34, height: 28 },
        //color: "purple",
        zIndex: 30
    },

    {
        id: "PENTAGRAM",
        name: "PENTAGRAM",
        content: `
  <p>
    <strong>Pentagram</strong>, founded in London in 1972 by five partners — Alan Fletcher, Theo Crosby, Colin Forbes, Kenneth Grange, and Mervyn Kurlansky — revolutionized the design industry through its unique organizational structure as a multi-disciplinary, independently-owned design collective where partners maintain equal ownership and creative autonomy.
  </p>

  <p>
    This groundbreaking model, where the owners of the business are simultaneously the creators of the work and primary client contacts, has enabled Pentagram to maintain exceptional design quality and business longevity across five decades while expanding to offices in New York, Austin, and Berlin.
  </p>

  <p>
    The firm's portfolio spans virtually every design discipline, including graphics and identity, strategy, products, packaging, exhibitions, digital experiences, and typefaces, with iconic work for clients ranging from <em>Mastercard, Citibank,</em> and <em>Warner Bros.</em> to cultural institutions like the <em>Guggenheim</em> and the <em>V&amp;A</em>.
  </p>

  <p>
    Pentagram's influence extends beyond its client work through the individual achievements of its partners, including <strong>Paula Scher, Michael Bierut,</strong> and <strong>Eddie Opara</strong>, who have shaped contemporary visual culture through their distinctive voices while contributing to design education, criticism, and advocacy.
  </p>

  <p>
    This combination of collaborative structure, creative independence, and consistent excellence has established Pentagram as arguably the world's most prestigious design consultancy and a model for how creative businesses can thrive while maintaining design integrity.
  </p>
`, coordinates: { top: 35, left: 0, width: 27, height: 36 },
        //color: "yellow",
        zIndex: 40
    },

    {
        id: "ROYAL COLLEGE OF ART",
        name: "ROYAL COLLEGE OF ART",
        content: `
  <p>
    The Royal College of Art (RCA), founded in 1837 as the Government School of Design in London, stands as the world's oldest art and design institution in continuous operation and the only entirely postgraduate art and design university.
  </p>

  <p>
    Initially established to improve British industrial design in response to competition from continental Europe, the RCA evolved dramatically over nearly two centuries, receiving its Royal Charter and university status in 1967.
  </p>

  <p>
    The institution has been instrumental in shaping modern art and design education, pioneering the integration of creative practice with technological innovation through its STEAM (Science, Technology, Engineering, Art and Design, and Mathematics) approach.
  </p>

  <p>
    Throughout its history, the RCA has produced an extraordinary roster of influential alumni who have transformed global visual culture, including Henry Moore, Barbara Hepworth, David Hockney, Ridley Scott, James Dyson, Zandra Rhodes, and Tracey Emin.
  </p>

  <p>
    Consistently ranked as the world's leading art and design university for over a decade, the RCA continues to bridge traditional craft with cutting-edge technology while expanding into new territories such as robotics, AI, advanced materials, and healthcare design, cementing its position as the preeminent institution for advancing art and design's role in addressing complex global challenges.
  </p>
`, coordinates: { top: 39, left: 26, width: 37, height: 31 },
        //color: "orange",
        zIndex: 50
    }, {
        id: "LANDOR & FITCH",
        name: "LANDOR & FITCH",
        content: `
  <p>
    <strong>Landor & Fitch</strong>, founded in 1941 by Walter Landor in San Francisco, pioneered the modern branding industry by introducing consumer research and design methodologies that transformed how companies develop and manage their visual identities.
  </p>

  <p>
    Originally established as Walter Landor Associates, the firm gained prominence through groundbreaking work for major clients including Coca-Cola, British Airways, BP, and FedEx, creating iconic logos and brand systems that have endured for decades.
  </p>

  <p>
    The agency revolutionized the branding process by conducting its operations from the renovated ferryboat <em>Klamath</em> in San Francisco Bay, which served as both studio and living laboratory for consumer research.
  </p>

  <p>
    After merging with retail design consultancy Fitch in 2021, the company evolved into a comprehensive brand transformation agency with global reach, operating across 35 locations with over 1,300 specialists.
  </p>

  <p>
    Now part of WPP, Landor continues to shape how brands connect with consumers through integrated physical, digital, and behavioral experiences, cementing its legacy as one of the most influential forces in the development of modern corporate identity and strategic brand management.
  </p>
`, coordinates: { top: 40, left: 63, width: 37, height: 27 },
        //color: "red",
        zIndex: 60

    },
    {
        id: "RISD",
        name: "RISD",
        content: `
  <p>
    <strong>The Rhode Island School of Design (RISD)</strong>, founded in 1877 by Helen Adelia Rowe Metcalf and a group of forward-thinking women, stands as one of America's first independent colleges dedicated to art and design education.
  </p>

  <p>
    Established as both a school and museum, RISD pioneered a distinctive approach to studio-based learning that has influenced art education globally for nearly 150 years.
  </p>

  <p>
    The institution's innovative curriculum, which combines intensive hands-on studio work with liberal arts studies, has produced generations of influential artists, designers, and creative leaders including glass artist <strong>Dale Chihuly</strong>, filmmaker <strong>Gus Van Sant</strong>, industrial designer <strong>Ayse Birsel</strong>, Talking Heads founder <strong>David Byrne</strong>, and fashion designers <strong>Nicole Miller</strong> and <strong>Tina Lutz</strong>.
  </p>

  <p>
    RISD's impact extends beyond individual alumni to shaping entire creative disciplines through its emphasis on critical thinking, material exploration, and conceptual development.
  </p>

  <p>
    With its renowned faculty, comprehensive facilities, and the complementary RISD Museum housing over 100,000 objects spanning ancient to contemporary art, the institution continues to define excellence in art and design education while adapting to emerging technologies and evolving creative practices, maintaining its position as one of the world's most prestigious and influential centers for creative education.
  </p>
`, coordinates: { top: 63, left: 31, width: 33, height: 36 },
        //color: "cyan",
        zIndex: 70
    },
    {
        id: "PARSONS",
        name: "PARSONS",
        content: `
  <p>
    <strong>Parsons School of Design</strong>, founded in 1896 by American impressionist painter William Merritt Chase as the Chase School of Art, revolutionized design education by pioneering programs in fashion, interior design, advertising, and graphic design—becoming the first institution to offer formal study in these disciplines.
  </p>

  <p>
    Now part of <em>The New School</em> university system, Parsons has shaped the evolution of design practice and education for over a century from its Greenwich Village campus in New York City.
  </p>

  <p>
    The school's innovative pedagogical approach, combining studio practice with critical thinking and social engagement, has produced influential alumni who have transformed global creative industries, including fashion designers <strong>Donna Karan, Marc Jacobs, Tom Ford, Alexander Wang,</strong> and <strong>Jason Wu</strong>; illustrator <strong>Norman Rockwell</strong>; photographer <strong>Steven Meisel</strong>; and interior designer <strong>Victoria Hagan</strong>.
  </p>

  <p>
    Parsons' groundbreaking curriculum, which emphasizes interdisciplinary collaboration, sustainability, and social innovation, continues to influence design education worldwide.
  </p>

  <p>
    The institution's strategic location in New York City — a global center for fashion, art, and design — has facilitated deep connections with industry, creating a powerful ecosystem that bridges education and professional practice while addressing contemporary challenges through design thinking and creative problem-solving.
  </p>
`, coordinates: { top: 60, left: 64, width: 36, height: 40 },
        //color: "black",
        zIndex: 70
    },
    {
        id: "ECAL",
        name: "École cantonale d'art de Lausanne (ECAL)",
        content: `
  <p>
    The <strong>École cantonale d'art de Lausanne (ECAL)</strong>, founded in 1821 as the <em>Ecole cantonale de dessin</em>, stands as one of the world's oldest continuously operating art institutions. It has transformed from a modest provincial drawing school into a globally renowned center for design innovation.
  </p>
  
  <p>
    Initially housed near Lausanne Cathedral and later integrated with the Musée Arlaud, ECAL underwent numerous transformations over its two-century history before adopting its current name in 1986 and subsequently rising to international prominence.
  </p>
  
  <p>
    Under the leadership of figures like <strong>Pierre Keller (1995-2011)</strong> and current director <strong>Alexis Georgacopoulos</strong>, the school developed a distinctive approach combining Swiss precision with contemporary experimentation, particularly excelling in graphic design, photography, industrial design, and digital media.
  </p>
  
  <p>
    ECAL's influence extends through its rigorous curriculum, world-class facilities in the renovated Renens factory building, and strategic collaborations with leading brands including <em>Vitra, Baccarat,</em> and <em>Hermès</em>.
  </p>
  
  <p>
    The institution's global impact is evident through its consistently high rankings, the international recognition of faculty and alumni work, and its ability to bridge traditional Swiss design heritage with cutting-edge innovation, establishing ECAL as a pivotal force in contemporary design education and practice across Europe and beyond.
  </p>
`,
        coordinates: { top: 66, left: 0, width: 32, height: 34 },
        //color: "black",
        zIndex: 70
    },
    {
        id: "ECAL",
        name: "ECAL",
        content: `
  <p>
    The <strong>École cantonale d'art de Lausanne (ECAL)</strong>, founded in 1821 as the <em>Ecole cantonale de dessin</em>, stands as one of the world's oldest continuously operating art institutions. It has transformed from a modest provincial drawing school into a globally renowned center for design innovation.
  </p>
  
  <p>
    Initially housed near Lausanne Cathedral and later integrated with the Musée Arlaud, ECAL underwent numerous transformations over its two-century history before adopting its current name in 1986 and subsequently rising to international prominence.
  </p>
  
  <p>
    Under the leadership of figures like <strong>Pierre Keller (1995-2011)</strong> and current director <strong>Alexis Georgacopoulos</strong>, the school developed a distinctive approach combining Swiss precision with contemporary experimentation, particularly excelling in graphic design, photography, industrial design, and digital media.
  </p>
  
  <p>
    ECAL's influence extends through its rigorous curriculum, world-class facilities in the renovated Renens factory building, and strategic collaborations with leading brands including <em>Vitra, Baccarat,</em> and <em>Hermès</em>.
  </p>
  
  <p>
    The institution's global impact is evident through its consistently high rankings, the international recognition of faculty and alumni work, and its ability to bridge traditional Swiss design heritage with cutting-edge innovation, establishing ECAL as a pivotal force in contemporary design education and practice across Europe and beyond.
  </p>
`, coordinates: { top: 60, left: 10, width: 13, height: 6 },
        //color: "black",
        zIndex: 70
    },];

const textFieldData = [
    {
        id: "about",
        name: "Design Life: A Graphic Designer's Career Journey",
        content: `
  <p><strong>Design Life</strong> is a strategic board game that simulates the professional path of a graphic designer. In this 2-4 player game, success isn't measured by money alone but by <em>"Creative Capital"</em>—a combination of wealth, reputation, and skills.</p>

  <p>Players navigate from education to career peak, making pivotal choices about specialization (<strong>UI/UX, Branding</strong>) and work environments (<strong>Agency, In-House, Freelance</strong>). Along the way, they'll face authentic industry challenges, acquire specialized skills, and build professional standing.</p>

  <p>Unlike traditional career games, <strong>Design Life</strong> reflects the multifaceted nature of creative success. Created with input from professional designers, it offers both entertainment value for board game enthusiasts and educational insights for design students and professionals.</p>

  <p>Whether you're building a freelance empire or climbing the corporate ladder, <strong>Design Life</strong> challenges you to make the strategic decisions that will shape your creative legacy. <strong>Ready to roll the dice?</strong></p>
`
    },
    {
        id: "rulebook",
        name: "Rulebook",
        content: `
  <h2>How to Play Design Life</h2>

  <p>Welcome to <strong>Design Life: A Graphic Designer's Career Journey!</strong> This section provides an overview of the game rules.</p>

  <h3>Game Overview</h3>
  <ul>
    <li><strong>Players:</strong> 2-4 players</li>
    <li><strong>Playing Time:</strong> 60-90 minutes</li>
    <li><strong>Ages:</strong> 12+</li>
  </ul>

  <h3>Objective</h3>
  <p>Achieve the highest <em>"Creative Capital"</em> by the time you reach the Career Peak. Creative Capital combines your Money, Reputation Tokens, and Skill Tokens, reflecting the multifaceted nature of success in the design profession.</p>

  <h3>Setup</h3>
  <ul>
    <li>Place the game board in the center</li>
    <li>Shuffle each card deck (Career, Event, Skill) and place face down</li>
    <li>Choose a player to be the "Banker"</li>
    <li>Each player selects a pawn and places it on START</li>
    <li>Each player receives starting capital ($20,000)</li>
    <li>Players choose their starting path:
      <ul>
        <li>Formal Education: Take a Student Loan ($40,000)</li>
        <li>Self-Taught/Bootcamp: Start with no loan</li>
      </ul>
    </li>
  </ul>

  <h3>Gameplay</h3>
  <p>On your turn:</p>
  <ul>
    <li><strong>Roll and Move:</strong> Roll two dice and move your pawn that number of spaces</li>
    <li><strong>Follow Space Instructions:</strong> Perform the action of the space you landed on:
      <ul>
        <li>(P) Payday: Collect your current salary</li>
        <li>(E) Event: Draw an Event Card and follow instructions</li>
        <li>(C) Challenge: Face an obstacle that may cost money or reputation</li>
        <li>(S) Skill Opportunity: Pay to acquire a Skill Token</li>
        <li>(M) Milestone: Receive rewards and possibly a new Career Card</li>
        <li>(D) Decision: Choose a career path to follow</li>
      </ul>
    </li>
  </ul>

  <h3>Key Decisions</h3>
  <p>Throughout the game, you'll make career-defining choices:</p>
  <ul>
    <li>Education Path: Formal Education (higher debt, more initial skills) vs. Self-Taught (lower debt, slower skill acquisition)</li>
    <li>Specialization: UI/UX, Branding, or remain a Generalist</li>
    <li>Work Environment: Agency, In-House, or Freelance</li>
    <li>Leadership: Opportunities to advance to Art Director, Creative Director, or Studio Owner</li>
  </ul>

  <h3>Resource Management</h3>
  <p>Balance three key resources:</p>
  <ul>
    <li><strong>Money:</strong> Used for skill acquisition, challenge mitigation, and loan repayment</li>
    <li><strong>Reputation Tokens:</strong> Represent your standing in the design community</li>
    <li><strong>Skill Tokens:</strong> Represent your technical and soft skills in design</li>
  </ul>

  <h3>Winning</h3>
  <p>When all players reach the Career Peak, calculate your Creative Capital:</p>
  <p><em>Money + (Reputation Tokens × Value) + (Skill Tokens × Value)</em></p>
  <p>The player with the highest Creative Capital wins!</p>

  <h3>Path-Specific Rules</h3>
  <ul>
    <li><strong>Freelance Path:</strong> Variable income determined by dice roll</li>
    <li><strong>Agency Path:</strong> Higher potential rewards but more competitive challenges</li>
    <li><strong>In-House Path:</strong> More stable income but potentially slower advancement</li>
  </ul>

  <p><strong>Ready to start your design career?</strong> Gather your friends, choose your path, and see who can build the most impressive creative legacy!</p>
`
    }
]

export default function InteractivePage() {
    // const [activeBuilding, setActiveBuilding] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (btnId, buttonType) => {
        if (buttonType === "button") {

            if (activeButton === btnId) {
                setActiveButton(null);
            } else {
                setActiveButton(btnId);
            }
        }
        else if (buttonType === "building") {
            if (activeButton === btnId.id) {
                setActiveButton(null);
            } else {
                setActiveButton(btnId.id);
            }
        }
    };

    // Aktif butonun objesini al
    let activeData = textFieldData.find((btn) => btn.id === activeButton);
    if (!activeData) {
        activeData = buildingData3 && buildingData3.find((btn) => btn.id === activeButton)
    }

    // const handleBuildingClick = (building) => {
    //     setActiveBuilding(activeBuilding === building.id ? null : building.id);
    // };

    return (
        <div className="interactive-page">
            <div className="header">
                <div className="logo-container">
                    <img src={Logo} alt="Binalar" className="logo-image" />
                    <h3 style={{ color: "#FEE8AE" }}>A Creative Journey Through the World of Design</h3>
                </div>

            </div>

            <div className="button-container">
                <button id={"button"} onClick={() => handleButtonClick('about', "button")} style={{ backgroundColor: "#F6AF24", color: "#3E7633" }}>About</button>
                <button onClick={() => handleButtonClick('rulebook', "button")} style={{ backgroundColor: "#3E7633", color: "#F6AF24" }}>Rulebook</button>

                {/* <button onClick={() => window.location.href = "https://youtube.com"} style={{ backgroundColor: "#3E7633", color: "#F6AF24" }}>Rulebook</button> */}
            </div>

            {activeButton && <div className="content-box" key={textFieldData.id}>
                <h2 style={{ color: "#3E7633" }}>{activeData.name}</h2>
                <div
                    style={{ color: "#3E7633" }}
                    dangerouslySetInnerHTML={{ __html: activeData.content }}
                />
            </div>}

            <div className="image-container">
                <img src={myImage2} alt="Binalar" className="building-image" />
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
                        onClick={() => handleButtonClick(building, "building")}
                    ></div>
                ))}

                {/* {activeBuilding && (
                    <div className="info-bubble">
                        {buildingData3
                            .filter((building) => building.id === activeBuilding)
                            .map((building) => (
                                <div key={building.id}>
                                    <h3>{building.name}</h3>
                                    <p>{building.content}</p>
                                </div>
                            ))}
                    </div>
                )} */}
            </div>
        </div>
    );
}
