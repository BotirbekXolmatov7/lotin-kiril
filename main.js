const latinInput = document.getElementById('latinInput')

const latinToCyrillicMap = {
    "A": "А", "B": "Б", "D": "Д", "E": "Е", "F": "Ф", "G": "Г", "H": "Ҳ", "I": "И", "J": "Ж", 
    "K": "К", "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П", "Q": "Қ", "R": "Р", "S": "С", 
    "T": "Т", "U": "У", "V": "В", "X": "Х", "Y": "Й", "Z": "З", "Sh": "Ш", "Ch": "Ч", "Ya": "Я",
    "Yu": "Ю", "Yo": "Ё", "O'": "Ў", "G'": "Ғ", "a": "а", "b": "б", "d": "д", "e": "е", 
    "f": "ф", "g": "г", "h": "ҳ", "i": "и", "j": "ж", "k": "к", "l": "л", "m": "м", "n": "н", 
    "o": "о", "p": "п", "q": "қ", "r": "р", "s": "с", "t": "т", "u": "у", "v": "в", "x": "х", 
    "y": "й", "z": "з", "sh": "ш", "ch": "ч", "ya": "я", "yu": "ю", "yo": "ё", "o'": "ў", 
    "g'": "ғ"
};

function latinToCyrillic(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let nextChar = text[i + 1] || '';
        if ((char + nextChar) in latinToCyrillicMap) {
            result += latinToCyrillicMap[char + nextChar];
            i++; 
        } else if (char in latinToCyrillicMap) {
            result += latinToCyrillicMap[char];
        } else {
            result += char; 
        }
    }
    return result;
}

latinInput.addEventListener('keyup', () => {
    const latinInput = document.getElementById('latinInput').value;
    const cyrillicOutput = latinToCyrillic(latinInput);
    document.getElementById('cyrillicOutput').value = cyrillicOutput;
});
