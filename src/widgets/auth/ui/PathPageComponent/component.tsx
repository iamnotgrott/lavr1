import { CellaWhiteIcon, PolygonCaseIcon, PolygonProfileIcon } from "@/shared/components/atoms/Icons"
import { FC } from "react"
import { PathCard } from "@/shared/components";

export const PathPageComponent: FC = () => {
    return (
        <section className="flex flex-row h-screen justify-center">
            <div className="w-[666px] h-screen relative left_bg">
                <div className="flex flex-col w-[112px] absolute top-8 left-[100px]">
                    <CellaWhiteIcon color="dark" size="xxl" />
                    <p className="text-Regular10 text-white p-0 m-0 mt-[-5px] text-right">склад</p>
                </div>
                    <div className="absolute right-[100px] left-[100px] m-auto bottom-[20%] text-left">
                        <p className="text-Medium20 text-white leading-9">
                            Важнейший из критериев для складов дистрибьюторов – степень удовлетворения спроса (заказа) в течение суток. 
                            Приемлемым, но недостаточно современным уровнем обслуживания считается способность склада отгрузить 90 % заказанных номенклатуры и количества, хорошим – 95 %, отличным – 100 %.
                        </p>
                        <p className="text-Regular20 text-white mt-7">
                            Владислав Волгин
                        </p>
                    </div>
                </div>
            <div className="w-[774px] bg-yellow-0 relative">
                <div className="absolute top-[30%] left-[174px] right-[174px] flex flex-col text-left">
                    <h1 className="text-Bold32">Присоединяйтесь к нам!</h1>
                    <p className="text-Regular16 text-gray-2">Чтобы начать, скажите нам, какой тип аккаунта вы хотели бы открыть.</p>
                    <div className="flex flex-col gap-4">
                        <PathCard title="Физическое лицо" subtitle="Описание физического лица" icon={<PolygonProfileIcon width={52} height={52}/>} />
                        <PathCard title="Юридическое лицо" subtitle="Описание юридического лица" icon={<PolygonCaseIcon width={52} height={52} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

