import React from 'react';
import './Portfolio.css'; // CSS Datei für Styling

function Portfolio() {
  const portfolioItems = [
    { title: 'EventPlanerApp', link: 'https://github.com/alexanderkutzer/praxisprojekt-EventAufgabenPlaner', description: 'EventPlanerApp - Teamarbeit, nach Scrum' },
    { title: 'Projekt 2', link: 'https://example.com/projekt2', description: 'Beschreibung für Projekt 2' },
    { title: 'Projekt 3', link: 'https://example.com/projekt3', description: 'Beschreibung für Projekt 3' },
    
  
  
  
  ];

  return (
    <div className="portfolio-container">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item" onClick={() => window.open(item.link, '_blank')}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
