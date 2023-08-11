import CourseDetailsPage from "@src/template/components/CourseDetails";
import CourseExamLeaguePublicationWrapper from "@src/template/components/Layout/Wrapper/CourseExamLeaguePublicationWrapper";
import { queryClient } from "@src/utils";
import { BasePageProps } from "@src/utils/interface";

const DetailsPage = () => {
  const { pageData } = queryClient.getQueryData("pageProps") as BasePageProps;

  return (
    <CourseExamLeaguePublicationWrapper
      title={pageData.courseDetails?.name || ""}
      description={pageData.courseDetails?.description || "Online course"}
      image="/public/images/logo-icon.png"
      showHeader={true}
      showFooter={true}
    >
      <CourseDetailsPage />
    </CourseExamLeaguePublicationWrapper>
  );
};

export default DetailsPage;
