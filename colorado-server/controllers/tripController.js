const express = require('express');
// Next we set up the Router
const router = express.Router();
// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Trip = require('../models/trip');
// Creating the index route
// index route should show all the fruits
 router.get('/', async (req, res, next) => {

    console.log(req.body, ' this is req.body');


     try  {

      const allTrips = await Trip.find();

      res.json({
        status: 200,
        data: allTrips
      })

    } catch (err){

      res.send(err)

    }
});

// This is the route that the form is sending
// its info too
// aka the create route
router.post('/', async (req, res) => {
  // contents of the form will be in req.body
  try {
    console.log(req.body, ' this is req.body');
    const createdTrip = await Trip.create(req.body);

    res.json({
      status: 200,
      data: createdTrip
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});




// Show Route
router.get('/', async (req, res, next) => {


     try  {

        const foundTrip = await Trip.findById(req.params.id);
        res.json({
          status: 200,
          data: foundTrip
        });

      } catch (err){
        res.send(err);
      }



});

router.put('/:id', async (req, res) => {

  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedTrip
    });
  } catch(err){
    res.send(err)
  }
});


// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedTrip = await Trip.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedTrip
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
