'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
    children: React.ReactNode
    className?: string
    direction: 'right' | 'left'
    duration?: number
    marginTop?: string
    id?: string
}

const InViewContainer = ({
    children,
    className,
    direction,
    duration,
    marginTop,
    id,
}: Props) => {
    const container = useRef<HTMLDivElement>(null!)
    const inView = useInView(container, { once: true })
    return (
        <motion.div
            ref={container}
            className={`flex flex-col items-center w-full relative ${marginTop}`}
            id={id}
        >
            <motion.div
                className={className}
                variants={{
                    invisible: {
                        translateX: direction == 'left' ? '-100%' : '100%',
                        opacity: 0,
                    },
                    visible: {
                        translateX: '0%',
                        opacity: 1,
                    },
                }}
                initial={'invisible'}
                animate={inView ? 'visible' : 'invisible'}
                transition={{
                    duration: duration ?? 1,
                    ease: 'easeInOut',
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default InViewContainer
