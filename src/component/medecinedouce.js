import React from "react";
import {  MDBRow, MDBCol,MDBBtn, MDBView, MDBMask  } from "mdbreact";
import MedecineDossier from './medecinedouce-dossier'
import MedecineHypnose from "./medecinedouce-dhypnose";
import MedecineTherapie from './medecinedouce-dtherapie'

const MedecineDouce = () => {
  return (
    <section className="text-center my-5">
    <p className="h1-responsive display-1 font-weight-bold my-5 green-text">
     Médecines Douces
    </p>
    <MDBRow>
      <MDBCol md="12" className="mb-4 ml-5">
        <MDBView zoom  className="d-flex justify-content-center">    
     <img style={{width:'1000px',height:'300px'}}
     src="http://www.medecine-alternative.fr/wp-content/uploads/2015/06/medecine-alternative-850x340.jpg"/>
    
    <MDBMask> 
    <div style={{maxWidth:'700px'}} className="text-white text-center d-flex flex-column align-items-center rgba-green-strong mt-5 px-4 rounded">
              <h3 className="mt-2 font-weight-bold">
                <strong>Peut-on guérir avec les médecines douces ? </strong>
              </h3>
              <p className="pb-3">
              La médecine douce a le vent en poupe, mais ce n'est pas qu'une mode :
               l'acupuncture, les soins par les plantes et la médecine traditionnelle offrent
                des réponses efficaces 
              à nos problèmes de santé. Découvrez ces techniques.
              </p>
          </div>
    </MDBMask>
        </MDBView>
      </MDBCol> 
      </MDBRow> 
      <MDBRow className="ml-4 mr-4" > 
      <MDBCol md="3" className="md-0 mb-4">
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/8/1318004/4-facons-douces-soulager-mal-gorge.jpg?v1/cover=500x500" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">
              4 façons douces de soulager un mal de gorge 
              </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol> 
      <MDBCol md="3" className="md-0 mb-4">
         <MDBView zoom > 
          <img  style={{height:'300px'}}
          src="https://www.optionnature.com/wp-content/uploads/2018/01/flacons-Huile-essentielle.png"/> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">
              Zoom sur les huiles essentielles
              </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol> 

     
      <MDBCol md="3" className="md-0 mb-4">
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src="https://previews.123rf.com/images/alexraths/alexraths1409/alexraths140900065/31600652-coupe-de-th%C3%A9-au-gingembre-avec-du-miel-et-de-citron-sur-table-en-bois.jpg" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">
              Les remèdes maison pour le rhume et la grippe 
              </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol>  
      <MDBCol md="3" className="md-0 mb-4 ">
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/4/1314194/baisse-forme-dopez-vous-gelee-royale.jpg?v1/cover=540x405" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold">
              Les remèdes contre la deprime saisonniere 
              </h4>    
          </div>
          </MDBMask>
      </MDBView>
      </MDBCol> 
    
    </MDBRow> 
    
    <MDBRow className="ml-5 mr-5"> 
            <MDBCol md="12"> 
             {/* <div className=" d-flex justify-content-start"> 
              <h1 className="font-weight-bold my-5  green-text" 
              style={{color:" #00c2c4"}}> Soigner Naturelement les maux d'hiver </h1> 
             </div>   */}
             <div className="d-flex mt-3 mb-4 align-items-end"> 
             <h1 className="display-5 font-weight-bold green-text" style={{color:"#00c2c4"}}> Soigner Naturelement les maux d'hiver </h1> 
             <hr className="text-right green-text" style={{ backgroundColor:'green',height:4,color:'green',width:'500px'}} />
             </div>
             <div style={{marginLeft:'150px'}}> 
             <div className="d-flex"> 
             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                alt=''
               src="http://nextews.com/images/40/eb/40ebd1937e270ecd.jpg"/>
            <MDBMask className="flex-center" overlay="purple-slight">
                <MDBBtn outline color="secondary" > Voir Details </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h5 className="font-weight-bold"> Les meilleures inhalations anti rhume  </h5> </p>
             </div>  


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                alt=''
               src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/6/1316733/une-tisane-contre-toux-irritation.jpg?v1/cover=500x500"/>
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir Details </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h5 className="font-weight-bold"> 5 tisanes maison contre la toux </h5> </p>
             </div>   


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                alt=''
               src="https://img1.topsante.com/var/topsante/storage/images/medecine/troubles-orl/angine/soigner/mal-a-la-gorge-c-est-une-angine-ou-une-pharyngite-10277/83238-2-fre-FR/Mal-a-la-gorge-c-est-une-angine-ou-une-pharyngite.jpg?v1/cover=540x405"/>
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir Details </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h5 className="font-weight-bold">  Les bons réflexes naturels contre les angines </h5> </p>
             </div>  
             </div> 

             <div className="d-flex"> 
             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                alt=''
               src="data:image/jpeg;base64,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"/>
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir Details </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h5 className="font-weight-bold"> Rhume, grippe...10 mesures efficaces contre les virus  </h5> </p>
             </div>  


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                alt=''
               src="http://www.canalvie.com/polopoly_fs/1.1028512!/image/rhume_14661.jpg_gen/derivatives/max_568/rhume_14661.jpg"/>
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir Details </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h5 className="font-weight-bold"> Coup de froid : vos 3 huiles essentielles anti-grippe  </h5> </p>
             </div>   


             <div className="d-flex flex-column mr-3"> 
             <MDBView hover zoom> 
               <img  style={{width:"250px",height:"200px"}} 
                className="img-fluid"
                alt=''
               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxUVFRUVFRUVFxUVFRUWFhUVFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tKzUtLS0uLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABFEAABAgQDBQUFBQUGBgMAAAABAAIDBBEhBTFBBhJRYXEigZGh8BMyscHRB0Ji4fEUI0NSkhVygoPC0hYzU1STshckNP/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAvEQACAgEEAQEHAwQDAAAAAAAAAQIRAwQSITFBBRMUIjJRYZGB0fAjUrHBFUKh/9oADAMBAAIRAxEAPwDdYYP3iv2qjwj3yrsIh0DDNQppmqKxRZiJc3UmIElcFBmsXgQ/fisHLeFfBVcbbOTH8Qno0qDaQ1Fs1MsKhSmEhZOU25k8i54/y3fJW8ntLKRaBkdlToTunwKakvqPa/oXG9wCiTBJFSpLXAioNRyQpk2TIkRhRWG6C0okI3SAkVSE6pSlTQD4ZOabERIZshkoYDQURiDVEhlCAMHFPqmhKEAMdmlSOzSVQA5KEgShABGlKhpwKAHVTHpyG8oAaAlcEyqWqYCJQkStQwHZJUhXJALvJEq5AGVwc9sq7qqTBffcrOfi7sNx5H4JR6G+yrxraIQWuc2lG2qdTlQcfLLNeb4ptLHiEl8UgH7oJFuTf1UfavHg524w9hmvE6lZZ8w53umnQVPe4qEm2WQSRbxJqprQk8zn1sm/twGh7t76gKnDHZ1cfBOaaakePyUNqLLLduIN1afH81LgTLHfeI6n5GyommvPwKexw4+IA/NRcSSkbGQxKNBvCiuaODXUHhdpWnw/bSIezGYH/ib2Xjq02PdTovMYUy5nBWcriANjbz/TyUblHoe2Muz17D8ShRv+W8E6tycOrTdT4ea8nl3GzmvIcMjqO8XWkwrat8MhswN4fzDPxyPkrI5l5K5YH3E3qR5USBPw4jd6G8OHDIjqDcIzJgEXB8CrlJFO1kiF5pHrmRBS1So5j8im2hUEJRIRUURhrZHgPByKExUSmoiEClD0AI5IE0OulCaAc1OSA2ShIBSlauCUBACkocRPKE4oARIVy4pgclCYnNQARcmuK4OSAJRIh7y5OgMjhccNc8k0Cz+1W2rdx8OE2tQRvHwNAPiqfaHGt0uYDTjT4V+Kw81iO9UNVSfgs2/UrYs3Ukuz0CRs0Dc38kjpc3qUWTw7fIFe71mh8Ikk2EhTLT9091/iFNhgHIkcjbyNlcyOB0p2VdyuEMpks0sqNcdO2jGxABZw7x9EphkirXAjn9Vr5zZuoqyn90/LgVQzGFuaTYg66GnMajmmsiYpYWiuaacRyNx3I8J3A08HeIN/NMe6h3bE8hXxCbQajvCmV0WsrMUI/wBP+0/Iq/lYwcNCO/zabjqsnCeR+Jvh5hWknHbUXLTpx7uPQKLSZJNmil2Oaaw3lp0FbHoVay+Ov92I58P8TaeJBse5ZyFMkCuY1I+Y4ownSRSzhwdl/VmD4qPKJcM3srHmS3ehR2Rhwe0B39Tfop0lioc72cVphv4GlD0K8zhTpYawnlrv+m459HDNWLdqS6jYooR/NryB1U1kKniPQp5g3HXpY5Kg/wCI4EDsudcAUDb1+iy+M7RRojNxrt0UoeJCq9m8AizcSgJDajfedBwHEqW+3wL2dL4jas23NQd1u7wrfxV3h+KxY5q2A4N4usPNEwzZmWgU3WAkfedcq4DxorFu8sqk4+EDZDdS9KpSwooeuUysa1qUBOSkoAalqhlyc1ADghPCOSh7ydgB3k2qlAJCUWBHqntRN0cFwARYhqaGpyRxoiwH0CRIHLkWB8t4zPFzi2tzd3eq8Opl66KKY2bjmT5IYjVz7h8yq0i1lnAeSVp8Akd529TnwWUw3tEBeh4H2QFTmnSo1afHbsvpeCKBT2QAcwgS1CFMYVkRvYJkE1t4FU21k6yFCu2rzZg1DqZ17lo2CmqzuKYcJqOGk+6LZHmrcaV8lWVvbwZ7CcN/diZc0tdErQ2LaVp2m6Voo+LSjWVd7hFzS7Xd30W2nQYLWtIoG1FhbgFiJmP+0RXMDf3TDfhvagDl5KzzZU4pRorYLtbtJv69VU2HDOfm35jVTmyQOY7iB4KQMGeBVgJ/Dn4FJyQlibASsZwyofiApZfrlp60PkeSSXlyTu74Dh9yKN3+l+XjTknzsItFHtLTxp6B8UWJxaAxKOFKV5a9wt5UUUtoKVJH8pG9bvuO8JPbd47z4jNc54IzrwIIPxz700QY6ERx8Q6g6WW62f2khS8uBu1eK1DaDvJKwTQa13gf8La+KMyYpceJofLIKS46INX2emyuITc0N7sQGfdBqXPHlZWwgxRQGMwdG/UryIYuajeebZCpFug05/qrb/iRlRW555n8k7r7goOXC/weny8YZCIYhGdAAB3hToddV5/IbXNgjtQgANQ8DvoVfyO2MrEuXbvW47iLKyMl5K5Yp3wjS1XPNlUs2ilK0/aIf9QRf7bliDSYg/8AkZ14qdoh7Kf9r/BMhmpSF9XdFChYvLZ/tELgP3jM+GadLTTCbPaTwDgSixPHJdpljEKY0p1aoTymQCVXNTGZJ9bIAR7k1jk0lKAgAjUOOU9iDMG6AOBSJlVyQHyJElYgzabcL5oTmkXII6inRaB1xVpQTHr7wHeo2d3J6ZBdSoXBbLbYVH0qsZLloNQKK6w6boc1nyxb5FHTTxL6r6o3UtGorCBEWXl5zmpgxpkFpdEdQD1ks6TG5KrNZDIUuVgw672qwsnj8WYP7tm4wcfePXh0Vbim00SE/dbU0zKtpoptSR6BjLGubQiqy8HCQ20MUFSb6kmqds/tGIw7ZutJDjMNKAKtyZaoopv7NP3hVS5NroZFBvN4a05H6+Ku4kB7x2WCnHVQ5iWdCcA7W4PH80ueySafBLhslpgbr2je/ldZw5g/MKDP7Mva0+wfUfyPAI6KygwGvHaAKkQ4TmnsRP8AC/tDxzHiVana5M0lT4PNsRwVzakwyw/huP6Tl4rNRZhwJBDTQ6kA8s17ZMlx9+F13SHDreh8l41t7Lhs0/dBbUNdercxQ9k04KUO6ZXk6tEcTXEtHeT4UNFEm8Ua0gVqedKDnT6qmMfmHHpQd51TmNBNXXPBW1RUk2uC+lozYlgHVzqRevE3+Kkb7ZZpe52+92TqVpwA+qomYiWigAA5a9eKmQY4eKONjx1+qKOnp8Mc/HTQ7+1XPPaNRe2lDpS/xSzDSBVhtwvYZ1pr+SrJmWdCNRdp14dVJlovTrr66qVG/E6Xspqmv5+BzIp4+FvgjmYd4ZWv3FRIjd01FgfLknB9e7LK90y6EnHjyEixj8L6+KSHMua6oJB45eNMkCI+3zQS716yQRyZmpGowvaubg2ZMRByLt4V40dXmtdhX2lR22jMbEAzI7L+trG3JeXQX148cvoKKwBsfyHeL+XJOwWLDnT3xT/z+ez3rBtr5WYo0P3H27ESjSTS4aa0d3K/JXzYYtreuPrmtJs1t5MS+6x5MWGKDccbgW9x/IaGylZztV6Klzhf6P8A0/3/ACe2hLVUmBbTS02KQn0fSphu7LxxoPvDmKq1eUzhZMU8cts1TDwXIUwbp0uU2ZGqCsHVcgrkhny/AiqU+Wa/kVWNcpstFooJnr8GSMltmrRxkTo7yTmQnjn0KlGhCQBNo1e7wT+H/IaBibm0Bv1QocN83MMhZCu848AKVKUw0klMOgPD29Dr2TmFDbXKMGs9P3K1wehy7IUECG0AAC/ElY/aSbb7QsZQEdpxAFQ0nLqq6fx55eSajXqocCVc+sWvvGpJzNdAoqNdnHyOntRLlnOZ22k8VuNncXDw291mJeUNKU0CSHJRYTvaBrt0GpoDkqZJMuxtpHtLIznQHCG6jyDum1QeNDavVV0SVEKGxhiOiObXtPNXOc65JPcvPcSx+JCewQZsxGkAuaGjs2Fi+lyTWwyV5JYj7WM2JvGm6BTOh1qlLqiWONy4NVEnfZNBzcbNHNFwGA4B73mrnuJ5DkOSzEnO+2mN8nsN7MPgRq8Dn8AFrJWOMhkPVU6SJZIbY/dlqLrx77U4f/2/8pn/ALPXrwdZeN/aHNb85Epk0NZ4NBPmSpMx0eevh0cfJSG5erp05DqgQHWurk7LdK1bix8VlU+WjEGh7kgN0saHr5j6JmxRp7olnCjkihuPKnHh5qJEgbhqBVpyrpXTohy0bx16KaKOF7jUWt4aIN0Ws0fv4Ehmoo7lS/Ljl+iA4kGh6XSw2lppUXypqOHNEis3h08xfJBJ3KP3RGiOr6+SFvJzgfWfehREzFOXklwXlSobwaUzGnPprXgoMA3opTO8firW+lRVBrwttEtulNfnX6qMw0PrmjQuHhbxz8VFintevWqDTkdJMsIU45pBDqFuRBoQeR71uNnPtCex3s5qr223Xj323Aqf5hnztqvOAc7/AJhFY/L4/mnZVljDPHbkV/zwfS2HzDIjA9jg5pFnNNR4hEjk0XhGy21UWSeS3tQ3ntwz7p/EP5XcxpovYcHxyDOQt+C+tPebk5pPEfNSPN6zQTwPcuY/X9yZQrkVrKjNIijDZ8oltDRSGOCNMQgbqI1QaPSuDxSosJeLQ8lNsqmGVPhuNE0zp6bJaphHPTC+qaTZDJQWSyA47B3a8keQiXAJsMgo0WLkUBzqGoPrgoPk42rxxk9y7N5hpF7rSyrWuaWuFiKFeZ4Ti+6bra4biIIzWeUWjLGaaoz2N4eYTyAKjQ8lFi4kYbGw2mhiA7x1DAcuROVeq0uLkOvVUmMSLXRGxmgXADh0Tj9yLdPg1+z/APyg/Kgo3pxVxh84XEgH1osTCxkMbSqBD2lbCcXA9wUWm2TllT7PRcXxp0vCc+JQADsitydAvH5yYL3FzjUuJcTzJqfNFxfaGJNOBeey33W/M81FlWe0iMZvAbzg0uOlTmpVS5MspX0Ro7bKuHZdyK96wX7OcOLB7Qviu1JiFo7g2itP/jfCv+1B6xIh/wBShDUwatFSybZWfOxHBHa+o/Wv5L6BfsDhIH/5m/1v/wByhxNhcIH8EDpFiD/Uh6zGuzZDWRT6Z4E9tDXTXRToUSw+vwGS9ijbAYQcmvHSM4/GqiO+znDvuRY7ej2H4tUff8PksxayEJXzR5dEhbwpXoUKC8A0NjXWy9Of9m0t9yaiD+81rvhRQJv7MYhvDmYTuTg5nTipx1uCXUjb75hb3J0/1PO5llD18iohNFscX2LnILSXwt5ur4Tg7yz8ljIliRwWiM4y+V2UZpR+aL4YeXN81NY2vzv8vzVfLm6mtPT8uKmaNM00SGGhPl8MuKDMmjncPQRg71bhY80KZFz4fog2ZfkBmw8uddDzTmWvwrXXy/RDcdNfC30TwePiOYsgzLsPXy9EKwwTF4kvEESG4gggmlaEagjUEHzVWXePqnkmtdr8q5/mmmXua6fR7th+3kk+Gxz3+zcQN5hBO6dRXVIvEWPtmFydmB+laZ8q/wAr9iMDoo8eDS6kuCc29ig2yxqapkBkRTZeMoc1B3TUJYMRR6M+Kcsc6ZMiPoUwkkLnit0ExdAmXznzz0GEuCLlIZI5C6AY3NFgzR4pEFLDLholwMCcTvE56BW8CVMMWJoqqFPkaqdDxXiikzRj0mkfgmOJPPqocZpyJIHJSGYg05pHzbCjavoafdNO1W1FNFw4u/iHkq+LJvbmK8wtNvsJ4IMSEK2KHEyZ/SMM18HDKGG0qVABBB4EKVFlSL06p8nLe1cGjM+Spl9Gefy6eeGeyXZ6BKT5YwO3y0UGq0zJmKGNeIm8CvOcfknRGQ4UN1m+9zWqkZgwpUQ3GtKAVXGekjHG23yaVgWy32XTMYfWjgCp8Kda4dqG0rLy0WpV3Klct5ZryY5RRaMhQT/CHdZSWScE/wAMKJAU2GrYZZPsqcUEhSED+RHZJQhkwJsNSGrbjqS5S/BWxkQMY0ndFgdF8u7SRA+YixGigdEfYZU3jRfS+Nh5gRRDFXljg0cyLLyeR+yWPEH76OyHUZNBeR31AWzTZYQk3J19DVgcYwk5M8xlndoKzYT+f1tdb6Z+xqM3tQZpjyPuvYWV/wAQJ+CxuJ4XFlonsozDDePum4I0c05EcwulDLCfTOl6fljLi+SO08voUyYNDXp3fVOFddLHnwKDOGw9c1M6OV/02CByuiA06HOnGqBDupDtNbegkZcfKs4lI314apK29dfkmty4fncJkpPkOGg3JPklQy49fFcgsuI94unAJYwTYZU2X1UqBTwsq9jwrCcPZVRVJnN1ktuQnCIaJg4pGlJMRKBRISn8O5kKYi3SQoxCaxlboxYApHLW+T3WPbNKQyZVd7OpspcKWKTNODLmb4JjJlPEwoPsCEx4clRq95yRXKLVszzRGTJBzVF7YhPbNpko+p12aOFiB1Vlh0VgJcLOoshCmqqZCjnioSVqmalqceojU+fuegYbDLjvHIXKa6fMV34RYD5rOyGOPawsrnauoCtcOe0gbpXO1eOSg6MuowzirXKNJJOWhkys1IlaKTiDUrzs1zRzpIuICmQ1WMnIbfeeB1Ks4RBFQahShGS5orcWSYZRg5AYihbITaRU0c51ivN9tPtAMu50KXAc5tnOOQPAcSr/AGx2rgycN4Lx7XdO4zUk2HcvBv2kuJcTUuJLq6k5la9Jp1mblNcL/wBNukwRnbn+hqsO+0ycEUCI4FpOgpRej4xLsxSSdVo9tCbvsPG1adDkvAxAJiNa0XJAb3r6A2XgGDCq77sM73gpazZpckHj4vtf7I08cty7TPFS3l60UacPZHVSo8SpcRxJHQmyizZ7PfXyXaR6DO/6boDDNO/JE3vp6KFC4d+lvXJEinmkZIfLZzyhB1EyI6pSFtKFMqlO3aH+1K5DKVBDdItHXCA11CjNyUd+amzqZH0xs4bKqdmrSYFQqp6TOTrvmsK2IhxDUpocuh3KRjc9ySDMZQJsRGQzcpF0o8Uh8pC1VjDYgQWqS1JnS0uJQiIWJjoKkAJ1EGt4lIrY0sqyNCotE8KunoVlJHM1ukW3cioBIKlwY6jPauaE2cXHOUJcFnDmVZyc6WmoKz7GlTJd6g0dbS6qV1I9MwWca9u8fBa6Sc0sBAXl2zMwQ+hyIW2lZynZaufkxQxyui3UQjB2vJA2pwyYfErCoWnifd7lvdly8QGNie80AEqrkJbeu49y0cqABQLBqdbCUfZxMebOnDYicxEQ2Js3GDGOcdAT4BZE6RhPAPtLnfbYhFoahm6zwFT5lZZtdOgtnyVnLSUedjPdDhueYj3OrQ0G84kVJtSi9I2Y2IhSlI0y5roguK+6zpXMrsz1OPS4lF8uuvJrjPalRC2C2Nc3dmJhtHZw2H7v4jzVx9oG0LIUAy0JwMSIKPLT7jNe85Ko2u26F4MqanJz9B0WCiPJNTWpzJNSe9ZtLpcmfL7xn/Rfz+M06bC8kt8/Arv1QJv3eN08vUeO+oNF2zoZpraxjT1y4pgemH5JWg6Aoo5+5jm5ojyiQZVxGXj9FKgyYGadGnFpskkQRBPA+a5W+8BolTpGr3GH9xGhFBmEsByWYan4HJ3jI7nVCrn5qeFAjZqJytU+E2BKLL5oL0WXKDBjfxokPKbCKR5SQkjVu+MnQypDXKG1yK1yR0sWSiR7VEa8lBYEQOog1wk/LHbiSJK1Xe0SiMiydY3xIAMOaiMkWhF9qkEROyKw4F1FCiTbwQ3SYCKIqG+Oiyc44UuiRJghw3VoJOI8GqzkF5BqFYS888a+KzajT+1VGfPpPb1To2MniLm5lWUPaENoN8VWGOKE5jzQzHGYsVhh6UrufJlXpWRdnqctibnD3lOE3vDPxXlbcec0UBK47QxB7p81pWiguNqF/wAZkl4o9KxDERChucxragE0FBVeP49is1MuO+47tbN0Ckx8YjOzeb6KC56sw6LHjk50rNeD02MF8T5IsKRIGd9U5skNSjOfdMMVbODYsOKPAgk2BcZRnBD9qU32qLIt4V/1QZsKGPuhEqBkAoZiJBERuEssY9JEx0QITnqO6ImOelZGeoCmIuQd9cizP7T7nQSjRMly5SXQQ+UiPVfMZrlyRzNX8pHenS6VchnMj86DOTmLlyibF2FaVIYkXJG3EGa9OLki5I1qToQuQYkdcuTSKM+SUVwCM2itikpFydGbFmnJ02SYUNGbACVcmdnFjjSDMsn1XLkzUuEKHJ9Vy5Mti7GlNJXLkCkNBTHvXLlEok3QJ7kIOXLkjLNuxjimly5ckZ5Nnb6Sq5cmQcmdVcVy5ACVXLlyZE//2Q=="/>
            <MDBMask className="flex-center" overlay="black-light">
                <MDBBtn outline color="secondary" > Voir Details </MDBBtn>
              </MDBMask>
             </MDBView> 
             <p  className="text-center mt-4" style={{maxWidth:'250px'}}> <h5 className="font-weight-bold">  Coup de froid : vos 3 huiles essentielles anti-grippe  </h5> </p>
             </div>  
             </div> 
             </div>
            </MDBCol>
          </MDBRow> 

          <MedecineDossier/> 
          <MedecineHypnose/> 
          <MedecineTherapie/>





  </section>
  );
}

export default MedecineDouce;