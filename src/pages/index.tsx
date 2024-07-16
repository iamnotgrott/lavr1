import "stories-react/dist/index.css";
import type { ReactElement } from "react";

import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { CellaIcon } from "@/shared/components/atoms/Icons";

export default function IndexPage() {
  const router = useRouter();


  return (
    <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <CellaIcon size="max" />
          <p className="text-semiBold16">Скоро открытие</p>
        </div>
    </div>
  );
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};
