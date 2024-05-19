import "./Slideshow.scss";
import prevBtn from "../../Assets/Pictures/prev-btn.png";
import nextBtn from "../../Assets/Pictures/next-btn.png";
import { useState, useEffect } from "react";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function goToNext() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  useEffect(() => {
    const prevBtnElement = document.querySelector('.prev-btn');
    const nextBtnElement = document.querySelector('.next-btn');

    if (prevBtnElement && nextBtnElement) {
      prevBtnElement.addEventListener('click', goToPrevious);
      nextBtnElement.addEventListener('click', goToNext);
    }

    return () => {
      if (prevBtnElement && nextBtnElement) {
        prevBtnElement.removeEventListener('click', goToPrevious);
        nextBtnElement.removeEventListener('click', goToNext);
      }
    };
  }, [currentIndex, pictures.length]);

  return (
    <div className="carrousel">
      {pictures.length === 0 || pictures.every((element) => !element) ? (
        <h2 className="carrousel__no-photo-msg">Pas de photo disponible ..</h2>
      ) : (
        <div>
          {pictures.length > 1 && (
            <img
              className="carrousel__nav-btn prev-btn"
              src={prevBtn}
              alt="précédente"
            />
          )}
          <img src={pictures[currentIndex]} className="carrousel__slides" />
          {pictures.length > 1 && (
            <img
              className="carrousel__nav-btn next-btn"
              src={nextBtn}
              alt="suivante"
            />
          )}
          {pictures.length > 1 && (
            <div className="carrousel__slide-number">
              {currentIndex + 1} / {pictures.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
