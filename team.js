const textDisplay = document.getElementById('text')
const phrases = ['..MEET the TEAM!', 'Second Blog', 'Blog # 3', 'Blog # 4 Now lets see how Routing works in express with Node.js!...']
let i = 0
let j = 0
let currentPhrase = []

function loop() {
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {

        if (j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
        }
        if (j == phrases[i].length) {
            i++
        }
    }
    setTimeout(loop, 250)
}
loop()