import "../assets/css/CRUDaxios.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CRUDaxios() {
  const [movies, setData] = useState([]);
  const [categories, setCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [catId, setCatId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUpdated, setIsUpdate] = useState(false);
  const [movieId, setMovieId] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/movies");
      console.log(response.data.movies);
      setData(response.data.movies);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/categories");
      setCategory(response.data.categories);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      if (confirm("Anda yakin hapus data")) {
        const response = await axios.delete(
          `http://localhost:3000/api/movies/${id}`
        );

        fetchData();
        fetchCategory();
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/movies/${id}`
      );
      const data = response.data.movie;

      setTitle(data.title);
      setYear(data.year);
      setCatId(data.categoryId);

      setMovieId(data.id);

      setIsUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);

  const handleTitleChange = async (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleYearChange = async (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  const handleCategoryChange = async (e) => {
    setCatId(e.target.value);
    console.log(catId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Anda yakin mau simpan data!");
      if (isUpdated) {
        const response = await axios.put(
          `http://localhost:3000/api/movies/${movieId}`,
          {
            title,
            year: Number(year),
            categoryId: Number(catId),
          }
        );

        clearData();

        fetchData();
        fetchCategory();

        return response;
      } else {
        const response = await axios.post("http://localhost:3000/api/movies", {
          title,
          year: Number(year),
          categoryId: Number(catId || categories[0]?.id),
        });

        fetchData();
        fetchCategory();

        // return response;
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const clearData = () => {
    setTitle("");
    setYear("");
    setCatId("");
    setMovieId("");

    setIsUpdate(false);
  };

  return (
    <>
      <h1 className="font-bold my-5">
        <span className="text-white">Movies</span>
      </h1>
      <div className="crud-page">
        <div className="crud-form">
          <p className="error-text">{errorMessage}</p>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Movie Title?</legend>
              <input
                type="text"
                className="input"
                value={title}
                onChange={handleTitleChange}
                placeholder="Type here"
              />
              <p className="label">Optional</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Movie Year?</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={year}
                onChange={handleYearChange}
              />
              <p className="label">Optional</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <select
                className="select"
                value={catId}
                onChange={handleCategoryChange}
              >
                {/* <option value="" selected disabled>
                  Pick a Category
                </option> */}
                {categories.map((cat, index) => (
                  <option key={index} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <span className="label">Optional</span>
            </fieldset>
            {isUpdated ? (
              <div className="flex justify-around">
                <button className="btn btn-info" type="submit">
                  Submit
                </button>
                <button className="btn btn-error" onClick={() => clearData()}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
        <div className="crud-table">
          <div className="h-80 overflow-x-auto">
            <table className="table table-zebra">
              <thead className="sticky top-0 bg-base-100 text-center">
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.category.name || "-"}</td>
                    <td>
                      <div className="button-group space-x-4">
                        <button
                          className="btn btn-primary"
                          onClick={() => getDataById(movie.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => deleteData(movie.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CRUDaxios;
