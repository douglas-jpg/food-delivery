import mongoose from 'mongoose';
import { Food } from '../types/food';

const foodSchema = new mongoose.Schema<Food>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});

export const foodModel = mongoose.models.foodModel || mongoose.model('food', foodSchema);