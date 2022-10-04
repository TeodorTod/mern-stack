import { Router } from "express";
import TransactionsRouters from "./TransactionsApi.js";
import AuthApi from "./authApi.js";
import UserApi from "./userApi.js";
import passport from "passport";

const router = Router();

router.use(
    "/transaction",
    passport.authenticate('jwt', { session: false }),
    TransactionsRouters);
router.use("/auth", AuthApi);
router.use("/user", UserApi);


export default router;