import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { themeAction } from "../../actions/action";
import { GiWallet } from "react-icons/gi"

export default function MainNavbar() {
  const [search, setSearch] = useState("");
  const theme = useSelector((state) => {
    return state.themeReducer.theme
  })

  const dispatch = useDispatch()
  const navigate = useNavigate();

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
    navigate("/register");
  };

  const toLogin = () => {
    console.log("ke login");
    navigate("/login");
  };

  const handleSearch = (e) => {
    console.log(search);
    e.preventDefault();
    setSearch("");
  };

  function changeTheme(theme) {
    dispatch(themeAction(theme))
  }

  return (
    <div className="navbar bg-base-300 h-14 items-center flex flex-row px-10" data-theme={theme}>
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="search"
          className="rounded-xl h-8 indent-10 bg-base-100 my-search"
          value={search}
          onChange={handleSearchChange}
          placeholder="search"
        />
      </form>
      {!localStorage.access_token ? (
        <>
          <button
            onClick={toRegister}
            className="rounded-xl bg-lime-300 w-14 h-7 ml-auto font-semibold shadow-md shadow-green-200"
          >
            Join
          </button>
          <button
            onClick={toLogin}
            className="rounded-xl bg-lime-300 w-20 h-7 ml-5 font-semibold shadow-md shadow-green-200"
          >
            Login
          </button>
        </>
      ) : (
        <>
          <button
            className=" px-10"
            onClick={() => {
              // console.log(theme)
              changeTheme(theme)
            }}>
            <BsFillMoonStarsFill />
          </button>
          <span className="ml-auto text-white">username</span>
          <div
            onClick={toProfile}
            className="w-10 h-10 ml-5 rounded-full bg-lime-200"
          >
            <img className="mask mask-circle" src="https://www.garmin.co.id/minisite/instinct/instinct-onepiece/images/onepiece-kv-luffy.png" />
          </div>
          <button onClick={toCart} className="px-10">
            <GiWallet size={30} />
          </button>
        </>
      )}
    </div>
  );
}
