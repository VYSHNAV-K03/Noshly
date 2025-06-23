import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../axiosInstance";

const BookingPage = () => {
  const [vehicleBookings, setVehicleBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/cart/bookings"); // Backend route to fetch bookings

        // Separate vehicle and spare part bookings
        setVehicleBookings(response.data.bookings);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load bookings.");
        setLoading(false);
      }
    };

    fetchBookings();

  }, []);

  console.log(vehicleBookings);
  

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      {/* Back button  */}

      {/* <button className="btn btn-primary" onClick={() => window.history.back()}>
        Back
      </button> */}
      <h2 className="mb-4">My Bookings</h2>

      {vehicleBookings.length === 0  ? (
        <div className="text-center">
          <p>You have no bookings yet.</p>
        </div>
      ) : (
        <>
          {/* Vehicle Bookings Table */}
          {vehicleBookings.length > 0 && (
            <>
              <h3 className="mt-4">Food Bookings</h3>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                <thead>
  <tr>
    <th>#</th>
    <th>Booking ID</th>
    <th>User</th>
    <th>Title</th>
    <th>Price</th>
    <th>Date</th>
    <th>Status</th>
    <th>Delivery/Response</th> {/* Updated Column */}
  </tr>
</thead>
<tbody>
  {vehicleBookings.map((booking, index) => (
    <tr key={booking._id}>
      <td>{index + 1}</td>
      <td>{booking._id}</td>
      <td>{booking.userId.name}</td>
      <td>{booking.itemId.name}</td>
      <td>{booking.itemId.price}</td>
      <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
      <td>
        <span
          className={`badge ${
            booking.status === "Confirmed"
              ? "bg-success"
              : booking.status === "Pending"
              ? "bg-warning text-dark"
              : "bg-danger"
          }`}
        >
          {booking.status}
        </span>
      </td>
      <td>
        {booking.deliveryTime || booking.responseText ? (
          <>
            <strong>Time:</strong> {booking.deliveryTime || "N/A"} <br />
            <strong>Response:</strong> {booking.responseText || "N/A"}
          </>
        ) : (
          <span className="text-muted">Not responded yet</span>
        )}
      </td>
      
    </tr>
  ))}
</tbody>

                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BookingPage;
