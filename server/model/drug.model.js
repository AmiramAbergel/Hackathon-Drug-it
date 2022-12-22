import mongoose from 'mongoose';
const { Schema } = mongoose;
const drugSchema = new Schema({
    hebName: {
        type: String,
        required: true,
    },
    engName: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    altNames: {
        type: Array,
        required: true,
    },
    goodFor: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Meds = mongoose.model('Meds', drugSchema);

export { drugSchema, Meds as Drug };
