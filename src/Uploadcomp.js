import React, { useState } from 'react';
import pdfjs from 'pdfjs-dist';


function Uploadcomp() {
  const [numPages,setnumPages] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[1];
    console.log(file)
    if(pdfjs){
 const page=   pdfjs.getDocument(file).then((pdf) => {
      setnumPages(pdf.numPages);
      console.log(page)
     } );
    }
  }
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <p>Number of pages: {numPages}</p>
    </div>
  );
    

}

export default Uploadcomp;
