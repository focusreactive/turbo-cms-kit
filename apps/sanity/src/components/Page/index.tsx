import type { IPageContainerProps } from './types'
import { SectionRenderer } from '@/contentSections'

export default function PageContainer({ data }: IPageContainerProps) {
  return (
    <div>
      {data?.sectionsBody?.map((section) => 
        <SectionRenderer key={section._key} section={section} />)}
    </div>
  )
}
