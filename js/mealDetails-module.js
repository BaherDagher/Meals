export class Details {
    constructor(row) {
        this.row = row;
    }
    async displayDetails(meal) {

        let reciepes = '';
        for (let i = 1; i <= 20; i++) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];
            if ( ingredient && ingredient.trim() && measure && measure.trim()) {
                reciepes += `<span class="badge fw-normal fs-6 m-2 p-2">${measure.trim()} ${ingredient.trim()}</span> `
            }
        }
        let tags = '';
        // if there are tags show .. else hide tags section
        if (meal.strTags)
        {   
             tags += `   <h3 class="fw-bold mb-3">Tags :</h3>
             <span class="badge sec-badge fw-normal fs-6 m-2 p-2">${meal.strTags}</span>`
        }
        else
        {
           tags = '<span class="d-none">""</span>';
        }

        let bBox = `
                <div class="col-md-4 col-9 ms-5 ms-md-0">
                    <div class="left text-center">
                        <img src="${meal.strMealThumb} " class="rounded-3 img-fluid" alt="">
                        <h2 class="text-white fw-medium mt-3">${meal.strMeal}</h1>
                    </div>
                </div>
                <div class="col-md-8 text-white col-9 ms-5 ms-md-0">
                    <h2 class="fw-bold">Instructions</h2>
                    <p>${meal.strInstructions}</p>
                    <h3><span class="fw-bold">Area : </span>${meal.strArea}</h3>
                    <h3><span class="fw-bold">Category : </span>${meal.strCategory}</h3>
                    <h3 class="fw-bold mb-3">Recipes :</h3>
                   ${reciepes}
                  
                    ${tags}
                    <div class="bottom-buttons mt-3">
                      <a href='${meal.strSource}' target="_blank" rel="noopener noreferrer"><span class="badge text-bg-success text-white fw-normal fs-5 m-2 p-2 ">Source</span></a>  
                      <a href='${meal.strYoutube}' target="_blank" rel="noopener noreferrer"><span class="badge text-bg-danger text-white fw-normal fs-5 m-2 p-2  ">Youtube</span></a>  
                    </div>
                </div>
        `;
        this.row.innerHTML = bBox;
    }

}
