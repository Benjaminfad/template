// mui components
import Box from "@mui/material/Box";
import ReaderSection from "@src/template/components/shared/DocumentReader";
//
import { PublicationInt } from "@src/utils/interface";

const Document = ({ publication }: { publication: PublicationInt }) => {
  return (
    <Box component="main" mt={0}>
      <ReaderSection {...publication} />
    </Box>
  );
};

export default Document;
