import { Drug } from '../model/drug.model.js';

export const getAllDrugs = async (req, res) => {
    try {
        const Drugs = await Drug.find();
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: Drug.length,
            data: {
                Drugs,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

export const addNewDrug = async (req, res) => {
    try {
        const {
            name,
            activeIngredient,
            indication,
            dosage,
            pregnancyCategory,
            manufacturer,
            approvedBy,
        } = req.body;
        const newDrug = await Drug.create({
            name: name,
            activeIngredient: activeIngredient,
            indication: indication,
            dosage: dosage,
            pregnancyCategory: pregnancyCategory,
            manufacturer: manufacturer,
            approvedBy: approvedBy,
        });
        res.status(201).json({
            status: 'success',
            message: `New Drug added: ${newDrug}`,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};
