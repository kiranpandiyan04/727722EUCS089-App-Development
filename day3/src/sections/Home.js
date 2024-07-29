import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const featuresData = [
  {
    icon: "https://via.placeholder.com/64?text=Event+Planning",
    title: "Event Planning",
    description: "Organize your events seamlessly with our intuitive planning tools."
  },
  {
    icon: "https://via.placeholder.com/64?text=Decorations",
    title: "Party Decorations",
    description: "Choose from a variety of decoration options to make your event stunning."
  },
  {
    icon: "https://via.placeholder.com/64?text=Guest+Management",
    title: "Guest Management",
    description: "Easily manage your guest list and RSVPs."
  },
  {
    icon: "https://via.placeholder.com/64?text=Catering",
    title: "Food & Catering",
    description: "Select catering options that suit your event's theme and budget."
  },
  {
    icon: "https://via.placeholder.com/64?text=Entertainment",
    title: "Entertainment",
    description: "Find the perfect entertainment for your event, from DJs to live bands."
  },
];

const galleryImages = [
  "https://via.placeholder.com/300x200?text=Party+Scene+1",
  "https://via.placeholder.com/300x200?text=Party+Scene+2",
  "https://via.placeholder.com/300x200?text=Party+Scene+3",
  "https://via.placeholder.com/300x200?text=Party+Scene+4",
  "https://via.placeholder.com/300x200?text=Party+Scene+5",
  "https://via.placeholder.com/300x200?text=Party+Scene+6",
];

const Home = () => {
  return (
    <>
      <div id="home" className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
        <Navbar />
        <div className="text-center mt-8">
          <h1 className="text-5xl font-bold text-white">Party Management App</h1>
          <p className="mt-4 text-lg text-white">Your ultimate solution for organizing unforgettable events!</p>
        </div>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Contact Us
          </a>
        </div>
      </div>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Key Features</h2>
          <div className="flex flex-wrap justify-center">
            {featuresData.map((feature, index) => (
              <div key={index} className="m-4 p-6 bg-white rounded-lg shadow-md max-w-xs">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get Started Today!</h2>
          <p className="mb-4 text-lg text-gray-700">Join thousands of satisfied users and make your next party unforgettable!</p>
          <Link to="/login-signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </>
  );
};
export default Home;

