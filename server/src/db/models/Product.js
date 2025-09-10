import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Product = model('Product', productSchema);
export default Product;
