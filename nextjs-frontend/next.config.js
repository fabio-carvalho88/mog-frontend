module.exports = {
  i18n: {
    localeDetection: true,
    locales: ['en-US', 'pt-PT'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'example.pt',
        defaultLocale: 'pt-PT',
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl-NL',
        // specify other locales that should be redirected
        // to this domain
        locales: ['nl-BE'],
      },
    ],
  },
};
