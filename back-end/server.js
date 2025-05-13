const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// 1. เชื่อมต่อฐานข้อมูล
connectDB();

const app = express();

// 2. ตั้งค่าให้รับ JSON / URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 3. Route พื้นฐาน
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi Helow' });
});

// 4. ใช้ user routes
app.use('/api/users', require('./routes/userRoutes'));

// 5. ใช้ error handler ตัวกลาง
app.use(errorHandler);

// 6. เริ่มต้น server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
