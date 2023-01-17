 import React from 'react'
const  Uploadcomp = () =>{
     return (
  <>
   <div className="card text-center" id='card1' >
  <div className="card-header">
    Upload Your File
  </div>
  <div className="card-body1">
  <div className='uploadmain'>
 <div className='upload'>
      <button type='button' className='btn-upload'>
      <i className="bi bi-cloud-arrow-up"></i> Upload File 
      <input 
      type='file' id='upload-file' onChange={Handlefile}  />
      </button>
    </div>
    <p id='txt' className='preview-name'></p>
    <p id='info'></p>
    
    <div className='upload2'>
    <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
    </div>
    <div className='container'>
      <div className='col-12 col-lg-6'>
    <div className='noofpages'>
   <b>Number of pages:</b><input type={'number'} className='nopagesbox' ></input>
   </div>
   <div className='noofcopies'>
   <b>Number of copies:</b><input type={'number'} className='nocopiesbox'></input>
   </div> 
      </div>
</div>
</div>
</div>
</div>
  </>      
  )
}


export default Uploadcomp
const   Handlefile = ()=>{
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
   const   Handlefile = ()=>{
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
   let pdf = document.getElementById('file');
pdf.onchange= function(event){
  let file = event.target.files[0];
  console.log(file)
  let filereader = new FileReader()
  filereader.onload=function(){
    let typedarray = new Uint8Array(this.result)
    const task = pdfjsLib.getdocument(typedarray)
    task.promise.then((pdf) =>{
      console.log(pdf.numPages)
      document.getElementById('info').innerHTML='the number of pages ' + pdf.numPages;
    }
    )
  }
}
 let pdf = document.getElementById('file');
  console.log(pdf);
  pdf.onChange =  function handlechange(event){
    let file= pdf.files[0];
  console.log(event.target.value)
  let filereader = new FileReader()
  filereader.onload=function(){
    let typedarray = new Uint8Array(this.result)
    const task = pdfjsLib.getDocument(typedarray)
    task.promise.then((pdf) =>{
      console.log(pdf.numPages)
      document.getElementById('info').innerHTML='the number of pages ' + pdf.numPages;
    })
  }
    filereader.readAsArrayBuffer(file)
  

  }
  import pdfjsLib from "pdfjs-dist/build/pdf"
  const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
   const pdffunc = () =>{
  let pdf = document.getElementById('file');
  let info = 'the number of pages'
  let files = pdf.files[0];
  console.log(files);
 
 let filereader = new FileReader()
 filereader.onload=function(){
  let typedarray = new Uint8Array(this.result)
 
    const task = pdfjsLib.getDocument(typedarray)
    task.promise.then(function(pdf){
      console.log(pdf.numPages)
      document.getElementById('info').innerHTML=info + pdf.numPages;
    })
  
    filereader.readAsArrayBuffer(files)
  }
 
 }
 import { PDFWorker } from 'pdfjs-dist';
 return (
  <>
   <div className="card text-center" id='card1' >
  <div className="card-header">
    Upload Your File
  </div>
  <div className="card-body1">
  <div className='uploadmain'>
 <div className='upload'>
      <button type='button' className='btn-upload'>
      <i className="bi bi-cloud-arrow-up"></i> Upload file
       <input type="file" id='file' name='file' onChange={handleFileChange} />
    </button>
    </div>
  
   
    <div className='upload2'>
    <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
    </div>
    <div className='container'>
      <div className='col-12 col-lg-6'>
    <div className='noofpages'>
   <b>Number of pages:</b><input type={'number'} className='nopagesbox'></input>
   </div>
   <div className='noofcopies'>
   <b>Number of copies:</b><input type={'number'} className='nocopiesbox'></input>
   </div> 
      </div>
</div>
</div>
</div>
</div>
  </>      
  )
}



export default Uploadcomp
import React from 'react'
import  pdfjsLib from "pdfjs-dist";

const Uploadcomp = () => {
  const pdffunc = () =>{
    let pdf = document.getElementById('file');
    let info = 'the number of pages'
    let files = pdf.files[0];
    console.log(files);
  
   let filereader = new FileReader()
   filereader.onload=function(){
    let typedarray = new Uint8Array(this.result)
   
      const task = pdfjsLib.getDocument(typedarray)
      task.promise.then(function(pdf){
        console.log(pdf.numPages)
        document.getElementById('info').innerHTML=info + pdf.numPages;
      })
    
      filereader.readAsArrayBuffer(files)
    }
  }
    return (
    <div>
 
  <>
   <div className="card text-center" id='card1' >
  <div className="card-header">
    Upload Your File
  </div>
  <div className="card-body1">
  <div className='uploadmain'>
 <div className='upload'>
      <button type='button' className='btn-upload'>
      <i className="bi bi-cloud-arrow-up"></i> Upload file
   <input id ='file' type='file' onChange={pdffunc}></input>   
    </button>
   
    </div>
  
   
    <div className='upload2'>
    <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
    </div>
    <div className='container'>
      <div className='col-12 col-lg-6'>
    <div className='noofpages'>
   <b>Number of pages:</b><input type={'number'} className='nopagesbox'></input>
   </div>
   <div className='noofcopies'>
   <b>Number of copies:</b><input type={'number'} className='nocopiesbox'></input>
   </div> 
      </div>
</div>
</div>
</div>
</div>

  </>     
  </div> 
  )

}
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.2.146/pdf.min.js" integrity="sha512-hA0/Bv8+ywjnycIbT0xuCWB1sRgOzPmksIv4Qfvqv0DOKP02jSor8oHuIKpweUCsxiWGIl+QaV0E82mPQ7/gyw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>-



export default Uploadcomp
import React from 'react'
import  pdfjs from 'pdfjs-dist';

const Uploadcomp = () => {
  const pdffunc = () =>{
    let pdf = document.getElementById('file');
    let files = pdf.files[0];
    console.log(files);
  
   let filereader = new FileReader()
   filereader.onload=function(){
    let typedarray = new Uint8Array(this.result)
    console.log(typedarray)
    pdfjs.getDocument(typedarray).task.promise.then(function(pdf){
        console.log(pdf.numPages)
         console.log("bharath")
        document.getElementById('info').innerHTML=`Number of pages: ${pdf.numPages}`;
      })
    }
    filereader.readAsArrayBuffer(files)
  }
    return (
    <div> 
  <>
   <div className="card text-center" id='card1' >
  <div className="card-header">
    Upload Your File
  </div>
  <div className="card-body1">
  <div className='uploadmain'>
 <div className='upload'>
      <button type='button' className='btn-upload'>
      <i className="bi bi-cloud-arrow-up"></i> Upload file
   <input id ='file' type='file' onChange={pdffunc}></input>   
    </button>
    </div>
    <div className='upload2'>
    <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
    </div>
    <div className='container'>
      <div className='col-12 col-lg-6'>
    <div className='noofpages'>
   <b> <span id="info"></span> </b>
   </div>
   <div className='noofcopies'>
   <b>Number of copies:</b><input type={'number'} className='nocopiesbox'></input>
   </div> 
      </div>
</div>
</div>
</div>
</div>

  </>     
  </div> 
  )

}
  if(pdfjs){
        pdfjs.getDocument(typedarray).task.promise.then(function(pdf){
            console.log(pdf.numPages)
            setNumPages(pdf.numPages);
        })
        }



export default Uploadcomp
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.2.146/pdf.min.js" integrity="sha512-hA0/Bv8+ywjnycIbT0xuCWB1sRgOzPmksIv4Qfvqv0DOKP02jSor8oHuIKpweUCsxiWGIl+QaV0E82mPQ7/gyw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>