import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
   return (
      <div>
         <Header />
         <div className="mt-12">
            <Outlet />
         </div>
      </div>
   );
}

export default Layout;
