import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient()
    const page = await client.getSingle('home')
    return {
        title: page?.data?.meta_title?.toString() ?? '',
        description: page?.data?.meta_description?.toString() ?? '',
        keywords: [
            'abdul rahman',
            'sbeinaty',
            'full stack',
            'developer',
            'freelancer',
            'portfolio',
            'frontend',
            'web developer',
            'app developer',
        ],
        openGraph: {
            type: 'website',
            url: process.env.VERCEL_URL ?? '',
            title: page?.data?.meta_title?.toString() ?? '',
            description: page?.data?.meta_description?.toString() ?? '',
            images: [
                {
                    url: page?.data?.meta_image?.url ?? '',
                    alt: page?.data?.meta_image?.alt ?? '',
                },
            ],
        },
    }
}

export default async function Home() {
    const client = createClient()
    const page = await client.getSingle('home', {
        graphQuery: `
      {
        home{
          slices{
            ...on home_hero{
              variation{
                ...on default{
                  primary{
                    title
                    img
                    descsuffix
                    descs{
                      ...on textlist{
                        list{
                          text
                        }
                      }
                    }
                  }
                  items{
                    ...itemsFields
                  }
                }
              }
            }
            ...on home_about{
              variation{
                ...on default{
                  primary{
                    ...primaryFields
                  }
                  items{
                    ...itemsFields
                  }
                }
              }
            }
            ...on home_background{
              variation{
                ...on default{
                  primary{
                    ...primaryFields
                  }
                  items{
                    list{
                      ...on titledescdateimagelist{
                        title
                        img
                        list{
                          title
                          desc
                          date
                          dateimage
                          imagelist{
                            ...on imagelist{
                              images{
                                image
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ...on home_projects{
              variation{
                ...on default{
                  primary{
                    ...primaryFields
                  }
                  items{
                    ...itemsFields
                  }
                }
              }
            }
          }
        }
      }
      `,
    })

    return <SliceZone slices={page.data.slices} components={components} />
}
