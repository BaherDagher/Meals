import { Navbar } from "./navbar-module.js";
import { UI } from "./ui-module.js"
import { Display } from "./meals-module.js"
import { Details } from "./mealDetails-module.js"
import { Contact } from "./contact-module.js"

const mealsRow = document.querySelector(".meals-row");
const searchedMealsRow = document.querySelector(".searchedMeals-row");
const categoryMealsRow = document.querySelector(".categoryMeals-row");
const areaMealsRow = document.querySelector(".areaMeals-row");
const ingredientsMealsRow = document.querySelector(".ingredientsMeals-row");
const detailsMealsRow = document.querySelector(".meal-detailsRow");
const selectedCategouryMealsRow = document.querySelector(".selected-categouryMealsRow");
const selectedareaMealsRow = document.querySelector(".selected-areaMealsRow");
const selectedingredientMealsRow = document.querySelector(".selected-ingredientMealsRow");

// Starting of Navbar
const navbar = new Navbar;
navbar.animation();
// Ending of Navbar


// Starting of Showing Website Entry Meals
const ui = new UI;
async function displayEntryMeals(meal, row, method) {

    // To Show Loader
    $("#gamesLoader").fadeIn(100);
    $("body").addClass("overflow-hidden");

    let display = new Display(row);
    if (method == "byName") {
        const entryMealsObject = await ui.getMealsByName(meal);
        const entryMealsArray = entryMealsObject.meals;
        display.displayMeals(entryMealsArray);
    }

    else if (method == "byLetter") {
        const entryMealsObject = await ui.getMealsByFirstLetter(meal);
        const entryMealsArray = entryMealsObject.meals;
        display.displayMeals(entryMealsArray);
    }

    else if (method == "byCategory") {
        const entryMealsObject = await ui.showMealsCategories();
        const entryMealsArray = entryMealsObject.categories;
        console.log(entryMealsArray);
        display.displayCategouries(entryMealsArray);
    }

    else if (method == "byArea") {
        const entryMealsObject = await ui.showMealsArea();
        const entryMealsArray = entryMealsObject.meals;
        display.displayArea(entryMealsArray);
    }
    else if (method == "byIngredients") {
        const entryMealsObject = await ui.showMealsIngredients();
        const entryMealsArray = entryMealsObject.meals;
        display.displayIngredients(entryMealsArray);
    }
    else if (method == "bySelectedCategoury") {
        const entryMealsObject = await ui.filterMealsByCategories(meal);
        const entryMealsArray = entryMealsObject.meals;
        display.displayMeals(entryMealsArray);
    }
    else if (method == "bySelectedArea") {
        const entryMealsObject = await ui.filterMealsByArea(meal);
        const entryMealsArray = entryMealsObject.meals;
        display.displayMeals(entryMealsArray);
    }
    else if (method == "bySelectedIngredient") {
        const entryMealsObject = await ui.filterMealsByIngredient(meal);

        const entryMealsArray = entryMealsObject.meals;
        display.displayMeals(entryMealsArray);
    }
    // hide loader when ready
    $(document).ready(function () {
        $("#gamesLoader").fadeOut(1000, function () {
            $("body").removeClass("overflow-hidden");
        });
    });

}
// At refresh show meals of empty Search
displayEntryMeals("", mealsRow, "byName");
// Ending of Showing Website Entry Meals

// ========================================================================================

// Starting of search meals 
$("#Search").on("click", function () {
    $(".first-section ,.search, .categories , .area , .ingredients , .contact-us,.selected-ingredientMeals,.selected-areaMeals,.selected-categouryMeals,.meal-details"
    ).addClass("d-none");
    $(".search").removeClass("d-none");
})

//Starting of Search by name
$("#nameInput").on("input", function () {
    displayEntryMeals(this.value, searchedMealsRow, "byName");
})
//Ending of Search by name

// Starting of Search by first Letter
$("#letterInput").on("input", function () {
    displayEntryMeals(this.value, searchedMealsRow, "byLetter");
})
// Ending of Search by first Letter

// Ending of search meals 

// ========================================================================================

// Starting Category
$("#Categories").on("click", function () {
    $(".first-section , .categories,.search , .area , .ingredients , .contact-us,.selected-ingredientMeals,.selected-areaMeals,.selected-categouryMeals,.meal-details"
    ).addClass("d-none");
    $(".categories").removeClass("d-none");
    displayEntryMeals("", categoryMealsRow, "byCategory");
})

// Ending Category

// ===========================================================================================

// Starting Area
$("#Area").on("click", function () {
    $(".first-section , .area,.search , .categories , .ingredients , .contact-us,.selected-ingredientMeals,.selected-areaMeals,.selected-categouryMeals,.meal-details"
    ).addClass("d-none");
    $(".area").removeClass("d-none");
    displayEntryMeals("", areaMealsRow, "byArea");
})

// Ending Area

// ===========================================================================================

// Starting Ingredients
$("#Ingredients").on("click", function () {
    $(".first-section , .search , .categories , .area , .contact-us,.selected-ingredientMeals,.selected-areaMeals,.selected-categouryMeals,.meal-details,.ingredients"
    ).addClass("d-none");
    $(".ingredients").removeClass("d-none");
    displayEntryMeals("", ingredientsMealsRow, "byIngredients");
})

// Ending Area

// ===========================================================================================

// Starting of Show Meals Details
$(document).on("click", ".item", function () {
    // To Show Loader
    $("#gamesLoader").fadeIn(100);
    $("body").addClass("overflow-hidden");

    $(".first-section , .search , .categories ,.area ,.ingredients , .contact-us,.selected-categouryMeals ,.selected-areaMeals , .selected-ingredientMeals,.meal-details").addClass("d-none");
    $(".meal-details").removeClass("d-none");
    const mealID = $(this).attr('meal-id');
    displayDetails(mealID);

    async function displayDetails(mealID) {
        const entryMealsObject = await ui.getMealDetails(mealID);
        const entryMealsArray = entryMealsObject.meals[0];
        let details = new Details(detailsMealsRow);
        details.displayDetails(entryMealsArray);
    }
    // hide loader when ready
    $(document).ready(function () {
        $("#gamesLoader").fadeOut(1000, function () {
            $("body").removeClass("overflow-hidden");
        });
    });
});
// Ending of Show Meals Details

// ==============================================================================================

// Starting of Display Selected Categoury Meals

$(document).on("click", ".categoury-item", function () {
    $(".first-section, .search, .categories, .area, .ingredients, .contact-us,.selected-ingredientMeals,.selected-areaMeals,.meal-details,.selected-categouryMeals"
    ).addClass("d-none");
    $(".selected-categouryMeals").removeClass("d-none");
    // Get Selected Category
    const selectedCategoury = $(this).data("selectedcategoury");

    displayEntryMeals(selectedCategoury, selectedCategouryMealsRow, "bySelectedCategoury")
})

// Ending of Display Selected Categoury Meals

// ====================================================================================================

// ==============================================================================================

// Starting of Display Selected Area Meals

$(document).on("click", ".area-item", function () {
    $(".first-section, .search, .categories,.area,  .ingredients, .contact-us, .selected-categouryMeals,.meal-details,.selected-ingredientMeals,.selected-areaMeals").addClass("d-none");
    $(".selected-areaMeals").removeClass("d-none");
    // Get Selected Category
    const selectedArea = $(this).data("selectedarea");

    displayEntryMeals(selectedArea, selectedareaMealsRow, "bySelectedArea");
})

// Ending of Display Selected Area Meals

// ====================================================================================================

// ==============================================================================================

// Starting of Display Selected Ingredient Meals

$(document).on("click", ".ingredient-item ", function () {
    $(".first-section, .search, .categories,.area,  .ingredients, .contact-us, .selected-categouryMeals , .selected-areaMeals,.meal-details,.selected-ingredientMeals").addClass("d-none");
    $(".selected-ingredientMeals").removeClass("d-none");
    // Get Selected Category
    const selectedIngredient = $(this).data("selectedingredient");
    displayEntryMeals(selectedIngredient, selectedingredientMealsRow, "bySelectedIngredient");
})

// Ending of Display Selected Area Meals

// ====================================================================================================

// ==============================================================================================


// Starting Contact
$("#ContactUs").on("click", function () {
    $(".first-section , .search , .categories , .ingredients , .area,.selected-ingredientMeals,.selected-areaMeals,.selected-categouryMeals,.meal-details").addClass("d-none");
    $(".contact-us").removeClass("d-none");

})
const contact = new Contact();
contact.contactUs();
// Ending Contact

// ====================================================================================================
