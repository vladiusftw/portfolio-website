import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `HomeAbout`.
 */
export type HomeAboutProps = SliceComponentProps<Content.HomeAboutSlice>

/**
 * Component for "HomeAbout" Slices.
 */
const HomeAbout = ({ slice }: HomeAboutProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            id="about"
            className="px-[20px] md:px-[40px] w-full flex flex-col items-center mt-[160px]"
        >
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px] justify-between">
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[20px]">
                        <h1 className="text-gradient leading-none">
                            {slice?.primary?.title}
                        </h1>
                        <h3 className="leading-none">{slice?.primary?.name}</h3>
                    </div>

                    <Image
                        src={slice?.primary?.img?.url ?? ''}
                        alt={slice?.primary?.img?.alt ?? ''}
                        width={348}
                        height={262}
                        className="rounded-[15px] img-glow-right"
                    />
                </div>

                <div></div>
            </div>
        </section>
    )
}

export default HomeAbout
