const EventCard = ({ title, description, imgSrc }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-72">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default EventCard;
  