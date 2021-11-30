import "module-alias/register";
import express from "express";
import cors from "cors";

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.get("/", (req, res) => {
	res.json({ msg: "Henlo!" });
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
