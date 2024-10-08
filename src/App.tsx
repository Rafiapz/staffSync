import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
   return (
      <>
         <Toaster position="top-center" containerClassName="text-red-500" />
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<HomePage />} />
               <Route>
                  <Route path="*" element={<PageNotFound />} />
               </Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;
