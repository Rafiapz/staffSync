import React, { useState } from "react";
import { useEmployees } from "../store/EmployeeProvider";

const SearchAndSort: React.FC<any> = ({ setIsAddModalOpen }) => {
   const [query, setQuery] = useState<string>("");
   const { searchEmployee } = useEmployees();
   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);

      searchEmployee(query);
   };



   const handleAddEmployee = () => {
      setIsAddModalOpen(true);
   };



   return (
      <div className="flex justify-between items-center w-full border-2 mt-5 bg-white p-4 shadow-md rounded-lg">
         <div className="w-1/3">
            <div className="flex items-center space-x-2">
               <label htmlFor="search" className="text-gray-700 font-medium">
                  Search
               </label>
               <input
                  id="search"
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>
         </div>



         <div className="w-1/4 flex justify-end">
            <button
               onClick={handleAddEmployee}
               className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-200 flex items-center"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
               </svg>
               Add Employee
            </button>
         </div>
      </div>
   );
};

export default SearchAndSort;
