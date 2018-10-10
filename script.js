let words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function show() {
    let keyBord = document.querySelector('.key-board');
    for (let i = 0; i < words.length; i++) {
        keyBord.innerHTML +=
            `<button class="keys" onclick="pressKey('${words[i]}')">${words[i]}</button>`
    }

    document.querySelector('.key-board');
    keyBord.innerHTML += `<button class="space-key" onclick="spaceKey(${words[26]})">SPACE</button>
                          <button class="enter-key" onclick="enterKey()">
                            <i class="fas fa-arrow-circle-right"></i>
                          </button>`
}

function pressKey(alphabet){
    document.querySelector('.card-text').innerHTML += (alphabet);
}

function spaceKey(){
    document.querySelector('.card-text').innerHTML+=  " ";
}

function enterKey(){
    document.querySelector('.card-text').innerHTML= ""
    alert('Your message has been sented');
}

