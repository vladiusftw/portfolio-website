import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            id={'hero'}
            className="px-[20px] md:px-[40px] w-full flex flex-col items-center pt-[200px]"
        >
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row lg:items-center gap-[40px] justify-between">
                <div className="flex flex-col gap-[20px] lg:gap-[40px] max-w-[710px]">
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: slice?.primary?.title?.toString() ?? '',
                        }}
                    />

                    <p>{slice?.primary?.desc}</p>

                    <div className="flex gap-[13px] flex-wrap items-center">
                        {slice?.items?.map((item) => {
                            return (
                                <Link href={`/${item.buttonlink}`}>
                                    <button className="px-[40px] py-[14px] border border-white bg-transparent hover:bg-gradient-to-r from-gradientFrom to-gradientTo transition-all duration-300 rounded-[50px] hover:border-transparent ">
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
                    className="rounded-[15px] img-glow-left"
                />
            </div>
        </section>
    )
}

export default HomeHero
