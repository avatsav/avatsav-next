const title = 'Abhijith Srivatsav';
const description = 'Software Engineer';

const SEO = {
  title,
  description,
  canonical: 'https://avatsav.dev',
  openGraph: {
    type: 'website',
    locale: 'en_DE',
    url: 'https://avatsav.dev',
    title,
    description,
    images: [
      {
        url: 'https://avatsav.dev/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@avatsav13',
    site: '@avatsav13',
    cardType: 'summary_large_image'
  }
};

export default SEO;
