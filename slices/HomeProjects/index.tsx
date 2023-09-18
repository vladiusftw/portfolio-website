import Cards from '@/components/cards'
import InViewContainer from '@/components/inViewContainer'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `HomeProjects`.
 */
export type HomeProjectsProps = SliceComponentProps<Content.HomeProjectsSlice>

/**
 * Component for "HomeProjects" Slices.
 */
const HomeProjects = ({ slice }: HomeProjectsProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="px-[20px] md:px-[40px] w-full flex flex-col items-center pb-[200px]"
        >
            <InViewContainer
                direction="right"
                id="projects"
                marginTop={'mt-[100px] sm:mt-[200px]'}
                className="w-full max-w-[1440px] flex flex-col items-start gap-[40px] lg:gap-[100px] justify-between"
            >
                <h1 className="text-gradient leading-none">
                    {slice?.primary?.title}
                </h1>

                <div className="w-full mx-auto max-w-[600px] select-none">
                    <Cards items={slice?.items} />
                </div>
            </InViewContainer>
        </section>
    )
}

export default HomeProjects
