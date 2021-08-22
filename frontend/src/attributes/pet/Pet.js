const PetEnum = Object.freeze({
  microchipNumber: ["Número do microchip", false, "numeric"],
  name: ["Nome", false, "text"],
  specie: ["Espécie", false, "text"],
  breed: ["Raça", false, "text"],
  coat: ["Pelagem", false, "text"],
  height: ["Porte", false, "text"],
  age: ["Idade", false, "numeric"],
  sex: ["Sexo", false, "boolean"],
  microchippingDate: ["Data da microchipagem", false, "date"],
  captureLocalization: ["Local de captura", false, "local"],
  withdrawalDate: ["Data do recolhimento", false, "date"],
  sterilizationDate: ["Data da esterilização", false, "date"],
  dewormingDates: ["Data das vermifugações", true, "dates"],
  vaccinationDates: ["Data das vacinações", true, "dates"],
  adoptionDate: ["Data da adoção", false, "date"],
  deathDate: ["Data do óbito/eutanásia", false, "date"],
});

export default PetEnum;
