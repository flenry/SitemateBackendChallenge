"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_1 = __importDefault(require("../utils/store"));
const router = express_1.default.Router();
const store = store_1.default.getInstance();
router.post("/add", (req, res) => {
    const newObject = req.body;
    store.addObject(newObject);
    console.log("Added JSON object: ", newObject);
    res.json(newObject);
});
router.get("/view", (req, res) => {
    const allObjects = store.getAllObjects();
    console.log("View all JSON objects:", allObjects);
    res.json(allObjects);
});
router.get("/view/:id", (req, res) => {
    const objectId = Number(req.params.id);
    console.log("View JSON object ID:", objectId);
    const object = store.getObjectById(objectId);
    console.log("View JSON object:", object);
    if (object) {
        console.log("View JSON object:", object);
        res.json(object);
    }
    else {
        console.log("JSON Object not found:", objectId);
        res.status(404).json({ error: "JSON Object not found" });
    }
});
router.put("/update/:id", (req, res) => {
    const objectId = Number(req.params.id);
    const updatedObject = req.body;
    const updated = store.updateObjectById(objectId, updatedObject);
    if (updated) {
        console.log("Update JSON object:", updatedObject);
        res.json(updatedObject);
    }
    else {
        console.log("JSON Object not found:", objectId);
        res.status(404).json({ error: "JSON Object not found" });
    }
});
router.delete("/delete/:id", (req, res) => {
    const objectId = Number(req.params.id);
    const deleted = store.deleteObjectById(objectId);
    if (deleted) {
        console.log("Delete JSON Object:", objectId);
        res.json({
            message: `JSON Object with ID ${objectId} deleted successfully`,
        });
    }
    else {
        console.log("JSON Object not found:", objectId);
        res.status(404).json({ error: "JSON Object not found" });
    }
});
exports.default = router;
