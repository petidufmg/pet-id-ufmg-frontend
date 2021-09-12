const PetEnum = Object.freeze({
  microchipNumber: ["Número do microchip", false, "numeric", 0],
  name: ["Nome", false, "text", 1],
  specie: ["Espécie", false, "text", 2],
  breed: ["Raça", false, "text", 3],
  coat: ["Pelagem", false, "text", 4],
  height: ["Porte", false, "dropdown", 5],
  age: ["Idade", false, "numeric", 6],
  sex: ["Sexo", false, "boolean", 7],
  microchippingDate: ["Data da microchipagem", false, "date", 8],
  captureLocalization: ["Local de captura", false, "local", 9],
  withdrawalDate: ["Data do recolhimento", false, "date", 10],
  sterilizationDate: ["Data da esterilização", false, "date", 11],
  dewormingDates: ["Data das vermifugações", true, "dates", 12],
  vaccinationDates: ["Data das vacinações", true, "dates", 13],
  adoptionDate: ["Data da adoção", false, "date", 14],
  deathDate: ["Data do óbito/eutanásia", false, "date", 15],
});

export default PetEnum;
