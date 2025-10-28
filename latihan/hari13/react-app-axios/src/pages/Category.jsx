import axios from "axios";
import { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [isUpdated, setIsUpdate] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNameChange = async (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isUpdated) {
        const response = await axios.put(
          `http://localhost:3000/api/categories/${id}`,
          {
            name,
          }
        );

        setId("");
        setName("");
        setIsUpdate(false);
        fetchData();
      } else {
        const response = await axios.post(
          "http://localhost:3000/api/categories",
          {
            name,
          }
        );

        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/categories/${id}`
      );
      const data = response.data.category;

      setName(data.name);
      setId(data.id);

      setIsUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/categories/${id}`
      );

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="font-bold my-5">
        <span className="text-white">Categories</span>
      </h1>
      <div className="crud-page">
        <div className="crud-form justify-center">
          {/* <p className="error-text">{errorMessage}</p> */}
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category Name?</legend>
              <input
                type="text"
                className="input"
                value={name}
                onChange={handleNameChange}
                placeholder="Type here"
              />
              <p className="label">Optional</p>
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
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>
                      <div className="button-group space-x-4">
                        <button
                          className="btn btn-primary"
                          onClick={() => getDataById(category.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => deleteData(category.id)}
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

export default Category;
