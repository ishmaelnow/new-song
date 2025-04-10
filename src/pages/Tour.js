import React from 'react';

export default function Tour() {
  const events = [
    { date: 'April 15', city: 'Chicago, IL', venue: 'Metro Club' },
    { date: 'May 10', city: 'Atlanta, GA', venue: 'Fox Theatre' },
    { date: 'June 5', city: 'New York, NY', venue: 'Madison Square Garden' },
  ];

  return (
    <section>
      <h2>Upcoming Tour Dates</h2>
      <div className="tour-list">
        {events.map((event, index) => (
          <div className="tour-card" key={index}>
            <h4>{event.date}</h4>
            <p>{event.city}</p>
            <p>{event.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
