function petInfoReducer(buttonState, action) {
    switch (action.type) {
        case 'toggleVaccineButton':
            return buttonState.vaccineButton.status ? {
                ...buttonState,
                vaccineButton: {
                    status: false,
                    name: 'Ver mais'
                }
            } : {
                vermifugeButton: {
                    status: false,
                    name: 'Ver mais'
                },
                vaccineButton: {
                    status: true,
                    name: 'Fechar'
                },
                ownerButton: {
                    status: false,
                    name: 'Ver mais'
                }
            };
        case 'toggleVermifugeButton':
            return buttonState.vermifugeButton.status ? {
                ...buttonState,
                vermifugeButton: {
                    status: false,
                    name: 'Ver mais'
                }
            } : {
                vaccineButton: {
                    status: false,
                    name: 'Ver mais'
                },
                vermifugeButton: {
                    status: true,
                    name: 'Fechar'
                },
                ownerButton: {
                    status: false,
                    name: 'Ver mais'
                }
            };
        case 'toggleOwnerButton':
            return buttonState.ownerButton.status ? {
                ...buttonState,
                ownerButton: {
                    status: false,
                    name: 'Ver mais'
                }
            } : {
                vaccineButton: {
                    status: false,
                    name: 'Ver mais'
                },
                vermifugeButton: {
                    status: false,
                    name: 'Ver mais'
                },
                ownerButton: {
                    status: true,
                    name: 'Fechar'
                }

            };
        default:
            return {};
    }
}

export default petInfoReducer;