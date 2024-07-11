const btn = document.getElementById ("btn");
const outp = document.getElementById ("outp");
const txt = document.getElementById ("txt");


btn.addEventListener("click", netIncome);

function netIncome(){
    let income;
    let net;
    

if (income <= 24000)
    {
    net = income((-income * 0.10) - 750);
    }

else if(income>24000 && income<=32333 )
    {
    net = income-((income * 0.25) - 900);
    } 

else if (income > 32334 && income <=500000)
    {
        net = income-((income * 0.30) - 1700);
    }

else if (income > 32334 && income <=500000)
    {
        net = income-((income * 0.325) -1700);
    }

else if (income > 500000 && income <=800000)
    {
        net = income-((income * 0.30) - 1700);
    }

else if (income > 800000)
    {
        net = income * 0.35 - 1700;
    }   
    
}