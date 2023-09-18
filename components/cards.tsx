'use client'
import { Simplify } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cards'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'
import * as prismicH from '@prismicio/helpers'

type Props = {
    items: Simplify<Content.HomeProjectsSliceDefaultItem>[]
}

const Cards = ({ items }: Props) => {
    return (
        <Swiper
            modules={[Pagination, Navigation, EffectCards]}
            navigation
            pagination
            effect="cards"
            cardsEffect={{
                perSlideOffset: 10,
                perSlideRotate: 5,
            }}
        >
            {items?.map((item, index: number) => {
                return (
                    <SwiperSlide
                        style={{
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                        }}
                        key={index}
                    >
                        {({ isActive }) => (
                            <Link
                                href={
                                    prismicH.isFilled.link(item.link)
                                        ? item.link.url ?? ''
                                        : ''
                                }
                                target="_blank"
                            >
                                <div
                                    className="w-full h-full absolute top-0 left-0 z-[1]"
                                    style={{
                                        background: !isActive
                                            ? 'linear-gradient(0deg, rgba(20, 40, 54, 0.75) 0%, rgba(20, 40, 54, 0.75) 100%)'
                                            : '',
                                    }}
                                />

                                <Image
                                    src={item?.img?.url ?? ''}
                                    alt={item?.img?.alt ?? ''}
                                    className="w-full object-cover object-top rounded-[15px]"
                                    width={512}
                                    height={512}
                                />
                            </Link>
                        )}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Cards
