// import {HeroSection} from '@shared/ui'
import {PortableText} from '@portabletext/react'

const myPortableTextComponents = {
  types: {
    image: ({value}: any) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
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
  },
}

export default function Hero(props: any) {
  console.log('props111');
  console.log(props.text.text);

  return (
    <div className="bg-yellow-500">
        wdwdwdwdwdwdw

        <PortableText value={props.text.text} components={myPortableTextComponents} />
      {/* <HeroSection links={[]} richText={{
        richText: 'wdwd'
      }} image={{}} /> */}
      
    </div>
  )
}
