import {createClient} from '@sanity/client'
import imageUrlBuidler from '@sanity/image-url'

export const client = createClient({
  projectId: '7n1via8c',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skZQmsQwIQTYAndTDsBUfqFrFBkci2ThUa0WCw7eMBKwZCBBRs4EKOPTEIbjS9efpCGf6ZGoHTWlNP3r09as8ABveyecXoHRsi7ncsMMtDQ2VU50w10pdeZZF6iKt0aTiT1kpkd3Bdh2ZzR607lVwDgmYRCzGolqlLV7s5zzP05z4m2Rvdi4',
})

const builder = imageUrlBuidler(client)
export const urlFor = (source) => builder.image(source)
