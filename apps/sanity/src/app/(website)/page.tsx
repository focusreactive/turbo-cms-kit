import Page from '@/components/Page'
import { loadPage } from '@/lib/sanity'

export default async function IndexRoute() {
  const data = await loadPage('/')

  // console.log('home page data');
  // console.log(data);

  return <Page data={data} />
}
