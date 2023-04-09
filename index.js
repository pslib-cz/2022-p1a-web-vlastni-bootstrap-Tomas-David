const makeComment = () => {
    let com = document.getElementById("com").value 
    console.log(com)
    const newParagraph = document.createElement("p")
    newParagraph.textContent = `Anonym: ${com}`
    document.getElementById("comments").appendChild(newParagraph)



}

let input = document.getElementById("com")

if(input){
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          event.preventDefault()
          document.getElementById("comBtn").click()
        }
      })
}



