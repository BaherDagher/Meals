export class Display {
    constructor(row) {
        this.row = row;
    }
    displayMeals(meals) {
        var maxCounter;
        if (meals.length > 20) { maxCounter = 20; }
        else {
            maxCounter = meals.length;
        }
        let bBox = ``;
        for (let i = 0; i < maxCounter; i++) {
            bBox += `
                 <div class="col-md-3 col-9 ms-5 ms-md-0">
                    <div class="item position-relative overflow-hidden btn p-0 " meal-id="${meals[i].idMeal}" >
                        <img src="${meals[i].strMealThumb}" class="img-fluid rounded-3 " alt="">
                        <div class="item-fade position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center flex-column text-center rounded-3">
                            <h3>${meals[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
            `;
        }
        this.row.innerHTML = bBox;

    }
    displayCategouries(categories) {
        var maxCounter;
        if (categories.length > 20) { maxCounter = 20; }
        else {
            maxCounter = categories.length;
        }
        let bBox = ``;
        for (let i = 0; i < maxCounter; i++) {
            bBox += `
                 <div class="col-md-3 col-9 ms-5 ms-md-0">
<div class="categoury-item position-relative overflow-hidden btn p-0" data-selectedCategoury="${categories[i].strCategory}">                        <img src="${categories[i].strCategoryThumb}" class="img-fluid rounded-3 " alt="">
                        <div class="item-fade position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center flex-column text-center rounded-3">
                            <h3>${categories[i].strCategory}</h3>
                            <p class="max-four-lines fs-6 fw-semibold">${categories[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            `
        }
        this.row.innerHTML = bBox;

    }
    displayArea(areas) {
        var maxCounter;
        if (areas.length > 20) { maxCounter = 20; }
        else {
            maxCounter = areas.length;
        }
        let bBox = ``;
        for (let i = 0; i < maxCounter; i++) {
            bBox += `
                 <div class="col-md-3 col-9 ms-5 ms-md-0">
                    <div class="area-item position-relative overflow-hidden btn p-0" data-selectedArea="${areas[i].strArea}">
                        <img src="images/area.png" class="img-fluid rounded-3 area-img  text-white" alt="">
                            <h3 class="text-white">${areas[i].strArea}</h3>
                        </div>
                </div>
            `
        }
        this.row.innerHTML = bBox;

    }
    displayIngredients(ingredients) {
        var maxCounter;
        if (ingredients.length > 20) { maxCounter = 20; }
        else {
            maxCounter = ingredients.length;
        }
        let bBox = ``;
        for (let i = 0; i < maxCounter; i++) {
            bBox += `
                 <div class="col-md-3 col-9 ms-5 ms-md-0">
                    <div class="ingredient-item position-relative overflow-hidden btn p-0" data-selectedIngredient="${ingredients[i].strIngredient}"">
                        <img src="images/ingredients.png" class="img-fluid rounded-3 ingredients-img  mb-2" alt="">
                            <h3 class="text-white">${ingredients[i].strIngredient}</h3>
                             <p class="max-four-lines fs-6 fw-semibold text-white">${ingredients[i].strDescription}</p>
                        </div>
                </div>
            `
        }
        this.row.innerHTML = bBox;

    }
}
