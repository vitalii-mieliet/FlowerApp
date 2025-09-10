import { model, Schema } from 'mongoose';
import { EMAIL_REGEX } from '../../constants/index.js';

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: EMAIL_REGEX,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Order = model('Order', orderSchema);
export default Order;
