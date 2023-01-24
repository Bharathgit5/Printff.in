import firebase from 'firebase';
import { useState } from 'react';

const Uploadcomp = ({ passCount }) => {
  const [copies, setCopies] = useState(1);

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    databaseURL: "your_database_url",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database
  const database = firebase.database();

  const [file, setFile] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    let x = document.getElementById('upload-file');
    let txt='';
    let file = x.files[0];
    if('name' in file){
      txt += 'fileName : ' + file.name;
    }
    if('size' in file){
      let kb = Math.round(file.size/1000);
      let mb = Math.round(kb/1000);
     if(kb<=1000){
      txt += ' |  Size :' + kb +'KB';
     }
     else if (mb<=1000){
      txt +='  |  Size :' + mb +'MB';
     }
    }
    document.getElementById('txt').innerHTML=txt;
  }
 
  const pdffunc = (event) =>{
    const reader = new FileReader();
    const fileInfo = event.target.files[0];
    if (fileInfo) {
         reader.readAsBinaryString(event.target.files[0]);
         reader.onloadend = () => {
          let matches = reader.result.match(/\/Type[\s]*\/Page[^s]/g);
          let count = matches ? matches.length : 1;
          let element = document.getElementById('info');
          if(element){
            element.innerHTML = count;
        }
             console.log('Number of Pages:', count);    
             passCount(count); 
         }
         }
        }

  const handleChange = (event) => {
    setCopies(event.target.value);
    // store data
    const userData = {
      file: file,
      fileName: document.getElementById('txt').innerHTML,
      noOfPages: document.getElementById('info').innerHTML,
      copies: copies
    };
    database.ref('users').push(userData);
  }

  return (
    // your component JSX code here
    <>
     <div className="card text-center" id='card1' >
    <div className="card-header">
Upload Your File
</div>
<div className="card-body1">
<div className='uploadmain'>

   <div className='upload'>
Copy code
    <button type='button' className='btn-upload'>
    <i className="bi bi-cloud-arrow-up"></i> Upload File 
    <input 
    type='file' id='upload-file' onChange={handleFileChange} onChangeCapture={pdffunc}/>
    </button>
 
  <p id='txt'></p>
</div>
  
  <div className='upload2'>
  <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
  </div>
  <div className='container'>
  <div className='noofpages'>
 <b className='numpages'>Number of Pages:</b><p className='noofpagesbox' id='info'>1</p>
 </div>

 <div className='noofcopies'>
 <b className='numcopies'>Number of copies:</b><input  className='nocopiesbox' onChange={handleChange}></input>
 </div> 
 
  </div>
  </div>
  </div>
  </div>
    </>
  )
}
export default Uploadcomp
                    