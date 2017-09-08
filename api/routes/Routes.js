module.exports = function (app) {
  var Species = require('../controllers/Species/ControllerSpecies');
  var Pets = require('../controllers/Pets/ControllerPets');
  var Medicines = require('../controllers/Medicines/ControllerMedicines');
  var RelMecidinesPets = require('../controllers/RelMedicinesPets/ControllerRelMedicinesPets');
  var Illnesses = require('../controllers/Illnesses/ControllerIllnesses');
  // todoList Routes
  app.route('/species')
    .get(Species.list_all_species)
    .post(Species.add_species)
    .delete(Species.remove_species)
    .put(Species.update_species)

  app.route('/pets')
    .get(Pets.list_all_pets)
    .post(Pets.add_pet)
    .put(Pets.update_pet)
    .delete(Pets.remove_pet)

  app.route('/medicines')
    .get(Medicines.list_all_medicines)
    .post(Medicines.add_medicine)
    .delete(Medicines.remove_medicine)
    .put(Medicines.update_medicine)

  app.route('/relpetsmedicines')
    .get(RelMecidinesPets.list_all_relations_pets_medicines)
    .post(RelMecidinesPets.add_relation_pet_medicine)
    .delete(RelMecidinesPets.remove_relation_pet_medicine)
    .put(RelMecidinesPets.update_relation_pet_medicine)

  app.route('/illnesses')
    .get(Illnesses.list_all_illnesses)
    .post(Illnesses.add_illness)
    .delete(Illnesses.remove_illness)
    .put(Illnesses.update_illness)
};
