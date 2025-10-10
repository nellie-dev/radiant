import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section relative">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        {isMobile ? (
          <img
            src="/images/footer-splash.png"
            className="absolute top-0 object-contain z-0"
          />
        ) : (
          <img
            src="/images/splash.png"
            className="absolute w-full h-full top-0 left-0 object-cover z-0"
          />
        )}

        <div className="relative z-10">
          <div className="overflow-hidden">
            <h1 className="general-title text-center text-milk py-5">
              #SIMPLYRADIANT
            </h1>
          </div>

          <div className="flex-center gap-5 md:mt-20 mt-5">
            <div className="social-btn">
              <img src="./images/yt.svg" alt="" />
            </div>
            <div className="social-btn">
              <img src="./images/insta.svg" alt="" />
            </div>
            <div className="social-btn">
              <img src="./images/tiktok.svg" alt="" />
            </div>
          </div>

          <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-family-body md:text-lg font-medium">
            <div className="flex items-center md:gap-16 gap-5">
              <div>
                <p>Link One</p>
              </div>
              <div>
                <p>Link Two</p>
                <p>Link Three</p>
                <p>Link Four</p>
              </div>
              <div>
                <p>Link Five</p>
                <p>Link Six</p>
                <p>Link Seven</p>
              </div>
            </div>

            <div className="md:max-w-lg">
              <p>
                Unlock Your Glow — Stay Updated with New Skin Care Releases, Routines, and More!
              </p>
              <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full placeholder:font-avenir placeholder:text-[#999999]"
                />
                <img src="/images/arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>

          <div className="copyright-box">
            <p>Copyright © 2025 Radiant - All Rights Reserved</p>
            <div className="flex items-center gap-7">
              <p>Privacy Policy</p>
              <p>Terms of Sеrvice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
