let outputDisplay = document.getElementById("inputText")

function displayItem(item){
    outputDisplay.value += item
}

function calculate(){
    try{
        if(outputDisplay.value === ""){
            
            alert("Give Input First") 
        }
        else{
            outputDisplay.value = eval(outputDisplay.value)
        }
        
    }
    catch(err){
        alert("Invalid Input")
    }
}

function clearDisplay(){
    outputDisplay.value = ""
}

function del(){
    outputDisplay.value = outputDisplay.value.slice(0, -1)

}