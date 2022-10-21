import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Container, Button, Typography, Box } from "@mui/material";

export default function Detail() {
  const { infoID } = useParams();
  const {
    state: { person },
  } = useLocation();

  const parsedPerson = JSON.parse(person);
  let navigate = useNavigate();

  const onBackButton = () => {
    navigate(-1);
  };


  console.log(person);

  return (
    <Container>
      <Box className="contentBox">
        <Typography variant="h1" color="primary">
          {" "}
          ID = {infoID}
        </Typography>
        <Typography variant="h1" color="primary">
          {" "}
          Info = {parsedPerson.firstName} {parsedPerson.lastName}
        </Typography>
        <Button onClick={() => onBackButton()} variant="primary">
          Voltar
        </Button>
      </Box>
    </Container>
  );
}
