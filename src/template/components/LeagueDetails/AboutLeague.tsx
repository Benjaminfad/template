import React, { Fragment } from "react";
// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// app components
import { ParticipantCard } from "./LeagueParticipants";
// icons
// interface and config
import { useQuery } from "react-query";
import { getAuthData } from "@src/utils/auth";
import { UserInt } from "@src/utils/interface";
import { handleError, request } from "@src/utils";
import { LeagueDetailsPageFunc } from "./interfaceType";

const AboutLeague: LeagueDetailsPageFunc = ({ league }) => {
  const { description, centreId, id } = league;
  const { token } = getAuthData();
  const { isLoading, data, error } = useQuery(
    ["league-scoreboard", centreId, id],
    async () => {
      return await request.get({
        url: `/centre/${centreId}/league/${id}/table`,
        token,
      });
    }
  );

  const participantList = data?.data as Array<UserInt>;
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{handleError(error).message}</div>;
  }

  return (
    <Fragment>
      {data && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>
            Top Participants:
          </Typography>
          {participantList.length ? (
            <Grid container spacing={3}>
              {participantList.map((participant: UserInt, index: number) => {
                if (index > 2) return;
                return (
                  <Grid
                    item
                    xl={3}
                    md={4}
                    xs={6}
                    key={`participant-item-${index}`}
                  >
                    <ParticipantCard
                      participant={participant}
                      position={
                        index === 0 ? "1ST" : index === 1 ? "2ND" : "3RD"
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Typography sx={{ textAlign: "center" }}>
              No Participant Found.
            </Typography>
          )}
        </Box>
      )}
      <Typography variant="h5" mb={2} mt={4}>
        ABOUT THIS LEAGUE:
      </Typography>
      <Box dangerouslySetInnerHTML={{ __html: description }} />
    </Fragment>
  );
};

export default AboutLeague;
