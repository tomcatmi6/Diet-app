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
    id: string;
    name: string;
    description: string;
    ingredients: IngredientAmount[];
}

const weightArray = [
    {weight: 2100, pieces: 1.5},
    {weight: 3600, pieces: 3},
    {weight: 2000, pieces: 1},
    {weight: 5000, pieces: 1},
    {weight: 2400, pieces: 2},
    {weight: 4500, pieces: 4.5},
    {weight: 7500, pieces: 2.5},
    {weight: 600, pieces: 12},
    {weight: 2000, pieces: 12.5},
    {weight: 3000, pieces: 2},
    {weight: 2500, pieces: 1},
    {weight: 100, pieces: 1},
    {weight: 1100, pieces: 1},
    {weight: 160, pieces: 2},
    {weight: 5250, pieces: 7},
    {weight: 1200, pieces: 15},
    {weight: 5200, pieces: 8},
    {weight: 2920, pieces: 6.5},
    {weight: 900, pieces: 0.5},
    {weight: 2400, pieces: 4},
    {weight: 600, pieces: 4},
    {weight: 2100, pieces: 1.5},
    {weight: 1400, pieces: 1},
    {weight: 5000, pieces: 25},
    {weight: 720, pieces: 12},
    {weight: 4000, pieces: 2},
    {weight: 7200, pieces: 6},
    {weight: 800, pieces: 4},
    {weight: 2260, pieces: 5},
    {weight: 350, pieces: 5},
    {weight: 2000, pieces: 8},
    {weight: 3150, pieces: 4.5},
    {weight: 20, pieces: 2},
    {weight: 100, pieces: 2},
    {weight: 25, pieces: 0.5},
    {weight: 20, pieces: 0.5},
    {weight: 65, pieces: 1.3},
    {weight: 75, pieces: 2.5},
    {weight: 380, pieces: 38},
    {weight: 0, pieces: 1},
    {weight: 220, pieces: 22},
    {weight: 100, pieces: 2.5},
    {weight: 150, pieces: 5},
    {weight: 120, pieces: 2},
    {weight: 240, pieces: 1},
    {weight: 200, pieces: 2},
    {weight: 90, pieces: 3},
    {weight: 2000, pieces: 2},
    {weight: 15, pieces: 0.5},
    {weight: 1700, pieces: 2},
    {weight: 500, pieces: 1},
    {weight: 4480, pieces: 8},
    {weight: 5000, pieces: 25},
    {weight: 1000, pieces: 2},
    {weight: 1500, pieces: 10},
    {weight: 6750, pieces: 4.5},
    {weight: 3660, pieces: 28.2},
    {weight: 3950, pieces: 4.9},
    {weight: 450, pieces: 3},
    {weight: 1050, pieces: 10.5},
    {weight: 1050, pieces: 7},
    {weight: 300, pieces: 3},
    {weight: 150, pieces: 1.5},
    {weight: 125, pieces: 2.5},
    {weight: 225, pieces: 1.5},
    {weight: 220, pieces: 1.5},
    {weight: 1000, pieces: 1},
    {weight: 1800, pieces: 6},
    {weight: 750, pieces: 2.5},
    {weight: 5000, pieces: 2},
    {weight: 300, pieces: 5},
    {weight: 3100, pieces: 3.1},
    {weight: 2000, pieces: 2},
    {weight: 5100, pieces: 17},
    {weight: 2750, pieces: 27.5},
];
