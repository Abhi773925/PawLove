const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes=require('./routes/auth');
const delivery=require('./routes/delivery');
const contactRoutes = require('./routes/contactRoutes'); // Import contact routes

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit process with failure code
});

// Define the schema and model
const petSchema = new mongoose.Schema({
  id: Number,
  title: String,
  name: String,
  breed: String,
  type: String,
  location: String,
  specifications: [String],  // Ensuring specifications is an array
  briefDetail: String,
  detailedDetails: String,
  imgUrl: String
});

const Pet = mongoose.model('Pet', petSchema);

// Route to get all pets
app.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to filter pets by type
app.get('/pets/filter', async (req, res) => {
  const { type } = req.query;
  try {
    const pets = type ? await Pet.find({ type }) : await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add a new pet
app.post('/pets', async (req, res) => {
  console.log(req.body); // Debugging incoming data

  const { id, title, name, breed, type, location, specifications, briefDetail, detailedDetails, imgUrl } = req.body;
  
  // Ensure specifications is an array if passed as a string
  const petSpecifications = Array.isArray(specifications) ? specifications : specifications.split(',');

  const newPet = new Pet({
    id,
    title,
    name,
    breed,
    type,
    location,
    specifications: petSpecifications,
    briefDetail,
    detailedDetails,
    imgUrl
  });

  try {
    const savedPet = await newPet.save();
    res.status(201).json({ message: 'Pet added successfully!', pet: savedPet });
  } catch (err) {
    console.error('Error saving pet:', err);
    res.status(400).json({ message: err.message });
  }
});


app.get('/getUser',async (req,res)=>{
  try {
    // {token} = req;
    // const user
  } catch (error) {
    res.status(400).json({message : err.message})
  }
})

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.use("/api/delivery",delivery);
app.use("/api/contactRoutes",contactRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running on port 5000"));