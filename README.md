# Please read the instructions below before getting started

All issues should be made on the issues section of this GitHub repository [github.com/contentionary/template/issues](https://github.com/contentionary/template/issues)

## How to get your account as a developer

- Visit [edtify.com/register](https://www.edtify.com/register) to create your account.
- Verify your account through your mail and proceed to login

## How to get your centre ID as a developer

After creating your account on Edtify,

- Visit [dev.edtify.com/register](https://dev.edtify.com/register) and create a dev account.
- Verify your account through your mail and proceed to login
- Visit [dev.edtify.com/create-centre](https://dev.edtify.com/create-centre) and fill in the required details

  - select the plugin combinations you would like to work and
  - upload your centre logo.
  - fill in the rest of the form and submit it.

- After creating your centre, click the Manage Centre button and proceed to the Admin dashboard page
- On the Admin dashboard, copy the centre ID you see there

## Coding rules and patterns

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Fork the repository into your own GitHub
- Clone the repository to your local machine
- Create a new branch for your changes
- Make some changes and commit them with useful messages
- Push the changes to your repository

> When your designs are completed, deploy to any server of your choice [Deploy on Vercel](https://nextjs.org/docs/deployment) and share your design url with us.

## To run the project

First, install npm packages by running:

```bash
npm install --legacy-peer-deps
```

add .env.local file to your root directory and add `NEXT_PUBLIC_BASE_URL = "https://community-api.edtify.com/v1"` to it.

Proceed to the Admin dashboard page on [dev.edtify.com](https://dev.edtify.com/) and get your centre ID, paste as the id value of the CENTRE object in the `src/utils/config` file. Upload courses and publications, create leagues and exams in your account on [dev.edtify.com](https://dev.edtify.com/) according to your taste, or use the default `centre id` to preview your works/designs.

Note: this process should be repeated when deploying to [netlify.com](https://www.netlify.com/) or [vercel.com](https://vercel.com/)

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start creating your template by modifying `src/template/views/home.tsx`. The page auto-updates as you edit the file.

> please note: all code modifications for your new template designs should be done in the @src/template directory, styles in the @src/template/styles folder, and components in the @src/template/components folder for easy portability of your designs to our system.
> Also, the template project is to be treated as an [open source project](./contributors.md), any update to the system outside the template directory that you feel to contribute as an update to the exhisting reposistory should be done following this guard.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Happy Designing
