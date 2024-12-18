import CoachForm from "./CoachForm";
import CreateSvg from "../global/SVGs/CreateSvg";
import CloseSvg from "../global/SVGs/CloseSvg";

type propsType = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideBar = ({ sidebarOpen, setSidebarOpen }: propsType) => {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-40">
      <aside
        id="default-sidebar"
        className={`fixed shadow-lg top-0 right-0 z-40 h-screen transition-transform transform max-w-[814px] w-full lg:w-[814px] ${
          sidebarOpen ? "" : "translate-x-full hidden"
        } 
        md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full  overflow-y-auto   bg-white w-full ">
          <div className="bg-primary h-[51px] px-3 py-3 flex flex-row justify-between items-center">
            <h2 className="text-white text-base flex flex-row gap-1">
              <CreateSvg />
              Create
            </h2>
            <button
              onClick={toggleSidebar}
              className={` top-2 left-2 text-xl transition duration-300 text-white   `}
            >
              <CloseSvg />
            </button>
          </div>

          <CoachForm setSidebarOpen={setSidebarOpen} />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
