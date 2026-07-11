import Sidebar from "../components/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">{children}</main>
    </div>
  );
}

export default DashboardLayout;