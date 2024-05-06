import mongoose from 'mongoose';
import { IFood } from '../types/food';

const foodSchema = new mongoose.Schema<IFood>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});

export const foodModel = mongoose.models.foodModel || mongoose.model<IFood>('food', foodSchema);