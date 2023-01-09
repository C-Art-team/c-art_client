import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategory } from "../../actions/actionCategory";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../actions/userAction";

export default function Modal({ setModal, id ,username}) {
  const [loading, setLoading] = useState(true);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    console.log(modalInput);
    dispatch(editProfile(modalInput, id))
      .then(() => {
        setModal(false);
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
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
    console.log(e.target.value);
    setModalInput({
      ...modalInput,
      preference: [...modalInput.preference, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(fetchAllCategory())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="login-modal"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form onSubmit={submitModal}>
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="pb-2 pt-4">
                  <select
                    id="preference"
                    name="preference"
                    className="block w-full p-4 text-lg rounded-xl bg-black"
                    value={modalInput.preference}
                    onChange={handlePreference}
                    multiple
                  >
                    <option value="" selected disabled>
                      Preferences
                    </option>
                    {!loading
                      ? categories?.map((el) => {
                          return (
                            <option value={el.name} key={el.id}>
                              {el.name}
                            </option>
                          );
                        })
                      : null}
                  </select>
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-xl bg-black"
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
                    className="block w-full p-4 text-lg rounded-xl bg-black"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={modalInput.phoneNumber}
                    onChange={handleModalInput}
                  />
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
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
