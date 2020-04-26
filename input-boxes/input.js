console.log("Script started");

// setup events
function btnClick()
{
  console.log("Button Clicked!");

  // get textbox information
  var txtBox = document.getElementById('txtbox');
  console.log(txtbox);
  console.log('Textbox contains: ', txtbox.value);

  // place the text into the <p> tag
  var outTxt = document.getElementById("outputtxt");
  console.log(outTxt);
  outTxt.innerText = txtBox.value;
}