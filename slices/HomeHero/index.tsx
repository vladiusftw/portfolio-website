import InViewContainer from '@/components/inViewContainer'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Image from 'next/image'
import Link from 'next/link'
import TypeAnimation from '@/components/typeAnimation'

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
    console.log(slice?.primary)
    const descs: any | null = prismicH.isFilled.contentRelationship(
        slice?.primary?.descs
    )
        ? slice?.primary?.descs?.data
        : null

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="px-[20px] md:px-[40px] w-full flex flex-col items-center "
        >
            <InViewContainer
                direction="left"
                id={'home'}
                className="w-full max-w-[1440px] flex flex-col lg:flex-row lg:items-center gap-[40px] justify-between pt-[200px]"
            >
                <div className="flex flex-col gap-[20px] lg:gap-[40px] max-w-[710px]">
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: slice.primary.title ?? '',
                        }}
                    />
                    <p>
                        <TypeAnimation
                            sequence={
                                descs
                                    ? descs?.list?.reduce(
                                          (
                                              list: any[],
                                              elem: any,
                                              i: number
                                          ) => {
                                              list.push(elem?.text)
                                              if ((i + 1) % 1 === 0)
                                                  list.push(1000)
                                              return list
                                          },
                                          []
                                      )
                                    : []
                            }
                            repeat={Infinity}
                            wrapper="span"
                            speed={{
                                type: 'keyStrokeDelayInMs',
                                value: 100,
                            }}
                            className="text-gradient"
                        />

                        <span>{slice?.primary?.descsuffix}</span>
                    </p>

                    <div className="flex gap-[13px] flex-wrap items-center">
                        {slice?.items?.map((item) => {
                            return (
                                <Link
                                    href={`${item.buttonlink}`}
                                    key={item.buttonlink}
                                >
                                    <button className="px-[40px] py-[14px] border border-white bg-transparent hover:bg-gradient-to-r from-gradientFrom to-gradientTo rounded-[50px] hover:border-transparent hover:text-black ">
                                        {item.buttontext}
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <Image
                    src={slice.primary.img.url ?? ''}
                    alt={slice.primary.img?.alt ?? ''}
                    width={512}
                    height={512}
                    className="rounded-[15px] img-glow-right"
                    priority
                />
            </InViewContainer>
        </section>
    )
}

export default HomeHero
