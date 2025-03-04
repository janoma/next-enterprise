import { Button } from "components/Button/Button";
import { LP_GRID_ITEMS } from "lp-items";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
        width: 1200,
      },
    ],
    url: "https://next-enterprise.vercel.app/",
  },
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
};

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed,
              high-performance Next.js boilerplate! Experience rapid UI
              development, AI-powered code reviews, and an extensive suite of
              tools for a smooth and enjoyable development process.
            </p>
            <Button
              className="mr-3"
              href="https://github.com/Blazity/next-enterprise"
            >
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div
                className="flex flex-col items-center justify-center text-center"
                key={singleItem.title}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {singleItem.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {singleItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
