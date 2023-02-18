
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

