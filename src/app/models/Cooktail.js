import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const CooktailScheme = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String },
    instruction: { type: String },
    slug: { type: String, slug: "name", unique: true },
    image: { type: String },
    ingredients: { type: Array },
  },
  { timestamps: true }
);
const Cooktail = mongoose.model("Cooktail", CooktailScheme);
export default Cooktail;
