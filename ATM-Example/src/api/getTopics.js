import axios from "axios";

const getTopics = async () => {
  const response = await axios.get("http://localhost:3000/topics");
  return response.data;
};

export default getTopics;
