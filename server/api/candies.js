const express = require('express');
const router = express.Router();
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
   try {
      const candies = await Candy.findAll();
      res.send(candies);
   } catch (error) {
      next(error);
   }
});
router.get('/:id', async (req, res, next) => {
   try {
      const id = req.params.id;
      const candy = await Candy.findById(id);
      if (!candy) {
         res.sendStatus(404);
      } else {
         res.send(candy);
      }
   } catch (error) {
      next(error);
   }
});
router.post('/', async (req, res, next) => {
   try {
      const candy = await Candy.create(req.body);
      res.send(candy);
   } catch (error) {
      next(error);
   }
});
router.put('/:id', async (req, res, next) => {
   try {
      const id = req.params.id;
      const candy = await Candy.findById(id);
      const updatedCandy = await candy.update(req.body);
      res.send(updatedCandy);
   } catch (error) {
      next(error);
   }
});
router.delete('/:id', async (req, res, next) => {
   try {
      await Candy.destroy({
         where: {
            id: req.params.id,
         },
      });
      res.send('removed');
   } catch (error) {
      next(error);
   }
});

module.exports = router;
