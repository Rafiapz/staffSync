import { FC, useState } from "react";
import PaginatedEmployees from "../components/PaginatedEmployees";
import SearchAndSort from "../components/SearchAndSort";
import AddEmployeeForm from "../components/AddEmployeeForm";
import EditEmployee from "../components/EditEmployee";
import { useEmployees } from "../store/EmployeeProvider";

const HomePage: FC = () => {
   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const { getEmployee } = useEmployees();
   const [currentEmployee, setCurrentEmployee] = useState(null);

   const handleEditModal = (id: string) => {
      setIsEditModalOpen(true);
      const employee = getEmployee(id);
      setCurrentEmployee(employee);
   };
   return (
      <>
         <SearchAndSort setIsAddModalOpen={setIsAddModalOpen} />
         <PaginatedEmployees itemsPerPage={10} handleEditModal={handleEditModal} />
         <AddEmployeeForm isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
         <EditEmployee isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} currentEmployee={currentEmployee} />
      </>
   );
};

export default HomePage;
