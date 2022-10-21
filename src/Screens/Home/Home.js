import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import useAPI from "../../Services/APIs/Common/useAPI";
import Person from "../../Services/APIs/Persons/Persons";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import './Home.css'

export default function Home() {    
  
  const [cards, setCards] = useState([]);
  const getPersonAPI = useAPI(Person.getPersons);
  const navigate = useNavigate();

  const goToDetail = (person) => {
    navigate("/detail/" + person.CPF, {
      state: {
        person: JSON.stringify(person)
      },
    });
  };

  useEffect(() => {
    getPersonAPI
      .requestPromise()
      .then((info) => {
        let mountCards = [] 
        info.persons.forEach((person) => {
          mountCards.push(
            <Grid key={person.CPF} item lg={4} md={6} sm={12}>
              <Card className="cardBox">
                <CardMedia
                  component="img"
                  height="140"
                  image={person.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {person.firstName} {person.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.jobTitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => goToDetail(person)} >Mais informações</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
        setCards(mountCards);
      })
      .catch((info) => {
        console.log(info);
      });
  }, []);

  return (
    <Container>
      <div className="TopPageTitle">
        <Typography variant="h1" color="primary">Usuários</Typography>
      </div>
      <Grid container>{cards}</Grid>
    </Container>
  );
}
