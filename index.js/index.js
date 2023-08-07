
let equation = 
let inputBox=document.querySelector('#input');
function getval(val) {

    console.log(val);
    
    if(inputBox.value==0)
{
  inputBox.value=val;
}
else
{
    inputBox.value+=val;
}

}


function getAns()
{
    equation.value = input.value;
    let newEquation = equation.value;
    let ans=eval(inputBox.value);
    inputBox.value=ans;
    equation1.push(newEquation);
    answer.push(Ans);
    console.log(answer);
    console.log(equation1);

}
function getClr()
{
    equation.value='';
    inputBox.value="0";
}

function his()
{
    historyBox.innerhtml = "<div class='element'> <h3>" + equation1 + "<div class='element'></div>" + equation
    "</h3><h2>" + answer + "</h2></div>";
}