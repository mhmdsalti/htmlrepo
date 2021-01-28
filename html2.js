var game = prompt ('what game do you prefer the most');

while (game !== 'pubg' && game !== 'call of duty'){

    game = prompt ('what game do you prefer the most');
    
    }
    
    var gameprefer = '';
    
    if ( game === 'call of duty'){
        gameprefer = '<img src="./images2/cc.png "/>';
    }else if ( game === 'pubg'){
        gameprefer = '<img src="./images2/pp.png"/>';
    }
    
    var nohours = prompt ('how many hours do you play daily');
    var result ='';
    
    for (var i = 0 ; i < nohours ; i++){
    result = result + gameprefer;
    
    }
    
    document.write(result);
    alert('we will make Tournaments in the next days ! ')