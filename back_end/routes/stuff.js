const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff')

router.get('/bestrating', stuffCtrl.getBestRating, stuffCtrl.getAllBooks);

router.get('/', stuffCtrl.getAllBooks);
router.post('/',auth, multer, stuffCtrl.createBook);
router.get('/:id', stuffCtrl.getOneBooks);
router.put('/:id', auth, multer, stuffCtrl.modifyBook);
router.post('/:id/rating', auth, multer, stuffCtrl.rateBook);
router.delete('/:id', auth, multer, stuffCtrl.deleteBook);



module.exports = router;