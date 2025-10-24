import axios from "axios";
import { useEffect, useState } from "react";

export const FormInput = ({ setFetch, fetch, dataUpdate }) => {
  const [category, setCategory] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  const [viewError, setViewError] = useState({});
  const [viewUpdate, setViewUpdate] = useState(false);
  const [ dataID, setDataID] = useState(0)

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axios
      .get("http://localhost:3000/cat/view")
      .then((response) => {
        setCategory(response.data.data);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    handleDataUpdate(dataUpdate);
    setViewUpdate(!viewUpdate);
    if (!viewUpdate) {
      setViewUpdate(false);
    }
  }, [dataUpdate]);

  const handleDataUpdate = async (dataUpdate) => {
    const { id, title, year, categoryId } = dataUpdate;
    // await console.log(dataUpdate);
    await setMovieName(title);
    await setMovieYear(year);
    await setMovieCategory(categoryId);
      await setDataID(id);
  };

  const handleUpdateMovie = async (e) => {
    e.preventDefault();
    // console.log(movieName);
    // console.log(movieYear);
    // console.log(movieCategory);
    console.log(dataID)
    const dataToSend = {
      title: movieName,
      year: Number(movieYear),
      categoryId: Number(movieCategory),
    };

    console.log(`send data : `,dataToSend)

    try {
      const response = await axios.put(`http://localhost:3000/movie/change/${dataID}`, dataToSend)
      console.log('Updated', response.data)
    }catch (error){
      console.log('Error', error)
    }
  }

  const handleNameChange = (e) => {
    setMovieName(e.target.value);
    // console.log(fetch)
  };

  const handleYearChange = (e) => {
    setMovieYear(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setMovieCategory(e.target.value);
    console.log(movieCategory);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(movieName);
    console.log(movieYear);
    console.log(movieCategory);

    const postData = async () => {
      const dataToSend = {
        title: movieName,
        year: Number(movieYear),
        categoryId: Number(movieCategory),
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/movie/add",
          dataToSend
        );
        console.log("Success:", response.data);
        setViewError(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    postData();
    setMovieName("");
    setMovieYear("");
    setMovieCategory(0);
    await setFetch(!fetch);

    //  window.location.reload()
  };

  return (
    <div>
      <h1>CRUD Axios</h1>
      <p>Adding movies for new record.</p>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Movie name.."
          value={movieName || ""}
          onChange={handleNameChange}
        />

        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Movie year.."
          value={movieYear || ""}
          onChange={handleYearChange}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={movieCategory || ""}
          onChange={handleCategoryChange}
        >
          <option value="0">--Select Category--</option>
          {category.map((cat, index) => (
            <option key={index} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input type="submit" value={viewUpdate ? "Submit" : "Submit "} />
      </form>
      <p>
        {viewError.status === "unsuccess"
          ? `Info : ${viewError.message}`
          : viewError.status === "succes" && `${viewError.message}`}
      </p>
    </div>
  );
};
