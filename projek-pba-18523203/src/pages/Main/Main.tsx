import NavbarHeader from "../../components/NavbarHeader";
import InputTextToCheck from "../../components/InputTextToCheck";
import SidebarMenu from "../../components/SidebarMenu";
import { useState, useEffect } from "react";
import {
  MenuFeature,
  RatioPredictionType,
  ResultPredictionGroupByDateType,
  ResultPredictionType,
  StatistikMenuFeature,
} from "../../constants/constants";
import Statistik from "../../components/Statistik";
import UploadFileExcel from "../../components/UploadFileExcel";

import { exampleDataResultPrediction } from "../../constants/ExampleResultPreditionData";
import { exampleDataRatioPrediction } from "../../constants/ExampleRatioPredictionData";
import { exampleDataResultPredictionByDate } from "../../constants/ExampleRatioPredictionGroupByDateData";

function Main() {
  const [currentMenu, setCurrentMenu] = useState<MenuFeature>(
    MenuFeature.check,
  );
  const [displayMode, setDisplayMode] = useState<StatistikMenuFeature>(
    StatistikMenuFeature.statistic,
  );
  const [resultPrediction, setResultPrediction] =
    useState<Array<ResultPredictionType> | null>(exampleDataResultPrediction);
  const [resultPredictionGroupByDate, setresultPredictionByDate] =
    useState<Array<ResultPredictionGroupByDateType> | null>(
      exampleDataResultPredictionByDate,
    );
  const [ratioPrediction, setRatioPrediction] =
    useState<RatioPredictionType | null>(exampleDataRatioPrediction);

  const onChangeResultPrediction = (
    prediction: Array<ResultPredictionType>,
  ) => {
    setResultPrediction(prediction);
  };

  const onChangeRasioPrediksi = (rasio: RatioPredictionType) => {
    setRatioPrediction(rasio);
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
        <div className="flex h-full w-full flex-col overflow-x-hidden">
          <NavbarHeader currentMenu={currentMenu} />
          {currentMenu === MenuFeature.check ? (
            <InputTextToCheck />
          ) : (
            <div className="overflow-y-auto">
              {displayMode === StatistikMenuFeature.upload ? (
                <UploadFileExcel
                  onChangeResultPrediction={onChangeResultPrediction}
                  onChangeRasioPrediksi={onChangeRasioPrediksi}
                />
              ) : resultPrediction &&
                ratioPrediction &&
                resultPredictionGroupByDate ? (
                <Statistik
                  resultPrediction={resultPrediction}
                  ratioPrediction={ratioPrediction}
                  resultPredictionGroupByDate={resultPredictionGroupByDate}
                />
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
