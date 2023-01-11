import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
import { newArt } from "../../actions/artAction";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function ArtForm() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [loading, setLoading] = useState(true);
  const [previousSelect, setPreviousSelect] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [artInput, setArtInput] = useState({
    name: "",
    description: "",
    price: "",
    files: [],
    CategoryId: "",
  });

  const [uploadedFile, setUploadedFile] = useState([]);
  console.log("uploadedFile", uploadedFile);

  const handleChangeInput = (e) => {
    console.log(e.target.name);
    let obj = {
      ...artInput,
      [e.target.name]: e.target.value,
    };
    setArtInput(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newArt(artInput))
      .then(() => {
        navigate("/profile");
      })
      .catch(() => { })
      .finally(() => {
        setArtInput({
          name: "",
          description: "",
          price: 0,
          files: [],
          CategoryId: "",
        });
      });
  };

  const handleFilesInput = (e) => {
    // console.log(e.target.files);
    const upload = e.target.files;
    console.log("upload", upload);
    // const { name } = upload;

    let obj = {
      ...artInput,
      files: [...artInput.files, ...e.target.files],
    };
    setUploadedFile([...uploadedFile, ...upload]);
    setArtInput(obj);
  };

  const tabForm = (e) => {
    const selected = document.getElementById(e.target.value);
    selected.style.backgroundColor = "rgb(21 128 61)";
    setArtInput({
      ...artInput,
      CategoryId: +e.target.value,
    });
    document.getElementById(previousSelect).style.backgroundColor = "#85CF81";
  };

  useEffect(() => {
    setPreviousSelect(artInput.CategoryId);
  }, [artInput.CategoryId]);

  useEffect(() => {
    dispatch(fetchAllCategory()).then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);
  console.log(artInput.files);
  return (
    <section className="flex flex-col  container-add rounded-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="min-w-full flex justify-center items-center pt-4 tab-form gap-3">
          {!loading
            ? categories.map((el, i) => {
                return (
                  <button
                    className="w-32 rounded-xl text-black"
                    id={el.id}
                    style={{ backgroundColor: "#85CF81" }}
                    onClick={tabForm}
                    value={el.id}
                    key={i}
                  >
                    {el.name}
                  </button>
                );
              })
            : null}
        </div>
        <div>
          <h1 className="text-xl text-white">Choose art category above</h1>
        </div>
      </div>
      <div className="flex">
        <div
          className="w-1/2 pt-4 px-4 flex gap-2 flex-col items-center"
        // style={{ backgroundColor: "#191B1F" }}
        >
          <h1 className="text-xl text-white">Uploaded file</h1>
          {artInput.files.length ? (
            <ul className="flex flex-col gap-2">
              {uploadedFile.map((el) => {
                console.log("el", el.name);
                return (
                  <li
                    className="border p-2 rounded-3xl"
                    style={{
                      backgroundColor: "#3B3B3B",
                      borderColor: "#3B3B3B",
                    }}
                  >
                    {el.name}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xs text-bold text-white text-underline">PLEASE UPLOAD YOUR MAIN SOURCE FIRST, THEN UPLOAD THE PREVIEWS</p>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col pt-4 gap-3"
          style={{ color: "#EDEDED" }}
        >
          <table className="border-separate border-spacing-8">
            <tr>
              <td><label htmlFor="name">Art name</label></td>
              <td>:</td>
              <td>
                <input
                  name="name"
                  className="rounded-xl indent-4 text-white"
                  style={{ width: "229px" }}
                  value={artInput.name}
                  onChange={handleChangeInput}
                  placeholder="your art name"
                />
              </td>
            </tr>
            <tr>
              <td><label>Starting price</label></td>
              <td>:</td>
              <td>
                <input
                  type="number"
                  name="price"
                  className="rounded-xl indent-4 text-white"
                  value={artInput.price}
                  onChange={handleChangeInput}
                  placeholder="your art price"
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="files">Select files</label></td>
              <td>:</td>
              <td>
                <input
                  id="files"
                  name="files"
                  type="file"
                  multiple
                  onChange={handleFilesInput}
                />
              </td>
            </tr>
            <tr>
              <td><label >
                Description</label>
              </td>
              <td>:</td>
              <td>
                <textarea
                  id="description"
                  className="rounded-3xl description text-white"
                  rows={5}
                  name="description"
                  value={artInput.description}
                  onChange={handleChangeInput}
                ></textarea>
              </td>
            </tr>
          </table>

          <div className=" flex justify-center">
            <input
              className="rounded-2xl w-20 h-8 bg-green-400 bg-opacity- text-black hover:bg-green-800"
              // style={{ backgroundColor: "#85CF81" }}
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
