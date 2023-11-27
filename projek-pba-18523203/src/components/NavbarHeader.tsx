import { MenuFeature } from "../constants/constants";

type PropsType = {
  currentMenu: MenuFeature;
};

function NavbarHeader(props: PropsType) {
  return (
    <nav className=" bg-[#2a4a21]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-16 items-center justify-between">
          <div className=" flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <p className="rounded-md px-3 py-2 font-sans text-xl font-bold text-gray-300 no-underline">
                  {props.currentMenu === MenuFeature.check
                    ? "Cek apakah tweet mengandung promosi judi"
                    : "Visualisasi statistik"}
                </p>
              </div>
            </div>
          </div>
          <div className="block ">
            <div className=" relative ml-4 flex items-center md:ml-6">
              <a
                href="https://github.com/farizbaiquni"
                target="_blank"
                className="peer"
              >
                <img
                  className="h-12 w-12"
                  src="/icons/github.png"
                  alt="github"
                />
              </a>
              <p className="invisible absolute right-0 top-12 whitespace-nowrap bg-slate-900 px-2 text-slate-300 opacity-75 peer-hover:visible">
                Fariz Baiquni
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarHeader;
