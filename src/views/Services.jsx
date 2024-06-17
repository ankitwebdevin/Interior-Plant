// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";

const Services = () => {
  return (
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:justify-between w-full"
    >
      {services.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col items-center w-full gap-4 lg:flex-row">
            <img
              src={service.icon}
              alt={service.title}
              className="max-h-[84px] max-w-[84px]"
            />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                {service.title}
              </h3>

              <h6 className="text-base font-medium text-center lg:text-start lg:text-lg text-fontGray">
                {service.subtitle}
              </h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Services;
