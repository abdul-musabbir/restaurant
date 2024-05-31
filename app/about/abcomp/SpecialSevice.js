import Slider from "./Slider";

export default function SpecialSevice() {
  return (
    <div>
      <div className="w-full">
        <div>
          <div className="text-center">
            <h2 className="font-bold text-h text-xl xl:text-3xl">
              SPECIAL SERVICE
            </h2>
            <p className="text-reds xl:text-xl">
              What Special services we are offering now
            </p>
          </div>

          <Slider />
        </div>
      </div>
    </div>
  );
}
