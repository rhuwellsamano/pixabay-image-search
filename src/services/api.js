import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "26115194-00e5538dbedabc6a4e981aab1";

export const getImages = async (text, count) => {
  try {
    const data = await axios.get(
      `${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
