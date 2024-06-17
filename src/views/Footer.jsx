// local imports
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  newsletter,
} from "../data";

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)]">
      <div className="max-w-[1490px] mx-auto px-10 py-[120px]">
        <div className="flex flex-col items-center gap-12 xl:items-start xl:flex-row xl:justify-between">
          <div className="flex flex-col items-center w-full xl:w-auto xl:items-start">
            <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
              {newsletter}
            </h2>
            <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-11">
              <input
                type="text"
                placeholder="Email"
                className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base
                  xs:text-lg placeholder-white"
              />
              <div
                className="absolute top-2/4 -translate-y-2/4 right-3 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] px-6 py-2.5 rounded-full
                cursor-pointer text-white"
              >
                Subscribe
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-12 md:flex-row md:items-start">
            <div className="flex flex-col w-full gap-12 xs:flex-row md:w-auto">
              {footerLinksColumnOne.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base font-bold text-center lg:text-lg xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="flex justify-center w-full mx-auto xl:justify-start"
                      >
                        <li className="text-sm font-medium text-center cursor-pointer md:text-base xl:text-start w-fit">
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full gap-12 xs:flex-row md:w-auto">
              {footerLinksColumnTwo.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base font-bold text-center lg:text-lg xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="flex justify-center w-full mx-auto xl:justify-start"
                      >
                        <li
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && "cursor-pointer"
                          } text-center xl:text-start w-fit`}
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white my-12" />

        <h6 className="text-base text-center text-white lg:text-lg">
          &copy; Daunku - All rights reserved
        </h6>
      </div>
    </div>
  );
};

export default Footer;
