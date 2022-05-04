"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiauthorize = void 0;
const apiauthorize = (req, res, next) => {
    let token;
    if (req.headers.accesstoken) {
        token = req.headers.accesstoken;
    }
    if (!token) {
        return res.status(403).json({ msg: "Unauthorise User", status: false });
    }
    else if (token !== process.env.ACCESSKEY) {
        return res.status(403).json({ msg: "Wrong Token", status: false });
    }
    next();
};
exports.apiauthorize = apiauthorize;
