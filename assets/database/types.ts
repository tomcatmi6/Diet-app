export interface Ingredient {
    id: string;
    name: string;
    description: string;
    weightPerItem: number;
    unit: string;
}

export interface IngredientAmount {
    ingredient: Ingredient;
    amount: number;
}

export interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: Ingredient[];
}

export const ingredients: Ingredient[] = [
    {
        id:'pear',
        name: 'Gruszka',
        description: '',
        weightPerItem: 130,
        unit: 'g'
    },
    {
        id:'egg',
        name: 'Jajko',
        description: '',
        weightPerItem: 130,
        unit: 'g'
    },
    {
        id:'pear',
        name: 'Pear',
        description: '',
        weightPerItem: 130,
        unit: 'g'
    },
    {
        id:'pear',
        name: 'Pear',
        description: '',
        weightPerItem: 130,
        unit: 'g'
    },

];