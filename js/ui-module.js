
export class UI {
    
    async getMealsByName (mealName){

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    };

    async getMealsByFirstLetter (mealFirstLetter){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealFirstLetter}`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    };

    async showMealsCategories (){
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    }; 

    async showMealsArea (){
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    }; 

    async showMealsIngredients (){
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    };

    async getMealDetails (mealID){
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    }; 

    async filterMealsByCategories (mealsCategoury){
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealsCategoury}`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    }; 

    async filterMealsByArea (mealsArea){
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealsArea}`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    };

    async filterMealsByIngredient (MealsIngredient){
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${MealsIngredient}`;
        const api =await fetch(url);
        const response =await api.json();
        return response;
    };
}

