class Person {
  constructor(name, nickname, age) {
    const err = new Error("Invalid Object creation!");

    function isValidString(str) {
      function isValidCharacter(char) {
        const ascii = char.charCodeAt(0);
        //lowercases in english
        if (ascii >= 97 && ascii <= 122) return true;
        //uppercases in english
        if (ascii >= 65 && ascii <= 90) return true;
        // lowercase vowels with accent
        if (char === "á" || char === "é" || char === "í" || char === "ó" || char === "ú")
          return true;
        // uppercase vowels with accent
        if (char === "Á" || char === "É" || char === "Í" || char === "Ó" || char === "Ú")
          return true;
        // ñ and Ñ
        if (char === "ñ" || char === "Ñ") return true;

        return false;
      }
      for (let i = 0; i < str.length; i++) {
        if (!isValidCharacter()) {
          return false;
        }
      }
      return true;
    }
    function isValidName() {
      if (name == null) return false;
      if (typeof name !== "string") return false;
      if (name.length < 2 || name.length > 64) return false;
      if (!isValidString(name)) return false;
      return true;
    }
    function isValidNickame() {
      if (nickname == null) return false;
      if (typeof nickname !== "string") return false;
      if (nickname.length < 2 || nickname.length > 128) return false;
      if (!isValidString(nickname)) return false;
      return true;
    }
    function isValidAge() {
      if (age == null) return false;
      if (typeof age !== "number") return false;
      if (isNaN(age)) return false;
      if (age < 18 || age > 120) return false;
      return true;
    }

    if (isValidName() && isValidNickame() && isValidAge()) {
      this.name = name;
      this.nickname = nickname;
      this.age = age;
    } else {
      throw err;
    }
  }
}
