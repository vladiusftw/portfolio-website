'use client'
import {
    NavigationDocumentData,
    NavigationDocumentDataLinksItem,
    Simplify,
} from '@/prismicio-types'
import { useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import * as prismicH from '@prismicio/helpers'
import Hamburger from 'hamburger-react'

type Props = {
    data: Simplify<NavigationDocumentData>
}

const Header = ({ data }: Props) => {
    const file = prismicH.isFilled.linkToMedia(data.file) ? data.file.url : ''
    const { scrollY } = useScroll()
    const [currSection, setCurrSection] = useState('home')
    const [isOpen, setOpen] = useState(false)
    scrollY.on('change', () => {
        for (let i = 0; i < data.links.length; i++) {
            // get section
            let doc = document.getElementById(
                (data.links[i].text + '').toLowerCase()
            )

            // if section exists
            if (doc) {
                const rect = doc.getBoundingClientRect()

                // if section is in view
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setCurrSection(data.links[i].text + '')
                    return
                }
            }
        }
    })

    return (
        <header
            className={`w-full py-[40px] px-[20px] md:px-[40px] flex flex-col items-center fixed z-10 bg-black`}
        >
            <div className="max-w-[1440px] flex flex-row justify-between w-full select-none">
                <Image
                    src={data.img.url ?? ''}
                    alt={data.img.alt ?? ''}
                    width={75}
                    height={75}
                />
                <div className=" gap-[60px] items-center hidden lg:flex">
                    {data.links.map((link: NavigationDocumentDataLinksItem) => {
                        return (
                            <div
                                className="flex flex-col items-center"
                                key={link.value}
                            >
                                <div
                                    className={`w-[12px] h-[12px] rounded-[100px] ${
                                        currSection?.toLocaleLowerCase() ===
                                        link.text?.toLocaleLowerCase() + ''
                                            ? 'bg-gradient'
                                            : 'bg-transparent'
                                    } `}
                                />
                                <Link href={`/${link.value}`}>
                                    <span
                                        className={`${
                                            currSection?.toLocaleLowerCase() ==
                                            link.text?.toLowerCase()
                                                ? 'text-gradient font-medium'
                                                : 'text-white font-normal'
                                        }`}
                                    >
                                        {link.text}
                                    </span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center gap-[12px]">
                    <Link
                        href={file}
                        target="_blank"
                        className="bg-gradient flex py-[12px] h-fit px-[59px] w-fit justify-center text-black items-center rounded-[100px] select-none"
                    >
                        <span>{data.buttontext}</span>
                        <Image
                            src={data.buttonimg.url ?? ''}
                            alt={data.buttonimg.alt ?? ''}
                            width={16}
                            height={16}
                        />
                    </Link>
                    <div className="flex lg:hidden relative ">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            size={30}
                        />
                        <div
                            className={`flex flex-col justify-center items-center gap-[20px] py-[24px] px-[40px] border border-[#CCCCCC] absolute right-0 top-20 bg-black rounded-[5px] transition-opacity duration-300 ${
                                isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {data.links.map((link) => {
                                return (
                                    <Link
                                        href={`/${link.value}`}
                                        key={link.value}
                                    >
                                        <span
                                            className={`text-gradient font-medium`}
                                        >
                                            {link.text}
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
