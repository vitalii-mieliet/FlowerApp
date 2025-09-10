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

orderSchema.pre('validate', function (next) {
  if (!this.items || !Array.isArray(this.items) || this.items.length === 0) {
    this.totalPrice = 0;
    return next();
  }

  this.items.forEach((item) => {
    const price =
      typeof item.price === 'number' ? item.price : Number(item.price) || 0;
    const quantity =
      typeof item.quantity === 'number'
        ? item.quantity
        : Number(item.quantity) || 0;
    item.total = price * quantity;
  });

  this.totalPrice = this.items.reduce(
    (acc, item) => acc + (item.total || 0),
    0,
  );

  next();
});

const Order = model('Order', orderSchema);
export default Order;
