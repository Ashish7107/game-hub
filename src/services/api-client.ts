import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "a851bb7242014f459b4c70ef6d1a351e" },
});
