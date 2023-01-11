import { useNavigate, Outlet, useParams } from "react-router-dom";

export default function Groups() {
  const preference = localStorage.preference.split(", ");
  const { tag } = useParams();
  console.log(tag);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 px-10 ">
      {preference.map((el, i) => {
        return (
          <div className="" key={i}>
            <div
              className="card w-full shadow-xl"
              style={{ backgroundColor: "#1F242D" }}
              onClick={() => navigate(`/groups/${el}`)}
            >
              <div className="px-6 pt-4">
                <div className="flex justify-between">
                  <h1 className="min-w-content h-10 rounded-2xl text-center p-1">
                    {el}
                  </h1>
                  <div className="pb-4">
                    <h1 className="text-xs">LAST ACTIVITY</h1>
                    <h1 className="">Today, 20:57</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
