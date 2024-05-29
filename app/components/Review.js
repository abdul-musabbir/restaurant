import { TestimonialSlider } from "../client/AllClientComponents";

function Review() {
  return (
    <div className="pb-10">
      <div className="flex mx-auto w-11/12 xl:w-[1200px]">
        <div className="w-full">
          <div>
            <h2 className="text-center font-bold text-reds text-xl sm:text-2xl lg:text-3xl">
              Testimonial
            </h2>
            <h3 className="text-h font-bold text-2xl text-center sm:text-3xl lg:text-5xl">
              Review <span className="text-reds">form our guests</span>
            </h3>
          </div>

          <div className="mt-10">
            <div>
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
