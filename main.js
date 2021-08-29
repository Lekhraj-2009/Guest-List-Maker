var names_of_people = [];


function submit(){
	var GuestName = document.getElementById("input_name").value;
	console.log(GuestName);
	names_of_people.push(GuestName);
	console.log(names_of_people);
	document.getElementById("display_name").innerHTML = names_of_people; 
	var length_of_name = names_of_people.length;
	console.log(length_of_name);
}

function show(){
	var i = names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("Show_Guests").innerHTML = i.toString();
	document.getElementById("sort_button").style.display="block";
}

function sorting(){
	names_of_people.sort();
	var i = names_of_people.join("<br>");
	console.log(names_of_people);		
	document.getElementById("names_sort").innerHTML = i.toString();
}

function search(){
	var s = document.getElementById("input_search").value;
	var found = 0;
	var j;
	for(j=0; j<names_of_people.length; j++){
		    if(s==names_of_people[j]){
		    found=found+1;
		}	
	}
	document.getElementById("name_found").innerHTML="Name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
