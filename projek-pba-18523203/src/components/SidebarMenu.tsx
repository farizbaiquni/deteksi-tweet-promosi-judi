import { MenuFeature } from "../constants/constants";

type PropsType = {
  changeCurrentMenu: (menu: MenuFeature) => void;
  currentMenu: MenuFeature;
};

function SidebarMenu(props: PropsType) {
  return (
    <div className="relative bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <div className="mx-6 mt-10 flex items-center justify-start">
            <img className="h-10" src="/icons/spy.png" />
            <span className="ml-4 text-2xl font-bold text-gray-600 dark:text-gray-300">
              Deteksi Promosi Judi
            </span>
          </div>
          <nav className="mt-10 px-6 ">
            <a
              onClick={() => {
                props.changeCurrentMenu(MenuFeature.check);
              }}
              className={`my-6 flex items-center rounded-lg p-2 
              transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800  
              dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                props.currentMenu === MenuFeature.check
                  ? "bg-gray-100 text-gray-800 dark:bg-[#314525]"
                  : "text-gray-600 "
              } `}
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b3b3b3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span className="mx-4 text-lg font-normal">Cek Tweet</span>
              <span className="flex-grow text-right"></span>
            </a>
            <a
              onClick={() => {
                props.changeCurrentMenu(MenuFeature.statistic);
              }}
              className={`my-6 flex items-center rounded-lg p-2 
              transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800  
              dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                props.currentMenu === MenuFeature.statistic
                  ? "bg-gray-100 text-gray-800 dark:bg-[#314525]"
                  : "text-gray-600 "
              } `}
              href="#"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="m-auto"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
              </svg>
              <span className="mx-4 text-lg font-normal">Statistik</span>
              <span className="flex-grow text-right"></span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
