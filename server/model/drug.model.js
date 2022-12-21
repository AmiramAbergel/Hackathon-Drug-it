import mongoose from 'mongoose';
const { Schema } = mongoose;
const drugSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  activeIngredient: {
    type: String,
    required: true
  },
  indication: {
    type: String,
    required: true
  },

  pregnancyCategory: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  approvedBy: {
    type: String,
    required: true
  }
});

const Drug = mongoose.model('Drug', drugSchema);

export { drugSchema, Drug };
