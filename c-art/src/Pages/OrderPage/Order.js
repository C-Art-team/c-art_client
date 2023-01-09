import TableRow from "../../components/Tables/TableOrder/TableRow";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "../../actions/orderAction";

export default function OrderPage() {

    const [loading, setLoading] = useState(true);
    const orders = useSelector((state) => state.orderReducer.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllOrders())
            .then((data) => {
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="p-10">
            <div id="titleOrders" className="py-5">
                My Orders
            </div>
            <div className="overflow-x-auto" id="tableOrders">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                            <th>Name of Art Ordered</th>
                            <th>Price of Art Ordered</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(el => {
                            return <TableRow orders={el} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}