import { Grid } from "@material-ui/core";
import Image from "./Image";
import { Link } from "react-router-dom";

const Images = ({ data }) => {
  //   console.log(data);
  return (
    <Grid container>
      {data.map((image) => (
        <Grid xs={3} item>
          <Link to={`/${image.id}`}>
            <Image key={image.id} image={image} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
