const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    // authMiddleware must run before this
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    // Check role
    if (req.user.role !== requiredRole) {
      return res.status(403).json({
        message: "Access denied: insufficient permissions",
      });
    }

    next();
  };
};

module.exports = roleMiddleware;
