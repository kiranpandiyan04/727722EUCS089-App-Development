import EventCard from "../components/EventCard";
import { events } from "../utils/eventData";

const Services = () => {
  return (
    <div id="services" className="container mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-500 mt-16 pt-24">
      {/* Ensure enough padding at the top to avoid overlap with the navbar */}
      <h2 className="text-4xl font-bold mb-6 text-center text-white animated-gradient-text">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 9).map((event, index) => (
          <div key={index} className="transition-transform duration-300 transform hover:scale-105">
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
