// React component
import { useEffect, useState, useRef } from "react";

import "react-phone-input-2/lib/style.css";
// next components
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
// mui component
import LinearProgress from "@mui/material/LinearProgress";
// react query
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
//
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// interface, styles and util
import { isServerSide, queryClient } from "@src/utils";
import theme from "@src/template/styles/theme";
import { BasePageProps } from "@src/utils/interface";
//
import Custom404 from "./404";

function App({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const appTheme = useTheme();
  const [pageLoading, setPageLoading] = useState(false);
  //
  const client = useRef(queryClient);
  const { cachedData = null } = pageProps as BasePageProps;

  queryClient.setQueryData("pageProps", pageProps);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setPageLoading(true));
    Router.events.on("routeChangeComplete", () => setPageLoading(false));
    Router.events.on("routeChangeError", () => setPageLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setPageLoading(true));
      Router.events.off("routeChangeComplete", () => setPageLoading(false));
      Router.events.off("routeChangeError", () => setPageLoading(false));
    };
  }, []);
  if (pageProps?.error?.statusCode === 401 && !isServerSide) {
    route.push("/logout");
  }
  if (route.pathname.includes("/admin") && !cachedData?.user?.isAdmin)
    // Authenticate admin
    return <Custom404 />;

  return (
    <QueryClientProvider client={client.current}>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        {pageLoading && (
          <LinearProgress
            sx={{
              top: 0,
              width: "100%",
              position: "fixed",
              zIndex: appTheme.zIndex.drawer + 4,
            }}
          />
        )}
        {cachedData?.centre ? <Component {...pageProps} /> : <Custom404 />}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
