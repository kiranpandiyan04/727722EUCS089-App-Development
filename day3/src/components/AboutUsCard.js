const AboutUsCard = ({ title, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-72">
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default AboutUsCard;
  