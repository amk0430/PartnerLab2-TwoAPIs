let searchWord = "";
let ingrData = "";
let ingrd = "";

//Recipe search
function findRecipe()
{
	let data = null;
	let request = new XMLHttpRequest();
	searchWord = document.querySelector("#recipeBox").value;

	console.log("Search word: " + searchWord);
	request.open("GET",  "https://recipe-puppy.p.rapidapi.com/?q=" + searchWord, true);
	request.setRequestHeader("x-rapidapi-host", "recipe-puppy.p.rapidapi.com");
	request.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");
//Pass in the recipe name using q=recipename to get all the ingredients,
	request.onload = function() {
		data = JSON.parse(this.response);
		if (request.status == 200)
		{
			results = data.results;
		//	console.log(results);
			console.log(this.responseText);
			for (let i = 0; i < results.length; i++)
			{

				console.log(results[i].ingredients);
				ingrd = results[i].ingredients;
				let recipe = document.createElement("button");
				recipe.setAttribute('onclick', 'radioChoice();');
				let recipeText = document.createTextNode(results[i].title);
				recipe.appendChild(recipeText);
				document.querySelector("#recipeList").appendChild(recipe);
			}
		}
		else
		{
		 	console.log("ERROR");
		}
	}
	request.send();
}

//Radio Buttons for yes/no option
function radioChoice()
{
	document.querySelector("#checkButtons").style.display = "block";
	console.log("Got to radioCHoice function");
	let yes = document.querySelector("#yes").checked;
		if (yes)
		{
			document.querySelector("#dropdownBox").style.display = "block";
			getDropdown();
		}
}

//Function for selecting a food in dropdown
function getDropdown()
{
	// let keyword = document.querySelector("#recipeList").value;
	let ingrd1 = ingrd[0].value;
	let request = new XMLHttpRequest();
	request.open("GET", "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + ingrd1, true);
	request.setRequestHeader("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
	request.setRequestHeader("x-rapidapi-key", "636f281abemshf2f10570570279dp10170ajsn3c5b24fe3431");
	request.onload = function() {
	ingrData = JSON.parse(this.response);
	if (request.status == 200)
	{
		console.log(this.responseText);
		for (let i = 0; i < ingrData.length; i++)
		{
			//Nutritional
			console.log(ingrData[i].shrt_desc);
    	let food = document.createElement("option");
  		let foodText = document.createTextNode(ingrData[i].shrt_desc);
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
}

//Function for selecting a food in dropdown
function itemSelected()
{
	//Table
  let selectedIndex = document.querySelector("#foodList").selectedIndex;
  let foodName = ingrData[selectedIndex].shrt_desc;
  let calories = ingrData[selectedIndex].energ_kcal;
  let carbs = ingrData[selectedIndex].carbohydrt;
  let sugar = ingrData[selectedIndex].sugar_tot;

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
