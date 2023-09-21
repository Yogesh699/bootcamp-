// This refers to the window
console.log(this);

// This refers to the window object
function helloThis() {
  console.log("Inside this function, this is " + this);
}

// This refers to the child object. Will console log 20
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// This refers to the investment object. Will log 5750
var investor = {
  name: "Cash Saver",
  age: 23,
  //  getAge: age,
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      return "hello here";
      //console.log("hello");
      // console.log(this.initialInvestment * 1.15);
    },
  },
};
console.log(investor);
console.log(investor.investment.investmentGrowth(), "calling");

// Call the function helloThis to check results
// helloThis();

// // Call the object methods to check results
// child.ageTenYears();
// investor.investment.investmentGrowth();
