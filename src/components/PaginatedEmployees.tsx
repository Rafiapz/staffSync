import  { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import EmployeesList from "./EmployeesList";
import { useEmployees } from "../store/EmployeeProvider";

const PaginatedEmployees: FC<{ itemsPerPage: number; handleEditModal: any }> = ({ itemsPerPage, handleEditModal }) => {
   const { employees } = useEmployees();
   const [itemOffset, setItemOffset] = useState(0);

   const endOffset = itemOffset + itemsPerPage;
   const currentItems: any = employees.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(employees.length / itemsPerPage);

   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % employees.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
   };

   return (
      <>
         <EmployeesList employees={currentItems} handleEditModal={handleEditModal} />
         <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-center space-x-2 mt-4 text-white"
            pageClassName="px-3 py-2 border border-green-300 rounded-lg cursor-pointer hover:bg-green-200"
            pageLinkClassName="text-sm text-green-600"
            previousClassName="px-3 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600"
            nextClassName="px-3 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600"
            previousLinkClassName="text-sm font-semibold"
            nextLinkClassName="text-sm font-semibold"
            breakClassName="px-3 py-2 text-green-500"
            breakLinkClassName="text-sm"
            activeClassName="bg-green-500 text-white"
            disabledClassName="opacity-50 cursor-not-allowed"
         />
      </>
   );
};

export default PaginatedEmployees;
