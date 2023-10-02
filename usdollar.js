// Hello Check this out it works absolutely fine
let US = new XMLHttpRequest();
US.open("GET", "https://restcountries.com/v3.1/all")
US.send();
US.onload = () => {
    let data = JSON.parse(US.response)
     /* console.log(data) */
    let answer = data.filter((dummy) => (dummy.currencies !== undefined))
    console.log(answer.length)
    let realanswer = answer.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    console.log(realanswer.length, realanswer[0].currencies)
}