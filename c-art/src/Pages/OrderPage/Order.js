import TableRow from "../../components/Tables/TableOrder/TableRow";
import { useEffect } from "react";

export default function OrderPage() {
    useEffect(() => {

    })

    return (
        <div className="p-10">
            <div id="titleOrders" className="py-5">
                My Orders
            </div>
            <div className="overflow-x-auto" id="tableOrders">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Amount</th>
                            <th>Order Date</th>
                            <th>Art Ordered</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow />
                    </tbody>
                </table>
            </div>
        </div>
    )
}