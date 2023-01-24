


export default  Uploadcomp
{props.selectedValue === "black and white" && props.selectedValue2=== "front side only" ? 10 : props.selectedValue === "black and white" && props.selectedValue2=== "both sides" ? 10 : props.selectedValue === "color" && props.selectedValue2=== "front side only" ? 15 : props.selectedValue === "color" && props.selectedValue2=== "both sides" ? 20:20}
 .nav-link{
  color:aliceblue;
 }

                  .btn-upload{
                   position: relative;
                   padding: 11px 16px;
                   font-size: 15px;
                   line-height: 1.5;
                   border-radius: 10px;
                   background-color:black;
                   color:white;
                   border: 0;
                   overflow: hidden;
                   transition: 2s;
               
                  }
                  .btn-upload input[type='file']{
                   cursor:pointer;
                   position: absolute;
                   left: 0%;
                   top: 0%;
                 transform: scale(5);
                 opacity: 0;
               
                  }
                  input{
                    text-align: center;   
                }
                     @media (min-width:1200px){
                       .btn-upload{
                         position: absolute;
                         right: 650px;
                         top: 60px;
                       }
                       #txt{
                        position: relative;
                     top: 70px;

                      } 
                       .noofpagesbox{
                        width: 100px;
                        border-style: solid;
                        border-color: black;
                        border-radius: 10px;
                        margin-left: 15px;
                        position: relative;
                        left: 500px;
                        top: 45px;
        
                       }
                       .numcopies{
                        position: relative;
                        left: 500px;
                        
                       }
                       .nocopiesbox{
                               border-color:black;
                               border-radius: 10px;
                           margin-left: 15px;
                               width: 100px;
                              position: relative;
                             left: 500px;
                             }
                             .numpages{
                              position: relative;
                              left: 110px;
                              top: 70px;
                             }
                            
                       .form-check1{
                         position: absolute;
                         right: 750px;
                         top: 50px;
                         margin-top: 30px;
                       }
                       .form-check2{
                         position: absolute;
                         right: 600px;
                         top: 50px;
                         margin-top: 30px;
                       }
                       .form-check3{
                         position: absolute;
                         right: 755px;
                         top: 100px;
                         margin-top: 30px;
                       }
                       .form-check4{
                         position: absolute;
                         right:565px;
                         top: 100px;
                         margin-top: 30px;
                       }
                       #showpricebtn{
                        position: absolute;
                        right: 650px;
                       bottom: 170px;
                      }
                      table {
                       position: relative;
                      left: 550px;
                      top: 70px;
                      margin: 20px;
                      }
                      #checkoutbtn{
                        position: absolute;
                        right: 660px;
                        bottom: 10px;
                      }
                      #footer,#contact-section{
                        width: 80vw;
                        padding: 1rem;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        background-color: white;
                        color: black;
                        border-radius: 0.5rem;
                        position: relative;
                        margin-top: 30px;
                       margin-left: 140px;
                      }
                    
                    }
                    .noofpagesbox{
                      width: 100px;
                      border-style: solid;
                      border-color: black;
                      border-radius: 10px;
                      margin-left: 15px;
                    }
                    .nocopiesbox{
                      border-color:black;
                      border-radius: 10px;
                  margin-left: 15px;
                      width: 100px;
                    }
                     
                       @media (max-width:1199.98px){
                         .btn-upload{
                           position: absolute;
                           right: 100px;
                           top: 90px;
                          
                         }
                         #txt{
                          position: relative;
                       top: 15px;
                        } 
                         .numpages{
                          position:absolute;
                      right: 150px;
                          top: 160px;
                         }
                         .noofpagesbox{
                          position: absolute;
                         right:30px;
                          top: 160px;
          
                         }
                         .numcopies{
                          position: absolute;
                          right: 150px;
                          top: 210px;
                         }
                         .nocopiesbox{
                                position: absolute;
                               right: 30px;
                               top: 210px;
                               }
                         .form-check1{
                           position: absolute;
                           right: 150px;
                           top: 50px;
                           margin-top: 20px;
                          
                         }
                         .form-check2{
                           position: absolute;
                           right: 50px;
                           top: 50px;
                           margin-top: 20px;
                         }
                         .form-check3{
                           position: absolute;
                           right: 155px;
                           top: 100px;
                           margin-top: 30px;
                         }
                         .form-check4{
                           position: absolute;
                           right:15px;
                           top: 100px;
                         margin-top: 30px;
                         }
                         #showpricebtn{
                          position: absolute;
                          right: 100px;
                         bottom: 150px;
                        }
                        table {
                          position: relative;
                         left: 1px;
                         top: 80px;
                         margin: 20px;
                         }
                         .card-body3{
                          height: 200px;
                         }
                      
                        #checkoutbtn{
                          position: absolute;
                          right: 110px;
                         top: 270px;
                        }
                        #footer,#contact-section{
                          width: 70vw;
                          padding: 1rem;
                          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                          background-color: white;
                          color: black;
                          border-radius: 0.5rem;
                          position: relative;
                          margin-top: 30px;
                          left: 60px;
                        }
                       }
                      table, th, td {
                        border:1px solid black;
                       
                      }
                      
                      tr:nth-child(even) {
                      background-color: #D6EEEE;
                      }
                      @media only screen and (max-width: 600px) {
                        table {
                          font-size: 0.9rem;
                        }
                        #card3 {
                          padding: 1rem;
                        }
                      }
                      
                      
                       .card-body1{
                         height: 240px;
                         background-color: white;
                         color: black;
                         border-radius: 10px;
                        
                        
                       }
                         .card-body2{
                           height: 150px;
                           background-color: white;
                           color:black;
                           border-radius: 10px;
                         }
                         .card-body3{
                          height: 230px;
                          background-color: white;
                          color: black;
                          border-radius: 10px;
                         }
                         #card1,#card2,#card3{
                         
                           margin-top: 10px;
                           border-radius: 10px;
                           margin-left: 20px;
                           margin-right: 20px;
                           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                           
                         }
                         .form-check-input{
                           margin-right: 10px;
                         }
                        

                         .work-container {
                          width: 80vw;
                          padding: 1.5rem;
                          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                          margin-top: 5rem;
                          background-color: #fff;
                          border-radius: 0.5rem;
                        }
                        
                        .work-container .main-heading {
                          font-size: 3rem;
                          font-weight: bolder;
                          word-spacing: 0.11rem;
                          padding-bottom: 20px;
                          
                        }
                        
                        .work-container .sub-heading {
                          font-size: 2rem;
                          font-weight: normal;
                        }
                        .fontawesome-style {
                          font-size: 2rem;
                          display: grid;
                          place-items: center;
                          text-align: center;
                          margin: 0.5rem auto; 
                        
                        }
                        .work-container-subdiv .main-hero-para {
                          width: 100%;
                        }
                       
                       .connect,.contact{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                       
                       }
                       .socialicons{
                        font-size: 20px;
                       color: black;
                        border-radius: 50px;
                        margin: 20px;
                        height: 50vw;
                        line-height: 100px;
                       
                       }
                     .copyright{
                      text-align: center;
                      margin-top: 10px;
                      margin-bottom: -70px;
                      
                     }
                     .connectflex,.contactflex{
                      display: inline-block;
                      margin-right:25vw;
                     
                     }           
                     .bi-bi-cloud-arrow-up-fill{
  width: 50px;
  height: 80px; 
}
.bi-bi-arrow-down{
  width: 30px;
  height: 50px;
}
.bi-bi-record2{
  width: 30px;
  height: 50px;
}
.bi-bi-arrow-down2{
  width: 30px;
  height: 50px;
}
.bi-bi-currency-rupee{
  width: 30px;
  height: 50px;
}
.carousel-control-next{
  margin-right: 0px;
  }
  .carousel-item {
    height: 300px;
    }
    @media (max-width: 767px) {
      .responsive-font-example{
        font-size: 50px;
          }
          .tagline{
           font-size:15px;
          }
      .bi-bi-cloud-arrow-up-fill{
        position: absolute;
        left: 170px;
        top: 10px;  
      }
  .bi-bi-arrow-down{
    position: absolute;
    left: 180px;
    top: 60px;
  }
  .bi-bi-record2{
    position: absolute;
    left: 180px;
    top: 100px;
  }
  .bi-bi-arrow-down2{
    position: absolute;
    left: 180px;
    top: 140px;
  }
  .bi-bi-currency-rupee{
    position: absolute;
    left: 180px;
    top: 190px;
  }
  .carousel3{
    position: absolute;
    left: 80px;
    top: 140px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .responsive-font-example{
  font-size: 50px;
   }
  .tagline{
  font-size:15px;
  }
  .bi-bi-cloud-arrow-up-fill{
    position: absolute;
    left: 360px;
    top: 10px;  
  }
.bi-bi-arrow-down{
position: absolute;
left: 370px;
top: 70px;
}
.bi-bi-record2{
position: absolute;
left: 370px;
top: 120px;
}
.bi-bi-arrow-down2{
position: absolute;
left: 370px;
top: 170px;
}
.bi-bi-currency-rupee{
position: absolute;
left: 370px;
top: 220px;
}
.carousel3{
position: absolute;
left: 280px;
top: 140px;
}
 }
 @media (min-width: 992px) {
  .bi-bi-cloud-arrow-up-fill{
    position: absolute;
    left: 730px;
    top: 10px;  
  }
.bi-bi-arrow-down{
position: absolute;
left: 740px;
top: 70px;
}
.bi-bi-record2{
position: absolute;
left: 740px;
top: 120px;
}
.bi-bi-arrow-down2{
position: absolute;
left: 740px;
top: 170px;
}
.bi-bi-currency-rupee{
position: absolute;
left: 740px;
top: 220px;
}
.carousel3{
position: absolute;
left: 450px;
top: 100px;
font-size: 3rem;
}
 }          
 @media (min-width: 768px)  {
  .responsive-font-example{
  font-size: 50px;
   }
  .tagline{
  font-size:15px;
  }
  .bi-bi-cloud-arrow-up-fill{
    position: absolute;
    left: 440px;
    top: 10px;  
  }
.bi-bi-arrow-down{
position: absolute;
left: 450px;
top: 70px;
}
.bi-bi-record2{
position: absolute;
left: 450px;
top: 120px;
}
.bi-bi-arrow-down2{
position: absolute;
left: 450px;
top: 170px;
}
.bi-bi-currency-rupee{
position: absolute;
left: 450px;
top: 220px;
}
.carousel3{
position: absolute;
left: 280px;
top: 140px;
}
 }
 @media (min-width: 992px) {
  .bi-bi-cloud-arrow-up-fill{
    position: absolute;
    left: 730px;
    top: 10px;  
  }
.bi-bi-arrow-down{
position: absolute;
left: 740px;
top: 70px;
}
.bi-bi-record2{
position: absolute;
left: 740px;
top: 120px;
}
.bi-bi-arrow-down2{
position: absolute;
left: 740px;
top: 170px;
}
.bi-bi-currency-rupee{
position: absolute;
left: 740px;
top: 220px;
}
.carousel3{
position: absolute;
left: 450px;
top: 100px;
font-size: 3rem;
}
 }          
 .carousel-control-next{
  margin-right: 0px;
  }
  .carousel-item {
    height: 300px;
    }
.carouselmain {
  width: 100%;
  height: 300px;
}


.carousel-inner {
  height: 100px;
}

.responsive-font-example {
  font-size: 2rem;
}

.tagline {
  font-size: 1.5rem;
}

/* Media query for screens smaller than 768px */
@media (max-width: 768px) {
  .carousel-inner {
      height: 200px;
  }

  .responsive-font-example {
      font-size: 1.5rem;
      margin: 100px;
  }

  .tagline {
      font-size: 1.2rem;
      margin: 100px;
  }
}
.carousel-control-prev {
  position: absolute;
  top: 150px;
}
.carousel-control-next{
  position:absolute;
  top: 150px;
}

/* Media query for screens smaller than 480px */
@media (max-width: 480px) {
  .carousel-inner {
      height: 150px;
  }

  .responsive-font-example {
      font-size: 1.2rem;
      margin: 100px;
  }

  .tagline {
      font-size: 1rem;
      margin: 100px;
  }
}
/* Default styles for the carousel */
.carouselmain {
  width: 100%;
  text-align: center;
}
   .btn-upload{
                   position: relative;
                   padding: 11px 16px;
                   font-size: 15px;
                   line-height: 1.5;
                   border-radius: 10px;
                   background-color:black;
                   color:white;
                   border: 0;
                   overflow: hidden;
                   transition: 2s;
               
                  }
                  .btn-upload input[type='file']{
                   cursor:pointer;
                   position: absolute;
                   left: 0%;
                   top: 0%;
                 transform: scale(5);
                 opacity: 0;
               
                  }
                  input{
                    text-align: center;   
                }
                  .btn-upload{
                         position: absolute;
                         right: 650px;
                         top: 60px;
                       }
                       #txt{
                        position: relative;
                     top: 70px;

                      } 
                       .noofpagesbox{
                        width: 100px;
                        border-style: solid;
                        border-color: black;
                        border-radius: 10px;
                        margin-left: 15px;
                        position: relative;
                        left: 500px;
                        top: 45px;
        
                       }
                       .numcopies{
                        position: relative;
                        left: 500px;
                        
                       }
                       .nocopiesbox{
                               border-color:black;
                               border-radius: 10px;
                           margin-left: 15px;
                               width: 100px;
                              position: relative;
                             left: 500px;
                             }
                             .numpages{
                              position: relative;
                              left: 110px;
                              top: 70px;
                             }
                     #footer,#contact-section{
                        width: 80vw;
                        padding: 1rem;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                        background-color: white;
                        color: black;
                        border-radius: 0.5rem;
                        
                      }
                    