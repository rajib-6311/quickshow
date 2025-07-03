import {Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import SeatLayout from "./Pages/SeatLayout";
import MyBookings from "./Pages/MyBookings";
import Favorite from "./Pages/Favorite";
import {Toaster} from 'react-hot-toast'
import Footer from "./Components/Footer";
import LayOut from "./Pages/Admin/LayOut";
import DashBoard from "./Pages/Admin/DashBoard";
import AddShows from "./Pages/Admin/AddShows";
import ListShows from "./Pages/Admin/ListShows";
import ListBookings from "./Pages/Admin/ListBookings";

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/favorite' element={<Favorite/>}/>

        {/* for Dashboard  */}
        <Route path="/admin/*" element={<LayOut/>}>
        <Route index element={<DashBoard/>}/>
        <Route path="add-shows" element={<AddShows/>}/>
        <Route path="list-shows" element={<ListShows/>}/>
        <Route path="list-bookings" element={<ListBookings/>}/>
 
        </Route>
      </Routes>
      
      {!isAdminRoute && <Footer/>}
    </>
  );
};

export default App;