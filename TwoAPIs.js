//
// let data = null;
// let keyword = "apple";
// let request = new XMLHttpRequest();
//
// //Recipe API
// request.open("GET",  "https://recipe-puppy.p.rapidapi.com/?p=1&i=onions%2Cgarlic&q=omelet" + keyword, true);
// request.setRequestHeader("x-rapidapi-host", "recipe-puppy.p.rapidapi.com");
// request.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");
//
// //Nutritional API
// // Change keyword to variable and get from function of submit button
// request.open("GET", "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + keyword, true);
// request.setRequestHeader("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
// request.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");
//
// request.onload = function() {
// 	data = JSON.parse(this.response);
// 	if (request.status == 200)
// 	{
// 		console.log(this.responseText);
//
// 		for (let i = 0; i < data.length; i++)
// 		{
// 			//Nutritional
// 			console.log(data[i].shrt_desc);
//       let food = document.createElement("option");
//       let foodText = document.createTextNode(data[i].shrt_desc);
//       food.appendChild(foodText);
//       document.querySelector("#foodList").appendChild(food);
// 		}
// 	}
// 	else
// 	{
// 	 	console.log("ERROR");
// 	}
// }
// request.send();

function findRecipe()
{
	let data = null;
	let keyword = "apple";
	let request = new XMLHttpRequest();

	request.open("GET",  "https://recipe-puppy.p.rapidapi.com/?p=1&i=" + keyword, true);
	request.setRequestHeader("x-rapidapi-host", "recipe-puppy.p.rapidapi.com");
	request.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");

	//console.log(data);
	request.onload = function() {

		//console.log(data);
		data = JSON.parse(this.response);

		// if (request.status == 200)
		// {
		// 	data.forEach(results=>{console.log(results.ingredients);})
		// }
		if (request.status == 200)
		{
			results = data.results;
			console.log(results);
			console.log(this.responseText);
			for (let i = 0; i < results.length; i++)
			{
				//Recipe
				console.log(results[i].ingredients);
				let recipe = document.createElement("form");
				let recipeText = document.createTextNode(results[i].title);
				recipe.appendChild(recipeText);
				document.querySelector("#radio").appendChild(recipe);
			}
		}
		else
		{
		 	console.log("ERROR");
		}
	}
	request.send();
}

//Function for selecting a food in dropdown
function itemSelected()
{
	let data = null;
	let keyword = "apple";
	let request = new XMLHttpRequest();

	//Accessing API
	request.open("GET", "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + keyword, true);
	request.setRequestHeader("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
	request.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");
	request.onload = function() {
		data = JSON.parse(this.response);
		if (request.status == 200)
		{
			console.log(this.responseText);

			for (let i = 0; i < data.length; i++)
			{
				//Nutritional
				console.log(data[i].shrt_desc);
	      let food = document.createElement("option");
	      let foodText = document.createTextNode(data[i].shrt_desc);
	      food.appendChild(foodText);
	      document.querySelector("#foodList").appendChild(food);
			}
		}
		else
		{
		 	console.log("ERROR");
		}
	}
	request.send();

	//Table
  let selectedIndex = document.querySelector("#foodList").selectedIndex;
  let foodName = data[selectedIndex].shrt_desc;
  let calories = data[selectedIndex].energ_kcal;
  let carbs = data[selectedIndex].carbohydrt;
  let sugar = data[selectedIndex].sugar_tot;

  //document.querySelector("#toClear").innerHTML = "";

  var newFoodHead = document.createElement("td");
  var foodHeadText = document.createTextNode("Food Name");
  newFoodHead.appendChild(foodHeadText);
  document.querySelector("#foodHead").appendChild(newFoodHead);

  var newFoodBody = document.createElement("td");
  var foodText = document.createTextNode(foodName);
  newFoodBody.appendChild(foodText);
  document.querySelector("#foodbody").appendChild(newFoodBody);

  var newCalBody = document.createElement("td");
  var calText = document.createTextNode(calories);
  newCalBody.appendChild(calText);
  document.querySelector("#foodbody").appendChild(newCalBody);

  var newCarbsBody = document.createElement("td");
  var carbsText = document.createTextNode(carbs);
  newCarbsBody.appendChild(carbsText);
  document.querySelector("#foodbody").appendChild(newCarbsBody);

  var newSugarBody = document.createElement("td");
  var sugarText = document.createTextNode(sugar);
  newSugarBody.appendChild(sugarText);
  document.querySelector("#foodbody").appendChild(newSugarBody);

  document.querySelector("#foodTable").style.display = "block";
}
