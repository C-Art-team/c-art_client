import { useState } from "react";
import "./style.css";

export default function ArtForm() {
  const cloudName = "dilzm9jdf";
  const uploadPreset = "fdag7ums";

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName,
      uploadPreset,
      theme: "black",
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

  const categories = ["3d", "2d", "music", "sfx", "gif", "blender"];
  return (
    <div className="flex flex-col min-w-full bg-black-500 min-h-full column items-center justify-center">
      <div
        className="container min-w-full h-14 flex justify-around items-center"
        style={{ backgroundColor: "#191B1F" }}
      >
        {categories.map((el, i) => {
          return (
            <button
              className="p-0 w-20 h-9 rounded-3xl"
              style={{ backgroundColor: "#85CF81" }}
              onClick={tabForm}
              value={el}
              key={i}
            >
              {el}
            </button>
          );
        })}
      </div>
      <div className="container flex">
        <div className="w-1/2" style={{backgroundColor: "#191B1F"}}>
        <img id="uploadedimage" className="rounded-md min-w-full min-h-full text-white" src={artInput.source} alt="upload here"/>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col w-1/2 items-center py-5"
          style={{ backgroundColor: "#191B1F", color: "#EDEDED" }}
        >
          <div className="container items-center justify-center upload">
            <button
              onClick={openUpload}
              id="upload_widget"
              className="cloudinary-button w-20 h-10 bg-red-200 mb-5 text-black"
              type="button"
            >
              Upload
            </button>
            
          </div>
          <div className="container items-center justify-center mb-5">
            <label htmlFor="name">Art name : </label>
            <input
              name="name"
              className="rounded-3xl indent-8 text-black"
              value={artInput.name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="column items-center justify-center pricing mb-5">
            <label>Starting price : </label>
            <input
              type="number"
              name="price"
              className="rounded-3xl indent-8 text-black"
              value={artInput.price}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5 w-20">
            <label htmlFor="decription">Description</label>
            <textarea
              className="rounded-3xl description text-black"
              rows={5}
              name="description"
              value={artInput.description}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <input
            className="rounded-2xl bg-red-200 w-14 h-8"
            type="submit"
            value="add"
          />
        </form>
      </div>
    </div>
  );
}
