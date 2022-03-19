function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction() {
    return function receivesAFunction(callBack) {
        return callBack;
    };
}
const returnsAnAnonymousFunction = function(){
    return (function(){
        return "something"
    })
}