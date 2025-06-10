const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrderSchemas");

// Check if model already exists before defining it again
const OrdersModel = mongoose.models.position || mongoose.model("position", OrdersSchema);

module.exports = { OrdersModel };
