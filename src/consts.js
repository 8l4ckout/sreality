export const SELECTORS = {
    type: 'form ul > li > a',
    subtype: 'form div.line.category-sub-cb label > a',
    price: {
        from: 'form div[class*="czk-price"] input:nth-child(1)',
        to: 'form div[class*="czk-price"] input:nth-child(2)',
    },
    area: {
        from: 'form div.usable-area input:nth-child(1)',
        to: 'form div.usable-area input:nth-child(2)',
    },
    location: {
        input: 'form div.region.distance input',
        autocomplete: '.suggest-geo-location',
    },
    submit: 'form > div.buttons > div > div > button',
};

export const OFFER_TYPES = {
    sale: {
        slug: 'prodej',
        content: 'Prodej',
        selectors: {
            switcher: 'a.switcher[href^="/hledani/prodej/"]',
        },
    },
    rent: {
        slug: 'pronajem',
        content: 'Pronájem',
        selectors: {
            switcher: 'a.switcher[href^="/hledani/pronajem/"]',
        },
    },
    auction: {
        slug: 'drazby',
        content: 'Dražby',
        selectors: {
            switcher: 'a.switcher[href^="/hledani/drazby/"]',
        },
    },
};

export const ESTATE_TYPES = {
    apartment: {
        url: 'https://www.sreality.cz/hledani/byty',
        title: 'Byty',
        iconPath: 'icons/flat.svg',
        subtypes: {
            '1kk': '1+kk',
            '11': '1+1', // eslint-disable-line quote-props
            '2kk': '2+kk',
            '21': '2+1', // eslint-disable-line quote-props
            '3kk': '3+kk',
            '31': '3+1', // eslint-disable-line quote-props
            '4kk': '4+kk',
            '41': '4+1', // eslint-disable-line quote-props
            '5kk': '5+kk',
            '51': '5+1', // eslint-disable-line quote-props
            '6': '6 a více', // eslint-disable-line quote-props
            other: 'Atypický',
        },
    },
    house: {
        url: 'https://www.sreality.cz/hledani/domy',
        title: 'Domy',
        iconPath: 'icons/duplex.svg',
        subtypes: {
            family: 'Rodinný',
            villa: 'Vila',
            cottage: 'Chalupa',
            holiday: 'Chata',
            planned: 'Na klíč',
            farm: 'Zemědělská usedlost',
            historical: 'Památka/jiné',
        },
    },
    land: {
        url: 'https://www.sreality.cz/hledani/pozemky',
        title: 'Pozemky',
        iconPath: 'icons/fence.svg',
        subtypes: {
            housing: 'Bydlení',
            commercial: 'Komerční',
            agricultural: 'Pole',
            meadow: 'Louky',
            forest: 'Lesy',
            fishpond: 'Rybníky',
            orchard: 'Sady/vinice',
            garden: 'Zahrady',
        },
    },
    commercial: {
        url: 'https://www.sreality.cz/hledani/komercni',
        title: 'Komerční',
        iconPath: 'icons/mansion.svg',
        subtypes: {
            office: 'Kanceláře',
            warehouse: 'Sklady',
            production: 'Výroba',
            shopping_space: 'Obchodní prostory',
            accommodation: 'Ubytování',
            restaurant: 'Restaurace',
            agricultural: 'Zemědělský',
            building: 'Činžovní dům',
        },
    },
    other: {
        url: 'https://www.sreality.cz/hledani/ostatni',
        title: 'Ostatní',
        iconPath: 'icons/garage.svg',
        subtypes: {
            garage_full: 'Garáž',
            garage_space: 'Garážové stání',
            mobile_home: 'Mobilheim',
            wine_cellar: 'Vinný sklep',
            attic: 'Půdní prostor',
        },
    },
};
