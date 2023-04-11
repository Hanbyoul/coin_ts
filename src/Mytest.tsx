export {};

type Wodrs = {
  [key: string]: string;
};

class Dict {
  private words: Wodrs;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(trem: string) {
    return this.words[trem];
  }

  del(word: Word) {
    if (this.words[word.term] !== undefined) {
      delete this.words[word.term];
    }
  }
  changeTerm(currentterm: string, newtrem: string) {
    if (this.words[currentterm] !== undefined) {
      this.words[newtrem] = this.words[currentterm];
      delete this.words[currentterm];
    }
  }
  changeDef(currentterm: string, newdef: string) {
    if (this.words[currentterm] !== undefined) {
      this.words[currentterm] = newdef;
    }
  }
  list() {
    console.log(this.words);
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimch = new Word("kimch", "한국의 음식");

const dict = new Dict();

dict.add(kimch);
dict.def("kimch");

const car = new Word("모델3", "TESLA");

dict.add(car);
