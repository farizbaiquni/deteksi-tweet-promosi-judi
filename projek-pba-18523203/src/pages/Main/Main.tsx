import NavbarHeader from "../../components/NavbarHeader";
import InputTextToCheck from "../../components/InputTextToCheck";
import SidebarMenu from "../../components/SidebarMenu";
import { useState } from "react";
import { MenuFeature } from "../../constants/constants";
import Statistik from "../../components/Statistik";
import UploadFileExcel from "../../components/UploadFileExcel";

function Main() {
  const [currentMenu, setCurrentMenu] = useState<MenuFeature>(
    MenuFeature.statistic,
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
              <div>
                <Statistik />
                <UploadFileExcel />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
