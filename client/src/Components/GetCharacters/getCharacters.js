import axios from "axios";

const getCharacters = () => {
  try {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    try {
      const all = axios.get("/api/characters", {
        cancelToken: source.token,
      });
      return all;
    } catch (err) {
      axios.isCancel(err)
        ? console.log("Request cancelled")
        : console.log("getChars", err);
    }
  } catch (err) {
    console.log("useEffect err", err);
  }
};

export default getCharacters;
