const Tangle = require('./TangleKit/Tangle');

document.addEventListener('DOMContentLoaded', function () {

    var model = {
        initialize: function () {
            this.initialAmount = 10000;
            this.monthlyExpense = 1000;
            this.apr = 7;
            this.years = 3;
        },
        update: function () {
            const mpr = Math.pow(1+this.apr/100,1/12) - 1;
            this.total = Array(this.years*12).fill(this.monthlyExpense).reduce((a,v)=>a*(mpr+1)+v,this.initialAmount);
        }
    };

    const element = document.getElementById("investmentExample");
    new Tangle(element,model);
    
});
