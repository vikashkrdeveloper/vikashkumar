import express, { Request, Response, Application } from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
import cookiesParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { unAuthorizeRoute } from '../routes/api/un-authorize';
import { authAdminRoute } from '../routes/auth/admin';
import { unAuthorizeAdminRoute } from '../routes/api/un-authorize-admin';
import { authPaymentsRoute } from '../routes/auth/payments';
const app: Application = express();
const port: Number = process.env.PORT ? Number(process.env.PORT) : 5000;
app.use(helmet());
app.use(cookiesParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET, POST, PUT, DELETE',
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/", unAuthorizeRoute);
app.use('/api/v1/admin', unAuthorizeAdminRoute);
app.use('/api/v1/auth/payments', authPaymentsRoute)
app.use('/api/v1/auth/admin', authAdminRoute);
app.all('*', (req: Request, res: Response) => {
    res.status(404).json({
        message: 'Page not found',
        error: "404",
        status: false
    });
});
app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});