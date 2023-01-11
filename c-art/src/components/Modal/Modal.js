import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../actions/userAction";
import { toast } from "react-toastify";
import { viewProfile } from "../../actions/userAction";

export default function Modal({
  setModal,
  id,
  username,
  address,
  phoneNumber,
  preference,
  type,
}) {
  const [loading, setLoading] = useState(true);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalInput, setModalInput] = useState({
    username,
    address: "",
    phoneNumber: "",
    preference: [],
  });

  const handleModalInput = (e) => {
    let obj = {
      ...modalInput,
      [e.target.name]: e.target.value,
    };
    setModalInput(obj);
  };

  const submitModal = (e) => {
    e.preventDefault();
    dispatch(editProfile(modalInput, id))
      .then(() => {
        setModal(false);
        if (type === "edit") {
          dispatch(viewProfile());
          toast.info("Successfully edited your profile");
          localStorage.setItem("username", modalInput.username);
          const uniqPreference = [...new Set(modalInput.preference)];
          localStorage.setItem("preference", uniqPreference.join(", "));
          navigate("/profile");
        } else {
          if (localStorage.access_token) {
            if (!localStorage.preference) {
              const uniqPreference = [...new Set(modalInput.preference)];
              localStorage.setItem("preference", uniqPreference.join(", "));
            }
            toast.success(`Welcome, ${localStorage.username}`);
            navigate("/");
          } else {
            toast.success(
              `Congratulation, your account successfully registered :)`
            );
            navigate("/login");
          }
        }
      })
      .catch((err) => {
        err.message
          ? toast.error(`${err?.message}`)
          : toast.error("Internal Server Error");
      })
      .finally(() => {
        setModal(false);
        setModalInput({
          address: "",
          phoneNumber: "",
          preference: [],
        });
      });
  };

  const handlePreference = (e) => {
    setModalInput({
      ...modalInput,
      preference: [...modalInput.preference, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(fetchAllCategory())
      .then(() => {
        if (type === "edit") {
          setModalInput({
            ...modalInput,
            address,
            phoneNumber,
            preference,
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        error.message
          ? toast.error(`${error?.message}`)
          : toast.error("Internal Server Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="fixed z-40"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="login-modal"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form onSubmit={submitModal}>
              <div className="static bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="pb-2 pt-4">
                  {!loading
                    ? categories?.map((el) => {
                      return (
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input onChange={handlePreference} multiple id="bordered-checkbox-1" type="checkbox" value={el.name} name="preference" key={el.id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{el.name}</label>
                        </div>
                      );
                    })
                    : null}
                </div>
                {type === "edit" ? (
                  <div className="pb-2 pt-4">
                    <input
                      className="block w-full p-4 text-lg rounded-xl bg-gray text-white"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={modalInput.username}
                      onChange={handleModalInput}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-xl bg-gray text-white"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={modalInput.address}
                    onChange={handleModalInput}
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-xl bg-gray text-white"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={modalInput.phoneNumber}
                    onChange={handleModalInput}
                  />
                </div>
              </div>
              <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
