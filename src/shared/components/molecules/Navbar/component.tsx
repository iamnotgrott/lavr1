import type { FC } from "react";
import { ArrowIcon, CartIcon, CellaIcon, ProfileIcon } from "../../atoms/Icons";


export const Navbar: FC = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center p-3 justify-between"
        aria-label="Global"
      >
        <div className="flex cursor-pointer">
            <CellaIcon size="xxl" />
        </div>
        <div className="hidden lg:flex lg:gap-x-12 md:flex md:gap-x-5">
          <p className="text-Semibold16 leading-6 mb-0 text-gray-1">
            Главная
          </p>
          <p className="text-Semibold16 leading-6 mb-0 text-gray-1">
            Продукция LAVR
          </p>
          <p className="text-Semibold16 leading-6 mb-0 text-gray-1">
            Сотрудничество
          </p>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
            <div className="flex gap-3 items-center cursor-pointer">
               <p className="text-Semibold16 leading-6 mb-0 text-gray-1">Актау</p>
               <ArrowIcon width={14} height={14}/>
            </div>
            <div className="flex gap-6 items-center cursor-pointer">
              <CartIcon height={19} width={19} />
              <ProfileIcon height={19} width={19} />
            </div>
        </div>
      </nav>
    </header>
  );
};
