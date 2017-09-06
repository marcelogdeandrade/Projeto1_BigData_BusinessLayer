/**
 * List Pets
 */
exports.script_list_all_pets = function(){
  return `SELECT 
            *
          FROM Pets
          LEFT OUTER JOIN
              Clients
          ON 
              Clients.idClient = Pets.idClient`
}

/**
 * AddPet
 */
exports.script_add_pet = function(name, birthDate, idSpecies){
  return `INSERT INTO 
            Pets (idPet, name, birthDate, idSpecies, idClient, status)
          VALUES 
            (NULL, '${name}', '${birthDate}', '${idSpecies}', NULL, TRUE)`
}

exports.script_add_pet_medicines = function(idPet, medicines){
  let result = ''
  if (Array.isArray(medicines)){
    medicines.map(idMedicine = () => {
      result += `INSERT INTO 
            RelMedicinesPets (idPet, idPet)
          VALUES 
            ("${idPet}", "${idMedicine}")`
    });
  }
  return result
}

/**
 * Remove pet
 */

exports.script_remove_pet = function(idPet){
  return `UPDATE Pets SET status = '0' WHERE idPet='${idPet}'`
}