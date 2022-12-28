<!-- node version 14.10 -->
<!-- google Scrpit Code -->


<!-- Do Post
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1cSuG9ExCXUmqxmUFjeX1g8UXujM0ypbZVAYs4u_OlGk/edit#gid=0");
 //if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("DataEntry");
function doPost(e){
  let data = e?.parameter;
  let Id =data.CustomerID
  
  console.log(Id)
  const sheetData = sheet.getDataRange().getValues();
  let isExiest = sheetData.some((row)=>{
    return row[0] == Id
  })
   console.log(sheetData)
  if(isExiest){
    console.log('exiest')
    return ContentService.createTextOutput("Error!!!");
  }
  else{
    console.log('not exiest')
    if(data){
      sheet.appendRow([data.CustomerID,data.PhoneNo,data.PartnerName,data.IsAccepted]);
    }
    return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
  }

  

}
   -->

   <!-- Do Get Data

<!-- // const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1cSuG9ExCXUmqxmUFjeX1g8UXujM0ypbZVAYs4u_OlGk/edit#gid=0"); -->
var mysheets =sheets.getSheetByName("DataEntry")
	function doGet(e){
    <!-- // let Lastrow=mysheets.getLastRow()
    // let data=mysheets.getRange(2,1,Lastrow,1).getValues()
    //  console.log(data)
    //  let custumerId=e.parameter.custumerId
    //  return custumerId -->
      

    <!-- let data = sheet.getDataRange().getValues()
    Logger.log(data) -->

  let obj = {};
  <!-- // let data = sheet.getDataRange().getValues() -->
  let Lastrow= mysheets.getLastRow()
  let data = mysheets.getRange(2,1,Lastrow,1).getValues()
  obj.content = data;
  console.log(data)
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
 
  }
  
<!-- // }  -->
-->
