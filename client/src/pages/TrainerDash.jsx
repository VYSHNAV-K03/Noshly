import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TrainerDash = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="row text-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg border-0" onClick={() => navigate("/mentor/dashboard/dietplans")} 
               style={{ cursor: "pointer", borderRadius: "15px", transition: "0.3s", backgroundColor: "#ffc107" }}>
            <h3 className="text-white">Diet Plans</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow-lg border-0" onClick={() => navigate("/mentor/dashboard/mealfoods")} 
               style={{ cursor: "pointer", borderRadius: "15px", transition: "0.3s", backgroundColor: "#28a745" }}>
            <h3 className="text-white">Meal Plans</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDash;
