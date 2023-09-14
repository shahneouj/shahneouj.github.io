import  Express from 'express';
import {getUsers,createUser,getUser} from '../controller/user.js'
const router = Express.Router();

router.get('/',getUsers);
router.post('/add',createUser)
router.get('/:id',getUser)

export default router;