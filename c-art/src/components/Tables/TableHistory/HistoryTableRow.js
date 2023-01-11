export default function HistoryTableRow({ histories }) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];console.log(histories,"ini bug")

  const date = new Date(histories.orderDate).getDate()
  const month = (new Date(histories.orderDate).getMonth())
  const year = new Date(histories.orderDate).getFullYear()

  console.log(date, month, year);
  return (
    <div
      className=" rounded-full w-80 shadow-lg"
      style={{ backgroundColor: "#191B1F" }}
    >
      <div className="py-2 px-3 flex justify-between">
        <h1>{date} / {monthNames[month]} / {year} </h1>
        <h1>{histories.Art.name}</h1>
        <h1>{histories.Art.Category.name}</h1>
      </div>
    </div>
  )
}