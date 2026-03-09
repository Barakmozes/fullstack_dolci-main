const mongoose = require("mongoose");
const Joi = require("joi");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company_id: { type: Number, required: true, unique: true },
  CategoryDescription: { type: String, default: "" },
});

exports.CompanyModel = mongoose.model("companies", companySchema);

/**
 * Joi validation for creating / updating a category.
 * CategoryDescription allows empty strings (matches real data).
 */
exports.validateCompany = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(150).required(),
    company_id: Joi.number().min(1).max(9999).required(),
    CategoryDescription: Joi.string().max(300).allow("", null).optional(),
  });
  return schema.validate(body);
};
