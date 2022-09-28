import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

//Admin routes
import LoginForm from "./components/loginform";
import Navbar from "./components/Navbar";
import Welcome from "./components/welcome";
import CustomerList from "./components/Admin/CustomerList";
import ComponentList from "./components/Admin/ComponentList";
import AddComponentForm from "./components/Admin/AddComponentForm";
import UpdateComponentForm from "./components/Admin/UpdateComponentForm";
import EmployeesAddForm from "./components/Admin/EmployeesAddform";
import EmployeesList from "./components/Admin/EmployeesList";
import EmployeesUpdateForm from "./components/Admin/EmployeesUpdateForm";
import Form1 from "./components/form1";

//users components for selecting throught intel and amd
import AMDProcessor from "./components/Products/AMD/AMDProcessor";
import AMDMotherBoard from "./components/Products/AMD/AMDMotherBoard";
import IntelMotherBoard from "./components/Products/Intel/IntelMotherBoard";
import IntelProcessor from "./components/Products/Intel/IntelProcessor";

//users components for selecting throught components list
import SSD from "./components/Products/Others/SSD";
import Memory from "./components/Products/Others//Memory";
import Desktop from "./components/Products/Others/Desktop";
import Monitor from "./components/Products/Others/Monitor";
import GraphicsCard from "./components/Products/Others/GraphicsCard";
import ComputerCase from "./components/Products/Others/ComputerCase";
import PowerSupply from "./components/Products/Others/PowerSupply";
import Processor from "./components/Products/Others/Processor";
import Motherboards from "./components/Products/Others/Motherboards";
import CoolingSystem from "./components/Products/Others/CoolingSystem";

function App() {
  return (
    <div>
      {/* <LoginForm />
     <Form1 /> */}

      {/* <BrowserRouter>
   <Routes>
   <Route path='/login' element={<LoginForm />} ></Route>
   <Route path='/registeruser' element={<Form1 />} ></Route>
   <Route path='/index' element={<Navbar />} ></Route>
   </Routes>
   </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Welcome />}></Route>
            <Route path="login" element={<LoginForm />}></Route>
            <Route path="registeruser" element={<Form1 />}></Route>
            <Route path="components" element={<ComponentList />}></Route>
            {/* Admin Routes */}
            <Route
              path="customers"
              element={
                <AdminRoute>
                  <CustomerList />
                </AdminRoute>
              }
            ></Route>

            <Route
              path="add-employee"
              element={
                <AdminRoute>
                  <EmployeesAddForm />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="employees"
              element={
                <AdminRoute>
                  <EmployeesList />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="updateemployee"
              element={
                <AdminRoute>
                  <EmployeesUpdateForm />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="addcomponent"
              element={
                <AdminRoute>
                  <AddComponentForm />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="updatecomponent"
              element={
                <AdminRoute>
                  <UpdateComponentForm />
                </AdminRoute>
              }
            ></Route>
          </Route>

          <Route path="/cooling" element={<CoolingSystem />}></Route>
          <Route path="/desktop" element={<Desktop />}></Route>
          <Route path="/monitors" element={<Monitor />}></Route>
          <Route path="/graphicscard" element={<GraphicsCard />}></Route>
          <Route path="/computercase" element={<ComputerCase />}></Route>
          <Route path="/ssd" element={<SSD />}></Route>
          <Route path="/memory" element={<Memory />}></Route>
          <Route path="/powersupply" element={<PowerSupply />}></Route>
          <Route path="/processors" element={<Processor />}></Route>
          <Route path="/motherboards" element={<Motherboards />}></Route>

          {/* Route For AMDProcessor and AMDMotherBoard  */}
          <Route
            path="/products/AMDProcessor"
            element={<AMDProcessor />}
          ></Route>
          <Route
            path="/products/AMDMotherBoard"
            element={<AMDMotherBoard />}
          ></Route>
          {/* Route for IntelProcessor and IntelMotherBoard */}
          <Route
            path="/products/IntelProcessor"
            element={<IntelProcessor></IntelProcessor>}
          ></Route>
          <Route
            path="/products/IntelMotherBoard"
            element={<IntelMotherBoard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AdminRoute({ children }) {
  // let myjwt = localStorage.getItem("user");
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0]; // role = admin
  }

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (role != "admin" || localStorage.getItem("user") === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

function CustomerRoute({ children }) {
  // let myjwt = localStorage.getItem("user");
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0]; // role = admin
  }

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (role != "customer" || localStorage.getItem("user") === null) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

function EmployeeRoute({ children }) {
  // let myjwt = localStorage.getItem("user");
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0]; // role = admin
  }

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (role != "employee" || localStorage.getItem("user") === null) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

function UnProtectedRoute({ children }) {
  let myjwt = localStorage.getItem("user");

  if (myjwt) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

export default App;
