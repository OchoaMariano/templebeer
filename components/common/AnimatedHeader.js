"use client"

import { motion } from 'framer-motion'

export default function AnimatedHeader({title, font}) {


    return (
    <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
        >
            <h1 className={`text-white text-[12.05vw] md:text-[9.49vh] leading-none uppercase ${font}`}>
                {title}
            </h1>
        </motion.div>
    </>
    )
}