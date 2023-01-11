import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteOneOrder, payOrder } from "../../../actions/orderAction";

export default function TableRow({ orders }) {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    MySwal.fire(
      `Are you sure you want to cancel order ${orders.id}?`,
      "You cannot undo this action!",
      "question"
    ).then((res) => {
      if (res.isConfirmed) {
        dispatch(deleteOneOrder(id));
      }
    });
  };

  const handlePay = (id) => {
    dispatch(payOrder(id));
  };

  return (
    <>
      <tr>
        <th>{orders.id}</th>
        <td>{orders.amount}</td>
        <td>{orders.orderDate}</td>
        <td>{orders.status}</td>
        <td>
          <Link to={`/art/${orders.id}`}>{orders.Art.name}</Link>
        </td>
        <td>{orders.Art.price}</td>
        <td>
          {orders.status === "Unpaid" ? (
            <div className=" gap-2">
              <button
                onClick={() => handlePay(orders.id)}
                className="text-green-600"
              >
                pay order
              </button>
              <button
                style={{ display: orders.status === "Paid" ? "none" : "block" }}
                className="text-red-600"
                onClick={() => handleDelete(orders.id)}
              >
                cancel order
              </button>
            </div>
          ) : (
            <a
              href={orders.Art.source}
              download
              style={{ display: orders.status === "Paid" ? "block" : "none" }}
              className="text-sky-400"
            >
              download
            </a>
          )}
        </td>
      </tr>
    </>
  );
}
