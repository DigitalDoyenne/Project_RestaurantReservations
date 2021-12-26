// import React, { useEffect, useState } from "react";
// import { useHistory, useParams, Link } from "react-router-dom";
// import {
//   createReservation,
//   editReservation,
//   formatPhoneNumber,
//   readReservation,
// } from "../utils/api";
// import ReservationForm from "./ReservationForm";

// export default function NewReservation() {

//     const [errors, setErrors] = useState(null);
//     const history = useHistory();
//     const [formData, setFormData] = useState({
//       first_name: "",
//       last_name: "",
//       mobile_number: "",
//       reservation_date: "",
//       reservation_time: "",
//       people: 1,
//     });

// return (
//     <div>
//         <nav aria-label="breadcrumb">
//   <ol class="breadcrumb">
//     <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
//     <li class="breadcrumb-item active" aria-current="page">New Reservation</li>
//   </ol>
// </nav>

// <div className="new-reservation mt-3 mb-3">
//         <h2>New Reservation</h2>
//       </div>

//       <ReservationForm
//         formData={formData}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         handleCancel={handleCancel}
//         reservationId={reservationId}
//       />

//     </div>
// )

// }; //end of NewReservation