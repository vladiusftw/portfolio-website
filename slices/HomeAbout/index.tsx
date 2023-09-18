import CountUp from '@/components/countUp'
import InViewContainer from '@/components/inViewContainer'
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
            className="px-[20px] md:px-[40px] w-full flex flex-col items-center"
        >
            <InViewContainer
                id="about"
                direction="right"
                marginTop={'mt-[100px] sm:mt-[200px]'}
                className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[90px] justify-between"
            >
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[20px]">
                        <h1 className="text-gradient leading-none whitespace-nowrap">
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
                        priority
                    />
                </div>

                <div className="flex flex-col gap-[40px]">
                    <h3
                        className="gradient"
                        dangerouslySetInnerHTML={{
                            __html: slice?.primary?.desc + '',
                        }}
                    />

                    <p>{slice?.primary?.info}</p>

                    <div className="flex justify-between flex-wrap gap-[20px]">
                        {slice?.items?.map((item) => {
                            return (
                                <div
                                    className="flex flex-col gap-[12px]"
                                    key={item.title}
                                >
                                    <p className="text-gradient">
                                        {item.title}
                                    </p>
                                    <h3 className="">
                                        <CountUp
                                            end={item?.num?.valueOf() ?? 100}
                                            duration={3.5}
                                            suffix={item?.suffix + ''}
                                            enableScrollSpy
                                            className="!bg-clip-border bg- !text-white"
                                        />
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InViewContainer>
        </section>
    )
}

export default HomeAbout
