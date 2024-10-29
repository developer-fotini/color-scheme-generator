const colorContainer = document.getElementById("color-container")
const getSchemeBtn = document.getElementById("get-scheme-btn")

getSchemeBtn.addEventListener("click", function(e){
    e.preventDefault()
    fetchScheme()
})

function fetchScheme() {
    const seedColor = document.getElementById("seed-color").value.substring(1)
    const schemeMode = document.getElementById("choose-mode").value

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