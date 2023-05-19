import Logo from "../assets/Logo.png";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="w-full bg-[#17212d] py-6">
      <div className=" mx-auto flex w-5/6  flex-col gap-6 text-white lg:flex-row lg:items-center lg:gap-16">
        <div className="mt-0 flex basis-2/5 flex-col">
          <img alt="logo" src={Logo} className="mb-2 w-[100px]" />
          <p className="mb-2 text-sm">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="flex basis-[30%] flex-col lg:pl-10">
          <h4 className="mb-2 font-bold">Links</h4>
          <p className="mb-2">Massa orci senectus</p>
          <p className="mb-2">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="flex basis-[30%] flex-col">
          <h4 className="mb-4 font-bold">Contact Us</h4>
          <p className="mb-2">Tempus metus mattis risus volutpat egestas.</p>
          <div className="flex gap-3 py-2">
            <a
              href=""
              className="inline-block h-[30px] w-[30px] rounded-full bg-[#3b5998] text-center leading-[32px]"
            >
              <i className="fa-brands fa-facebook-f text-white"></i>
            </a>
            <a
              href=""
              className="inline-block h-[30px] w-[30px] rounded-full bg-[#00acee] text-center leading-[32px]"
            >
              <i className="fa-brands fa-twitter text-white"></i>
            </a>
            <a
              href=""
              className="inline-block h-[30px] w-[30px] rounded-full bg-[#0072b1] text-center leading-[32px]"
            >
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
