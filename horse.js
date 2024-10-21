
function horse(nimi, rotu, tyyppi, ikä) {
    this.firstName = nimi;
    this.rotu = rotu;
    this.type = tyyppi;
    this.age = ikä;
  }
const myHorse = new horse("Ikea Lihapulla", "Akhalteekki", "Yksisarvinen", 10);

document.getElementById("heppabonus").innerHTML = "Hevoseni nimi on " + myHorse.firstName + ". Se on rodultaan"+ myHorse.rotu+" ja tyypiltään "+myHorse.type+". Iältään jotakuinkin"+ myHorse.age+".";


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );