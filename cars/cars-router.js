const express = require("express");
const knex = require("knex");
const db = require("../data/config");
const { route } = require("../welcome/welcome-router");
const { default: strictTransportSecurity } = require("helmet/dist/middlewares/strict-transport-security");
const router = express.Router();

router.get("/cars", async (req, res, next) => {
  try {
    res.json(await db("cars"));
  } catch (err) {
    next(err);
  }
});

router.get("/cars/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db("cars").where({ id }).first();

    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/cars", async (req, res, next) => {
  try {
    const [id] = await db("cars").insert(req.body);
    const newCar = await db("cars").where({ id }).first();

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put("/cars/:id", async (req, res, next) => {
    try{
        await db("cars").update(req.body).where("id", req.params.id);

        const car = await db("cars").where("id", req.params.id).first();

        res.json(car);
    } catch (err){
        next(err);
    }
});


router.delete("/cars/:id", async (req, res, next) => {
    try{
        await db("cars").where("id", req.params.id).del();
        res.status(203).end();
    } catch(err){
        next(err);
    }
});


module.exports = router;
