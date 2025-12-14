const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

/*
  GET /api/v1/admin/stats
  Access: ADMIN ONLY
*/
router.get(
  "/stats",
  protect,
  roleMiddleware("admin"),
  async (req, res) => {
    res.json({
      message: "Welcome Admin",
      stats: {
        totalUsers: 120,
        totalTasks: 540,
        systemStatus: "Healthy",
      },
    });
  }
);

module.exports = router;
