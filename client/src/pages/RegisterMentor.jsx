import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const RegisterRestaurant = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [logo, setLogo] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null, address: "" });

  // Function to reverse geocode latitude and longitude
  const getLocationName = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      if (data.display_name) {
        setLocation({ lat, lng, address: data.display_name });
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  console.log(location);
  

  // Component to handle map clicks and update location
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        getLocationName(e.latlng.lat, e.latlng.lng);
      },
    });

    return location.lat ? <Marker position={[location.lat, location.lng]} /> : null;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", "restaurant");
      formData.append("bio", bio);
      formData.append("latitude", location.lat);
      formData.append("longitude", location.lng);
      formData.append("address", location.address);
      if (logo) formData.append("logo", logo);

      await axiosInstance.post("/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/login");
      alert("Registered Successfully!");
    } catch (error) {
      console.error("Restaurant registration failed:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Register as Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Restaurant Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Bio</label>
          <textarea className="form-control" value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Restaurant Logo</label>
          <input type="file" className="form-control" accept="image/*" onChange={(e) => setLogo(e.target.files[0])} />
        </div>

        {/* Location Input Field */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" value={location.address} readOnly placeholder="Click on the map to select a location" />
        </div>

        {/* Leaflet Map for Selecting Location */}
        <div style={{ height: "400px", marginBottom: "20px" }}>
          <MapContainer center={[20, 78]} zoom={5} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        </div>

        <button type="submit" className="btn btn-primary">Register as Restaurant</button>
      </form>
    </div>
  );
};

export default RegisterRestaurant;
