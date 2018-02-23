// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0 || currency == null){
        return {};
    }
    else if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else{
        var h = 0, q = 0, d = 0, n = 0, p;
        var arr = {};

        while(currency - 50 >= 0){
            currency -= 50;
            h++;
        }
        h > 0 ? arr["H"] = h : null;
        while(currency - 25 >= 0){
            currency -= 25;
            q++;
        }
        q > 0 ? arr["Q"] = q : null;
        while(currency - 10 >= 0){
            currency -= 10;
            d++;
        }
        d > 0 ? arr["D"] = d : null;
        while(currency - 5 >= 0){d
            currency -= 5;
            n++;
        }
        n > 0 ? arr["N"] = n : null;

        p = currency;
        p > 0 ? arr["P"] = p : null;

        return arr;
    }
}
