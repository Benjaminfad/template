import React from "react";
// next components
import NextLink from "next/link";
//
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { Link as MuiLink } from "@mui/material";
import Typography from "@mui/material/Typography";
// utils, interface and styles
import { bg } from "@src/template/styles";
import { ExamFinishedFunc } from "./interfaceType";
// import { SubmitAnswerInt } from "@src/utils/interface";
// import { dateTimeFormat } from "@src/utils";

const FinishedExamCard: ExamFinishedFunc = (props) => {
  const { exam, leagueId /* auth */ } = props;
  const { data } = props.submitAnsResponse;
  const minutes = Math.floor(data?.duration / 60);
  var seconds = Math.floor(data?.duration % 60);
  return (
    <Box
      pt={8}
      display="flex"
      component="main"
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      sx={{ ...bg().bgDustyPrimary }}
    >
      <Box component="section" sx={{ pt: 4, pb: 8, px: { md: 6 } }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item xs={12} md={6} xl={5} textAlign="center">
              <Typography mb={3} variant="h2" component="h1">
                Exam Completed!!!
              </Typography>
              <Divider
                sx={{
                  borderWidth: 1,
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                }}
              />
              <Typography mb={1} mt={2} variant="h4">
                You Scored:{" "}
                <Typography color="primary" component="span" variant="h4">
                  {data.score} Marks
                </Typography>
              </Typography>
              <Typography my={1} variant="h4">
                Out of
              </Typography>
              <Typography my={1} variant="h4">
                Exam Total Score: {data.maxScore} Marks
              </Typography>
              <Typography my={2} variant="h5">
                Exam Duration (in minutes): {minutes} : {seconds}
              </Typography>
              <Stack
                py={2}
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <NextLink
                  href={
                    leagueId ? `/leagues/${leagueId}` : `/exams/${exam.slug}`
                  }
                  passHref
                >
                  <Button
                    size="large"
                    disableElevation
                    variant="contained"
                    component={MuiLink}
                  >
                    Exit Exam
                  </Button>
                </NextLink>
                {exam.showCorrection && (
                  <NextLink
                    href={`/exams/${exam.slug}/${exam.id}/${data.answerId}/correction`}
                    passHref
                  >
                    <Button
                      size="large"
                      disableElevation
                      variant="contained"
                      component={MuiLink}
                    >
                      Show Corrections
                    </Button>
                  </NextLink>
                )}
                {/* <Button disableElevation size="large" variant="outlined">
                  Show Corrections
                </Button> */}
              </Stack>
              <Divider />
              <Typography my={2} variant="h5">
                Completion Message:
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{ __html: exam.instruction }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default FinishedExamCard;
