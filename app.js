// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "./images/person1.jpeg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "./images/person2.jpeg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "./images/person3.jpeg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "./images/person4.jpeg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

 const prev = document.getElementById("prev");
 const next = document.getElementById("next");
 const suprise = document.getElementById("surprise-me");

 const personName = document.getElementById("name");
 const job = document.getElementById("job");
 const image = document.getElementById("person-img");
 const text = document.getElementById("review-text");

 var currentPosition = 0;

//DOM manipulation for review change
function dataEntry(){
  image.setAttribute("src", reviews[currentPosition].img);
  personName.innerText = reviews[currentPosition].name;
  job.innerText = reviews[currentPosition].job;
  text.innerText = reviews[currentPosition].text;

}
//previous btn click function 
function prevClick(){

  if(currentPosition == 0){
    currentPosition = (reviews.length - 1);
  }
  else{
    currentPosition = currentPosition - 1 ;
  }
  dataEntry();

}

//Next btn click function
function nextClick(){

  if(currentPosition == reviews.length - 1){
    currentPosition = 0 ;
  }
  else{
    currentPosition = currentPosition + 1 ;
  }
  dataEntry();
}

//Suprise me click function (Randomly select a person)
function supriseMe(){
  currentPosition = Math.floor(Math.random()* reviews.length);
  dataEntry();
 
}

prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);
suprise.addEventListener("click", supriseMe);

