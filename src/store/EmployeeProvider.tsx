import { createContext, FC, useContext, useState } from "react";
import { IEmployee } from "../interface/IEmployee";

const EmployeeContext = createContext<any>(null);

const data = [
   {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      dateOfBirth: "1990-01-10",
   },
   {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      department: "Product",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      dateOfBirth: "1988-04-12",
   },
   {
      id: 3,
      name: "Mike Johnson",
      position: "UX Designer",
      department: "Design",
      email: "mike.johnson@example.com",
      phone: "456-789-0123",
      dateOfBirth: "1992-09-05",
   },
   {
      id: 4,
      name: "Sarah Brown",
      position: "QA Engineer",
      department: "Quality Assurance",
      email: "sarah.brown@example.com",
      phone: "321-654-0987",
      dateOfBirth: "1991-03-18",
   },
   {
      id: 5,
      name: "David Lee",
      position: "DevOps Engineer",
      department: "Engineering",
      email: "david.lee@example.com",
      phone: "555-123-4567",
      dateOfBirth: "1985-07-22",
   },
   {
      id: 6,
      name: "Emily Davis",
      position: "HR Manager",
      department: "Human Resources",
      email: "emily.davis@example.com",
      phone: "654-987-1234",
      dateOfBirth: "1987-11-30",
   },
   {
      id: 7,
      name: "Chris Wilson",
      position: "Data Scientist",
      department: "Data Science",
      email: "chris.wilson@example.com",
      phone: "789-012-3456",
      dateOfBirth: "1993-05-16",
   },
   {
      id: 8,
      name: "Laura Martinez",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "laura.martinez@example.com",
      phone: "876-543-2109",
      dateOfBirth: "1989-02-27",
   },
   {
      id: 9,
      name: "James Anderson",
      position: "Sales Manager",
      department: "Sales",
      email: "james.anderson@example.com",
      phone: "345-678-9012",
      dateOfBirth: "1983-12-11",
   },
   {
      id: 10,
      name: "Olivia King",
      position: "Customer Support Lead",
      department: "Customer Support",
      email: "olivia.king@example.com",
      phone: "432-567-8901",
      dateOfBirth: "1994-06-03",
   },
   {
      id: 11,
      name: "James Smith",
      position: "Sales Associate",
      department: "Sales",
      email: "james.smith@example.com",
      phone: "543-678-9102",
      dateOfBirth: "1991-02-20",
   },
   {
      id: 12,
      name: "Sophia Johnson",
      position: "Project Manager",
      department: "Management",
      email: "sophia.johnson@example.com",
      phone: "654-789-0123",
      dateOfBirth: "1989-03-15",
   },
   {
      id: 13,
      name: "Lucas Brown",
      position: "UX Designer",
      department: "Design",
      email: "lucas.brown@example.com",
      phone: "765-890-1234",
      dateOfBirth: "1992-04-18",
   },
   {
      id: 14,
      name: "Mia Davis",
      position: "Data Analyst",
      department: "Data",
      email: "mia.davis@example.com",
      phone: "876-901-2345",
      dateOfBirth: "1993-05-22",
   },
   {
      id: 15,
      name: "Noah Miller",
      position: "Software Tester",
      department: "Quality Assurance",
      email: "noah.miller@example.com",
      phone: "987-012-3456",
      dateOfBirth: "1988-07-30",
   },
   {
      id: 16,
      name: "Ava Wilson",
      position: "HR Manager",
      department: "Human Resources",
      email: "ava.wilson@example.com",
      phone: "098-123-4567",
      dateOfBirth: "1990-08-25",
   },
   {
      id: 17,
      name: "Liam Moore",
      position: "Web Developer",
      department: "Engineering",
      email: "liam.moore@example.com",
      phone: "109-234-5678",
      dateOfBirth: "1992-09-14",
   },
   {
      id: 18,
      name: "Isabella Taylor",
      position: "Content Writer",
      department: "Marketing",
      email: "isabella.taylor@example.com",
      phone: "210-345-6789",
      dateOfBirth: "1995-10-29",
   },
   {
      id: 19,
      name: "Elijah Anderson",
      position: "Business Analyst",
      department: "Business",
      email: "elijah.anderson@example.com",
      phone: "321-456-7890",
      dateOfBirth: "1994-11-12",
   },
   {
      id: 20,
      name: "Charlotte Thomas",
      position: "Graphic Designer",
      department: "Design",
      email: "charlotte.thomas@example.com",
      phone: "432-567-8902",
      dateOfBirth: "1996-12-01",
   },
   {
      id: 21,
      name: "Mason Jackson",
      position: "SEO Specialist",
      department: "Marketing",
      email: "mason.jackson@example.com",
      phone: "543-678-9012",
      dateOfBirth: "1990-01-05",
   },
   {
      id: 22,
      name: "Amelia White",
      position: "Network Administrator",
      department: "IT",
      email: "amelia.white@example.com",
      phone: "654-789-0124",
      dateOfBirth: "1993-02-11",
   },
   {
      id: 23,
      name: "Ethan Harris",
      position: "Sales Manager",
      department: "Sales",
      email: "ethan.harris@example.com",
      phone: "765-890-1235",
      dateOfBirth: "1987-03-19",
   },
   {
      id: 24,
      name: "Harper Martin",
      position: "Accountant",
      department: "Finance",
      email: "harper.martin@example.com",
      phone: "876-901-2346",
      dateOfBirth: "1994-04-28",
   },
   {
      id: 25,
      name: "Alexander Thompson",
      position: "Product Designer",
      department: "Product",
      email: "alexander.thompson@example.com",
      phone: "987-012-3457",
      dateOfBirth: "1989-05-15",
   },
   {
      id: 26,
      name: "Sofia Garcia",
      position: "Research Scientist",
      department: "Research",
      email: "sofia.garcia@example.com",
      phone: "098-123-4568",
      dateOfBirth: "1992-06-23",
   },
   {
      id: 27,
      name: "Aiden Martinez",
      position: "DevOps Engineer",
      department: "Engineering",
      email: "aiden.martinez@example.com",
      phone: "109-234-5679",
      dateOfBirth: "1991-07-09",
   },
   {
      id: 28,
      name: "Grace Robinson",
      position: "Customer Success Manager",
      department: "Customer Success",
      email: "grace.robinson@example.com",
      phone: "210-345-6780",
      dateOfBirth: "1993-08-15",
   },
   {
      id: 29,
      name: "Jackson Clark",
      position: "Social Media Manager",
      department: "Marketing",
      email: "jackson.clark@example.com",
      phone: "321-456-7891",
      dateOfBirth: "1995-09-10",
   },
   {
      id: 30,
      name: "Zoe Rodriguez",
      position: "IT Support Specialist",
      department: "IT",
      email: "zoe.rodriguez@example.com",
      phone: "432-567-8903",
      dateOfBirth: "1994-10-20",
   },
];

export const EmployeeProvider: FC<any> = ({ children }) => {
   const [employees, setEmployees] = useState<IEmployee[]>(data);
   const [originalData] = useState(data);

   const addEmployee = (employee: IEmployee) => {
      employee.id = employees.length + 1;
      setEmployees((prev) => [...prev, employee]);
   };

   const updateEmployee = (id: number, updatedEmployee: Partial<IEmployee>) => {
      setEmployees((prev) => prev.map((emp) => (emp.id === id ? { ...emp, ...updatedEmployee } : emp)));
   };

   const removeEmployee = (id: number) => {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
   };

   const getEmployee = (id: number) => {
      return employees.find((emp) => emp.id === id);
   };
   const searchEmployee = (query: string) => {
      if (query !== "") {
         const regex = new RegExp(query, "i");
         const updated = employees.filter((emp) => {
            return regex.test(emp?.name) || regex.test(emp?.email) || regex.test(emp?.department);
         });
         setEmployees(updated);
      } else {
         setEmployees(originalData);
      }
   };
   return (
      <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, removeEmployee, getEmployee, searchEmployee }}>
         {children}
      </EmployeeContext.Provider>
   );
};

export const useEmployees = () => useContext(EmployeeContext);
