import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import InViewContainer from '@/components/inViewContainer'
import Image from 'next/image'

/**
 * Props for `HomeBackground`.
 */
export type HomeBackgroundProps =
    SliceComponentProps<Content.HomeBackgroundSlice>
/**
 * Component for "HomeBackground" Slices.
 */
const HomeBackground = ({ slice }: HomeBackgroundProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="px-[20px] md:px-[40px] w-full flex flex-col items-center"
        >
            <InViewContainer
                direction="left"
                id="background"
                marginTop={'mt-[100px] sm:mt-[200px]'}
                className="w-full max-w-[1440px] flex flex-col items-start gap-[50px] lg:gap-[100px] justify-between select-none"
            >
                <h1 className="text-gradient leading-none">
                    {slice?.primary?.title}
                </h1>

                <div className="grid sm:grid-cols-2 w-full gap-[60px] sm:gap-[0px] ">
                    {slice.items.map((heading, index: number) => {
                        const data: any | null =
                            prismicH.isFilled.contentRelationship(heading.list)
                                ? heading.list.data
                                : null

                        return (
                            <div
                                className="flex flex-col items-start gap-[10px] sm:gap-[30px] md:gap-[40px] lg:gap-[60px] sm:mx-auto"
                                key={index}
                            >
                                <div className="flex gap-[20px]">
                                    <Image
                                        src={data?.img?.url ?? ''}
                                        alt={data?.img?.alt ?? ''}
                                        width={36}
                                        height={36}
                                    />
                                    <h3>{data?.title}</h3>
                                </div>
                                <div className="flex flex-col gap-[40px] items-start w-full pl-[6px] ">
                                    {data &&
                                        data?.list &&
                                        (data?.list as Array<any>) &&
                                        data.list.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <div
                                                        className="flex gap-[26px] items-start !leading-none group "
                                                        key={index}
                                                    >
                                                        <div className="flex flex-col h-full items-center ">
                                                            <div className="min-w-[24px] min-h-[24px] border-2 border-gradientFrom rounded-[100px] group-hover:bg-gradient-to-r group-hover:from-gradientFrom group-hover:to-gradientTo group-hover:border-none" />
                                                            <div className="w-[2px] h-full bg-gradient" />
                                                        </div>
                                                        <div className="relative flex flex-col">
                                                            <div
                                                                className={`flex flex-col gap-[18px] ${
                                                                    (item
                                                                        ?.imagelist
                                                                        ?.data
                                                                        ?.images as typeof Array<any>) &&
                                                                    item
                                                                        ?.imagelist
                                                                        ?.data
                                                                        ?.images
                                                                        ?.length >
                                                                        0
                                                                        ? 'group-hover:opacity-0 transition-opacity duration-200'
                                                                        : ''
                                                                }  `}
                                                            >
                                                                <p className="font-medium">
                                                                    {
                                                                        item?.title
                                                                    }
                                                                </p>

                                                                <span className="text-[12px] md:text-[14px] lg:text-[16px]">
                                                                    {item?.desc}
                                                                </span>

                                                                <div className="flex gap-[10px] items-center">
                                                                    <Image
                                                                        src={
                                                                            item
                                                                                ?.dateimage
                                                                                ?.url ??
                                                                            ''
                                                                        }
                                                                        alt={
                                                                            item
                                                                                ?.dateimage
                                                                                ?.alt ??
                                                                            ''
                                                                        }
                                                                        width={
                                                                            20
                                                                        }
                                                                        height={
                                                                            20
                                                                        }
                                                                    />
                                                                    <span className="text-[12px] md:text-[14px] lg:text-[16px] text-gradient">
                                                                        {
                                                                            item?.date
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className=" w-full h-full flex  absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ">
                                                                {(item
                                                                    ?.imagelist
                                                                    ?.data
                                                                    ?.images as typeof Array<any>) &&
                                                                    item?.imagelist?.data?.images?.map(
                                                                        (
                                                                            img: any,
                                                                            index: number
                                                                        ) => {
                                                                            return (
                                                                                <div
                                                                                    className={`w-full h-full flex ${
                                                                                        index %
                                                                                            2 ==
                                                                                        0
                                                                                            ? 'items-end'
                                                                                            : 'items-start'
                                                                                    }`}
                                                                                >
                                                                                    <div className="w-[36px] h-[36px] bg-gradient flex flex-col items-center justify-center rounded-[100px]">
                                                                                        <Image
                                                                                            src={
                                                                                                img
                                                                                                    ?.image
                                                                                                    ?.url ??
                                                                                                ''
                                                                                            }
                                                                                            alt={
                                                                                                img
                                                                                                    ?.image
                                                                                                    ?.alt ??
                                                                                                ''
                                                                                            }
                                                                                            width={
                                                                                                24
                                                                                            }
                                                                                            height={
                                                                                                24
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </InViewContainer>
        </section>
    )
}

export default HomeBackground
