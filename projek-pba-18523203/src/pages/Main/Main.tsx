import NavbarHeader from "../../components/NavbarHeader";
import InputTextToCheck from "../../components/InputTextToCheck";
import SidebarMenu from "../../components/SidebarMenu";
import { useState, useEffect } from "react";
import {
  MenuFeature,
  ResultPredictionType,
  StatistikMenuFeature,
} from "../../constants/constants";
import Statistik from "../../components/Statistik";
import UploadFileExcel from "../../components/UploadFileExcel";

function Main() {
  const [currentMenu, setCurrentMenu] = useState<MenuFeature>(
    MenuFeature.statistic,
  );
  const [displayMode, setDisplayMode] = useState<StatistikMenuFeature>(
    StatistikMenuFeature.upload,
  );
  const [resultPrediction, setResultPrediction] =
    useState<ResultPredictionType | null>(null);

  const onChangeResultPrediction = (prediction: ResultPredictionType) => {
    setResultPrediction(prediction);
  };

  const changeCurrentMenu = (menu: MenuFeature) => {
    setCurrentMenu(menu);
  };

  useEffect(() => {
    console.log("=== NEW DATA ===");
    console.log(resultPrediction);
  }, [resultPrediction]);

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
                {displayMode === StatistikMenuFeature.upload ? (
                  <UploadFileExcel
                    onChangeResultPrediction={onChangeResultPrediction}
                  />
                ) : (
                  <Statistik />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
