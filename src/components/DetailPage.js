import { useState, useEffect } from "react";
import { Card, makeStyles } from "@material-ui/core";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  image: {
    height: 300,
    width: "50%",
  },
});

const DetailPage = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchDetails();
  }, []);
  let params = useParams();

  const fetchDetails = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=26115194-00e5538dbedabc6a4e981aab1&id=${params.id}`
      )
      .then((res) => {
        setData(res.data.hits[0]);
        console.log("after fetch:", res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log("this one", data.hits);

  return (
    <Card>
      <h2>User: {data.user}</h2>
      <h4>Tags: {data.tags}</h4>
      <img src={data.largeImageURL} alt={data.user} />
    </Card>
  );
};

export default DetailPage;
