// 1. Object.assign(ilk yazilan parametri 2. parametrin objesi ile birlesdirir. 6. setirde ise copyasini cixardiriq ki deyisiklik olanda ona tesir etmesin)
// const username = {ad:'ruslan', soyad:'rustemov'}
// const work = {proqram:'frontend', maas:'1100'}
// const returnedTarget = Object.assign(work, username)
// console.log(work);
// const copy = Object.assign({}, username, work);
// username.ad = 'veli';
// console.log(username);
// console.log(copy);
// 2. Object.create(obje yaradir)
// const person = {
//    isHuman: false,
//    printIntroduction: function() {
//      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//    }
//  };
//  const me = Object.create(person);
//  console.log(me.printIntroduction());
// 3. Object.defineProperty(eger obj-in incinde id yazsaq deyer atadigimiz zaman deyisecekdir. vermesek deyismir);
// const obj = {
//    id: 1,
//    name:'ruslan'
// }
// Object.defineProperty(obj, 'id', {
//    value:9
// });
// console.log(obj.id);
// obj.id = 4;
// console.log(obj.id);
// function-larda ise parametr verildiyi zaman id-nin deyismesinin şahidi oluruq
// const obj = {
//    _id: 1,
//    name:'ruslan'
// }
// Object.defineProperty(obj, 'id', {
//    get:function() {
//       return "id is"+this._id
//    },
//    set:function(id) {
//       return this._id = id
//    }
// });
// console.log(obj.id);
// obj.id = 8;
// console.log(obj.id);
// 4.Object.entries(özü bir array halına dönüşür və içində vergülə qədər olan yeri array bağlayır. bu arrayin içində də key və və value string halına dönür)

// const object1 = {
//    a: 'somestring',
//    b: 42
//  };
//  for (const [key, value] of Object.entries(object1)) {
//    console.log(`${key}: ${value}`);
//  }
// const obj = { foo: "bar", baz: 42 };
// for (let [key, value] of Object.entries(obj)){
//    console.log(key, value);
// }
// 5. Object.freeze(Obyekti dondurur. Digər kod öz xüsusiyyətlərini silə və dəyişə bilməz.)
// const obj = {
//   id: 1,
// };
// Object.freeze(obj);
// obj.id = 5;
// console.log(obj);
// 6. Object.fromEntries(iç-içə olan array-ləri bir obje halına gətirir)
// const entries = [
//    ['name', 'ruslan'],
//    ['age', '25']
// ]
// const obj = Object.fromEntries(entries);
// console.log(obj);
// 7. Object.getOwnPropertyDescriptor(2. parametr objedəki key-ə baxır, varsa 78. sətir TRUE döndürür. 79.cu sətir isə dəyərini göndərir )
// const object1 = {
//    property1: 42
//  };
//  const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
//  console.log(descriptor1.configurable);
//  console.log(descriptor1.value);
// 8. Object.getOwnPropertyDescriptors(7. qayda ilə eynidir)
// const object1 = {
//    property1: 42
//  };
//  const descriptors1 = Object.getOwnPropertyDescriptors(object1);
//  console.log(descriptors1.property1.writable);
//  console.log(descriptors1.property1.value);
// 9. getOwnPropertyNames( sadece key-leri alir)
// const object1 = {
//    a: 1,
//    b: 2,
//    c: 3
//  };
//  console.log(Object.getOwnPropertyNames(object1));
// const obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.getOwnPropertyNames(obj).sort());

// Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
//   console.log(`${val} -> ${obj[val]}`);
// });
// 10. Object.getPrototypeOf(Göstərilən obyektin prototipini (daxili mülkiyyətini) qaytarır.)
// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1)
// 11. Object.is(İki dəyər eyni dəyərdirsə müqayisə edir.)
// const foo = { a: 1 };
// const bar = { a: 1 };
// const sameFoo = foo;
// Object.is(foo, foo);
// Object.is(foo, bar);
// Object.is(foo, sameFoo);
// 12. Object.isExtensible(Cismin uzadılmasına icazə verilib-verilməyinin müəyyən edilir.) *****
// 13. Object.frozen(Obyektin dondurulub-dondurulmadığını müəyyən edir.)
// const object1 = {
//    property1: 42
//  };
//  console.log(Object.isFrozen(object1));
//  Object.freeze(object1);
//  console.log(Object.isFrozen(object1));
// 14.Object.isSealed(Bir obyektin möhürlənib-möhürlənmyrməmələrini təyin edir.)
// const object1 = {
//    property1: 42
//  };
//  console.log(Object.isSealed(object1));
//  Object.seal(object1);
//  console.log(Object.isSealed(object1));
// 15. Object.keys(bir arrayin icine atir)
//  const object1 = {
//    a: 'somestring',
//    b: 42,
//    c: false
//  };
//  console.log(Object.keys(object1));
// 16. Object.seal(Digər kodun obyektin xüsusiyyətlərini silməsinə mane olur.)
// const object1 = {
//    property1: 42
//  };

//  Object.seal(object1);
//  object1.property1 = 33;
//  console.log(object1.property1);
//  delete object1.property1;
//  console.log(object1.property1);
//  17. Object.values(valueleri arrayin icine atir)
// const obj ={
//    a:1,
//    b:'ruslan'
// }
// console.log(Object.values(obj));
// 18. Object.prototype.valueOf()
// function MyNumberType(n) {
//   this.number = n;
// }
// MyNumberType.prototype.valueOf = function () {
//   return this.number;
// };
// const object1 = new MyNumberType(4);
// console.log(object1 + 3);
// 19. object.prototype.toString(Obyektin string təmsilçiliyini qaytarır.)
// function Dog(name) {
//    this.name = name;
//  }
//  Dog.prototype.toString = function dogToString() {
//    return `${this.name}`;
//  };
//  const dog1 = new Dog('Gabby');

//  console.log(dog1.toString());
// 20. object1.hasOwnProperty( var olub- olmadigini mueyyen edir)
// const object1 = {};
// object1.property1 = 42;
// console.log(object1.hasOwnProperty('property1'));
// console.log(object1.hasOwnProperty('toString'));
// console.log(object1.hasOwnProperty('hasOwnProperty'));