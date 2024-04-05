import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../layouts/main/Layout";
import LoginLayout from "../layouts/auth/Layout";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { AuthProvider, useAuth } from "@/context/authContext";
import { useRouterManager } from "@/services/RouterManager";

interface AppWithAuthProps {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppWithAuth Component={Component} pageProps={pageProps} />
    </AuthProvider>
  );
}

function AppWithAuth({ Component, pageProps }: AppWithAuthProps) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const routerManager = useRouterManager();
  const [LayoutComponent, setLayoutComponent] = useState(() =>
    isAuthenticated === true ? Layout : LoginLayout,
  );

  useEffect(() => {
    if (isAuthenticated == undefined) return;
    if (
      !isAuthenticated &&
      router.pathname !== routerManager.TERM_CONDITIONS_PAGE_PATH &&
      router.pathname !== routerManager.PRIVACY_POLICY_PAGE_PATH
    ) {
      routerManager.goTo(routerManager.LOGIN_PATH);
    }

    const shouldBeLoginLayout =
      !isAuthenticated || router.pathname.startsWith(routerManager.AUTH_PATH);
    const updateLayout = shouldBeLoginLayout ? LoginLayout : Layout;

    setLayoutComponent(() => updateLayout);
  }, [isAuthenticated, router.pathname]);

  return (
    <LayoutComponent>
      <SpeedInsights />
      <Head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
