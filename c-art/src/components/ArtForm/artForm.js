import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
import "./style.css";

export default function ArtForm() {
  const cloudName = "dilzm9jdf";
  const uploadPreset = "fdag7ums";
  const categories = useSelector((state) => state.categoryReducer.categories)
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName,
      uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        let obj = {
          ...artInput,
          source: result.info.secure_url,
        };
        setArtInput(obj);
      }
    }
  );

  const openUpload = () => {
    myWidget.open();
  };

  const [artInput, setArtInput] = useState({
    name: "",
    description: "",
    source: "",
    price: "",
    category: "",
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
    console.log(artInput);
    setArtInput({
      name: "",
      description: "",
      source: "",
      price: 0,
      category: "",
    });

    document.getElementById("uploadedimage").remove();
  };

  const tabForm = (e) => {
    console.log(e.target.value);
    setArtInput({
      ...artInput,
      category: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchAllCategory()).then(() => {
      setLoading(false)
    })
    // eslint-disable-next-line
  },[])

  // const categories = ["3d", "2d", "music", "sfx", "gif"];
  return (
    <section className="flex flex-col container-add rounded-sm">
      <div
        className="min-w-full h-20 flex justify-center items-center pt-4 tab-form"
        style={{ backgroundColor: "#191B1F" }}
      >
        { !loading ? categories.map(el => {
          return (
            <button
              className="p-0 w-20 h-14 rounded-3xl text-black mx-7"
              style={{ backgroundColor: "#85CF81" }}
              onClick={tabForm}
              value={el.name}
              key={el.id}
            >
              {el.name}
            </button>
          );
        }) : null}
      </div>
      <div className="flex cotainer-add">
        <div className="w-1/2 py-3 px-4 container-add flex flex-col items-center" style={{ backgroundColor: "#191B1F" }}>
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
            <button
              onClick={openUpload}
              id="upload_widget"
              className="w-20 h-8 mb-5 text-black rounded-2xl text-center items-center"
              style={{ backgroundColor: "#85CF81" }}
              type="button"
            >upload
            </button>
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
