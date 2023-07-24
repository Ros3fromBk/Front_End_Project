console.log ("Welcome, thank you for considering Class & Speed LR!")

fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
.then( (response)=> response.json() )
.then( (JSONresponse)=>{ 
    console.log(JSONresponse)
    const catalogsContainer= document.querySelector(".cars_catalogs")
    let catalog1= document.querySelector("#log1") 
    let catalogbrand= JSONresponse[0].nome
    catalog1.src= catalogbrand
    catalog1.alt= catalogbrand

    

})
// let instructorImg= true 
// const imageForInstructor=document.querySelector("#instructor-image")
//     imageForInstructor.addEventListener("click", () => {
//         instructorImg= !instructorImg
//         console.log("stateofinstrImg:", stateOfInstructor)

//         // if (instructorImg === true) {

//         //     imageForInstructor.innerText = "Mr. Sand"
//         //     imageForInstructor.src ="https://inpraiseofargument.squarespace.com/storage/Sandman_Large.jpg"
               
//         //     } else {
//         //     imageForInstructor.innerText = "Mr. Bubbles"
//         //     imageForInstructor.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopUM60qy5F50uD6OaCsvgPgLhZIU-XC6sRQ&usqp=CAU"
         
//         //     }
//         instructorImg ? 
//         (
//         h2ForInstructorName.innerText= "Mr. Sand", 
//         imageForInstructor.src ="https://inpraiseofargument.squarespace.com/storage/Sandman_Large.jpg"
//         )
//         :
//         (
//         h2ForInstructorName.innerText= "Mr. Bubbles", 
//         imageForInstructor.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopUM60qy5F50uD6OaCsvgPgLhZIU-XC6sRQ&usqp=CAU"
//         ) 
//     })
