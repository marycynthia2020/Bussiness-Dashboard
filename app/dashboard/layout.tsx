import Sidebar from "@/components/organisms/Sidebar";
import UsersBar from "@/components/organisms/UsersBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative lg:grid grid-cols-5 gap-4 w-full max-w-[1900px] mx-auto min-h-screen rounded-2xl bg-[#f6f7f9]  ">
      <div className="hidden  lg:block lg:col-span-1 h-screen  ">
        <Sidebar />
      </div>
      <div className="w-full lg:col-span-3 h-screen overflow-y-auto">
        {children}
      </div>
      <div className="w-full lg:col-span-1 h-screen overflow-y-auto mt-8 lg:mt-0">
        <UsersBar />
      </div>
    </div>
  );
};

export default DashboardLayout;
