import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "../axiosInstance";
import { Modal, Button } from "react-bootstrap";

const BookingPageRestaurant = () => {
  const [vehicleBookings, setVehicleBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/cart/bookings/restaurant");
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

  const handleOpenModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
    setDeliveryTime("");
    setResponseText("");
  };

  const handleRespond = async () => {
    try {
      await axiosInstance.put(`/cart/bookings/respond/${selectedBooking._id}`, {
        deliveryTime,
        responseText,
      });
      alert("Response sent successfully");
      handleCloseModal();
    } catch (error) {
      console.error("Error sending response:", error);
      alert("Failed to send response");
    }
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Bookings</h2>
      {vehicleBookings.length === 0 ? (
        <div className="text-center">
          <p>You have no bookings yet.</p>
        </div>
      ) : (
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
                  <th>Action</th>
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
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleOpenModal(booking)}
                      >
                        Respond
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Modal for Responding */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Respond to Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Delivery Time</label>
            <input
              type="text"
              className="form-control"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              placeholder="Enter delivery time"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Response</label>
            <textarea
              className="form-control"
              rows="3"
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Enter your response"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRespond}>
            Send Response
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookingPageRestaurant;
