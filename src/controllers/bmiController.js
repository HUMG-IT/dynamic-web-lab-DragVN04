// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

// Hàm getBMI xử lý yêu cầu từ client
async function getBMI(req, res) {
    try {
        const { height, weight } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!height || !weight) {
            return res.status(400).json({ error: 'Chiều cao và cân nặng là bắt buộc.' });
        }

        // Tính chỉ số BMI và phân loại
        const bmi = calculateBMI(weight, height);
        const classification = classifyBMI(bmi);

        // Trả về JSON chứa chỉ số BMI và phân loại
        return res.status(200).json({ bmi, classification });
    } catch (error) {
        // Xử lý lỗi và trả về phản hồi lỗi
        return res.status(500).json({ error: 'Đã xảy ra lỗi khi tính toán chỉ số BMI.' });
    }
}

// Xuất hàm getBMI
module.exports = { getBMI };