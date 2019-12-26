export const capitalize = string => string[0].toUpperCase() + string.slice(1);

export class CodeExample {
  name;
  code;
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get length() {
    return this.code.split('').filter(char => char !== ' ').length;
  } 
}