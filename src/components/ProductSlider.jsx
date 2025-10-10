import { useGSAP } from "@gsap/react";
import { productlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductSlider = () => {
  const sliderRef = useRef();

 const isTablet = useMediaQuery({ query: "(max-width: 768px)", });

  useGSAP(
    () => {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      // Horizontal scroll GSAP animation 
      if (!isTablet){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".product-section",
            start: "1% top",
            end: `+=${scrollAmount + 1500}px`,
            scrub: true,
            pin: true,
          },
        });

        tl.to(".product-section", {
          x: `-${scrollAmount + 1500}px`,
          ease: "power1.inOut",
        });
      } else {
        // clear transforms for mobile layout
        gsap.set(
          [
            ".product-section",
            ".scents",
            ".products",
            ".first-text-split",
            ".second-text-split",
          ],
          { clearProps: "all" }
        );
      }

      // Title scroll animation
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".product-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".product-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    },
    {
      dependencies: [isTablet], // re-run GSAP when screen size changes
      revertOnUpdate: true, // automatically revert animations before re-running
    }
  );

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="products">
        {productlists.map((product) => (
          <div
            key={product.name}
            className={`relative z-30 lg:w-[50vw] w-90 lg:h-[90vh] md:w-[80vw] md:h-[70vh] h-80 flex-none ${product.rotation}`}
          >
            <img
              src={`/images/${product.color}-bg.png`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${product.color}-bottle.png`}
              alt=""
              className="bottles"
            />

            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;

