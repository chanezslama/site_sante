import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const MultiCarouselPage = () => {
  return (
    <MDBContainer style={{width:'600px'}}>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1"> 
              <MDBRow> 
              <MDBCol md="12">
                <div className="mb-2">
                  <div>
                    <div className="white-text mb-4 p-3" style={{backgroundColor:'purple',height:'80px'}}>
                    الحمل والصيام
                    </div> 
                    <div className="white-text p-3 mb-3 rgba-black-light" style={{height:'80px'}}>
                    انا حامل في الشهر الخامس 
هل الصوم لا يؤذيني
مع العلم انا لا اعاني من اي مرض والحمد لله 
كل التحاليل بخير                    </div> 
                    <MDBBtn color="purple" outline> Details </MDBBtn>
                  </div>
                </div>
              </MDBCol> 
             
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2"> 
              <MDBRow>
              <MDBCol md="12">
                <div className="mb-2">
                  <div>
                    <div className="white-text mb-4 p-3" style={{backgroundColor:'purple',height:'80px'}}>
                    شنوة الحل لخلخلة الأسنان و إصفرار الأسنان
                    </div> 
                    <div className="white-text p-3 mb-3 rgba-black-light" style={{height:'80px'}}>
                    Bonjour,Un détartrage suivit d' un éclaircissement dentaire.
                    </div> 
                    <MDBBtn color="purple" outline> Details </MDBBtn>
                  </div>
                </div>
              </MDBCol> 
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3"> 
             <MDBRow>
             <MDBCol md="12">
                <div className="mb-2">
                  <div>
                    <div className="white-text mb-4 p-3" style={{backgroundColor:'purple',height:'80px'}}>
                    شنوة الحل لخلخلة الأسنان و إصفرار الأسنان
                    </div> 
                    <div className="white-text p-3 mb-3 rgba-black-light" style={{height:'80px'}}>
                    Bonjour,Un détartrage suivit d' un éclaircissement dentaire.
                    </div> 
                    <MDBBtn color="purple" outline> Details </MDBBtn>
                  </div>
                </div>
              </MDBCol> 
              </MDBRow>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default MultiCarouselPage;