// Carousel.tsx
import { type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../styles/carousel.css'; // See CSS below

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
  // emblaRef is attached to the viewport element
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children.map((child, index) => (
          <div className="embla__slide" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};