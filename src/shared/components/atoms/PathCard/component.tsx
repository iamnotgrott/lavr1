import { FC, useState } from "react";
import { motion } from 'framer-motion';
import { PolygonProfileIcon, LongArrowIcon } from "../Icons";
import { PathCardProps } from "./props";


export const PathCard: FC<PathCardProps> = ({title, subtitle, icon}) => {
    const [isHovered, setIsHovered] = useState(false);
    const arrowVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    return (
    <motion.div
        initial={{
            scale: 1,
            borderWidth: '0px',
        }}
        whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(239, 227, 227, 1)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: '1px',
            borderStyle: 'solid'
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-[426px] gap-6 shadow-custom p-6 rounded-md flex flex-row items-center">
            {icon}
            <div className="flex flex-col gap-1">
                <p className="p-0 m-0 text-SemiBold16 text-gray-3">{title}</p>
                <p className="p-0 m-0 text-Regular14 text-gray-4">{subtitle}</p>
            </div>
            <motion.div
                className='absolute top-[43%] right-8'
                variants={arrowVariants}
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
            >
                <LongArrowIcon width={16} height={12} />
            </motion.div>
    </motion.div>
    );
}
