import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
    files : [],
    CategoryId: "",
  });

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
    setArtInput({
      name: "",
      description: "",
      price: 0,
      files : [],
      categoryId: "",
    });

  };

  const handleFilesInput = (e) => {
    let obj = {
      ...artInput,
      files : [...artInput.files,e.target.value]
    }
    setArtInput(obj)
  }

  const tabForm = (e) => {
    console.log(e.target.value);
    setArtInput({
      ...artInput,
      CategoryId: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchAllCategory()).then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="flex flex-col container-add rounded-sm">
      <div
        className="min-w-full h-20 flex justify-center items-center pt-4 tab-form"
        style={{ backgroundColor: "#191B1F" }}
      >
        {!loading
          ? categories.map((el) => {
              return (
                <button
                  className="p-0 w-20 h-14 rounded-3xl text-black mx-7"
                  style={{ backgroundColor: "#85CF81" }}
                  onClick={tabForm}
                  value={el.id}
                  key={el.id}
                >
                  {el.name}
                </button>
              );
            })
          : null}
      </div>
      <div className="flex cotainer-add">
        <div
          className="w-1/2 py-3 px-4 container-add flex flex-col items-center"
          style={{ backgroundColor: "#191B1F" }}
        >
          <img
            id="uploadedimage"
            className="rounded-md min-h-full text-white"
            src={artInput.source}
            alt="upload here"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-1/2 items-center pt-4 container-add"
          style={{ backgroundColor: "#191B1F", color: "#EDEDED" }}
        >
          <div className="flex items-center justify-center">
            <label htmlFor="files">Select files</label>
            <input id="files" name="files" type="file" multiple onChange={handleFilesInput}/>
          </div>
          <div className="flex items-center justify-center mb-5">
            <label htmlFor="name">Art name : </label>
            <input
              name="name"
              className="rounded-3xl indent-4 text-white ml-2"
              value={artInput.name}
              onChange={handleChangeInput}
              placeholder="your art name"
            />
          </div>
          <div className="flex items-center justify-center pricing mb-5">
            <label>Starting price : </label>
            <input
              type="number"
              name="price"
              className="rounded-3xl indent-4 text-white ml-2"
              value={artInput.price}
              onChange={handleChangeInput}
              placeholder="your art price"
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5 w-20">
            <label htmlFor="decription">Description</label>
            <textarea
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
