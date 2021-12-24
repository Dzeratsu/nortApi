import {Router} from 'express'
import {getMonthOrders} from "../controllers/get/getMonthOrders.js";
import {getAllManager} from "../controllers/get/getAllManager.js";
import {postAddOrder} from "../controllers/post/postAddOrder.js";
import {registration} from "../controllers/post/registration.js"
import {postAuthorization} from "../controllers/post/postAuthorization.js"
import documentation from "../apiDoc.js";
import bodyParser from "body-parser";
import {putEditOrder} from "../controllers/put/putEditOrder.js";
const router = Router()
router.use(bodyParser.json(), bodyParser.urlencoded())

router.get('/api/documentation', (req, res) => {
    res.send(documentation)
})

router.get('/api/getMonthOrders', getMonthOrders)
router.get('/api/getAllManager', getAllManager)
router.post('/api/save', postAddOrder)
router.post('/api/reg', registration)
router.post('/api/auth', postAuthorization)
router.put('/api/edit', putEditOrder)
export default router


