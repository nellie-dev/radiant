import ProductTitle from "../components/ProductTitle";
import ProductSlider from "../components/ProductSlider";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[50%] flex-none h-90 lg:h-full md:mt-10 xl:mt-2">
          <ProductTitle />
        </div>
        <div className="h-full">
          <ProductSlider />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
