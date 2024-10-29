import { storyblokEditable } from '@storyblok/react' import type {
KaProps } from './types' const
Ka
= ({ blok }:
KaProps) => { return (
<section {...storyblokEditable(blok)} className="w-full">
  {/* Add your component content here */}
</section>
) } export default
Ka