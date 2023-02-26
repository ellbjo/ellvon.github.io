let keyWord = "";
let codeWord = "1337";
let colorChanged = true;


//Press picture of Lily (dog) to trigger
function changeColor() {
  if(colorChanged){
    document.body.style.background = "red";
    colorChanged = false;
  }else{
    document.body.style.background = "white";
    colorChanged = true;
  }
}

//Type 1337 to trigger alert modal
document.addEventListener('keyup', (event) => {
  var value = event.key;
  if (codeWord.includes(value)) {
    keyWord = keyWord + value;
    if(codeWord.includes(keyWord)){
      if(keyWord == codeWord){
        alert("Wohoo!! This is a easteregg and you found it! The keyword was: " + codeWord);
      }
    }else{
      keyWord = "";
    }
    
  }else{
    keyWord = "";
  }
}, false);


function addCourses(){
  
  fetch('../../data.json')
    .then((response) => response.json())
    .then((json) => {
      json.courses?.forEach(course => {
        console.log(course);
        const element = document.getElementById("jsonCourses");
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-md-4");

        const img = document.createElement("img");
        img.setAttribute("src", course.img);
        card.append(img);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const h5School = document.createElement("h5");
        h5School.innerHTML = course.school;
        cardBody.append(h5School);
        const h5Name = document.createElement("h5");
        h5Name.innerHTML = course.name;
        cardBody.append(h5Name);
        card.append(cardBody);
        element.append(card);
      });
      json.jobs?.forEach(job => {
        console.log(job);
        const element = document.getElementById("jsonJobs");
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-md-4");

        const img = document.createElement("img");
        img.setAttribute("src", job.img);
        card.append(img);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const h5JobTitle = document.createElement("h5");
        h5JobTitle.innerHTML = job.jobTitle;
        cardBody.append(h5JobTitle);
        const h5Employer = document.createElement("h5");
        h5Employer.innerHTML = job.employer;
        cardBody.append(h5Employer);
        card.append(cardBody);
        element.append(card);
      });
    });
}

addCourses();