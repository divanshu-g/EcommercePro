const express = require('express');
const sequelize = require("./config/database");
const path = require('path');
const port = 5000;


const countryRoute = require("./routes/CountryRoutes");
const CountryStateRoute = require("./routes/CountryStateRoute");
const CustomerRoute = require("./routes/CustomerRoute");
const DepartmentDesignRoute = require("./routes/DepartmentDesignRoute");
const DepartmentsRoute = require("./routes/DepartmentsRoute");
const DesignationRoute = require("./routes/DesignationRoute");
const EmployeeRoute = require("./routes/EmployeeRoute");
const PermissionRoute = require("./routes/PermissionRoute");
const StateRoute = require("./routes/StateRoute");
const RegionCountryRoute = require("./routes/RegionCountryRoute");
const RoleRoute = require("./routes/RoleRoute");
const RolePermissionsRoute = require("./routes/RolePermissionRoute");
const UserRoute = require("./routes/UserRoute");


const app = express();
app.use(express.json());

// Register Routes
app.use("/country", countryRoute); 
app.use("/customers", CustomerRoute);
app.use("/dept_design", DepartmentDesignRoute);
app.use("/departments", DepartmentsRoute);
app.use("/designation", DesignationRoute);
app.use("./employee", EmployeeRoute);
app.use("./permission", PermissionRoute);
app.use("./region_country", RegionCountryRoute);
app.use("./roles", RoleRoute);
app.use("./role-permission", RolePermissionsRoute);
app.use("./user", UserRoute);



// API Routes (No duplicate registrations)
app.use("/api/countrystates", CountryStateRoute);
app.use("/api/states", StateRoute);



//Check Sync Database
// sequelize.sync()
//     .then(() => console.log(' Database synchronized'))
//     .catch(err => console.log(' Error syncing database:', err));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});