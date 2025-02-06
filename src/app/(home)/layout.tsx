import { HomeLayout } from "@/modules/home/ui/layout/home-layout";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <HomeLayout>{children}</HomeLayout>
    </div>
  );
};
export default Layout;
