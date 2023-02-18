
let serial=0;
// First card

document.getElementById('first-card').addEventListener('click',function(){  serial += 1;
    const cardTitle=document.getElementById('first-title').innerText;
    const firstInput=document.getElementById('first-base').value;
    const secondInput=document.getElementById('second-height').value;
  

    const triangleArea=0.5*parseFloat(firstInput)*parseFloat(secondInput);
    const buttonConvert=document.getElementById('btn-convert');
    //console.log(buttonConvert);
    
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
  const cardTitle=document.getElementById('third-title').innerText;
  const firstInput=document.getElementById('para-base').value;
  const secondInput=document.getElementById('para-height').value;


  const parallelogramArea=parseFloat(firstInput)*parseFloat(secondInput);
  const buttonConvert=document.getElementById('btn-convert');
  //  console.log(buttonConvert);
  
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
      displayData(cardTitle,parallelogramArea);
    }
  
  
});

//Fourth Card
document.getElementById('fourth-card').addEventListener('click',function(){  serial += 1;
  const cardTitle=document.getElementById('fourth-title').innerText;
  const firstInput=document.getElementById('first-d1').value;
  const secondInput=document.getElementById('second-d2').value;


  const rhombusArea=0.5*parseFloat(firstInput)*parseFloat(secondInput);
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
      displayData(cardTitle,rhombusArea.toFixed(2));
    }
  
  
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
      displayData(cardTitle,pentagonArea.toFixed(2));
    }
});

//sixth Function
document.getElementById('sixth-card').addEventListener('click',function(){  serial += 1;
  const cardTitle=document.getElementById('sixth-title').innerText;
  const firstInput=document.getElementById('first-a-axis').value;
  const secondInput=document.getElementById('second-b-axis').value;
//  console.log(cardTitle,typeof firstInput,typeof secondInput);
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


// Common Function
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

