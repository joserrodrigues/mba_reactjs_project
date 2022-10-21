import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Container, Button, Typography, Box, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  
  const signInSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Primeiro nome é obrigatório")
      .min(2, "O primeiro nome deve ter ao menos 2 caracteres"),
    lastName: Yup.string()
      .required("Sobrenome é obrigatório")
      .min(2, "O sobrenome deve ter ao menos 2 caracteres"),
    jobTitle: Yup.string()
      .required("A profissão é obrigatório")
      .min(2, "A profissão deve ter ao menos 2 caracteres"),
    CPF: Yup.string()
      .required("CPF é obrigatório")
      .matches(
        /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})+$/,
        "Is not in correct format"
      ),
  });

  const onClickLogin = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Box className="contentBox">
        <div className="TitlePage">
          <Typography variant="h1" color="primary">
            Alterando Informação
          </Typography>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            jobTitle: "",
            CPF: "",
          }}
          validationSchema={signInSchema}
          onSubmit={onClickLogin}
        >
          {(formik) => {
            const { errors, setFieldValue } = formik;
            return (
              <Form>
                <TextField
                  required
                  id="outlined-required"
                  label="Primeiro Nome"
                  onChange={(e) => setFieldValue("firstName", e.target.value)}
                />
                <p></p>
                <ErrorMessage
                  component="div"
                  className="errorMessage"
                  name="firstName"
                />
                <p></p>
                <TextField
                  required
                  id="outlined-required"
                  label="Sobrenome"
                  onChange={(e) => setFieldValue("lastName", e.target.value)}
                />
                <p></p>
                <ErrorMessage
                  component="div"
                  className="errorMessage"
                  name="lastName"
                />
                <p></p>
                <TextField
                  required
                  id="outlined-required"
                  label="Profissão"
                  onChange={(e) => setFieldValue("jobTitle", e.target.value)}
                />
                <p></p>
                <ErrorMessage
                  component="div"
                  className="errorMessage"
                  name="jobTitle"
                />
                <p></p>
                <TextField
                  required
                  id="outlined-required"
                  label="CPF"
                  onChange={(e) => setFieldValue("CPF", e.target.value)}
                />
                <p></p>
                <ErrorMessage
                  component="div"
                  className="errorMessage"
                  name="CPF"
                />
                <p></p>
                <Button variant="primary" type="submit">
                  Alterar
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
};
