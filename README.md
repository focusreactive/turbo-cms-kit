# CMS-Kit

An endeavor accumulating the experience and best practices collected at [Focus Reactive](https://focusreactive.com/).
The project serves the idea of making Headless CMS-based development accessible, comfortable, and fast.

## Quick start - Storyblok

1. Create a new repo based on [cms-kit template](https://github.com/focusreactive/turbo-cms-kit)
![Screenshot 2024-10-24 at 17 52 54](https://github.com/user-attachments/assets/b4773c54-bf7f-4697-ae7e-ada6e5163bf0)
2. Pull repo locally
3. Install packages
   ```bash
   pnpm install
   ```
4. Go to CLI folder
   ```bash
   cd apps/storyblok/cli
   ```
5. Execute command
   ```bash
   node sb.mjs
   ```
7. Follow steps

### Showcase

## Demo 👀
### Sanity
- [Demo Landing](https://turbo-cms-kit-sanity.vercel.app/)
- [CMS](https://turbo-cms-kit-sanity.vercel.app/studio)

### Storyblok
- [Demo Landing](https://turbo-cms-kit-storyblok.vercel.app/)
- [CMS](https://app.storyblok.com/#/me/spaces/293915/)

## Features 🌟

- 🚀 Monorepo using **Turborepo**
- 📁 New `/app` dir
- 🗂️ Routing, Layouts, Nested Layouts and Layout Groups
- 🌎 Data Fetching, Caching and Mutation
- 🛠️ Server and Client Components
- 🧩 UI Components built using **Radix UI**
- 🎨 Styled using **Tailwind CSS**
- 👷🏼‍♂️ Written in **TypeScript**

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `storyblok`: CMS app
- `sanity`: CMS app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `ts-config`: `tsconfig.json`s used throughout the monorepo
- `tailwind-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

Setup environment variables:
Link Vercel projects:
```
vercel login
vercel link --repo
```

Pull environment variables from Vercel:
```
vercel env --cwd apps/sanity --environment development pull
vercel env --cwd apps/storyblok --environment development pull
```

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
