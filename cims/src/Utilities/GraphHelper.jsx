import { format } from 'date-fns';

export const prepareVaccinationData = (vaccinationData) => {
    return vaccinationData.map(item => ({
        familyNumber: item.familyNumber,
        vaccinationType: item.vaccinationType,
        date: format(new Date(item.startDate), 'yyyy-MM-dd'),
        status: item.status,
    }));
};

export const calculateStatistics = (vaccinationData) => {
    const totalVaccinations = vaccinationData.length;
    const pendingImmunizations = vaccinationData.filter(item => item.status === 'Processing').length;

    return {
        totalVaccinations,
        pendingImmunizations,
    };
};