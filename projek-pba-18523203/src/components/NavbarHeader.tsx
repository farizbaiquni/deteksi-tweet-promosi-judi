function NavbarHeader() {
  return (
    <nav className=" bg-[#1b3015]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-16 items-center justify-between">
          <div className=" flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <p className="rounded-md px-3 py-2 font-sans text-lg font-bold text-gray-300 no-underline">
                  Cek apakah tweet mengandung promosi judi
                </p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6">
              <img className="h-12 w-12" src="/icons/github.png" alt="github" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarHeader;
