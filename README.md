# SanityScribe

SanityScribe is a modern blog platform built with Next.js, TypeScript, and Tailwind CSS, utilizing Sanity.io as a headless CMS for seamless content management. 

## Features

- **Blog Listings and Detail Pages:** View and explore blog posts with detailed content.
- **Search Functionality:** Quickly filter blogs by title.
- **Sanity Studio Integration:** Manage content easily with Sanity Studio.
- **Optimized for Performance:** Leveraging Next.js for fast loading times and SEO.
- **TypeScript Support:** Strongly typed components for better development experience and code quality.
- **State Management with Redux Toolkit:** Efficiently manage global state and simplify complex state logic.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### TypeScript

TypeScript is a superset of JavaScript that adds static types, allowing developers to catch errors early through type checking. By using TypeScript in SanityScribe, you can enjoy:

- **Enhanced Code Quality:** Helps maintain high code quality and better tooling support.
- **Improved Developer Experience:** Autocompletion and type inference reduce the learning curve for new contributors.
- **Robust Interfaces:** Define clear data structures, improving collaboration and API integration.

### Redux Toolkit (RTK)

Redux Toolkit is the official, recommended way to write Redux logic. It simplifies the process of managing state in complex applications. Key features include:

- **Simplified Store Setup:** Provides a standard way to configure a Redux store.
- **CreateSlice and createAsyncThunk:** Reduces boilerplate code and makes managing async actions easier.
- **Built-in DevTools:** Easily debug state changes with integrated tooling.
- **Type Safety:** Improved integration with TypeScript for better type checking.

### Sanity Studio

Sanity Studio is a customizable content management interface for Sanity.io, allowing users to manage their content seamlessly. Key features include:

- **Real-time Collaboration:** Multiple users can edit content simultaneously with instant updates.
- **Custom Content Structures:** Define and manage content types tailored to your application's needs.
- **Extensible Interface:** Customize the studio interface with plugins and components to enhance functionality.
- **Version Control:** Track changes and revert to previous versions of content easily.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
