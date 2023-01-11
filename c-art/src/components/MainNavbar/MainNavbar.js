import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./style.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { themeAction } from "../../actions/actionTheme";
import { GiWallet } from "react-icons/gi";
import { fetchAllArt } from "../../actions/artAction";

export default function MainNavbar() {
  const [search, setSearch] = useSearchParams()
  const theme = useSelector((state) => {
    return state.themeReducer.theme;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearch({ name: e.target.value });
  };

  const toProfile = () => {
    console.log("ke profile");
    navigate("/profile");
  };

  const toCart = () => {
    console.log("to cart");
    navigate('/cart')
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
    e.preventDefault();
    dispatch(fetchAllArt("", search.get('name')));
  };

  function changeTheme(theme) {
    dispatch(themeAction(theme));
  }

  useEffect(() => {
    dispatch(fetchAllArt("", search.get('name')))
  }, [search])

  return (
    <div
      className="navbar sticky top-0 bg-base-300 h-14 items-center flex flex-row justify-between px-10"
      data-theme={theme}
      style={{ backgroundColor: "#121218" }}
    >
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="search"
          className="rounded-xl h-8 indent-10 my-search"
          style={{ backgroundColor: "#191B1F" }}
          value={search.get('name')}
          onChange={handleSearchChange}
          placeholder="search"
        />
      </form>
      {!localStorage.access_token ? (
        <div className="flex gap-4">
          <button
            onClick={toRegister}
            className="rounded-xl w-20 h-7 font-semibold text-black flex justify-center items-center"
            style={{ backgroundColor: "#85CF81" }}
          >
            Join
          </button>
          <button
            onClick={toLogin}
            className="rounded-xl w-20 h-7 font-semibold text-black flex justify-center items-center"
            style={{ backgroundColor: "#85CF81" }}
          >
            Login
          </button>
        </div>
      ) : (
        <>
          <button
            className=" px-10"
            onClick={() => {
              // console.log(theme)
              changeTheme(theme);
            }}
          >
            <BsFillMoonStarsFill />
          </button>
          <span className="ml-auto text-white">{localStorage.username}</span>
          <div
            onClick={toProfile}
            className="w-10 h-10 ml-5 rounded-full bg-lime-200"
          >
            <img
              className="mask mask-circle"
              src="https://placeimg.com/192/192/people"
            />
          </div>
          <button onClick={toCart} className="px-10">
            <GiWallet size={30} />
          </button>
        </>
      )}
    </div>
  );
}
