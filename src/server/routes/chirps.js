"use strict";
export const __esModule = true;
import express_1 from "express";
import chirpstore_js_1 from "/Users/crims/OneDrive/Desktop/wwperry94/Labs/React-Typescript/chirpstore.js";
var router = express_1["default"].Router();
router.get('/:id?', function (req, res) {
    var id = req.params.id;
    if (id) {
        res.json(chirpstore_js_1["default"].GetChirp(id));
    }
    else {
        res.status(200).json(chirpstore_js_1["default"].GetChirps());
    }
});
router.post('/', function (req, res) {
    chirpstore_js_1["default"].CreateChirp(req.body);
    res.sendStatus(200);
});
router.put("/:id", function (req, res) {
    var id = req.params.id;
    var chirp = req.body;
    chirpstore_js_1["default"].UpdateChirp(id, chirp);
    res.sendStatus(200);
});
router["delete"]("/:id", function (req, res) {
    var id = req.params.id;
    chirpstore_js_1["default"].DeleteChirp(id);
    res.sendStatus(200);
});
export default router;
