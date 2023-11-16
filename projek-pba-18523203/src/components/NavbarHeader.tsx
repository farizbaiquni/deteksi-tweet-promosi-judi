import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarHeader() {
  return (
    <div>
      <nav className=" bg-slate-900">
        <div className="px-8 py-2 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img
                  className="w-10 h-10"
                  src="/icons/spy.png"
                  alt="detection"
                />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <a
                    className="text-gray-200 px-3 py-2 rounded-md no-underline font-bold text-xl font-sans"
                    href="/"
                  >
                    Deteksi Promosi Judi
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <img className="w-8 h-8" src="/icons/github.png" alt="github" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHeader;
