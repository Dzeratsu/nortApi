import {Router} from 'express'
import {postMonthOrders} from "../controllers/post/postMonthOrders.js";
import {getAllManager} from "../controllers/get/getAllManager.js";
import {postAddOrder} from "../controllers/post/postAddOrder.js";
import {registration} from "../controllers/post/registration.js"
import {postAuthorization} from "../controllers/post/postAuthorization.js"
import {putEditOrder} from "../controllers/put/putEditOrder.js";
import {putReadOrder} from "../controllers/put/putReadOrder.js";
import {getLogout} from "../controllers/get/getLogout.js";
import {auth, test} from "../middlware/main.js";
import documentation from "../apiDoc.js";
import bodyParser from "body-parser";
const router = Router()
router.use(bodyParser.json(), bodyParser.urlencoded())

router.get('/api/documentation', (req, res) => {
    res.send(documentation)
})

router.post('/api/postMonthOrders/:mounth', auth, postMonthOrders)
router.get('/api/getAllManager', getAllManager)
router.post('/api/save', postAddOrder)
router.post('/api/reg', registration)
router.post('/api/login', postAuthorization)
router.put('/api/edit', putEditOrder)
router.put('/api/read/:id', putReadOrder)
router.get('/api/logout', getLogout)
export default router




