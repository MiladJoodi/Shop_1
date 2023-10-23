const express = require('express');
const multer = require('multer');

const courseController = require('../../controllers/v1/course');
const multerStorage = require('../../util/multerStorage');
const authenticatedMiddleware = require('../../middlewares/authenticated');
const isAdminMiddleware = require('../../middlewares/isAdmin');

const router = express.Router();

router.use(authenticatedMiddleware);

router
  .route('/')
  .post(
    // multer({ storage: multerStorage }).single('cover'),
    authenticatedMiddleware, isAdminMiddleware,
    courseController.create
  )
  .get(courseController.getAll);

router
  .route('/:id/sessions')
  .post(isAdminMiddleware, courseController.createSession);

router.route('/:id').post(courseController.getOne);

router.route('/:id/register').post(courseController.register);

module.exports = router;
