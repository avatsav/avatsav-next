# avatsav.dev

My portfolio/blog written in Next.js/React/MDX.

## Overview

- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/snippets/*` - Static pre-rendered snippet pages using MDX.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/avatsav/avatsav-next.git
$ cd avatsav-next
$ yarn
$ yarn dev
```

## Built Using

This website has only been possible because of the NextJS and React open source community!

This website is a fork of [Lee Robinson's](https://leerob.io/) website which
is [open source](https://github.com/leerob/leerob.io). The source code along with some really helpful posts on how it's
built helped me pick up Next.js pretty quick.

[Alex Carpenter's](https://alexcarpenter.me/) website which is
also [open source](https://github.com/alexcarpenter/alexcarpenter-next) has also been an excellent reference for
learning Next.js.

I'd be remiss to mention the documentation of **Next.js** and **Tailwind CSS** which made it possible for me
(who has never done any kind of serious web programming) to understand, learn and personalize the website.

- [Next.js](https://nextjs.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## Next steps

- Write articles!
- Improvements to the way tailwind's CSS is structured. The `className` values are getting too long.
  - Currently making smaller components and using `clsx` to logically compose tailwind.
- Finish the about page.

## License

MIT. See `LICENSE.txt`.
