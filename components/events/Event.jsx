"use client";
import Image from "next/image";
import React from "react";

const events = [
  {
    title: "UmmedUtsav 2022",
    date: "2022-12-05",
    image: "/img/events/e1.jpg",
    description: "An amazing event with enthusiastic participation and great success.",
  },
  {
    title: "Mr. Chetan Cheetah",
    date: "2022-11-20",
    image: "/img/events/e2.jpg",
    description: "Honoring CRPF officer Chetan Cheetah with an inspiring event.",
  },
  {
    title: "Walk O Run 2018",
    date: "2018-02-19",
    image: "/img/events/e3.jpg",
    description: "One of the biggest public health events in India.",
  },
  {
    title: "Kabir Cafe 2019",
    date: "2019-08-10",
    image: "/img/events/e4.jpg",
    description: "A soulful musical evening organized by Shree Ummed Club Kota.",
  },
  {
    title: "Felicitation",
    date: "2023-01-15",
    image: "/img/events/e5.jpg",
    description: "A recognition event celebrating inspiring leaders.",
  },
  {
    title: "Flag Hoisting",
    date: "2023-01-26",
    image: "/img/events/e6.jpg",
    description: "Republic Day celebrations with national pride.",
  },
];

const Event = () => {
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      <h2 className="text-center fw-bold mb-4">✨ Events</h2>
      
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <Image
              src={event.image}
              height={400}
              width={700}
              alt={event.title}
              className="event-image"
            />
            <div className="event-content">
              <h4>{event.title}</h4>
              <p className="event-date">
                📅 {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .event-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        .event-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
        }
        .event-card:hover {
          transform: scale(1.03);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
        }
        .event-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
        }
        .event-content {
          padding-top: 15px;
        }
        .event-date {
          font-size: 14px;
          color: #555;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Event;
