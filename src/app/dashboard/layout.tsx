// layout

import Sidebar from "./components/Sidebar";
import SidebarWrapper from "./components/SidebarWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen">
      <SidebarWrapper />
      {children}
    </div>
  );
}
