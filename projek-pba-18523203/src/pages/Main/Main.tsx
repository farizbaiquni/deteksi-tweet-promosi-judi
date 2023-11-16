import { useState } from "react";
import NavbarHeader from "../../components/NavbarHeader";
import InputTextToCheck from "../../components/InputTextToCheck";

function Main() {
  return (
    <div className="h-screen bg-[#F4F2EC]">
      <NavbarHeader />
      <div className="mt-11 flex justify-center">
        <InputTextToCheck />
      </div>
    </div>
  );
}

export default Main;
