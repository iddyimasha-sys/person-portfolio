import express from "express";
import cors from "cors";

const app = express();

// allow frontend to connect
app.use(cors());
app.use(express.json());

// simple API route
app.get("/", (req, res) => {
	res.json({
		name: "Imasha Iddy",
		role: "Data Science Student",
		university: "EASTC",
		skills: ["Python", "React", "PHP", "Data Science"]
	});
});

// another example route (projects)
app.get("/projects", (req, res) => {
	res.json([
		{ id: 1, name: "Post Session Learning Platform" },
		{ id: 2, name: "Emergency Alert System" }
	]);
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server running on port ${PORT}`);
});

