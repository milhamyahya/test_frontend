import { useState } from 'react';

export const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cards data with image paths
  const cards = [
    { image: 'img/whiskas.jpg', title: 'Card 1', content: 'Content for Card 1' },
    { image: 'img/whiskas.jpg', title: 'Card 2', content: 'Content for Card 2' },
    { image: 'img/whiskas.jpg', title: 'Card 3', content: 'Content for Card 3' },
    { image: 'img/whiskas.jpg', title: 'Card 4', content: 'Content for Card 4' },
    { image: 'img/whiskas.jpg', title: 'Card 5', content: 'Content for Card 5' },
  ];

  // Update the slide index
  const nextSlide = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-11/12 xl:w-4/5 m-auto bg-none p-4">
      {/* Slider Container */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="relative w-full">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${cards.length * 33.3333}%`, // Ensure all cards fit within the container
              }}
            >
              {/* Map through the cards but only show 3 at a time */}
              {cards.map((card, index) => (
                <div key={index} className="w-1/4 px-2"> {/* Change w-1/3 to w-1/4 for smaller cards */}
                  <div className="bg-white rounded-lg shadow-lg p-5">
                    {/* Card Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p>{card.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-2"
            onClick={prevSlide}
          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-2"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
