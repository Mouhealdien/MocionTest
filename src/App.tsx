import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/coach/SideBar";
import { useLoginMutation } from "./redux/services/Api";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [login] = useLoginMutation();

  const loginHandler = async () => {
    const data = await toast.promise(login("").unwrap(), {
      pending: "pending",
      success: "success",
      error: "faild",
    });

    console.log(data.access_token);
    localStorage.setItem("token", data.access_token);
  };

  return (
    <>
      <div className=" text-primary">
        <ToastContainer />
        <button
          onClick={() => {
            loginHandler();
          }}
          className="px-4 py-2 bg bg-primary mx-5 text-white"
        >
          get token
        </button>
        <button
          onClick={() => {
            setSidebarOpen(true);
          }}
          className="px-4 py-2 bg bg-primary text-white"
        >
          Create
        </button>
        {sidebarOpen && (
          <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}
      </div>
    </>
  );
}

export default App;
