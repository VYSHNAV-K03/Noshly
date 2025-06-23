import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import DoctorPanel from './pages/DoctorPanel';
import Profile from './pages/Profile';
import OrderFood from './pages/order';
import Recipes from './pages/Recipes';
import Restaurant from './pages/Restaurant';
import About from './pages/About';
import Vlog from './pages/Vlog';
import Nouser from './pages/Nouser';
import Upload from './pages/Upload';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import PaneerTikkaRecipePage from './pages/Recipe';
import UploadVlog from './pages/uploadvlog';
import Contactus from './pages/Contactus';
import Manager from './pages/res/Manager';
import Chumma from './pages/chumma';
import Hopo from './pages/hopo';
import Reup from './pages/res/Reup';
import RegisterRestaurant from './pages/RegisterMentor';
import TrainerDash from './pages/TrainerDash';
import SupplierDashboard from './pages/TrainerMeal';
import ManageProductsSupplier from './pages/ManageProducts';
import AddProduct from './pages/AddProduct';
import ItemDetailsPage from './pages/ItemDetailsPage';
import Booking from './pages/Booking';
import MyBookings from './pages/MyBookings';
import BookingPage from './pages/BookingCustomer';
import RecipeGenerator from './pages/recipegenerator';
import Home2 from './pages/home2';
import RestaurantList from './pages/RestaurantList';
import BookingPageRestaurant from './pages/BookingRestaurant';



const App = () => {
  return (
    <Router>
      <div className="bg-custom vh-100"  >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-restaurant" element={<RegisterRestaurant />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/Restaurant" element={<Restaurant/>} />
          <Route path="/restaurant/dashboard" element={<ManageProductsSupplier />} />
          <Route path="/restaurant/add-product" element={<AddProduct />} />
          <Route path="/restaurant/bookings" element={<BookingPageRestaurant />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/order" element={<OrderFood/>} />
          <Route path="/vlog" element={<Vlog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Nouser" element={<Nouser/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/recipe" element={<PaneerTikkaRecipePage/>} />
          <Route path="/uploadvlog" element={<UploadVlog/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/manager" element={<Manager/>} />
          <Route path="/chumma" element={<Chumma/>} />
          <Route path="/dashboard" element={<Hopo/>} />
          <Route path="/reup" element={<Reup/>} />

          <Route path="/Recipes" element={<Recipes/>} />
          <Route path="/recipe/:recipeId" element={<ItemDetailsPage />} />
          <Route path="/payment/:itemid/:price/product/:supplier" element={<Booking />} />

          <Route path="/bookings" element={<BookingPage />} />

          <Route path="/recipegenerator" element={<RecipeGenerator/>}/>
          <Route path="/home2" element={<Home2/>}/>
          <Route path="/RestaurantList" element={<RestaurantList/>}/>




        </Routes>
      </div>
    </Router>
  );
};

export default App;
