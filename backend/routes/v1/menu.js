const express = require('express');

const isAdminMiddleware = require('../../middlewares/isAdmin');
const authenticatedMiddleware = require('../../middlewares/authenticated');
const controller = require('../../controllers/v1/menu');

const router = express.Router();

router
  .route('/')
  .get(controller.getAll)
  .post(authenticatedMiddleware, isAdminMiddleware, controller.create);

  router.get('/topbar', controller.getAllTopbarLinks)

module.exports = router;
