import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

  const thumbItems = (thumbnailImg, [setThumbIndex, setThumbAnimation]) => {
    return thumbnailImg.map((artwork, index) => (
        <div className="thumb" onClick={() => (setThumbIndex(index), setThumbAnimation(true))}>
          {artwork.url}
        </div>
    ));
  };

const Gallery = ({ thumbnailImg }) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(thumbnailImg, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };
    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return [
       <AliceCarousel
        className="alice-carousel__stage"
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={800}
            disableDotsControls
            disableButtonsControls
            infinite
            items={thumbnailImg}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
       />,
       <div className="thumbs flex flex-row place-content-start">
          <div className="alice-carousel__prev-btn-item" 
            onClick={slidePrev}>&lang; CLICK PREV</div>
           <AliceCarousel
                activeIndex={thumbIndex}
                autoWidth
                disableDotsControls
                disableButtonsControls
                items={thumbnailImg}
                mouseTracking={false}
                onSlideChanged={syncThumbs}
                touchTracking={!mainAnimation}
           />
           <div className="alice-carousel__next-btn-item" 
            onClick={slideNext}>&rang; CLICK NEXT </div>
       </div>
    ]
}
export default Gallery;

