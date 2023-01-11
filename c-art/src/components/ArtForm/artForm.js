import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchAllCategory } from "../../actions/actionCategory";
import { newArt } from "../../actions/artAction";
import "./style.css";

export default function ArtForm() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [artInput, setArtInput] = useState({
    name: "",
    description: "",
    price: "",
    files: [],
    CategoryId: "",
  });

  const [uploadedFile, setUploadedFile] = useState([]);
  console.log("uploadedFile", uploadedFile)


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

    if (!artInput.name || !artInput.price || !artInput.description || !artInput.files || !artInput.CategoryId) {
      toast.error("All input is required")
    }

    dispatch(newArt(artInput))
      .then((data) => {
        // console.log(data.art.name);
        toast.success(`Art ${data.art.name} successfully created`)
      })
      .catch((error) => {
        // console.log(error);
        error.message ? toast.warn(`${error.response.data.message}`)
          : toast.error("Internal Server Error");
      })
    setArtInput({
      name: "",
      description: "",
      price: 0,
      files: [],
      CategoryId: "",
    });
  };

  const handleFilesInput = (e) => {
    // console.log(e.target.files);
    const upload = e.target.files;
    console.log("upload", upload)
    // const { name } = upload;

    let obj = {
      ...artInput,
      files: [...artInput.files, ...e.target.files],
    };
    setUploadedFile([...uploadedFile, ...upload]);
    setArtInput(obj);
  };

  const tabForm = (e) => {
    console.log(e.target.value);
    setArtInput({
      ...artInput,
      CategoryId: +e.target.value,
    });
  };

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
        <div
          className="min-w-full flex justify-center items-center pt-4 tab-form gap-3"
        // style={{ backgroundColor: "#191B1F" }}
        >
          {!loading
            ? categories.map((el, i) => {
              return (
                <button
                  className="w-32 rounded-xl text-black"
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
          {/* <img
            id="uploadedimage"
            className="rounded-md min-h-full text-white"
            src={artInput.source}
            alt="upload here"
          /> */}
          <h1 className="text-xl text-white">Uploaded File</h1>
          <ul className="flex flex-col gap-2">
            {uploadedFile.map((el) => {
              console.log("el", el.name)
              return (
                <li
                  className="border p-2 rounded-3xl"
                  style={{ backgroundColor: "#3B3B3B", borderColor: "#3B3B3B" }}
                >
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col pt-4 gap-3"
          style={{ color: "#EDEDED" }}
        >
          <div className="flex items-center justify-center mb-5">
            <label htmlFor="name">Art name : </label>
            <input
              name="name"
              className="rounded-xl indent-4 text-white"
              style={{ width: "229px" }}
              value={artInput.name}
              onChange={handleChangeInput}
              placeholder="your art name"
            />
          </div>
          <div className="flex gap-3">
            <label>Starting price : </label>
            <input
              type="number"
              name="price"
              className="rounded-xl indent-4 text-white"
              value={artInput.price}
              onChange={handleChangeInput}
              placeholder="your art price"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="files">Select files :</label>
            <input
              id="files"
              name="files"
              type="file"
              multiple
              onChange={handleFilesInput}
            />
          </div>
          <div className="flex flex-col gap-2 w-20">
            <label htmlFor="description" className="description">
              Description :
            </label>
            <textarea
              id="description"
              className="rounded-3xl description text-white"
              rows={5}
              name="description"
              value={artInput.description}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <input
            className="rounded-2xl w-14 h-8 text-black"
            style={{ backgroundColor: "#85CF81" }}
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </section>
  );
}
