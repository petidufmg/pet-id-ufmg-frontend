const PetEnum = Object.freeze({
  microchipNumber: ["Número do microchip", false],
  name: ["Nome", false],
  specie: ["Espécie", false],
  breed: ["Raça", false],
  coat: ["Pelagem", false],
  height: ["Porte", false],
  age: ["Idade", false],
  sex: ["Sexo", false],
  microchippingDate: ["Data da microchipagem", false],
  captureLocalization: ["Local de captura", false],
  withdrawalDate: ["Data do recolhimento", false],
  sterilizationDate: ["Data da esterilização", false],
  dewormingDates: ["Data das vermifugações", true],
  vaccinationDates: ["Data das vacinações", true],
  adoptionDate: ["Data da adoção", false],
  deathDate: ["Data do óbito/eutanásia", false],
});

export default PetEnum;
