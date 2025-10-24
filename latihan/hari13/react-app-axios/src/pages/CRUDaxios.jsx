import axios from "axios";
import { useEffect, useState } from "react";

export const CRUDAxios = ({ fetch, setDataUpdate }) => {
  const [movies, setMovies] = useState([]);
  const [viewError, setViewError] = useState({});

  useEffect(() => {
    fetchMovie();
  }, [fetch]);

  const fetchMovie = async () => {
    await axios
      .get("http://localhost:3000/movie/view")
      .then((response) => {
        setMovies(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const deleteMovie = async (id) => {
    await axios
      .delete(`http://localhost:3000/movie/remove/${id}`)
      .then((response) => {
        console.log("deleted", response.data);
        setViewError(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
        setViewError(error.message);
      });
  };

  const handleDeleteMovie = (id) => {
    if (confirm("Yakin Hapus Data ini ?")) {
      deleteMovie(id);
      fetchMovie();
    }
  };
  const handleUpdateMovie = (id,title, year, categoryId) => {
    const dataToUpdate = {
      id,
      title,
      year,
      categoryId,
    };
    console.log(`data : `,dataToUpdate)
    setDataUpdate(dataToUpdate);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <p>
        {viewError.status === "unsuccess"
          ? `Info : ${viewError.message}`
          : viewError.status === "succes" && `Info ; ${viewError.message}`}
      </p>
      <div className="container_table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Movie</th>
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
                <td>{movie.category?.name || "-"}</td>
                <td>
                  <button
                    className="btn_edit"
                    onClick={() =>
                      handleUpdateMovie(
                        movie.id,
                        movie.title,
                        movie.year,
                        movie.categoryId
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn_delete"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
