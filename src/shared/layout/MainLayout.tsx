import type { FC, ReactElement } from "react";

import { Navbar } from "@/shared/components";

export const MainLayout: FC<{ children: ReactElement, hideNavbar?: boolean }> = ({ children, hideNavbar=false }) => {
  return <div className="flex flex-col w-full flex-1 text-center">
    {
      !hideNavbar && <Navbar />
    }
    {children}
    </div>;
};