// Funkcja sprawdza siłę wpisanego hasła; sprawdza ona czy w haśle znajdują się konkretne znaki, a następnie zwraca wynik ogólny wraz z pomniejszymi.
export function PasswordStrength(password) {
    const RegExUpperCase = /[A-Z]+/;
    const RegExLowerCase = /[a-z]+/;
    const RegExNumbers = /[0-9]+/;
    const RegExSpecialCharacters = /[^A-Za-z0-9]+/;
    const RequirementGoodLength = 7;

    var Grade = 0
    var BigChar,LowChar,Numbers,SpecialChar = 0
    if (password.length > RequirementGoodLength) Grade += 1;
    if (password.match(RegExUpperCase)){Grade += 1; BigChar = 1}
    if (password.match(RegExLowerCase)){Grade += 1; LowChar = 1}
    if (password.match(RegExNumbers)){Grade += 1; Numbers = 1}
    if (password.match(RegExSpecialCharacters)){Grade += 1; SpecialChar = 1}

    return [
      Grade,
      BigChar,
      LowChar,
      Numbers,
      SpecialChar
    ]
  }

  // Funkcja konwertuje liczby w zależności od argumentu "action", a następnie zwraca w postaci komunikatu wynik.
  export function DecAndHexConversion(action, argument) {
    switch(action) {
      case 'DecToHex':
        if (isNaN(argument))
          alert("To nie jest liczba całkowita!")
        else
          var output = parseInt(argument).toString(16)
          // Dodaj zera na początek liczby szesnastkowej dopóki długość ciągu znaków nie wyniesie 6.
          while (output.length < 6)
            output = "0"+output
          alert(`Wynik: ${output}`)
        break;
      case 'HexToDec':
        const RegExHexadecimal = /[0-9A-Fa-f]{6}/g;
        // Dodaj zera na początek liczby szesnastkowej dopóki długość ciągu znaków nie wyniesie 6.
        while (argument.length < 6)
          argument = "0"+argument
        if (!argument.match(RegExHexadecimal))
          alert("To nie jest liczba zapisana w systemie szesnastkowym!")
        else
          alert(`Wynik: ${parseInt(argument, 16)}`)
         break;
      default:
        alert("Ups, coś poszło nie tak.")
    }
  }