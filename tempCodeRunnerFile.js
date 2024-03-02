function replaceCharacter(string, index, replacement) {
    return (
      string.slice(0, index) +
      replacement +
      string.slice(index + replacement.length)
    );
  }

function cypherEncryptor(shift, str) {
    if (!shift || !str || (shift<0 || shift > 25)) return console.log("Invalid Input") ;
    for (let i = 0; i < str.length; i++){
        const char = str[i];
        // const shiftedChar = alphabets[alphabets.indexOf(char) + shift];
        // const indexForCharShift = alphabets.indexOf(char) + shift;
        // const shiftedChar = alphabets[indexForCharShift];
        // str = replaceCharacter(str, i, shiftedChar);
        const indexForCharShift = (alphabets.indexOf(char) - alphabets.length) + shift;
        const shiftedChar = alphabets.at(indexForCharShift);
        str = replaceCharacter(str, i, shiftedChar);

    }
    console.log(str);
    return str;
}

cypherEncryptor(25, 'a');
