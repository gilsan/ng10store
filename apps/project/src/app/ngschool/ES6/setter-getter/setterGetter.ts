
export class GetterSetter {
  _arr = [];
  constructor(arr = []) {
    this._arr = arr;
  }
  // getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
  get getfirstElem() {
    // getter는 반드시 무언가를 반환 하여야 한다.
    return this._arr;
  }

  // setter: set 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
  set setfirstElement(elem: number) {
    this._arr = [elem, ...this._arr];
  }
}