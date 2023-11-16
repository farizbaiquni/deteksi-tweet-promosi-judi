function NavbarMenuFeature() {
  return (
    <div className="flex items-center justify-center bg-gray-300 py-1">
      <div className=" bg-green-1 mr-4 flex h-12 cursor-pointer flex-col items-center hover:bg-slate-400">
        <h1 className=" flex flex-1 items-center align-middle  font-semibold">
          Check Tweet
        </h1>
        <hr className="h-2 w-28 bg-blue-500" />
      </div>
      <div className=" bg-green-1 ml-4 flex h-12 cursor-pointer flex-col items-center hover:bg-slate-400">
        <h1 className=" flex flex-1 items-center align-middle font-semibold">
          Statistik
        </h1>
        <hr className="h-2 w-28 bg-blue-500" />
      </div>
    </div>
  );
}

export default NavbarMenuFeature;
