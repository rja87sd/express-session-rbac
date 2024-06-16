"use strict";

function role(requiredRoles) {
    return (req, res, next) => {
        if (!requiredRoles.includes(req.user.user.role)) {
            return res.status(403).json({ error: "Access denied." });
        }
        next();
    };
}

module.exports = role;
