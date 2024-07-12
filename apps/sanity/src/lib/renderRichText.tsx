import { PortableText } from '@portabletext/react'
import BasicImage from '@shared/ui/components/ui/image'
import  { prepareImageProps, type IImage } from "./adapters/prepareImageProps";
import { ImageAspectRatio } from '@shared/ui/components/ui/image/types';


export default function renderRichText(data: any[]) {
    return <PortableText value={data} components={COMPONENTS} />
}


const COMPONENTS = { 
    types: {
      customImage: ({ value } : { value: IImage }) => {

        return (
<div
    className="relative mx-auto"
    style={{
      aspectRatio: ImageAspectRatio[value.aspectRatio],
      height: value.height
    }}
  >
    <BasicImage
      {...prepareImageProps(value)}
    />
  </div>
)
      },
    },
  
    marks: {
      link: ({children, value}: any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined

        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    }
  }