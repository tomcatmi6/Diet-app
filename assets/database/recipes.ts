import {useTranslation} from "react-i18next";
import ingredients from "./ingredients";
import {Recipe} from "./types";

export function recipes(): Recipe[] {
    const {t} = useTranslation();
    const ingredientsObject = ingredients();

    return [
        {
            id: 'sandwiches_avocado_salmon_dill',
            name: t('recipes.sandwiches_avocado_salmon_dill.name'),
            description: t(`recipes.sandwiches_avocado_salmon_dill.description`),
            ingredients: [
                {
                    ingredient: ingredientsObject.salmon_fresh,
                    amount: 60,
                },
                {
                    ingredient: ingredientsObject.rye_bread,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.lemon_juice,
                    amount: 60,
                },
                {
                    ingredient: ingredientsObject.tomato,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.garden_fennel,
                    amount: 160,
                },
                {
                    ingredient: ingredientsObject.avocado,
                    amount: 700,
                },
                {
                    ingredient: ingredientsObject.orange,
                    amount: 2000,
                },
                {
                    ingredient: ingredientsObject.whole_chicken_eggs,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.pumpkin_seeds_shelled,
                    amount: 100,
                },
            ],
        },
        {
            id: 'pasta_broccoli_feta_seeds',
            name: t('recipes.pasta_broccoli_feta_seeds.name'),
            description: t(`recipes.pasta_broccoli_feta_seeds.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.corn_noodles,
                    amount: 800,
                },
                {
                    ingredient: ingredientsObject.herbes_de_provence,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.dried_tomatoes,
                    amount: 210,
                },
                {
                    ingredient: ingredientsObject.feta_type_cheese,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 100,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.broccoli,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.pumpkin_seeds_shelled,
                    amount: 100,
                },
            ],
        },
        {
            id: 'protein_porridge_kiwi_walnuts',
            name: t('recipes.protein_porridge_kiwi_walnuts.name'),
            description: t(`recipes.protein_porridge_kiwi_walnuts.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.skyr_natural,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.cinnamon,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.oat_milk,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.flax_seeds,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.oat_flakes,
                    amount: 550,
                },
                {
                    ingredient: ingredientsObject.italian_nuts,
                    amount: 220,
                },
                {
                    ingredient: ingredientsObject.kiwi,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.bitter_chocolate,
                    amount: 120,
                },
            ],
        },
        {
            id: 'scrambled_eggs_salmon_spinach',
            name: t('recipes.scrambled_eggs_salmon_spinach.name'),
            description: t(`recipes.scrambled_eggs_salmon_spinach.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.rye_bread,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.nigella,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.spinach,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.tomato,
                    amount: 2400,
                },
                {
                    ingredient: ingredientsObject.kiwi,
                    amount: 2250,
                },
                {
                    ingredient: ingredientsObject.smoked_salmon,
                    amount: 150,
                },
                {
                    ingredient: ingredientsObject.whole_chicken_eggs,
                    amount: 1680,
                },
            ],
        },
        {
            id: 'vege_burger_kashot_zuccini',
            name: t('recipes.vege_burger_kashot_zuccini.name'),
            description: t(`recipes.vege_burger_kashot_zuccini.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.dill,
                    amount: 160,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.buckwheat_groats,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 100,
                },
                {
                    ingredient: ingredientsObject.zucchini,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.vege_burger,
                    amount: 850,
                },
            ],
        },
        {
            id: 'vegetable_casserole_sweet_potato',
            name: t('recipes.vegetable_casserole_sweet_potato.name'),
            description: t(`recipes.vegetable_casserole_sweet_potato.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.herbes_de_provence,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.cheese_mozzarella_no_fat,
                    amount: 750,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.batatas,
                    amount: 2000,
                },
                {
                    ingredient: ingredientsObject.white_rice,
                    amount: 450,
                },
                {
                    ingredient: ingredientsObject.tomato,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 250,
                },
                {
                    ingredient: ingredientsObject.zucchini,
                    amount: 3000,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
            ],
        },
        {
            id: 'gingerbread_porridge_carrots',
            name: t('recipes.gingerbread_porridge_carrots.name'),
            description: t(`recipes.gingerbread_porridge_carrots.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.oat_milk,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.banana,
                    amount: 600,
                },
                {
                    ingredient: ingredientsObject.oat_flakes,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.tangerines,
                    amount: 1950,
                },
                {
                    ingredient: ingredientsObject.flax_seeds,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.almonds,
                    amount: 150,
                },
                {
                    ingredient: ingredientsObject.carrot,
                    amount: 220,
                },
                {
                    ingredient: ingredientsObject.gingerbread_spice,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.skyr_natural,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.pumpkin_seeds_shelled,
                    amount: 100,
                },
            ],
        },
        {
            id: 'fried_noodles_broccoli_turkey',
            name: t('recipes.fried_noodles_broccoli_turkey.name'),
            description: t(`recipes.fried_noodles_broccoli_turkey.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.broccoli,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.corn_noodles,
                    amount: 800,
                },
                {
                    ingredient: ingredientsObject.minced_turkey_breast,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.oregano_dried,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 250,
                },
                {
                    ingredient: ingredientsObject.dill,
                    amount: 320,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 100,
                },
            ],
        },
        {
            id: 'stewed_chicken_paprika_mushrooms',
            name: t('recipes.stewed_chicken_paprika_mushrooms.name'),
            description: t(`recipes.stewed_chicken_paprika_mushrooms.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.carrot,
                    amount: 450,
                },
                {
                    ingredient: ingredientsObject.herbes_de_provence,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.chicken_breast,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.buckwheat_groats,
                    amount: 910,
                },
                {
                    ingredient: ingredientsObject.red_pepper,
                    amount: 700,
                },
                {
                    ingredient: ingredientsObject.cultivated_mushroom,
                    amount: 2000,
                },

                {
                    ingredient: ingredientsObject.turmeric,
                    amount: 25,
                },

                {
                    ingredient: ingredientsObject.yellow_pepper,
                    amount: 25,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },

                {
                    ingredient: ingredientsObject.pickled_cucumbers,
                    amount: 1200,
                },
            ],
        },
        {
            id: 'orange_spinach_smoothie',
            name: t('recipes.orange_spinach_smoothie.name'),
            description: t(`recipes.orange_spinach_smoothie.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.skyr_natural,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.spinach,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.avocado,
                    amount: 700,
                },
                {
                    ingredient: ingredientsObject.natural_yogurt,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.flax_seeds,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.celery,
                    amount: 230,
                },
                {
                    ingredient: ingredientsObject.orange,
                    amount: 2000,
                },
                {
                    ingredient: ingredientsObject.tangerines,
                    amount: 1300,
                },
                {
                    ingredient: ingredientsObject.banana,
                    amount: 1200,
                },

                {
                    ingredient: ingredientsObject.cinnamon,
                    amount: 25,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 100,
                },
            ],
        },
        {
            id: 'cod_vegetables_buckwheat',
            name: t('recipes.cod_vegetables_buckwheat.name'),
            description: t(`recipes.cod_vegetables_buckwheat.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.pickled_cucumbers,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.cod_fresh,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.buckwheat_groats,
                    amount: 1100,
                },
                {
                    ingredient: ingredientsObject.cultivated_mushroom,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.parsley_leaves,
                    amount: 240,
                },
                {
                    ingredient: ingredientsObject.celery,
                    amount: 900,
                },
                {
                    ingredient: ingredientsObject.thyme,
                    amount: 40,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },
            ],
        },
        {
            id: 'macaroni_salad_tuna_peas',
            name: t('recipes.macaroni_salad_tuna_peas.name'),
            description: t(`recipes.macaroni_salad_tuna_peas.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.green_peas,
                    amount: 800,
                },
                {
                    ingredient: ingredientsObject.black_olives,
                    amount: 300,
                },
                {
                    ingredient: ingredientsObject.oregano_dried,
                    amount: 30,
                },
                {
                    ingredient: ingredientsObject.dried_tomatoes,
                    amount: 140,
                },
                {
                    ingredient: ingredientsObject.tuna_in_own_sauce,
                    amount: 600,
                },
                {
                    ingredient: ingredientsObject.green_cucumber,
                    amount: 900,
                },
                {
                    ingredient: ingredientsObject.red_pepper,
                    amount: 700,
                },
                {
                    ingredient: ingredientsObject.dill,
                    amount: 320,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 40,
                },

                {
                    ingredient: ingredientsObject.corn_noodles,
                    amount: 700,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },
            ],
        },
        {
            id: 'choccolate_omellette_cream_cheese',
            name: t('recipes.choccolate_omellette_cream_cheese.name'),
            description: t(`recipes.choccolate_omellette_cream_cheese.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.buckwheat_flour,
                    amount: 450,
                },
                {
                    ingredient: ingredientsObject.cocoa_powder,
                    amount: 150,
                },
                {
                    ingredient: ingredientsObject.baking_powder,
                    amount: 15,
                },
                {
                    ingredient: ingredientsObject.cinnamon,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.lemon_juice,
                    amount: 120,
                },
                {
                    ingredient: ingredientsObject.whole_chicken_eggs,
                    amount: 1120,
                },
                {
                    ingredient: ingredientsObject.banana,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.skyr_natural,
                    amount: 750,
                },
                {
                    ingredient: ingredientsObject.almonds,
                    amount: 75,
                },

                {
                    ingredient: ingredientsObject.carrot,
                    amount: 450,
                },

                {
                    ingredient: ingredientsObject.kiwi,
                    amount: 1500,
                },
            ],
        },
        {
            id: 'vege_burger_potato_DILL',
            name: t('recipes.vege_burger_potato_DILL.name'),
            description: t(`recipes.vege_burger_potato_DILL.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.sauerkraut,
                    amount: 1100,
                },
                {
                    ingredient: ingredientsObject.vege_burger,
                    amount: 850,
                },
                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.carrot,
                    amount: 450,
                },
                {
                    ingredient: ingredientsObject.dill,
                    amount: 160,
                },
                {
                    ingredient: ingredientsObject.apple,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.potatoes,
                    amount: 3150,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 100,
                },
            ],
        },
        {
            id: 'tuna_spaghetti_tomatoes',
            name: t('recipes.tuna_spaghetti_tomatoes.name'),
            description: t(`recipes.tuna_spaghetti_tomatoes.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.capers,
                    amount: 100,
                },
                {
                    ingredient: ingredientsObject.savory,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.tuna_in_own_sauce,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.lemon_juice,
                    amount: 120,
                },
                {
                    ingredient: ingredientsObject.tomato,
                    amount: 2400,
                },
                {
                    ingredient: ingredientsObject.parsley_leaves,
                    amount: 240,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.zucchini,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.corn_noodles,
                    amount: 850,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 250,
                },
            ],
        },
        {
            id: 'fried_egg_paprika_peas',
            name: t('recipes.fried_egg_paprika_peas.name'),
            description: t(`recipes.fried_egg_paprika_peas.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.turmeric,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.thyme,
                    amount: 40,
                },
                {
                    ingredient: ingredientsObject.carrot,
                    amount: 900,
                },
                {
                    ingredient: ingredientsObject.celery,
                    amount: 900,
                },
                {
                    ingredient: ingredientsObject.zucchini,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 100,
                },
                {
                    ingredient: ingredientsObject.parsley_leaves,
                    amount: 120,
                },
                {
                    ingredient: ingredientsObject.chicken_breast,
                    amount: 1100,
                },
                {
                    ingredient: ingredientsObject.thyme,
                    amount: 40,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 100,
                },
            ],
        },
        {
            id: 'baked_chicken_vegetables_sauerkraut',
            name: t('recipes.baked_chicken_vegetables_sauerkraut.name'),
            description: t(`recipes.baked_chicken_vegetables_sauerkraut.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.pickled_cucumbers,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.apple,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 100,
                },
                {
                    ingredient: ingredientsObject.turmeric,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.zucchini,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.parsley_leaves,
                    amount: 120,
                },
                {
                    ingredient: ingredientsObject.celery,
                    amount: 900,
                },
                {
                    ingredient: ingredientsObject.thyme,
                    amount: 40,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 40,
                },

                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 30,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },
                {
                    ingredient: ingredientsObject.carrot,
                    amount: 450,
                },
                {
                    ingredient: ingredientsObject.white_rice,
                    amount: 600,
                },
            ],
        },
        {
            id: 'persimmon_smoothie',
            name: t('recipes.persimmon_smoothie.name'),
            description: t(`recipes.persimmon_smoothie.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.flax_seeds,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.celery,
                    amount: 230,
                },
                {
                    ingredient: ingredientsObject.tangerines,
                    amount: 650,
                },
                {
                    ingredient: ingredientsObject.natural_yogurt,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.avocado,
                    amount: 700,
                },
                {
                    ingredient: ingredientsObject.cinnamon,
                    amount: 25,
                },
                {
                    ingredient: ingredientsObject.skyr_natural,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.kaki,
                    amount: 2500,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 100,
                },
            ],
        },
        {
            id: 'rye_casseroles_muschrooms_citrus',
            name: t('recipes.rye_casseroles_muschrooms_citrus.name'),
            description: t(`recipes.rye_casseroles_muschrooms_citrus.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.cheese_mozzarella_no_fat,
                    amount: 750,
                },
                {
                    ingredient: ingredientsObject.rye_bread,
                    amount: 1500,
                },
                {
                    ingredient: ingredientsObject.cultivated_mushroom,
                    amount: 1200,
                },
                {
                    ingredient: ingredientsObject.red_pepper,
                    amount: 700,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.parsley_leaves,
                    amount: 120,
                },
                {
                    ingredient: ingredientsObject.tangerines,
                    amount: 1300,
                },

                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 10,
                },
                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },
            ],
        },
        {
            id: 'spaghetti_bolognese_sprouts',
            name: t('recipes.spaghetti_bolognese_sprouts.name'),
            description: t(`recipes.spaghetti_bolognese_sprouts.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.broccoli_sprouts,
                    amount: 160,
                },
                {
                    ingredient: ingredientsObject.black_olives,
                    amount: 300,
                },
                {
                    ingredient: ingredientsObject.herbes_de_provence,
                    amount: 15,
                },
                {
                    ingredient: ingredientsObject.turmeric,
                    amount: 15,
                },
                {
                    ingredient: ingredientsObject.tomato_passata,
                    amount: 2000,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 100,
                },
                {
                    ingredient: ingredientsObject.onion,
                    amount: 500,
                },
                {
                    ingredient: ingredientsObject.chicken_breast,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.oregano_dried,
                    amount: 15,
                },
                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 10,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },
                {
                    ingredient: ingredientsObject.corn_noodles,
                    amount: 800,
                },
            ],
        },
        {
            id: 'spinach_salad_chicken_buckwheat',
            name: t('recipes.spinach_salad_chicken_buckwheat.name'),
            description: t(`recipes.spinach_salad_chicken_buckwheat.description`),
            ingredientsObject: [
                {
                    ingredient: ingredientsObject.cherry_tomatoes,
                    amount: 800,
                },
                {
                    ingredient: ingredientsObject.chicken_breast,
                    amount: 1000,
                },
                {
                    ingredient: ingredientsObject.herbes_de_provence,
                    amount: 15,
                },
                {
                    ingredient: ingredientsObject.beets,
                    amount: 2400,
                },
                {
                    ingredient: ingredientsObject.curry,
                    amount: 20,
                },
                {
                    ingredient: ingredientsObject.apple_cider,
                    amount: 90,
                },
                {
                    ingredient: ingredientsObject.spinach,
                    amount: 750,
                },
                {
                    ingredient: ingredientsObject.mustard,
                    amount: 200,
                },
                {
                    ingredient: ingredientsObject.ground_black_pepper,
                    amount: 20,
                },

                {
                    ingredient: ingredientsObject.himalayan_salt,
                    amount: 10,
                },

                {
                    ingredient: ingredientsObject.olive_oil,
                    amount: 200,
                },
                {
                    ingredient: ingredientsObject.buckwheat_groats,
                    amount: 650,
                },
                {
                    ingredient: ingredientsObject.garlic,
                    amount: 50,
                },
                {
                    ingredient: ingredientsObject.bee_honey,
                    amount: 240,
                },
            ],
        },
    ];
}
