import { createContext } from "react";
// next js
import { GetServerSideProps } from "next";
// utils interface and styles
import { request } from "@src/utils";
import { getCentre, pageErrorHandler } from "@src/utils";
import {
  BasePageProps,
  LeagueListInt,
  CachedCentreInt,
} from "@src/utils/interface";
import { queryClient } from "@src/utils";
import { getAuthData } from "@src/utils/auth";
// template components
import MyLeagues from "@src/template/views/myLeagues";
import ErrorPage from "@src/template/views/errorPage";

export const CentreLeaguesContext = createContext<LeagueListInt | null>(null);

const MyLeaguesPage = (pageProps: BasePageProps) => {
  if (pageProps.error) {
    queryClient.setQueryData("pageProps", pageProps);

    return <ErrorPage />;
  }
  queryClient.setQueryData("pageProps", pageProps);

  return <MyLeagues />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let centre: any = {};
  const { pageId = 1 } = context.query;
  const { token, user } = getAuthData(context);
  try {
    centre = (await getCentre(context)) as CachedCentreInt;
    const { data: leagueList } = await request.get({
      url: `/my-leagues?pageId=${pageId}`,
      token,
    });

    return {
      props: { pageData: { leagueList }, cachedData: { user, centre, token } },
    };
  } catch (err) {
    return pageErrorHandler(err, user, token, centre);
  }
};
export default MyLeaguesPage;
