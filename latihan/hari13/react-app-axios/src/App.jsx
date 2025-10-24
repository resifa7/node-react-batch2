import { useState } from "react";
import "./App.css";
import { CRUDAxios } from "./pages/CRUDAxios";
import { FormInput } from "./pages/FormInput";

function App() {
  const [fetch, setFetch] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({})
  return (
    <>
      <div className="conatainer_root">
        <FormInput setFetch={setFetch} fetch={fetch} dataUpdate={dataUpdate} />
        <CRUDAxios fetch={fetch} setDataUpdate={setDataUpdate} />
      </div>
    </>
  );
}
export default App;
