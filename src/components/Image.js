import { Card, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  image: {
    height: 300,
    width: "100%",
    objectFit: "cover",
  },
});

const Image = ({ image }) => {
  const classes = useStyles();
  const [data, setData] = useState(image);

  //   console.log(image);

  return (
    <Card>
      <img
        className={classes.image}
        src={image.largeImageURL}
        alt={image.user}
      />
    </Card>
  );
};

export default Image;
