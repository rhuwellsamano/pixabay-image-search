import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import NavBar from "./components/NavBar";
import SearchOptions from "./components/SearchOptions";
import { getImages } from "./services/api";
import ExtraBar from "./components/ExtraBar";
import Images from "./components/Images";

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("cats");
  const [count, setCount] = useState(20);
  const [open, toggleExtraBar] = useState(false);

  useEffect(() => {
    if (count < 3 || count > 200) {
      toggleExtraBar(true);
      return;
    }
    toggleExtraBar(false);

    const getData = async () => {
      await getImages(text, count).then((response) => {
        setData(response.data.hits);
      });
    };
    getData();
  }, [text, count]);

  const onTextChange = (text) => {
    setText(text);
  };

  const onCountChange = (count) => {
    setCount(count);
  };

  return (
    <Box>
      <NavBar />
      <SearchOptions
        onTextChange={onTextChange}
        onCountChange={onCountChange}
      />
      <Images data={data} />
      <ExtraBar />
    </Box>
  );
}

export default App;
