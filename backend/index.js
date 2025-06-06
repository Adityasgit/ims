// external imports
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// internal imports
const refreshTokenRouter = require("./routes/common/refreshTokenRouter");
const superAdminRouter = require("./routes/superAdmin/users/superAdminRouter");
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHandler");
const storeRouter = require("./routes/superAdmin/stores/storeRouter");
const storeAdminRouter = require("./routes/admin/store/storeAdminRouter");
const categoryRouter = require("./routes/admin/category/categoryRouter");
const supplierRouter = require("./routes/admin/supplier/supplierRouter");
const purchaseRouter = require("./routes/admin/purchase/purchaseRouter");
const stockRouter = require("./routes/admin/stock/stockRouter");
const salesRouter = require("./routes/admin/sales/salesRouter");
const returnSaleRouter = require("./routes/admin/returnSale/returnSaleRouter");
const financialRouter = require("./routes/admin/financial/financialRouter");
const dashboardRouter = require("./routes/admin/dashboard/dashboardRouter");
const customerRouter = require("./routes/admin/customer/customerRouter");
const bankRouter = require("./routes/admin/bank/bankRouter");
const employeeRouter = require("./routes/admin/employee/employeeRouter");

//initialize app
const app = express();

//initialize port
const PORT = process.env.PORT || 5000;

// database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("database connection successful"))
  .catch((err) =>
    console.error(err) ||
    console.log("something went wrong! database connection failed!")
  );

// common middleware
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

//common routes
app.use("/api/refresh", refreshTokenRouter);

// superAdmin routes
app.use("/api/superadmin", superAdminRouter);
app.use("/api/superadmin", storeRouter);

//store admin routes
app.use("/api/admin", storeAdminRouter);

//financial routes
app.use("/api/admin/financial", financialRouter);

// category routes
app.use("/api/admin", categoryRouter);

// supplier routes
app.use("/api/admin", supplierRouter);

//purchase routes
app.use("/api/admin/purchase", purchaseRouter);

//stock routes
app.use("/api/admin/stock", stockRouter);

//sales routes
app.use("/api/admin/sale", salesRouter);

//return sale routes
app.use("/api/admin/return-sale", returnSaleRouter);

//dashboard routes
app.use("/api/admin/dashboard", dashboardRouter);

//customer routes
app.use("/api/admin/customer", customerRouter);

//bank routes
app.use("/api/admin/bank", bankRouter);

//employee routes
app.use("/api/admin/employee", employeeRouter);

//subscription routes

//404 not found error handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

//listening server
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
