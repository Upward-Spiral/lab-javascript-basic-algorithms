// Iteration 1: Names and Input

hacker1 = "azadeh";
console.log("The driver's name is "+hacker1);
console.log("The driver's name is ",hacker1);
hacker2 = "herAlterEgo";
console.log("The navigator's name is "+hacker2);
console.log("The navigator's name is ",hacker2);



// Iteration 2: Conditionals
function longestName(string1,string2) {
    if (string1.length > string2.length) {
      console.log(`The driver has the longest name, it has ${string1.length} characters.`);
    } else if (string1.length == string2.length) {
      console.log(`Wow, you both have equally long names, ${string1.length} characters!`);
    } else {
      console.log(`It seems that the navigator has the longest name, it has ${string2.length} characters`);
    };
};
longestName(hacker1,hacker2);

// Iteration 3: Loops

//3.1
function spacedUppercase(aName){
    let spacedUppcase = "";
    for (let i=0; i<hacker1.length; i++) {
      spacedUppcase = spacedUppcase + hacker1[i].toUpperCase()+" ";
    };
    console.log(spacedUppcase);
};
spacedUppercase(hacker1);

//3.2
function reverseName(aName){
  let revName = "";
  for (let j=hacker2.length-1; j>=0; j--) {
    revName = revName + hacker2[j];
  };
  console.log(revName);
};
reverseName(hacker2);

//3.3
function smallestString(string1,string2){
    if (string1.length < string2.length) {
      return string1.length;
    } else {
      return string2.length;
    }; 
  };
  
  function whosGoesFirst(string1,string2){
    var smaller = 0;
    for (let i=0; i<smallestString(string1,string2); i++) {
      if (string1[i]<string2[i]) {
        console.log("The driver's name goes first.");
        smaller = 1;
        break;
      } else {
        console.log("Yo, the navigator goes first definitely."); 
        smaller = 2;
        break;
      };
      if (smaller==0 && (string1.length = string2.length)) {
        console.log("What?! You both have the same name?");
      };
    };
  }; 
  whosGoesFirst(hacker1,hacker2);


//-----------Bonus 1:
var para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum dolor, ultricies quis molestie gravida, rhoncus et nibh. Maecenas nec dictum nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer orci sem, faucibus sit amet fermentum rhoncus, tincidunt sed massa. Curabitur feugiat elit id orci fringilla, non posuere libero rhoncus. Ut at dui finibus, tempus lectus a, interdum leo. Donec eget augue lacinia, commodo magna a, gravida felis. Integer in tellus ac lacus auctor ornare. Aliquam condimentum quam in faucibus bibendum. Maecenas est massa, pharetra sed blandit at, rutrum id nulla. Suspendisse elementum viverra viverra. Nam egestas nulla quis diam efficitur vestibulum. Donec facilisis tortor erat, eget vestibulum mi rutrum ut. Sed pharetra magna ullamcorper, suscipit leo egestas, luctus libero. Aenean tristique, urna et ullamcorper pellentesque, mauris velit tempus felis, hendrerit lobortis tortor nisi nec elit. Proin lobortis aliquet arcu, et tristique dolor aliquet in. Vivamus pharetra non lectus et pharetra. Vestibulum ac diam viverra, dapibus leo vel, pretium mi. Vivamus vitae enim nec mi elementum maximus. Integer porta, metus sed porttitor tempus, lorem velit viverra sem, sed gravida tellus metus porttitor lectus. Proin gravida risus commodo gravida posuere. Nam mattis rutrum risus, id ultricies sapien malesuada sed. Vestibulum aliquet, odio vitae lacinia pulvinar, justo elit tristique ligula, sit amet suscipit ligula risus nec lacus. Duis sodales nulla odio, in iaculis lorem tincidunt sit amet. Nullam pulvinar ut urna ut faucibus. Cras consectetur vestibulum diam at mollis. Sed congue neque dui, eget lacinia tortor suscipit ut.Donec iaculis nibh in justo auctor dictum. Aenean sed leo justo. Quisque vitae nulla pellentesque urna elementum rutrum a a magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ultrices sem at ligula sollicitudin, non varius lacus porta. Praesent commodo urna elit, sed imperdiet leo fermentum in. Integer volutpat dui mattis vehicula ultricies. Nulla facilisi. Praesent vel egestas lorem. Cras varius, turpis eu rhoncus gravida, mauris elit scelerisque mauris, a ornare metus turpis sit amet risus. Aenean vitae gravida turpis."

var arrayPara = para.split(" ");
console.log(`This paragraph has ${arrayPara.length} words`);

var etsInPara = 0;
arrayPara.forEach(function (word) {
  if (word==="et"){
    etsInPara ++;
  }
});
console.log(`The word et appears ${etsInPara} times in this paragraph .`)


//-------Bonus 2:
var phraseToCheck = "stack cats";
let result = true;
let i=0;
let j=phraseToCheck.length-1;
do {
  if ((phraseToCheck[i].toLowerCase() >= "a" && phraseToCheck[i].toLowerCase() <= "z")){
    if ((phraseToCheck[j].toLowerCase() >= "a" && phraseToCheck[j].toLowerCase() <= "z")){
      if (phraseToCheck[i].toLowerCase()==phraseToCheck[j].toLowerCase()){
        i++;
        j--;
      }else{
        result = false;
        break;
      }
    }else{
      j--;
    }
  }else{
    i++;
  }
} while (i<=j);


var purePhrase = [];
for (let n=0; n<phraseToCheck.length; n++) {
  if ((phraseToCheck[n].toLowerCase() >= "a" && phraseToCheck[n].toLowerCase() <= "z")) {
    purePhrase.push(phraseToCheck[n]);
  }
}
console.log(purePhrase);

var rPurePhrase = [];
for (let i=0; i< purePhrase.length; i++) {
  rPurePhrase.push(purePhrase[purePhrase.length-1-i]);
};
console.log(rPurePhrase);

for (let i=0; i< purePhrase.length; i++) {
  if (purePhrase[i]!=rPurePhrase[i]) {
    result = false;
  };
};

console.log(result);




