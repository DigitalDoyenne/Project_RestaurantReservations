/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

 const router = require("express").Router();
 const controller = require("./reservations.controller");
 const methodNotAllowed = require("../errors/methodNotAllowed");
 const tablesController = require("../tables/tables.controller");
 
 router.route("/:reservation_id").get(controller.read).put(controller.updateReservation).all(methodNotAllowed);
 
 router
   .route("/")
   .get(controller.list)
   .post(controller.create)
   .all(methodNotAllowed);
 
 router
   .route("/:reservation_id/status")
   .put(controller.update)
   .all(methodNotAllowed);
 
 module.exports = router;