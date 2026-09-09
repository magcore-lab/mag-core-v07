
export default function sitemap() {
  const base = 'https://mag-core-v07.vercel.app'
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/lab`, lastModified: new Date() },
    { url: `${base}/drop`, lastModified: new Date() },
    { url: `${base}/multiverse`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
  ]
}
