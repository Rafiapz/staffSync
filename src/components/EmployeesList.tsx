import { FC } from "react";
import { IEmployee } from "../interface/IEmployee";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEmployees } from "../store/EmployeeProvider";
import toast from "react-hot-toast";

const EmployeesList: FC<{ employees: IEmployee[]; handleEditModal: any }> = ({ employees, handleEditModal }) => {
   const { removeEmployee } = useEmployees();

   const handleEdit = (id: string) => {
      handleEditModal(id);
   };

   const handleDelete = (id: string) => {
      removeEmployee(id);
      toast.success("Deleted successfully");
   };
   return (
      <div className="flex flex-col">
         <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
               <div className="overflow-hidden border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Sl.No.
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Name
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Position
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Department
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Email
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Phone
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Date of Birth
                           </th>
                           <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Actions
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((employee: any) => (
                           <tr key={employee?.id}>
                              <td className="px-6 py-4 text-sm text-gray-500">{employee?.id}</td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-900">{employee?.name}</td>
                              <td className="px-6 py-4 text-sm text-gray-500">{employee?.position}</td>
                              <td className="px-6 py-4 text-sm text-gray-500">{employee?.department}</td>
                              <td className="px-6 py-4 text-sm text-gray-500">{employee?.email}</td>
                              <td className="px-6 py-4 text-sm text-gray-500">{employee?.phone}</td>
                              <td className="px-6 py-4 text-sm text-gray-500">{employee?.dateOfBirth}</td>
                              <td className="px-6 py-4 text-sm text-gray-500 flex space-x-2">
                                 <button
                                    onClick={() => handleEdit(employee?.id)}
                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                                 >
                                    Edit
                                 </button>
                                 <button
                                    onClick={() => handleDelete(employee?.id)} // Call the delete function
                                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                                 >
                                    <FontAwesomeIcon icon={faTrashAlt} className="w-6 h-6" />
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EmployeesList;
