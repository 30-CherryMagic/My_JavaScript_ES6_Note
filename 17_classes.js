export class Animal {
  constructor( type , legs) {
    this.type = type || 'human';
    this.legs = legs || 2;
  }
  makeNoise(sound = '@!$#@%@#^'){
    console.log(sound);
  }

  //static インスタンス化しなくても使える
  static goodBye(){ 
    return 'goodbye';
  }
}
//値の後に || でデフォルトの値を指定
//引数の後に = でデフォルトの値を指定