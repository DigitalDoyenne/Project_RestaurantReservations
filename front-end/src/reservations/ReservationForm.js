// import React from "react";
// import ErrorAlert from "../layout/ErrorAlert";

// export default function ReservationForm({ phoneFormat, errors, formData, handleChange, handleSubmit, handleCancel, _isNew }) {

// return (
//     <form onSubmit={handleSubmit}>
//         <ErrorAlert error={errors} />

//         <div class="input-group mb-3">
//         <label htmlFor="first_name" className="mt-3 mr-1">First Name</label>
//         <input
//           name="first_name"
//           id="first_name"
//           type="text"
//           placeholder="First Name"
//           onChange={handleChange}
//           value={formData.first_name}
//           required
//         />
//         </div>

//         <div class="input-group mb-3">
//         <label htmlFor="last_name" className="mt-3 ml-3">Last Name</label>
//         <input
//           name="last_name"
//           id="last_name"
//           type="text"
//           placeholder="Last Name"
//           onChange={handleChange}
//           value={formData.last_name}
//           required
//         />
//         </div>
        
//         <div class="input-group mb-3">
//         <label htmlFor="mobile_number" className="mt-3 mr-1">Mobile Number</label>
//         <input
//           name="mobile_number"
//           id="mobile_number"
//           type="tel"
//           placeholder="123-456-7890"
//           onChange={phoneFormat}
//           value={formData.mobile_number}
//           required
//         />
//         </div>
        
//         <div class="input-group mb-3">
//         <label htmlFor="reservation_date">Date:</label>
//         <input
//           name="reservation_date"
//           id="reservation_date"
//           type="date"
//           className="form-control mb-2"
//           placeholder="MM/DD/YYYY"
//           pattern="\d{4}-\d{2}-\d{2}"
//           onChange={handleChange}
//           value={formData.reservation_date}
//           required
//         />
//         </div>

//        <div class="input-group mb-3">
//         <label htmlFor="reservation_time">Time:</label>
//         <input
//           name="reservation_time"
//           id="reservation_time"
//           type="time"
//           placeholder="HH:MM"
//           pattern="[0-9]{2}:[0-9]{2}"
//           className="form-control mb-2"
//           onChange={handleChange}
//           value={formData.reservation_time}
//           required
//         />
//         </div>

//         <div class="input-group mb-3">
//         <label htmlFor="people"># of Guests</label>
//         <input
//           name="people"
//           id="people"
//           type="number"
//           min="1"
//           max="25"
//           className="m-3"
//           onChange={handleChange}
//           value={formData.people}
//           required
//         />
//         </div>
        
//         <div class="input-group mb-3">
//         <button type="submit" className="btn btn-dark">Submit</button>
//         <button type="button" className="btn btn-danger mr-3" onClick={handleCancel}>Cancel</button>
//       </div>
//         {/* <div>
//         <button type="submit" className="btn btn-dark">{isNew ? "Save" : "Submit"}</button>
//         <button type="button" className="btn btn-danger mr-3" onClick={handleCancel}>{isNew ? "Done" : "Cancel"}</button>
//       </div> */}
//       </form>
// )
// };