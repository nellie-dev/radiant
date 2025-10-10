import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing RADIANT
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Anti-Aging"}
              color={"#FAEAEA"}
              bg={"#9B5DE5"}
              className={"first-title"}
              borderColor={"#4B1D5F"}
            />
            <ClipPathTitle
              title={"Vitamin Enriched"}
              color={"#2E2D2F"}
              bg={"#FF8C42"}
              className={"second-title"}
              borderColor={"#4B1D5F"}
            />
            <ClipPathTitle
              title={"Endlessly replenishing"}
              color={"#FAEAEA"}
              bg={"#7A2E6E"}
              className={"third-title"}
              borderColor={"#4B1D5F"}
            />
            <ClipPathTitle
              title={"Toxin Free"}
              color={"#2E2D2F"}
              bg={"#CBA3F5"}
              className={"fourth-title"}
              borderColor={"#4B1D5F"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
