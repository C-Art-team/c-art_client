import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./style.css";

export default function MainNavbar() {
  const [search, setSearch] = useState("");
  // const navigate = useNavigate();

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const toProfile = () => {
    console.log("ke profile");
    // navigate("/profile")
  };

  const toCart = () => {
    console.log("to cart");
    // navigate('/cart')
  };

  const toRegister = () => {
    console.log("ke register");
    // navigate("/register");
  };

  const toLogin = () => {
    console.log("ke login");
    // navigate("/login");
  };

  const handleSearch = (e) => {
    console.log(search);
    e.preventDefault();
    setSearch("");
  };

  return (
    <div className="container-fluids h-14 bg-stone-500 items-center flex flex-row px-10">
      <form onSubmit={handleSearch} className="bg-black-500 search-container">
        <input
          type="search"
          className="rounded-full h-8 indent-10 bg-lime-200 my-search"
          value={search}
          onChange={handleSearchChange}
          placeholder="find here"
        />
      </form>
      {!localStorage.access_token ? (
        <>
          <button
            onClick={toRegister}
            className="rounded-xl bg-lime-300 w-14 h-7 ml-auto font-semibold shadow-lg shadow-green-200"
          >
            Join
          </button>
          <button
            onClick={toLogin}
            className="rounded-xl bg-lime-300 w-20 h-7 ml-5 font-semibold shadow-lg shadow-green-200"
          >
            Login
          </button>
        </>
      ) : (
        <>
          <span className="ml-auto text-white">username</span>
          <div
            onClick={toProfile}
            className="w-10 h-10 ml-5 rounded-full bg-lime-200"
          >
            <img src="" alt="profile" />
          </div>
          <span
            onClick={toCart}
            className="w-10 h-10 ml-5 rounded-full bg-lime-200"
          >
            logo cart
          </span>
        </>
      )}
    </div>
  );
}
