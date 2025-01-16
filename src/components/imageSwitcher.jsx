import React, { useState } from "react";


const ImageSwitcher = () => {
  // Array de pares [imagemOriginal, imagemHover]
  const images = [
    { original: "/Screenshot_20250115-124645~2.jpg", hover: "/Screenshot_20250115-124626~2.jpg" },
    { original: "/Screenshot_20250115-124708~2.jpg", hover: "/Screenshot_20250115-124719~3.jpg" },
    { original: "/Screenshot_20250115-124819~2.jpg", hover: "/Screenshot_20250115-124828~2.jpg" },
    { original: "/Screenshot_20250115-124855~2.jpg", hover: "/Screenshot_20250115-124908~2.jpg" },
    { original: "/Screenshot_20250115-130806~2.jpg", hover: "/Screenshot_20250115-130817~2.jpg" },
    { original: "/Screenshot_20250115-130714~2.jpg", hover: "/Screenshot_20250115-130745~2.jpg" },
    { original: "/Screenshot_20250115-130637~2.jpg", hover: "/Screenshot_20250115-130617~2.jpg" },
    { original: "/Screenshot_20250115-124542~2.jpg", hover: "/Screenshot_20250115-124607~2.jpg" },
  ];

  // Estado para controlar a imagem ativa (opcional para o preview principal)
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div className="produtos-container-bolos">
      {images.map((image, index) => (
        <div key={index} className="produtos-bolos" >
          {/* Cada imagem individual */}
          <img
            src={currentImage === index ? image.hover : image.original} // Mostra a imagem correta
            alt={`Imagem ${index + 1}`}
            onMouseEnter={() => setCurrentImage(index)} // Altera para a imagem "hover"
            onMouseLeave={() => setCurrentImage(null)} // Volta para a imagem original
      
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSwitcher;
