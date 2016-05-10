var x = R.rnorm(10000, 5, 2);
G.hist(x, {name:"x", mode:"normalized", step:0.2});
G.curve((x)=>R.dnorm(x, 5,2), {name:"N(5,2)", step:0.2});

