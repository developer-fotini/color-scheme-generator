let seedColor = document.getElementById("seed-color")
let schemeMode = document.getElementById("choose-mode")
const colorContainer = document.getElementById("color-container")
const getSchemeBtn = document.getElementById("get-scheme-btn")

seedColor.addEventListener("change", function(e){
    seedColor = e.target.value.substring(1)
   })
   
schemeMode.addEventListener("change", function(e){
 schemeMode = e.target.value

})
   
getSchemeBtn.addEventListener("click", function(e){
    e.preventDefault()
    fetchScheme()
})


function fetchScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=5`)
    .then(response => response.json())
    .then(data => {
        const arr = data.colors
        let html = ""
        for (color of arr){
            let hexValue = color.hex.value
            html += `<div>
                    <div class="color-column" style="background-color:${hexValue}" id="color-1">
                    </div>
                    <p class="hex">${hexValue}</p>
                </div>`
                colorContainer.innerHTML = html
        }
        
    }
    )
} 