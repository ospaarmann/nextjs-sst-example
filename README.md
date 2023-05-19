# Next.js Example Project with SST

This is an example project to test deploying a Next.js app with the [Serverless Stack (SST)](https://sst.dev/) framework on AWS.

## Getting Started

To run the development server locally, you can use the SST CLI. First, install the dependencies:

```bash
npm install
# or
yarn
```

Then, start the local development server:

```bash
yarn sst dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Deploying to AWS

To deploy the app to AWS, you can use the SST CLI. First, configure your AWS credentials:

```bash
aws configure
```

Then, deploy the app:

```bash
yarn sst deploy --stage prod
```

This will create the necessary AWS resources and deploy the app to the cloud.

## Testing Static Assets

This project includes four sample uses of images to test static assets with SST on AWS:

- An `img` tag with a local asset
- An `img` tag with an S3 asset
- The `Image` component with a local asset
- The `Image` component with an S3 asset

You can test these by running the app locally or deploying it to AWS and accessing the URLs for each asset.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about SST, take a look at the following resources:

- [SST Documentation](https://docs.sst.dev/) - learn about SST features and API.
- [SST GitHub repository](https://github.com/serverless-stack/sst) - your feedback and contributions are welcome!

You can also check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) and the [SST GitHub repository](https://github.com/serverless-stack/serverless-stack) for more information.

## About SST

SST is a framework for building serverless applications on AWS. It provides a simple and intuitive API for defining AWS resources and connecting them to your application code. With SST, you can easily deploy your application to AWS and manage it using familiar tools like the AWS CLI and CloudFormation.