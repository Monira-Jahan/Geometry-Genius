
let serial=0;
// First card

document.getElementById('first-card').addEventListener('click',function(){  serial += 1;
    const cardTitle=document.getElementById('first-title').innerText;
    const firstInput=document.getElementById('first-base').value;
    const secondInput=document.getElementById('second-height').value;
  

    const triangleArea=0.5*parseFloat(firstInput)*parseFloat(secondInput);
    const buttonConvert=document.getElementById('btn-convert');
    
    
    //validation
    if (
        firstInput < 0 ||
        firstInput == "" ||
        secondInput < 0 ||
        secondInput == ""
        ) {
        alert("Please Enter Valid Inputs");
        return serial=0;
      }
      else{
        displayData(cardTitle,triangleArea);
      }
});

//Second Card
document.getElementById('second-card').addEventListener('click',function(){  serial += 1;
    const cardTitle=document.getElementById('second-title').innerText;
    const firstInput=document.getElementById('first-width').value;
    const secondInput=document.getElementById('second-length').value;
  

    const rectangleArea=parseFloat(firstInput)*parseFloat(secondInput);
    const buttonConvert=document.getElementById('btn-convert');
     console.log(buttonConvert);
    
    //validation
    if (
        firstInput < 0 ||
        firstInput == "" ||
        secondInput < 0 ||
        secondInput == ""
        ) {
        alert("Please Enter Valid Inputs");
        return serial=0;
      }
      else{
        displayData(cardTitle,rectangleArea);
      }
    
    
});

//Third Card
document.getElementById('third-card').addEventListener('click',function(){  serial += 1;
  
  //   getting data using common function using getElementById method
  const card=getData('third-title','para-base','para-height');
  const parallelogramArea=parseFloat(card.firstInput)*parseFloat(card.secondInput);
  const buttonConvert=document.getElementById('btn-convert');
  //  console.log(buttonConvert);
  displayData(card.cardTitle,parallelogramArea);
});

//Fourth Card
document.getElementById('fourth-card').addEventListener('click',function(){  serial += 1;
  
  //  getting data using common function using getElementById method
  const card=getData('fourth-title','first-d1','second-d2');
  const rhombusArea=0.5*parseFloat(card.firstInput)*parseFloat(card.secondInput);
  const buttonConvert=document.getElementById('btn-convert');
   console.log(buttonConvert);
  displayData(card.cardTitle,rhombusArea);
  //validation
});

//Fifth card

document.getElementById('fifth-card').addEventListener('click',function(){  serial += 1;
  const cardTitle=document.getElementById('fifth-title').innerText;
  const firstInput=document.getElementById('first-perimeter').value;
  const secondInput=document.getElementById('second-apothom').value;


  const pentagonArea=0.5*parseFloat(firstInput)*parseFloat(secondInput);
  const buttonConvert=document.getElementById('btn-convert');
   console.log(buttonConvert);
  
  //validation
  if (
      firstInput < 0 ||
      firstInput == "" ||
      firstInput==="string"||
      secondInput < 0 ||
      secondInput == "" ||
      secondInput==="string"
      ) {
      alert("Please Enter Valid Inputs");
      return serial=0;
    }
    else{
      displayData(cardTitle,pentagonArea);
    }
});

//sixth Function
document.getElementById('sixth-card').addEventListener('click',function(){  serial += 1;
  const cardTitle=document.getElementById('sixth-title').innerText;
  const firstInput=document.getElementById('first-a-axis').value;
  const secondInput=document.getElementById('second-b-axis').value;

  let pi=3.14;
  const ellipseArea=pi*parseFloat(firstInput)*parseFloat(secondInput);
 
  const buttonConvert=document.getElementById('btn-convert');
   console.log(buttonConvert);
  
  //validation
  if (
      firstInput < 0 ||
      firstInput == "" ||
      firstInput==="string"||
      secondInput < 0 ||
      secondInput == "" ||
      secondInput==="string"
      ) {
      alert("Please Enter Valid Inputs");
      return serial=0;
    }
    else{
      displayData(cardTitle,ellipseArea.toFixed(2));
    }
});

//common function to display  data
function displayData(nameOfGeo,resultOfArea){
    const container=document.getElementById('table-container');
   //create tr to fetch the data
   const tr=document.createElement('tr');
   tr.innerHTML=`
   <td>${serial}</td>
   <td>${nameOfGeo}</td>
   <td>${resultOfArea}<span>cm<sup>2</sup></span></td>
   <td><button id="btn-convert"class="btn btn-primary normal-case text-sm font-semibold">Convert By <span>m<sup>2</sup></span></button></td>
   `;
   container.appendChild(tr);
};

/// common function to get data using getElementById method
function getData(id1, id2, id3) {
  // get the data from htm using id
  const cardTitle = document.getElementById(id1).innerText;
  const firstInput = document.getElementById(id2).value;
  const secondInput = document.getElementById(id3).value;

   const card = {
  cardTitle: cardTitle,
  firstInput: firstInput,
  secondInput: secondInput,
  };
  return card;
}
