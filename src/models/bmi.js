// Hàm tính chỉ số BMI
function calculateBMI(weight, height) {
    // Chuyển đổi chiều cao từ cm sang mét và tính BMI
    const bmi = weight / Math.pow(height / 100, 2);
    // Giới hạn kết quả ở hai chữ số thập phân
    return bmi.toFixed(2);
}

// Hàm phân loại chỉ số BMI
function classifyBMI(bmi) {
    // Chuyển đổi chuỗi BMI sang số thực để so sánh
    const bmiValue = parseFloat(bmi);

    // Phân loại BMI dựa trên giá trị
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

// Xuất các hàm để sử dụng ở nơi khác
module.exports = { calculateBMI, classifyBMI };