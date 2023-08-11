import { Fragment, memo } from "react";
import NextLink from "next/link";
//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as MuiLink } from "@mui/material";
// app components
import CourseCard from "@src/template/components/shared/cards/CourseCard";
// styles and interface
import { queryClient } from "@src/utils";
import { BasePageProps, TemplateDataInt } from "@src/utils/interface";

const CourseListSection = () => {
  const { pageData } = queryClient.getQueryData("pageProps") as BasePageProps;
  const templateData = pageData.templateData as TemplateDataInt;

  return (
    <Fragment>
      <Box
        component="section"
        sx={{ pt: 4, px: { md: 6 }, pb: 8 }}
        className="hero-section"
      >
        <Container maxWidth="xl">
          <Typography
            mb={4}
            variant="h4"
            component="h2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Browse Courses
          </Typography>
          <Grid
            container
            mb={{ xs: 2, md: 3, lg: 2, xl: 4 }}
            spacing={{ xs: 2, md: 3, lg: 2, xl: 4 }}
          >
            {templateData.courses?.map((course, index) => (
              <Grid
                key={`${index}-course-card`}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
          <Box mt={4} textAlign="center">
            <NextLink href="/courses" passHref>
              <Button
                size="large"
                disableElevation
                variant="contained"
                component={MuiLink}
                color="primary"
                sx={{
                  px: 8,
                  textAlign: "center",
                  width: { xs: "100%", sm: "auto" },
                  display: { xs: "block", sm: "inline-block" },
                }}
              >
                View All
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default memo(CourseListSection);
