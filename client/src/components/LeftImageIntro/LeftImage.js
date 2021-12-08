import { Container } from '@material-ui/core';
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import { Box, Typography } from "@material-ui/core";
import bgImage from "../../assets/bg-img.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  icon: {
    fontSize: "75px"
  }
}));

const LeftImage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TextsmsOutlinedIcon color="secondary" className={classes.icon} />
      <Typography variant="h4" color="secondary" align="center">
        <Box letterSpacing={2} lineHeight={1.5}>
          Converse with anyone at any moment
        </Box>
      </Typography>
    </Container>
  )
}

export default LeftImage
