import NavbarHeader from "../../components/NavbarHeader";
import InputTextToCheck from "../../components/InputTextToCheck";
import NavbarMenuFeature from "../../components/NavbarMenuFeature";
import SidebarMenu from "../../components/SidebarMenu";

function Main() {
  return (
    <div className="h-screen bg-[#F4F2EC]">
      <div className="flex h-full w-full">
        <SidebarMenu />
        <div className="flex h-full w-full flex-col">
          <NavbarHeader />
          <div className="mt-11 flex justify-center">
            <InputTextToCheck />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
