import NavbarHeader from "../../components/NavbarHeader";
import InputTextToCheck from "../../components/InputTextToCheck";
import SidebarMenu from "../../components/SidebarMenu";
import { useState } from "react";
import { MenuFeature } from "../../constants/constants";
import Statistik from "../../components/Statistik";

function Main() {
  const [currentMenu, setCurrentMenu] = useState<MenuFeature>(
    MenuFeature.check,
  );
  const changeCurrentMenu = (menu: MenuFeature) => {
    setCurrentMenu(menu);
  };
  return (
    <div className="h-screen bg-[#F4F2EC]">
      <div className="flex h-full w-full">
        <SidebarMenu
          changeCurrentMenu={changeCurrentMenu}
          currentMenu={currentMenu}
        />
        <div className="flex h-full w-full flex-col">
          <NavbarHeader currentMenu={currentMenu} />
          <div className="mt-11 flex justify-center">
            {currentMenu === MenuFeature.check ? (
              <InputTextToCheck />
            ) : (
              <Statistik />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
