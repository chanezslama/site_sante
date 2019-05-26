import React, { Component } from 'react';
import { MDBView , MDBMask,MDBCard,MDBCardFooter,MDBIcon, MDBBtn} from 'mdbreact' 
import {MDBRow,MDBCol,MDBContainer} from 'mdbreact'


const MaladieCard=({info:{nom,image,description}})=>{
    return <MDBCard  style={{width:'400px'}} className="ml-4 mt-4">     
          
         <MDBView zoom > 
          <img  style={{height:'200px',width:'400px'}}
          src={image}/> 
          <MDBMask className="d-flex align-items-start " > 
          <div className="text-white text-left rgba-cyan-light px-2">              
              <h5 className="py-2 white-text font-weight-bold">
              {nom} 
              </h5>    
          </div>
          </MDBMask> 
          </MDBView> 
          <div className="py-3 px-3 white-text " style={{backgroundColor:'#14B9D5',height: '60px'}}>
          {nom} </div> 
          <div className="py-3 px-2 white-text bg-light " style={{backgroundColor:'#14B9D5',height: '50px'}}>
          symptômes, diagnostic et traitement </div> 
    <MDBCardFooter color="white"  style={{width:'400px'}}> 
     <p className="dark-grey-text d-flex text-left py-3 ">  {description} </p> <a href="#" className="d-flex justify-content-end"> Lire la suite <MDBIcon icon="angle-double-right" className="px-2" /> </a>     
     </MDBCardFooter>     
    </MDBCard> 
} 

const CarouselMaladie =()=>{
   return (
      <MDBContainer className="m-5"> 
        <MDBRow className="d-flex justify-content-center display-2 cyan-text mb-2"> Encore d'autre maladies  </MDBRow>

        <MDBRow> 
          <MDBCol md="12" className="mb-3"> 
          <MDBView zoom> 
          <img style={{height:'350px',width:'1200px'}} 
          src="https://img-3.journaldesfemmes.fr/Jnn6ygNHpEIyB2JtvaGnzEmWuFA=/910x360/smart/50ddd4987b184a84abc68161bc2fd4c7/ccmcms-jdf/10252267-maladies-renales-des-parcours-de-soin-souvent-chaotiques.jpg" />
          <MDBMask className="d-flex align-items-center"> 
            <h5 className="white-text font-weight-bold py-3 px-3 rgba-white-light" style={{height:'50px'}}>  Maladies rénales : des parcours de soin souvent chaotiques </h5> 
            </MDBMask>
          </MDBView>
          </MDBCol> 
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3"> 
          <MDBView zoom> 
          <img src="https://img-3.journaldesfemmes.fr/1_ORO80DqgjUkLqe1mgcbWZTMW0=/440x294/smart/8fdd75e6d23a4f2abaca539487eade05/ccmcms-jdf/11116698.jpg" className="img-fluid z-depth-1" alt="" />
          <MDBMask className="d-flex align-items-center"> 
            <h5 className="white-text font-weight-bold rgba-white-light ">  Problèmes de thyroïde : ce que disent vos symptômes </h5> 
            </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3"> 
            <MDBView zoom>  
            <img src="https://img1.topsante.com/var/topsante/storage/images/1/3/1/5/1315392/un-vaccin-contre-herpes-pour-reduire-risque-alzheimer.jpg?v1/cover=540x405" className="img-fluid z-depth-1" alt="" />
           <MDBMask className="d-flex align-items-center"> 
            <h5 className="white-text font-weight-bold rgba-white-light "> Alzheimer : le désarroi des patients face au déremboursement </h5> 
            </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3"> 
            <MDBView zoom> 
            <img src="https://img1.topsante.com/var/topsante/storage/images/6/1/5/615010/8839354-2/C-est-prouve-la-pollution-augmente-le-risque-d-acne-chez-l-adulte.jpg?v1/cover=540x405" className="img-fluid z-depth-1" alt="" />
            <MDBMask className="d-flex align-items-center"> 
            <h5 className="white-text font-weight-bold rgba-white-light px-5 py-2">  Ces plantes qui réparent la peau </h5> 
            </MDBMask>
          </MDBView>
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3"> 
         <MDBView zoom>
          <img src="https://e.mcdn.fr/files/styles/pano_xxl/public/images/article/6/7/8/5502876/vignette-focus.jpg?itok=2W9NxV0F" className="img-fluid z-depth-1" alt="" />
          <MDBMask className="d-flex align-items-center"> 
            <h5 className="white-text font-weight-bold rgba-white-light px-5 py-2 "> L'ostéo contre la migraine, ça vaut le coup d'essayer ! </h5> 
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="6" className="mb-3">
        <MDBView zoom>
          <img src="https://e.mcdn.fr/files/styles/pano_xxl/public/images/article/3/0/3/5495303/vignette-focus.jpg?itok=bKttD0gQ" className="img-fluid z-depth-1" alt="" / >
          <MDBMask className="d-flex align-items-center"> 
            <h5 className="white-text font-weight-bold rgba-white-light ">  Hypertension : un nouveau traitement potentiellement cancérigène </h5> 
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }

const list=[
{nom:'Maladie buccodentaire', description:'Une hygiène bucco-dentaire optimale est primordiale pour être en bonne santé. Voici des conseils pratiques afin de prévenir ou de soigner les problèmes de dents ou de bouche, comme les aphtes ou les caries dentaires ...',
image:'http://docseniors.com/wp-content/uploads/2015/02/Affections-bucco-dentaires-%C2%A9-freehandz-Fotolia_59675804_S-1.png'},
{nom:'Maladies chroniques', description:'Informer permet de mieux vivre avec la maladie chronique dont on souffre, qu’il s’agisse d’un diabete, de la maladie dAlzheimer, de la maladie de Parkinson ou, de migraine ou de constipation chroniques.',
image:'https://images.sudouest.fr/2017/05/31/592ede3066a4bd92291d121a/widescreen/1000x500/en-quatre-ans-les-depenses-de-sante-ont-augmente-de-10-2-milliards-deuros-pour-atteindre-133-6-milliards-en-2015.jpg'}
,
{nom:'Maladies de l’appareil circulatoire',image:'https://i-sam.unimedias.fr/2019/02/20/istock-842459726.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806' , description:'Les maladies cardiovasculaires constituent la première cause de décès dans le monde d’après l’OMS. C’est pourquoi il est important de prendre soin de son coeur, de ses artères et de sa circulation sanguine, afin de prévenir des maladies comme l’AVC, l’hypertension, l’arythmie ou la phlébite.'}
,
{nom:'Maladies de l’appareil digestif',image:'https://www.afa.asso.fr/uploads/media/default/0001/01/thumb_54_default_seize_neuf.jpeg',description:'Les maladies de l’appareil digestif sont souvent bénignes : c’est le cas d’une gastro-entérite, d’une diarrhée, de constipation ou de brûlures d’estomac. Néanmoins, ces problèmes peuvent plus graves : hépatites, ulcère de l’estomac, cancer du foie… Voici comment détecter les maladies de l’appareil digestif.'}
,
{nom:'Maladies de l’appareil respiratoire (ORL)',image:'https://www.entremed.fr/wp-content/uploads/2017/07/asthme-inhalateur.jpg',  description:'Les maladies de l’appareil respiratoire sont courantes : voici comment soigner des maladies comme le rhume, la sinusite ou le mal de gorge ou à prévenir des pathologies plus graves comme l’apnée du sommeil, la pneumonie ou même un cancer de la gorge ou un cancer des poumons.'}
,
{nom:'Maladies de l’œil',image:'https://www.selection.ca/wp-content/uploads/sites/15/2012/10/4-maladie-des-yeux-glaucome-BLACKDAY.jpg', description:'Les maladies des yeux sont nombreuses et peuvent toucher n’importe qui. Certaines sont contagieuses comme la conjonctivite, certaines sont très fréquentes comme les yeux secs, la myopie ou l’hypermétropie et d’autres ont tendance à apparaître avec l’âge comme la dégénérescence maculaire, la cataracte, le glaucome ou la presbytie.'}
,
{nom:'Maladies de peau', image:'https://www.dermatologie-larnier.ch/index.php/dermatologie-medicale/images/rolle-maladie-de-peau.jpg', description:'Les maladies de peau sont courantes et peuvent rapidement gâcher la vie. Entre zona, acné, urticaire, cellulite, vergetures ou rosacée, il est parfois difficile d’identifier ces problèmes de peau.'} 
,
{nom:'Maladies des reins et appareil urinaire',image:'https://www.sante-sur-le-net.com/wp-content/uploads/2018/03/semaine-nationale-rein.jpg', description:'Les maladies des reins ou de l’appareil urinaire sont nombreuses : cancer de la prostate, insuffisance rénale, cystite ou incontinence urinaire… PasseportSanté décrypte ces problèmes dans des fiches pratiques rédigées par des professionnels de santé.'}
, 
{nom:'Maladies du système immunitaire',image:'https://resize.doctipharma.fr/ext/dde3b708/files/2015-09/mal_de_gorge.png' , description:'Ces maladies résultent d’un dysfonctionnement du système immunitaire. C’est le cas par exemple de la sclérose en plaques, du diabète de type 1, d’un lupus, d’un vitiligo, d’un psoriasis ou encore d’une polyarthrite rhumatoïde.'}
,
{nom:'Maladies endocriniennes-métaboliques',image:'https://i-sam.unimedias.fr/2018/06/26/istock-889112838.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806', description:'Les maladies endocriniennes sont causées par un dysfonctionnement des hormones sécrétées par les glandes endocrines, comme les troubles de la thyroïde. Quant aux maladies métaboliques, elles empêchent la bonne transformation par l’organisme des sucres, des graisses et des protéines. Il peut s’agir par exemple d’un syndrome métabolique ou d’un diabète de type 1.'}
,
{nom:'Maladies génétiques', image:'https://img1.topsante.com/var/topsante/storage/images/1/3/1/7/1317474/maladies-genetiques-zoom-sur-ces-tests-qui-evaluent-les-risques.jpg?v1/cover=1024x683', description:'Les maladies génétiques ou héréditaires sont liées à des anomalies au niveau des chromosomes. C’est le cas du syndrome de Rett, de la mucoviscidose, d’une dystrophie musculaire ou de la maladie de Duchenne'}
,
{nom:'Maladies gynécologiques',image:'https://img1.topsante.com/var/topsante/storage/images/medecine/gyneco/endometriose/prevenir/endometriose-une-maladie-gynecologique-meconnue-188161/4019097-1-fre-FR/Endometriose-une-maladie-gynecologique-meconnue.jpg?v1/cover=1024x684', description:'Syphilis, infection urinaire, herpès génital… La gynécologie ou les maladies gynécologiques concernent les affections du système génital.'},

{nom:'Maladies infantiles',image:'https://storenotrefamilleprod.blob.core.windows.net/images/cms/article/337075/337075_large.jpg', description:'Les maladies infantiles touchent majoritairement les enfants, comme  la varicelle, la rougeole, la rubéole ou la gastro-entérite. Elles concernent aussi les troubles du développement qui se détectent dès la petite enfance, comme l’autisme, le syndrome de Rett ou l’hyperactivité.'} ,

{nom:'Maladies infectieuses',image:'https://www.docteurclic.com/galerie-photos/image_2956_400.jpg', description:'Les maladies infectieuses sont causées par la transmission d’une bactérie, d’un virus, d’un champignon ou d’un parasite. Une maladie infectieuse peut être bénigne : rhume, infection urinaire, herpès, grippe, etc... ou plus graves. C’est le cas du Sida ou VIH, d’un staphylocoque ou d’une pneumonie.'},
{nom:'Maladies mentales', image:'https://www.welovebuzz.com/wp-content/uploads/2018/02/man-concentrating-1-720x480.jpg', description:'Selon l’OMS, plus de 450 millions de personnes souffrent de troubles mentaux dans le monde. Les maladies mentales sont causées par un trouble comportemental, psychologique ou du développement : elles font partie de la santé globale. Il peut s’agir d’un TOC ou d’une dépression mais aussi de '},
{nom:'Maladies neurologiques',image:'https://www.frcneurodon.org/wp-content/uploads/2014/06/femme_agee_se_tenant_la_tete1-e1450708975555.jpg', description:'Un rapport de l’OMS affirme que les maladies neurologiques atteignant le système nerveux, concernent près d’un milliard de personnes dans le monde. On y inclut les maladies dégénératives comme Parkinson ou Alzheimer ou des pathologies comme '},

{nom:'Troubles des os et des articulations',image:'https://i-sam.unimedias.fr/2019/05/02/istock-543692118.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806', description:'Les troubles des articulations et des os concernent par exemple la hernie, l’arthrite ou l’arthrose, la lombalgie, les blessures musculaires, etc… Voici comment les prévenir ou les identifier.'}

,
{nom:'Cancers', image:'https://eccocongress.org/wp-content/uploads/2018/07/cancer-du-sein-1000x500.jpg', description:'A l’heure actuelle, l’OMS considère que les types de cancers les plus répandus sont les suivants : le cancer du poumon, le cancer de l’estomac, le cancer du foie, le cancer du côlon, le cancer du sein ainsi que le cancer du col de l’utérus. Voici des clés pour les prévenir ou les diagnostiquer au plus vite.'}
]


class Maladie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tab:list,
            name:''
         }
    } 

    handlechange=(event)=>{
        this.setState({
         [event.target.name]:event.target.value
        })
    } 

    getName=()=>{
       this.setState({
           tab:this.state.tab.filter(el=>el.nom.toUpperCase().includes(this.state.name.toUpperCase()))
       })
    }
    render() { 
        return ( <div className="py-5 px-4"> 
             <MDBView zoom > 
              <div className="d-flex justify-content-center"> 
              <img 
              style={{width:'1300px',height:'300px'}}
              alt=''
              src="http://www.conceptcaresolutions.com/wp-content/uploads/2018/10/doctors-resource-collaborative-albuquerque-1600x530.jpg" />
              </div>
             <MDBMask overlay="black-slight px-5"> 
             <div className="px-5"> 
             <h1 className="display-2 white-text"> Problèmes et Maladies </h1> 
             <h5 className="px-3 py-2 m-5 white-text rgba-grey-strong" > 
              Les fiches publiées sur  sont rédigées selon 
              une méthodologie de recherche qui a pour objectif de produire des documents fournissant 
              une information exacte, pratique, allant à l essentiel et incorporant les résultats significatifs
               des recherches scientifiques les plus récentes. 
              Pour plus d’informations concernant la rédaction de ces fiches, consultez notre méthodologie.
               </h5> 
             </div>
             </MDBMask>
             </MDBView>
          
 

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="12">         
            <div className="cyan-text m-4 d-flex justify-content-center align-items-center">
              <input 
                name="name"
                type="text"
                className="cyan-text"
                onChange={this.handlechange} 
                style={{width:'300px',border:'2px solid #2bbbad'}}
                /> 
              <MDBBtn onClick={this.getName} className=""> <MDBIcon icon="search" className="mr-3" />  rechercher </MDBBtn>
            </div>
         
        </MDBCol>
          </MDBRow>
                  
        <div className="d-flex flex-wrap ">{this.state.tab.map((el,index)=>  <MaladieCard info={el} key={index} />)} </div> 
    
          <CarouselMaladie/>
                  </div>  );
    }
}
 
export default Maladie;
 
