export declare const MealTypes: {
    readonly Breakfast: "Breakfast";
    readonly LunchDinner: "Lunch/Dinner";
    readonly Dessert: "Dessert";
};
export type MealType = typeof MealTypes[keyof typeof MealTypes];
export interface Recipe {
    id: number;
    title: string;
    ingredients: string;
    instructions: string;
    mealType: MealType;
    region: string;
    userId: number;
    image?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
