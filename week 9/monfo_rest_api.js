const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware: Allows the server to understand JSON data sent in the request body
app.use(express.json());

// --- CONFIGURATION FOR SPA ---
app.set('view engine', 'ejs'); // Tells Express to use EJS for rendering templates
app.use(express.json()); // To handle JSON data from AJAX requests
app.use(express.urlencoded({ extended: true })); // To handle standard HTML form submissions

// --- STEP 1 & 2: MongoDB ATLAS Configuration & Connection ---
// The Connection String is obtained from the "Connect" button in your Atlas Dashboard
const dbURI = "mongodb+srv://admin:password123@cluster0.mongodb.net/LabDB?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas successfully!"))
  .catch((err) => console.error("Database connection error:", err));

// --- STEP 3: Create Schema and Model ---
// The Schema defines what a "Student" object looks like in our database
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  course: String,
  isActive: { type: Boolean, default: true }
});

// The Model is the tool we use to perform CRUD on the "students" collection
const Student = mongoose.model('Student', studentSchema);

// --- STEP 4 & 5: CRUD Operations & RESTful Services ---

// 1. HOME ROUTE: Fetches students and renders the EJS page
app.get('/', async (req, res) => {
  const students = await Student.find(); // 'render' looks into the 'views' folder for index.ejs and passes the students data
  res.render('apphome', { students });
});

/**
 * CREATE: Add a new student to the database (POST request)
 * Logic: Take data from req.body and save it using Student model
 */
app.post('/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: "Error saving student", error: error.message });
  }
});

/**
 * READ: Get all students from the database (GET request)
 * Logic: Use .find() to retrieve all documents
 */
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error: error.message });
  }
});

/**
 * UPDATE: Modify a student's data by their ID (PUT request)
 * Logic: Find by ID and update with new data from req.body
 */
app.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // This option returns the modified document rather than the original
    );
    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: "Error updating student", error: error.message });
  }
});

/**
 * DELETE: Remove a student by their ID (DELETE request)
 * Logic: Find the unique ID in the URL and remove it from the collection
 */
app.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error: error.message });
  }
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Ready for CRUD operations testing.");
});