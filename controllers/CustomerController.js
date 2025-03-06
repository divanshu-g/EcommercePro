const Customer = require("../models/Customer");

// Get all customers
const getAllCustomers = async (req, res) => {
  console.log("Fetching all customers");
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get customer by ID
const getCustomerById = async (req, res) => {
  console.log("Fetching customer with ID:", req.params.id);
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new customer
const createCustomer = async (req, res) => {
  console.log("Creating new customer with data:", req.body);
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(400).json({ error: error.message });
  }
};

// Update a customer
const updateCustomer = async (req, res) => {
  console.log("Updating customer with ID:", req.params.id, "Data:", req.body);
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    await customer.update(req.body);
    res.json(customer);
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(400).json({ error: error.message });
  }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
  console.log("Deleting customer with ID:", req.params.id);
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    await customer.destroy();
    res.json({ message: "Customer deleted" });
  } catch (error) {
    console.error("Error deleting customer:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
