function spy(){
    console.log('pass');
}

function receivesAFunction(spy){
    spy(); 
}


function returnsAnAnonymousFunction(){
    return function(){};
}
function returnsANamedFunction(){
    return function hello(){};
}