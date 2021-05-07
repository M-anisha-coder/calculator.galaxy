function getHistory(){   //use to print value history have
    return document.getElementById("history-value").innerText;
}

function printHistory(num){   //it print num in history
    document.getElementById("history-value").innerText=num;
} 

function getoutput(){
    return document.getElementById("output-value").innerText;
} 
   //use for printing value of elemrnt which having history-value id in output
function printoutput(num){   //it prints num in output
    if(num==""){
        document.getElementById("output-value").innerText=num;
       }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);

    }

} 

function getFormattedNumber(num){
    if(num=="-"){
        return "";

    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reversenumberformat(num){
    return Number(num.replace( /,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printoutput("");
        }
        else if(this.id=="backspace"){
            var output =reversenumberformat(getoutput()).toString();
            if(output){
                 //if output is a value
                 output =output.substr(0,output.length-1);
                 printoutput(output);
            }
        }
        else{
            var output = getoutput();
            var history = getHistory();
            if(output==""&& history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output=output==""? output:reversenumberformat(output);
                history = history + output;
                if(this.id == "="){
                 var result =eval(history);
                 printoutput(result);
                 printHistory("");
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printoutput("");
                }


            }
            
        }
    } );       
    
} 

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reversenumberformat(getoutput());
        if(output!= NaN){
            output = output+this.id;
            printoutput(output);
        } //if output is a number
        
       
    });
        
}
    
        
   
        