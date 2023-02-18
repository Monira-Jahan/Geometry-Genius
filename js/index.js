
let serial=0;
// First card

document.getElementById('first-card').addEventListener('click',function(){  serial += 1;
    const cardTitle=document.getElementById('first-title').innerText;
    const firstInput=document.getElementById('first-base').value;
    const secondInput=document.getElementById('second-height').value;
  //  console.log(cardTitle,typeof firstInput,typeof secondInput);

    const triangleArea=0.5*parseFloat(firstInput)*parseFloat(secondInput);
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
        displayData(cardTitle,triangleArea);
      }
    
    
});

//Second Card
document.getElementById('second-card').addEventListener('click',function(){  serial += 1;
    const cardTitle=document.getElementById('second-title').innerText;
    const firstInput=document.getElementById('first-width').value;
    const secondInput=document.getElementById('second-length').value;
  //  console.log(cardTitle,typeof firstInput,typeof secondInput);

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
//  console.log(cardTitle,typeof firstInput,typeof secondInput);

  const parallelogramArea=parseFloat(firstInput)*parseFloat(secondInput);
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
      displayData(cardTitle,parallelogramArea);
    }
  
  
});

//Fourth Card
document.getElementById('fourth-card').addEventListener('click',function(){  serial += 1;
  const cardTitle=document.getElementById('fourth-title').innerText;
  const firstInput=document.getElementById('first-d1').value;
  const secondInput=document.getElementById('second-d2').value;
//  console.log(cardTitle,typeof firstInput,typeof secondInput);

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
      displayData(cardTitle,rhombusArea);
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
}

