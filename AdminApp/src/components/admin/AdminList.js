import { Fragment, useState, useEffect } from "react";
import classes from "./AdminList.module.css";
import { useParams } from "react-router-dom";
import SideBar from "../../pages/Admin/SideBar";
import AdminHotel from "./AdminHotel";
import AdminRoom from "./AdminRoom";
import AdminTransaction from "./AdminTransaction";

const AdminList = () => {
  const params = useParams();
  const [hotelData, setHotelData] = useState([]);
  const [txData, setTxData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    console.log(params.list);
    const getData = async () => {
      console.log("new req");
      const res = await fetch(`http://localhost:5000/admin/${params.list}`);
      const result = await res.json();
      console.log("result: ", result);
      if (params.list === "hotel") {
        setHotelData(result);
      }
      if (params.list === "transaction") {
        setTxData(result);
      }
      if (params.list === "room") {
        setRoomData(result);
      }
    };
    getData();
  }, [params.list]);
  return (
    <div className={classes.layout}>
      <SideBar />
      <div className={classes.overall}>
        {params.list === "hotel" && <AdminHotel hotel={hotelData} />}
        {params.list === "room" && <AdminRoom room={roomData} />}
        {params.list === "transaction" && <AdminTransaction tx={txData} />}
      </div>
    </div>
  );
};

export default AdminList;

{
  /* Latest Txs */
}
{
  /* <div className={classes.txs}>
<h3>Latest Transactions</h3>
<div className={classes["txs-table"]}>
  <table className={classes.table}>
    <thead className={classes.thead}>
      <tr>
        <th style={{ width: "3%" }}>
          <input type="checkbox" />
        </th>
        <th style={{ width: "18%" }}>ID</th>
        <th style={{ width: "7%" }}>User</th>
        <th style={{ width: "20%" }}>Hotel</th>
        <th style={{ width: "10%" }}>Room</th>
        <th style={{ width: "15%" }}>Date</th>
        <th style={{ width: "7%" }}>Price</th>
        <th style={{ width: "12%" }}>Payment Method</th>
        <th style={{ width: "8%" }}>Status</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      {txs.map((item, index) => {
        const start = new Date(item.dateStart);
        const end = new Date(item.dateEnd);
        const date = `${start.getDate()}/${
          start.getMonth() + 1
        }/${start.getFullYear()} - ${end.getDate()}/${
          end.getMonth() + 1
        }/${end.getFullYear()}`;
        return (
          <tr key={index}>
            <td style={{ width: "3%" }}>
              <input type="checkbox" />
            </td>
            <td style={{ width: "18%" }}>{item._id}</td>
            <td style={{ width: "7%" }}>{item.user.fullName}</td>
            <td style={{ width: "20%" }}>{item.hotel.name}</td>
            <td style={{ width: "10%" }}>{item.room.join(", ")}</td>
            <td style={{ width: "15%" }}>{date}</td>
            <td style={{ width: "7%" }}>${item.price}</td>
            <td style={{ width: "12%" }}>{item.payment} </td>
            {item.status === "Booked" && (
              <td style={{ width: "8%", color: "green" }}>
                {item.status}
              </td>
            )}
            {item.status === "Checkin" && (
              <td style={{ width: "8%", color: "yellow" }}>
                {item.status}
              </td>
            )}
            {item.status === "Checkout" && (
              <td style={{ width: "8%", color: "red" }}>
                {item.status}
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

<div className={classes.pagination}>
  <i className="fa-solid fa-arrow-left"></i>
  <span>1 / 8</span>
  <i className="fa-solid fa-arrow-right"></i>
</div>
</div> */
}
