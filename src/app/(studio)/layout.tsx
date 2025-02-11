import { StudioLayout } from "@/modules/studio/ui/layout/studio-layout";

interface StudioLayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: StudioLayoutProps) => {
  return (
    <div>
      <StudioLayout>{children}</StudioLayout>
    </div>
  );
};
export default Layout;
