import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { FC } from "react";
import { employeeSchema } from "../schema/employeeSchema";
import { IEmployee } from "../interface/IEmployee";
import toast from "react-hot-toast";
import { useEmployees } from "../store/EmployeeProvider";

const AddEmployeeForm: FC<{ isAddModalOpen: boolean; setIsAddModalOpen: any }> = ({ isAddModalOpen, setIsAddModalOpen }) => {
   const initialValues: IEmployee = {
      name: "",
      position: "",
      department: "",
      dateOfBirth: "",
      email: "",
      phone: "",
   };
   const handleCloseModal = () => {
      setIsAddModalOpen(false);
   };
   const { addEmployee } = useEmployees();
   const handleSubmit = (values: IEmployee) => {
      addEmployee(values);
      toast.success("Employee added successfully");
      setIsAddModalOpen(false);
   };

   return (
      <div className="relative">
         {isAddModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white w-full md:w-3/4 lg:w-1/2 max-w-2xl p-6 rounded-lg shadow-xl border border-green-400"
               >
                  <div className="flex justify-between items-center border-b pb-3">
                     <h2 className="text-xl font-semibold">Add Employee</h2>
                     <button className="text-gray-500 hover:text-gray-800" onClick={handleCloseModal}>
                        &times;
                     </button>
                  </div>

                  <div className="mt-4">
                     <Formik initialValues={initialValues} validationSchema={employeeSchema} onSubmit={handleSubmit}>
                        <Form className="p-4">
                           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <div>
                                 <div className="mb-4">
                                    <label className="block text-gray-700">Name:</label>
                                    <Field
                                       name="name"
                                       type="text"
                                       className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                       placeholder="Employee Name"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                 </div>

                                 <div className="mb-4">
                                    <label className="block text-gray-700">Position:</label>
                                    <Field
                                       name="position"
                                       type="text"
                                       className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                       placeholder="Position"
                                    />
                                    <ErrorMessage name="position" component="div" className="text-red-500 text-sm" />
                                 </div>

                                 <div className="mb-4">
                                    <label className="block text-gray-700">Department:</label>
                                    <Field
                                       name="department"
                                       type="text"
                                       className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                       placeholder="Department"
                                    />
                                    <ErrorMessage name="department" component="div" className="text-red-500 text-sm" />
                                 </div>
                              </div>

                              <div>
                                 <div className="mb-4">
                                    <label className="block text-gray-700">Email:</label>
                                    <Field
                                       name="email"
                                       type="email"
                                       className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                       placeholder="Email"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                 </div>

                                 <div className="mb-4">
                                    <label className="block text-gray-700">Phone:</label>
                                    <Field
                                       name="phone"
                                       type="text"
                                       className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                       placeholder="Phone Number"
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                 </div>

                                 <div className="mb-4">
                                    <label className="block text-gray-700">Date of Birth:</label>
                                    <Field
                                       name="dateOfBirth"
                                       type="date"
                                       className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
                                 </div>
                              </div>
                           </div>

                           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded mt-3 hover:bg-green-600 transition">
                              Submit
                           </button>
                        </Form>
                     </Formik>
                  </div>
               </motion.div>
            </div>
         )}
      </div>
   );
};

export default AddEmployeeForm;
