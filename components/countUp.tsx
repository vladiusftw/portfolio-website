'use client'
import React from 'react'
import CU from 'react-countup'

type Props = {
    start?: number
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    enableScrollSpy?: boolean
    className?: string
}

const CountUp = (props: Props) => {
    return <CU {...props} />
}

export default CountUp
