import React, { FormEvent } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useForm from "@src/utils/hooks/useForm";
import { useState } from "react";
import { handleError, request } from "@src/utils";
import ButtonComponent from "@src/template/components/shared/button";
import dynamic from "next/dynamic";

const EmailVerification = ({
  toggleToast,
  centreId,
  email,
}: {
  toggleToast: Function;
  centreId: string;
  email: string;
}) => {
  const { submit, resetValues } = useForm(emailVerification);
  const [isLoading, setIsLoading] = useState(false);
  const [formEvent, setFormEvent] = useState<FormEvent<HTMLFormElement>>();

  const Loading = dynamic(
    () => import("@src/template/components/shared/loading")
  );

  async function emailVerification() {
    try {
      setIsLoading(true);
      const { message } = await request.post({
        url: `/auth/verification/email?centreId=${centreId}`,
        data: { email },
      });
      toggleToast(message);
      resetValues(formEvent);
      setIsLoading(false);
    } catch (error) {
      toggleToast(handleError(error).message);
      setIsLoading(false);
    }
  }

  return (
    <Container maxWidth="xs" sx={{ mb: 10 }}>
      <form
        onSubmit={(e) => {
          submit(e);
          setFormEvent(e);
        }}
        style={{ marginTop: 40 }}
      >
        <Stack spacing={4} mt={3}>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", fontSize: { xs: 25, md: 32 } }}
          >
            Email Verification
          </Typography>
        </Stack>
        <Typography sx={{ textAlign: "center", marginTop: 4 }}>
          <ButtonComponent
            variant="contained"
            type="submit"
            sx={{ fontSize: 18 }}
          >
            <>
              Resend Email Verification Link
              {isLoading && (
                <Loading
                  sx={{
                    color: "#fff",
                    zIndex: (theme: any) => theme.zIndex.drawer + 1,
                  }}
                  color="primary"
                  size={15}
                />
              )}
            </>
          </ButtonComponent>
        </Typography>
      </form>
    </Container>
  );
};

export default EmailVerification;
