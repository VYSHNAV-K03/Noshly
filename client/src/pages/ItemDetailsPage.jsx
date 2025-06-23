import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance, { apiUrl } from "../axiosInstance";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ItemDetailsPage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/customers/products/${recipeId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [recipeId]);

  const handleBuyNow = () => {
    navigate(`/payment/${recipeId}/${product.discountPrice || product.price}/product/${product.supplier._id}`);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;
  if (!product) return <div className="text-center">Product not found.</div>;

  return (
    <div className="container my-5">
      {/* Back button */}
      <button className="btn btn-primary mb-3" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="row justify-content-center">
        {/* Image Carousel */}
        <div className="col-md-6">
          <Carousel fade>
            {product.image.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={apiUrl + img}
                  alt={`Product image ${index + 1}`}
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="card shadow-lg border-light p-4">
            <h2 className="text-primary mb-3">{product.name}</h2>
            <p>Recipe: {product.description}</p>
            <h4 className="text-success">
              Price: ₹{product.discountPrice || product.price}
            </h4>

            {/* Supplier Details */}
            <div className="mt-3">
              <h5 className="text-secondary">Restaurant Name: {product.supplier.name}</h5>
              <p className="text-muted">Location: {product.supplier.location.address}</p>
            </div>

            {/* Leaflet Map for Supplier Location */}
            {product.supplier.location.latitude && product.supplier.location.longitude && (
              <div className="mt-4" style={{ height: "300px" }}>
                <MapContainer
                  center={[product.supplier.location.latitude, product.supplier.location.longitude]}
                  zoom={15}
                  style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[product.supplier.location.latitude, product.supplier.location.longitude]}>
                    <Popup>
                      {product.supplier.name} <br />
                      {product.supplier.location.address}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}

            {/* Buy Button */}
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary btn-lg" onClick={handleBuyNow}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
