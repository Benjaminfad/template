import Publications from "@src/components/Publications";
import PublicationsWrapper from "@src/components/Wrapper/PublicationsWrapper";
import { DEFAULT_LOGO, queryClient } from "@src/utils";
import { BasePageProps } from "@src/utils/interface";
import Box from "@mui/material/Box";

const PublicationsPage = () => {
  const { cachedData } = queryClient.getQueryData("pageProps") as BasePageProps;
  const { name, logo } = cachedData.centre;

  return (
    <PublicationsWrapper
      title={`${name} | Book Store`}
      description={`Welcome to ${name} online book store`}
      image={logo || DEFAULT_LOGO}
      showHeader={true}
      showFooter={true}
    >
      <Box sx={{ marginTop: {md: 8, lg: 6, xs:9} }}>
        <Publications />
      </Box>
    </PublicationsWrapper>
  );
};

export default PublicationsPage;
