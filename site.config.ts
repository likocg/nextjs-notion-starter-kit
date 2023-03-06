import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b966c92ff2a74aacab5d5210ba7ab0f7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jesus.com.vc',
  domain: 'Jesus.com.vc',
  author: 'Eliel "Jesus" Guilhen',

  // open graph metadata (optional)
  description: 'Content Hub and Portfolio of Eliel "Jesus" Guilhen',

  // social usernames (optional)
  twitter: 'liko',
  github: 'likocg',
  linkedin: 'elielguilhen',
  mastodon: 'https://mastodon.social/@liko', // optional mastodon profile URL, provides link verification
  newsletter: 'https://cosmoliko.com/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
'/diario-de-bordo': '0080653fb8c74845a4fe42a8be628674',
    
}

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
   {
     title: 'Portfolio',
     pageId: '8a41e6e5b8ce41df9c181cfa90de41a4'
   },                      
   {
     title: 'Now',
     pageId: '6657458c6fa84c888eb952e957c64498'
   },
   {
     title: 'Logbook',
     pageId: '0080653fb8c74845a4fe42a8be628674'
   },
                          
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
