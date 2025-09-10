import { Schema, model } from 'mongoose';

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Shop = model('Shop', shopSchema);
export default Shop;
