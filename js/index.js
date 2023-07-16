// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const pepButtonElement = document.querySelector('.btn-pepperoni')
const mushButtonElement = document.querySelector('.btn-mushrooms')
const greenPepButtonElement = document.querySelector('.btn-green-peppers')
const whButtonElement = document.querySelector('.btn-sauce')
const crustButtonElement = document.querySelector('.btn-crust')


// const buttonSelector = {
//   pepperoni: '.btn-pepperoni',
//   mushrooms: '.btn-mushrooms',
//   greenPeppers: '.btn-green-peppers',
//   whiteSauce: '.btn-sauce',
//   glutenFreeCrust: '.btn-crust'

// }
// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
  
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if(state.mushrooms) {
     mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPeppers) => {
    if(state.greenPeppers) {
      greenPeppers.style.visibility = 'visible';
    } else {
      greenPeppers.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((whiteSauce) => {
    if(state.whiteSauce) {
      whiteSauce.classList.add('sauce-white');
    } else {
      whiteSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((glutenFreeCrust) => {
    if(state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

// for (const key in state) {
//   if (state[key]) {
//     document.querySelector(buttonSelector[key]).classList.add('active');
//   } else {
//     document.querySelector(buttonSelector[key]).classList.remove('active')
//   }
// }

  if (state.pepperoni) {
    pepButtonElement.classList.add('active')
   } else {
    pepButtonElement.classList.remove('active')
   } 
  if (state.mushrooms) {
    mushButtonElement.classList.add('active')
    } else {
    mushButtonElement.classList.remove('active')
    }
  if (state.greenPeppers) {
    greenPepButtonElement.classList.add('active')
     } else {
     greenPepButtonElement.classList.remove('active')
      }
  if (state.whiteSauce) {
    whButtonElement.classList.add('active')
     } else {
    whButtonElement.classList.remove('active')
        }
  if (state.glutenFreeCrust) {
    crustButtonElement.classList.add('active')
      } else {
      crustButtonElement.classList.remove('active')
          }
  }


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
/////I didn't get this part =( PLEASE HELP MEEE )

  const list = document.querySelector('.panel.price ul');
  const priceElement = document.querySelector('.panel.price strong');
  let total = basePrice;
  list.innerHTML = '';
  for (const key in state) {
    if (state[key]) {
      console.log(ingredients[key]);
      const ingredient = ingredients[key];
      const li = document.createElement('li');
      li.textContent = `$${ingredient.price} ${ingredient.name}`;
      list.appendChild(li);
      total += ingredient.price;
    }
  }
  priceElement.textContent = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener ('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener ('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
