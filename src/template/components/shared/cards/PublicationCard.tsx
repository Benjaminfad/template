import React from "react";
// next
import NextLink from "next/link";
// mui components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Link as MuiLink } from "@mui/material";
// app components
import ImageComponent from "../image";
// icons
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/PersonOutline";
// styles and interface
import useGlobalStyle from "@src/template/styles";
import useCardStyle from "@src/template/styles/card";
import { PublicationCardFunc } from "./interfaceType";
import {
  BOOK_IMAGE_PLACEHOLDER,
  FOLDER_IMAGE_PLACEHOLDER,
  kCount,
} from "@src/utils";

const PublicationCard: PublicationCardFunc = ({
  slug,
  name,
  price,
  summary,
  subscriberCount,
  imageUrl,
  readCount,
  type,
  id,
  folderContentCount,
  isSubscriptionCentre,
}) => {
  const cardStyle = useCardStyle();
  const globalStyle = useGlobalStyle();

  return (
    <Card className={cardStyle.publicationCard}>
      <NextLink
        href={
          type === "FOLDER"
            ? `/library?folderId=${id}`
            : `/library/${slug}/${id}`
        }
        passHref
      >
        <CardActionArea
          LinkComponent={MuiLink}
          className="MuiCourseCardActionBase-root"
        >
          <Box p={1} className="card-img">
            <ImageComponent
              src={
                type === "FOLDER"
                  ? imageUrl || FOLDER_IMAGE_PLACEHOLDER
                  : imageUrl || BOOK_IMAGE_PLACEHOLDER
              }
              width="90%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="Edtify"
            />
          </Box>
          <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
            <Typography noWrap gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography
              mb={1}
              minHeight={40}
              variant="body2"
              color="text.secondary"
              className={globalStyle.text2LineTruncate}
            >
              {summary}
            </Typography>
            {type === "FOLDER" ? (
              <Typography
                mb={0}
                noWrap
                display="flex"
                variant="body2"
                alignItems="center"
              >
                <FolderCopyOutlinedIcon color="primary" fontSize="inherit" />
                &nbsp; {folderContentCount}
              </Typography>
            ) : (
              <Stack
                mt="auto"
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="between"
                flexWrap={{ xs: "wrap", sm: "nowrap" }}
              >
                <Typography
                  mb={0}
                  noWrap
                  display="flex"
                  variant="body2"
                  alignItems="center"
                  order={{ xs: 2, sm: 2 }}
                >
                  <MenuBookOutlinedIcon color="primary" fontSize="inherit" />
                  &nbsp;{kCount(readCount || 0)}
                </Typography>
                <Typography
                  mb={0}
                  noWrap
                  display="flex"
                  variant="body2"
                  alignItems="center"
                  order={{ xs: 3, sm: 2 }}
                >
                  <FavoriteBorderOutlinedIcon
                    color="primary"
                    fontSize="inherit"
                  />
                  &nbsp;{kCount(subscriberCount || 0)}
                </Typography>
                <Typography
                  mb={0}
                  flexGrow={1}
                  variant="h5"
                  color="primary"
                  order={{ xs: 1, sm: 3 }}
                  width={{ xs: "100%", sm: "auto" }}
                  ml={{ xs: "0 !important", sm: "auto" }}
                  textAlign={{ xs: "left", sm: "right" }}
                >
                  {isSubscriptionCentre
                    ? ""
                    : price <= 0
                    ? "Free"
                    : ` ₦${price}`}
                </Typography>
              </Stack>
            )}
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};

export default PublicationCard;
