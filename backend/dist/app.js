"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const email_1 = __importDefault(require("./routes/email"));
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'POST',
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(email_1.default);
const port = 3300;
app.listen(port, () => {
    console.log(`Server is running on port${port}`);
});
