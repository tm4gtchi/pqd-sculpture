import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumbnail } from "./GalleryThumb";

const Gallery = ({ projects }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideLength, setSlideLength] = useState([])
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    async function getSlideLength(){
      if(!projects.gallery.length) return;
      let length = [];
        for (let i = 0; i < projects.gallery.length; i++){
            length.push(i)
          }
        setSlideLength(length)
    } getSlideLength();
  }, [])

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport large_img" ref={mainViewportRef}>
          <div className="embla__container">
            {projects.gallery.map((g, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img 
                    className="embla__slide__img"
                    src={g.url} 
                    alt="image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {projects.gallery.map((g, index) => (
              <Thumbnail
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={g.url}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
