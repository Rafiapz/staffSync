const Header = () => {
   return (
      <div className="bg-green-500 h-[60px] p-2 w-full flex justify-between items-center z-10 top-0 left-0 fixed">
         <div className="w-1/3 hidden md:block"></div>
         <div className="w-full md:w-1/3 flex justify-center">
            <h1 className="text-lg sm:text-xl font-bold text-white">StaffSync</h1>
         </div>
         <div className="w-full md:w-1/3 flex justify-end"></div>
      </div>
   );
};

export default Header;
