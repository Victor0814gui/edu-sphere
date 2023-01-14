

type FakeDataType = {
  title: string;
  primaryColor: string;
  secondColor: string;
  itemSelected?: boolean;
  content: string;
}

const fakeDatabase: FakeDataType[] = [
  {
    title: "novos eventos",
    primaryColor: "#ff6600",
    secondColor: "#ffe0cc",
    content:" aksdjçflk çalksdjfçlkja çlkjdfçlkajsdçfkjçalsdk fjçlkajsdçlfk jaçlskdjfçl kajdçfoiuoiuqpoie oiqjpwiofjqoiwjfe pioqjfpeio jqpfoweijf qiowjef poiqjwefpoijqpwoie fpqoiwjef pqiowjef poiqjwpeiofj pqoijwefpoij qpwoiejfpoiqwjef oqiwjefp oiqjwpefoijqpoiwejpfoijqw epoiqwjep fojqpioef jqpoiwefjpoiqje fioqjwepfoi qwefj qwefq wef qwfoeijpqoiwejf pqjwefoij qiwjfeoij qpwoeifj qoiwjfpqoiwjef qweiof qpweoifj qowiefj pqowiejf qowjiefpkqjwefk nqwjefqkjebfkjqwbfkjqwkefjdjhpovjhpoivpo iqpoijfqw qjwnvuqfhvçuohasfçgasldhfçuasghuoahçoijo ijçaosdijfçlka sçflkjaçsdlkf jçalskjfçlkasd fihasçidfljalskj fçlaksjdfçlkajsdfçlkjaçsdlf kjaçlskdfjçouidhfçoaihdfçohdçfçadlkfjçlaksdfçlkasjdfçlkjasçdlkfjçi jfçoqiwjfçjq wçeflkjçqlwkfje qiwefjoiqjwfkwjfkasjdfç lkasdf"
  },
  {
    title: "eventos atuais",
    primaryColor: "#ffcc66",
    secondColor: "#ffeecc",
    content:""
  },
  {
    title: "eventos finalizando",
    primaryColor: "#6666ff",
    secondColor: "#ccccff",
    content:""
  },
  {
    title: "eventos concluidos",
    primaryColor: "#ff6600",
    secondColor: "#ffe0cc",
    content:""
  },
  {
    title: "participados",
    primaryColor: "#00ffff",
    secondColor: "#b3ffff",
    content:""
  }
]

export {
  fakeDatabase
};
export type { 
  FakeDataType 
};
