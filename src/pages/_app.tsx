import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "@/shared/layout";

import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// eslint-disable-next-line import/order
import Head from "next/head";

import "dayjs/locale/ru";
dayjs.locale("ru");

import { useRouter } from "next/router";

import { UserContextProvider } from "../shared/contexts/UserContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const pageKey = router.asPath;
  const getLayout =
    Component.getLayout ??
    ((page) => <MainLayout key={pageKey}>{page}</MainLayout>);

  return (
    <ConfigProvider
      locale={locale}
    >
      <Head>
        <title>cella</title>
        <meta name="description" content="Lavr 2.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
      <UserContextProvider>
          <div className="relative h-full bg-gray-0">
            <AnimatePresence initial={false} mode="popLayout">
             {getLayout(<Component {...pageProps} />)}
            </AnimatePresence>
          </div>
        </UserContextProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
}
