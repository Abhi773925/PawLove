import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './DogCarousel.css'; // Import your CSS file

const DogCarousel = () => {
  // Manually enter the dog image URLs
  const dogImages = [
    "https://dogsbestlife.com/wp-content/uploads/2022/05/how-big-do-dogs-get-scaled.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pYYtd922cSZDA-GLwJb2ToTk7sEeHE_Psw&s",
    "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg",
    "https://cdn.thezebra.com/zfront/media/production/images/running-white-dog.format-jpeg.jpegquality-70.width-960.jpg",
    "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg"
    // Add more URLs as needed
  ];

  return (
    <div className="board">
      <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        // dynamicHeight={true} 
        autoPlay={true} 
        interval={2000} 
        stopOnHover={true} 
      >
        {dogImages.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              className="carousel-image" 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DogCarousel;
