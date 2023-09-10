import { NavigationDocumentDataLinksItem, Simplify } from '@/prismicio-types'
import { GroupField, ImageField, KeyTextField } from '@prismicio/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    img: ImageField
    links: GroupField<Simplify<NavigationDocumentDataLinksItem>>
    buttonText: KeyTextField
    buttonImg: ImageField
}

const Header = ({ img, links, buttonImg, buttonText }: Props) => {
    return (
        <header className="w-full py-[40px] px-[20px] md:px-[40px] flex flex-col items-center fixed">
            <div className="max-w-[1440px] flex flex-row justify-between w-full">
                <Image
                    src={img.url ?? ''}
                    alt={img.alt ?? ''}
                    width={75}
                    height={75}
                />
                <div className="lg:flex gap-[40px] items-center  hidden">
                    {links.map((link: NavigationDocumentDataLinksItem) => {
                        return (
                            <div className="flex flex-col items-center">
                                <div />
                                <Link href={`/${link.value}`}>
                                    <span>{link.text}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <button className="bg-gradient flex py-[12px] h-fit px-[59px] w-fit justify-center text-black items-center rounded-[100px]">
                    <span>{buttonText}</span>
                    <Image
                        src={buttonImg.url ?? ''}
                        alt={buttonImg.alt ?? ''}
                        width={16}
                        height={16}
                    />
                </button>
            </div>
        </header>
    )
}

export default Header
