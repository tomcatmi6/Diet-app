import {useTranslation} from 'react-i18next';
import {Ingredient} from './types';

export default function ingredients(): {[key: string]: Ingredient} {
    const {t} = useTranslation();

    return {
        avocado: {
            id: 'avocado',
            name: t('ingredients.avocado'),
            description: t('ingredients.description.avocado'),
            weightPerItem: 1400,
            unit: t('units.pcs'),
        },

        banana: {
            id: 'banana',
            name: t('ingredients.banana'),
            description: t('ingredients.description.banana'),
            weightPerItem: 1200,
            unit: t('units.pcs'),
        },

        sweet_potatoes: {
            id: 'sweet_potatoes',
            name: t('ingredients.sweet_potatoes'),
            description: t('ingredients.description.sweet_potatoes'),
            weightPerItem: 2000,
            unit: t('units.pcs'),
        },

        broccoli: {
            id: 'broccoli',
            name: t('ingredients.broccoli'),
            description: t('ingredients.description.broccoli'),
            weightPerItem: 5000,
            unit: t('units.pcs'),
        },

        beets: {
            id: 'beets',
            name: t('ingredients.beets'),
            description: t('ingredients.description.beets'),
            weightPerItem: 1200,
            unit: t('units.pcs'),
        },

        onion: {
            id: 'onion',
            name: t('ingredients.onion'),
            description: t('ingredients.description.onion'),
            weightPerItem: 1000,
            unit: t('units.pcs'),
        },

        zucchini: {
            id: 'zucchini',
            name: t('ingredients.zucchini'),
            description: t('ingredients.description.zucchini'),
            weightPerItem: 3000,
            unit: t('units.pcs'),
        },

        garlic: {
            id: 'garlic',
            name: t('ingredients.garlic'),
            description: t('ingredients.description.garlic'),
            weightPerItem: 50,
            unit: t('units.clove'),
        },

        green_peas: {
            id: 'green_peas',
            name: t('ingredients.green_peas'),
            description: t('ingredients.description.green_peas'),
            weightPerItem: 160,
            unit: t('units.spoon'),
        },

        apple: {
            id: 'apple',
            name: t('ingredients.apple'),
            description: t('ingredients.description.apple'),
            weightPerItem: 1500,
            unit: t('units.pcs'),
        },

        kaki: {
            id: 'kaki',
            name: t('ingredients.kaki'),
            description: t('ingredients.description.kaki'),
            weightPerItem: 2500,
            unit: t('units.pcs'),
        },

        capers: {
            id: 'capers',
            name: t('ingredients.capers'),
            description: t('ingredients.description.capers'),
            weightPerItem: 100,
            unit: t('units.spoon'),
        },

        sauerkraut: {
            id: 'sauerkraut',
            name: t('ingredients.sauerkraut'),
            description: t('ingredients.description.sauerkraut'),
            weightPerItem: 1100,
            unit: t('units.glass'),
        },

        broccoli_sprouts: {
            id: 'broccoli_sprouts',
            name: t('ingredients.broccoli_sprouts'),
            description: t('ingredients.description.broccoli_sprouts'),
            weightPerItem: 80,
            unit: t('units.spoon'),
        },

        kiwi: {
            id: 'kiwi',
            name: t('ingredients.kiwi'),
            description: t('ingredients.description.kiwi'),
            weightPerItem: 750,
            unit: t('units.pcs'),
        },

        garden_fennel: {
            id: 'garden_fennel',
            name: t('ingredients.garden_fennel'),
            description: t('ingredients.description.garden_fennel'),
            weightPerItem: 80,
            unit: t('units.spoon'),
        },

        tangerines: {
            id: 'tangerines',
            name: t('ingredients.tangerines'),
            description: t('ingredients.description.tangerines'),
            weightPerItem: 650,
            unit: t('units.pcs'),
        },

        carrot: {
            id: 'carrot',
            name: t('ingredients.carrot'),
            description: t('ingredients.description.carrot'),
            weightPerItem: 449,
            unit: t('units.pcs'),
        },

        green_cucumber: {
            id: 'green_cucumber',
            name: t('ingredients.green_cucumber'),
            description: t('ingredients.description.green_cucumber'),
            weightPerItem: 1800,
            unit: t('units.pcs'),
        },

        pickled_cucumbers: {
            id: 'pickled_cucumbers',
            name: t('ingredients.pickled_cucumbers'),
            description: t('ingredients.description.pickled_cucumbers'),
            weightPerItem: 600,
            unit: t('units.pcs'),
        },

        black_olives: {
            id: 'black_olives',
            name: t('ingredients.black_olives'),
            description: t('ingredients.description.black_olives'),
            weightPerItem: 150,
            unit: t('units.spoon'),
        },

        red_pepper: {
            id: 'red_pepper',
            name: t('ingredients.red_pepper'),
            description: t('ingredients.description.red_pepper'),
            weightPerItem: 1400,
            unit: t('units.pcs'),
        },

        yellow_pepper: {
            id: 'yellow_pepper',
            name: t('ingredients.yellow_pepper'),
            description: t('ingredients.description.yellow_pepper'),
            weightPerItem: 1400,
            unit: t('units.pcs'),
        },

        cultivated_mushroom: {
            id: 'cultivated_mushroom',
            name: t('ingredients.cultivated_mushroom'),
            description: t('ingredients.description.cultivated_mushroom'),
            weightPerItem: 200,
            unit: t('units.pcs'),
        },

        parsley_leaves: {
            id: 'parsley_leaves',
            name: t('ingredients.parsley_leaves'),
            description: t('ingredients.description.parsley_leaves'),
            weightPerItem: 60,
            unit: t('units.tsp'),
        },

        orange: {
            id: 'orange',
            name: t('ingredients.orange'),
            description: t('ingredients.description.orange'),
            weightPerItem: 2000,
            unit: t('units.pcs'),
        },

        tomato: {
            id: 'tomato',
            name: t('ingredients.tomato'),
            description: t('ingredients.description.tomato'),
            weightPerItem: 1200,
            unit: t('units.pcs'),
        },

        cherry_tomatoes: {
            id: 'cherry_tomatoes',
            name: t('ingredients.cherry_tomatoes'),
            description: t('ingredients.description.cherry_tomatoes'),
            weightPerItem: 200,
            unit: t('units.pcs'),
        },

        celery: {
            id: 'celery',
            name: t('ingredients.celery'),
            description: t('ingredients.description.celery'),
            weightPerItem: 452,
            unit: t('units.haulm'),
        },

        dried_tomatoes: {
            id: 'dried_tomatoes',
            name: t('ingredients.dried_tomatoes'),
            description: t('ingredients.description.dried_tomatoes'),
            weightPerItem: 70,
            unit: t('units.pcs'),
        },

        spinach: {
            id: 'spinach',
            name: t('ingredients.spinach'),
            description: t('ingredients.description.spinach'),
            weightPerItem: 250,
            unit: t('units.handful'),
        },

        potatoes: {
            id: 'potatoes',
            name: t('ingredients.potatoes'),
            description: t('ingredients.description.potatoes'),
            weightPerItem: 700,
            unit: t('units.pcs'),
        },

        curry: {
            id: 'curry',
            name: t('ingredients.curry'),
            description: t('ingredients.description.curry'),
            weightPerItem: 10,
            unit: t('units.pinch'),
        },

        cinnamon: {
            id: 'cinnamon',
            name: t('ingredients.cinnamon'),
            description: t('ingredients.description.cinnamon'),
            weightPerItem: 50,
            unit: t('units.tsp'),
        },

        nigella: {
            id: 'nigella',
            name: t('ingredients.nigella'),
            description: t('ingredients.description.nigella'),
            weightPerItem: 50,
            unit: t('units.tsp'),
        },

        savory: {
            id: 'savory',
            name: t('ingredients.savory'),
            description: t('ingredients.description.savory'),
            weightPerItem: 40,
            unit: t('units.tsp'),
        },

        turmeric: {
            id: 'turmeric',
            name: t('ingredients.turmeric'),
            description: t('ingredients.description.turmeric'),
            weightPerItem: 50,
            unit: t('units.tsp'),
        },

        oregano_dried: {
            id: 'oregano_dried',
            name: t('ingredients.oregano_dried'),
            description: t('ingredients.description.oregano_dried'),
            weightPerItem: 30,
            unit: t('units.tsp'),
        },

        ground_black_pepper: {
            id: 'ground_black_pepper',
            name: t('ingredients.ground_black_pepper'),
            description: t('ingredients.description.ground_black_pepper'),
            weightPerItem: 10,
            unit: t('units.pinch'),
        },

        gingerbread_spice: {
            id: 'gingerbread_spice',
            name: t('ingredients.gingerbread_spice'),
            description: t('ingredients.description.gingerbread_spice'),
            weightPerItem: 0,
            unit: t('units.tsp'),
        },

        himalayan_salt: {
            id: 'himalayan_salt',
            name: t('ingredients.himalayan_salt'),
            description: t('ingredients.description.himalayan_salt'),
            weightPerItem: 10,
            unit: t('units.pinch'),
        },

        thyme: {
            id: 'thyme',
            name: t('ingredients.thyme'),
            description: t('ingredients.description.thyme'),
            weightPerItem: 40,
            unit: t('units.tsp'),
        },

        herbes_de_provence: {
            id: 'herbes_de_provence',
            name: t('ingredients.herbes_de_provence'),
            description: t('ingredients.description.herbes_de_provence'),
            weightPerItem: 30,
            unit: t('units.tsp'),
        },

        bitter_chocolate: {
            id: 'bitter_chocolate',
            name: t('ingredients.bitter_chocolate'),
            description: t('ingredients.description.bitter_chocolate'),
            weightPerItem: 60,
            unit: t('units.cube'),
        },

        bee_honey: {
            id: 'bee_honey',
            name: t('ingredients.bee_honey'),
            description: t('ingredients.description.bee_honey'),
            weightPerItem: 240,
            unit: t('units.spoon'),
        },

        mustard: {
            id: 'mustard',
            name: t('ingredients.mustard'),
            description: t('ingredients.description.mustard'),
            weightPerItem: 100,
            unit: t('units.tsp'),
        },

        apple_cider: {
            id: 'apple_cider',
            name: t('ingredients.apple_cider'),
            description: t('ingredients.description.apple_cider'),
            weightPerItem: 30,
            unit: t('units.tsp'),
        },

        tomato_passata: {
            id: 'tomato_passata',
            name: t('ingredients.tomato_passata'),
            description: t('ingredients.description.tomato_passata'),
            weightPerItem: 1000,
            unit: t('units.portion'),
        },

        baking_powder: {
            id: 'baking_powder',
            name: t('ingredients.baking_powder'),
            description: t('ingredients.description.baking_powder'),
            weightPerItem: 30,
            unit: t('units.tsp'),
        },

        vege_burger: {
            id: 'vege_burger',
            name: t('ingredients.vege_burger'),
            description: t('ingredients.description.vege_burger'),
            weightPerItem: 850,
            unit: t('units.portion'),
        },

        chicken_eggs_cooked: {
            id: 'chicken_eggs_cooked',
            name: t('ingredients.chicken_eggs_cooked'),
            description: t('ingredients.description.chicken_eggs_cooked'),
            weightPerItem: 500,
            unit: t('units.pcs'),
        },

        whole_chicken_eggs: {
            id: 'whole_chicken_eggs',
            name: t('ingredients.whole_chicken_eggs'),
            description: t('ingredients.description.whole_chicken_eggs'),
            weightPerItem: 560,
            unit: t('units.pcs'),
        },

        natural_yogurt: {
            id: 'natural_yogurt',
            name: t('ingredients.natural_yogurt'),
            description: t('ingredients.description.natural_yogurt'),
            weightPerItem: 200,
            unit: t('units.spoon'),
        },

        feta_type_cheese: {
            id: 'feta_type_cheese',
            name: t('ingredients.feta_type_cheese'),
            description: t('ingredients.description.feta_type_cheese'),
            weightPerItem: 500,
            unit: t('units.portion'),
        },

        cheese_mozzarella_no_fat: {
            id: 'cheese_mozzarella_no_fat',
            name: t('ingredients.cheese_mozzarella_no_fat'),
            description: t('ingredients.description.cheese_mozzarella_no_fat'),
            weightPerItem: 150,
            unit: t('units.slice'),
        },

        skyr_natural: {
            id: 'skyr_natural',
            name: t('ingredients.skyr_natural'),
            description: t('ingredients.description.skyr_natural'),
            weightPerItem: 1500,
            unit: t('units.portion'),
        },

        buckwheat_groats: {
            id: 'buckwheat_groats',
            name: t('ingredients.buckwheat_groats'),
            description: t('ingredients.description.buckwheat_groats'),
            weightPerItem: 130,
            unit: t('units.spoon'),
        },

        corn_noodles: {
            id: 'corn_noodles',
            name: t('ingredients.corn_noodles'),
            description: t('ingredients.description.corn_noodles'),
            weightPerItem: 806,
            unit: t('units.portion'),
        },

        buckwheat_flour: {
            id: 'buckwheat_flour',
            name: t('ingredients.buckwheat_flour'),
            description: t('ingredients.description.buckwheat_flour'),
            weightPerItem: 150,
            unit: t('units.spoon'),
        },

        oat_flakes: {
            id: 'oat_flakes',
            name: t('ingredients.oat_flakes'),
            description: t('ingredients.description.oat_flakes'),
            weightPerItem: 100,
            unit: t('units.spoon'),
        },

        white_rice: {
            id: 'white_rice',
            name: t('ingredients.white_rice'),
            description: t('ingredients.description.white_rice'),
            weightPerItem: 150,
            unit: t('units.spoon'),
        },

        pumpkin_seeds_shelled: {
            id: 'pumpkin_seeds_shelled',
            name: t('ingredients.pumpkin_seeds_shelled'),
            description: t('ingredients.description.pumpkin_seeds_shelled'),
            weightPerItem: 100,
            unit: t('units.spoon'),
        },

        cocoa_powder: {
            id: 'cocoa_powder',
            name: t('ingredients.cocoa_powder'),
            description: t('ingredients.description.cocoa_powder'),
            weightPerItem: 100,
            unit: t('units.spoon'),
        },

        flax_seeds: {
            id: 'flax_seeds',
            name: t('ingredients.flax_seeds'),
            description: t('ingredients.description.flax_seeds'),
            weightPerItem: 50,
            unit: t('units.tsp'),
        },

        almonds: {
            id: 'almonds',
            name: t('ingredients.almonds'),
            description: t('ingredients.description.almonds'),
            weightPerItem: 150,
            unit: t('units.spoon'),
        },

        italian_nuts: {
            id: 'italian_nuts',
            name: t('ingredients.italian_nuts'),
            description: t('ingredients.description.italian_nuts'),
            weightPerItem: 147,
            unit: t('units.spoon'),
        },

        cod_fresh: {
            id: 'cod_fresh',
            name: t('ingredients.cod_fresh'),
            description: t('ingredients.description.cod_fresh'),
            weightPerItem: 1000,
            unit: t('units.portion'),
        },

        tuna_in_own_sauce: {
            id: 'tuna_in_own_sauce',
            name: t('ingredients.tuna_in_own_sauce'),
            description: t('ingredients.description.tuna_in_own_sauce'),
            weightPerItem: 300,
            unit: t('units.spoon'),
        },

        smoked_salmon: {
            id: 'smoked_salmon',
            name: t('ingredients.smoked_salmon'),
            description: t('ingredients.description.smoked_salmon'),
            weightPerItem: 300,
            unit: t('units.portion'),
        },

        oat_milk: {
            id: 'oat_milk',
            name: t('ingredients.oat_milk'),
            description: t('ingredients.description.oat_milk'),
            weightPerItem: 2500,
            unit: t('units.glass'),
        },

        lemon_juice: {
            id: 'lemon_juice',
            name: t('ingredients.lemon_juice'),
            description: t('ingredients.description.lemon_juice'),
            weightPerItem: 60,
            unit: t('units.spoon'),
        },

        chicken_breast: {
            id: 'chicken_breast',
            name: t('ingredients.chicken_breast'),
            description: t('ingredients.description.chicken_breast'),
            weightPerItem: 1000,
            unit: t('units.portion'),
        },

        minced_turkey_breast: {
            id: 'minced_turkey_breast',
            name: t('ingredients.minced_turkey_breast'),
            description: t('ingredients.description.minced_turkey_breast'),
            weightPerItem: 1000,
            unit: t('units.portion'),
        },

        rye_bread: {
            id: 'rye_bread',
            name: t('ingredients.rye_bread'),
            description: t('ingredients.description.rye_bread'),
            weightPerItem: 300,
            unit: t('units.bread_slice'),
        },

        olive_oil: {
            id: 'olive_oil',
            name: t('ingredients.olive_oil'),
            description: t('ingredients.description.olive_oil'),
            weightPerItem: 100,
            unit: t('units.spoon'),
        },
    };
}
