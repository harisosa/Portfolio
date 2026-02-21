import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface MotionButtonProps {
    title: string
    icon?: StaticImageData,
}

export const MotionButton: React.FC<MotionButtonProps> = ({ icon, title }) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="mt-10 inline-flex h-12 w-full items-center justify-center bg-[#13a4b6] text-md font-semibold text-white shadow-[0_18px_40px_rgba(19,164,182,0.22)] lg:w-52"
        >
            {icon && (
                <Image
                    src={icon}
                    alt={title}
                    width={16}
                    height={16}
                    className="mr-2"
                />
            )}

            {title}
        </motion.button>
    );
};