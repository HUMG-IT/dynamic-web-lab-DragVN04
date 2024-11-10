// Hàm tính chỉ số BMI
function calculateBMI(weight, height) {
    const bmi = weight / Math.pow(height / 100, 2);
    return bmi.toFixed(2);
}

// Hàm phân loại chỉ số BMI
function classifyBMI(bmi) {
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) {
        return "Gầy";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return "Bình thường";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}

module.exports = { calculateBMI, classifyBMI };
