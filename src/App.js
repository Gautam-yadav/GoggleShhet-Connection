import {useState,useEffect} from 'react'
import axios from 'axios'
import {Data} from './Components/Data'

function App() {

  // form states
  const [CustomerID, setCustomerID]=useState('');
  const [PhoneNo, setPhoneNo]=useState('');
  const [PartnerName, setPartnerName]=useState('');
  const [IsAccepted, setIsAccepted]=useState('');
  // const [CheckBox, setCheckBox]=useState('true')

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    debugger
    e.preventDefault();
    console.log( CustomerID,PhoneNo,PartnerName,IsAccepted);

    // our object to pass
    const data = {
      CustomerID: CustomerID,PhoneNo,PartnerName,IsAccepted
    }
  let formData = new FormData();
  for (let i in data){
    formData.append( i, data[i] );
  }

    axios.post('https://script.google.com/macros/s/AKfycbzZTxxkFxJVixZC964PA76kKjaJqKps-M-CDEzleTzRCAa3obZzvDhVqCW9uCj1mLvD/exec',formData).then(response=>{
      console.log(response);
      setCustomerID('');
      setPhoneNo('');
      setPartnerName('');
      setIsAccepted('');
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    getData();
  }



  // getting data function
  const getData=()=>{
  
    axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=qZOjvhXf58O1CWmybsf4b9Lb9vFTjJZu9DA3CxpdylF8Uf-Hg96x_QN7JEcqWudyUlu0rUhDFkFgg5lE4nP7MQMocGjd2Gdem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBGJJzwWbbk786l8dPK8gJNCb0-4UU5ref4E-hfWeJJqAKMdAtyF0EKI1l4KDc7qeX4uaQYFIyCsbnH07r84QSTTTUktBir6Xg&lib=MDn7LjoIFGzi9t2LcbNYXhd0q-eIzUSbp").then((response)=>{
      setData(response.data.content);
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }

  // triggering function

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="container">
      <br></br>
      <h1>Save Form Data in Google Sheets using React</h1>
      <br></br>
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>User Id</label>
        <input type='text' className='form-control' required
          placeholder='Enter your ID' onChange={(e)=>setCustomerID(e.target.value)}
          value={CustomerID}
        />
        <br></br>
      
        <label>MOBILE NUMBER</label>
        <input type='text' className='form-control' required
          placeholder='Enter your Mobile No.'
          onChange={(e)=>setPhoneNo(e.target.value)}
          value={PhoneNo}
        />
        <br></br>
        <label>PARTNER NAME</label>
        <input type='text' className='form-control' required
          placeholder='Enter your Partner Name'
          onChange={(e)=>setPartnerName(e.target.value)}
          value={PartnerName}
        />
        <br></br>
        <label>IS_ACCEPTED</label>
        <input type='text' className='form-control' required
          placeholder='Enter your Status' onChange={(e)=>setIsAccepted(e.target.value)}
          value={IsAccepted}
        />
         {/* <input type='Checkbox'  required
          placeholder='Enter your Status' onChange={(e)=>setCheckBox(e.target.value)}
          value={CheckBox}
        /> */}
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <div className='view-data'>
        {data.length<1&&<>No data to show</>}
        {data.length>0&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Index</th>
                  <th scope='col'>User Id</th>
                  <th scope='col'>MOBILE NUMBER</th>
                  <th scope='col'>PARTNER NAME</th>
                  <th scope='col'>IS_ACCEPTED</th>
                </tr>
              </thead>
              <tbody>
    
                {/* <Data data={data}/> */}
                {
                   data.map((item,i)=>
                   
                   <tr>
                     <td>{i+1}</td>
                     <td>{item[0]}</td>
                     {/* <td>{item[1]}</td>
                     <td>{item[2]}</td>
                     <td>{item[3]}</td>
                     <td>{item[4]}</td> */}
                   </tr>
                   )
                }
         
               
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;