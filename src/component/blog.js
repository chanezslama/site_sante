import React from "react";
import {  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView, MDBBtn} from "mdbreact";
import Documentation from './accordation' 



const PsychologieCard=({data:{image,title,description}})=>{
  return <div style={{ width: "18rem" }} className="mr-3 mb-3"> 
         <MDBView zoom> 
          <img  style={{height:'300px'}}
          src={image} className="img-fluid" /> 
          <MDBMask className="d-flex align-items-center " > 
          <div className="text-white text-center rgba-black-light px-2 rounded" style={{width:'250px'}}>              
              <h4 className="py-2 font-weight-bold"> {title}
              </h4>    
          </div>
          </MDBMask>
      </MDBView>
       <div className="px-2 py-3" style={{maxHeight:'250px'}}>
          {description.substring(0,100)+'...'}
       </div> 
       <div className="text-center">
          <MDBBtn  outline className="text-center" color="purple">  Details </MDBBtn>
      </div> 
      </div> 



}

const listpsychologie=[{ title:'4 astuces pour tomber amoureux de son corps',image:'https://nospensees.fr/wp-content/uploads/2015/02/article13637780674.jpg',description:' Pour se sentir mieux avec son corps, plusieurs techniques peuvent fonctionner. A vous de toutes les essayer, pour trouver la meilleure.'}
,
{title:'5 astuces pour reprendre le contrôle de sa vie',image:'data:image/jpeg;base64,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',description:'Retrouver un équilibre émotionnel et physique passe par différentes étapes. Diminuer les stimulations externes, établir des limites avec certaines personnes'} ,
{title:'La première étape pour apprendre à aimer',image:'https://www.policlinicagipuzkoa.com/wp-content/uploads/2013/06/Corazon1-640x400.jpg',description:'Prendre conscience de la petite voix intérieure qui nous critique constamment, et apprendre à vivre avec plutôt qu’essayer de l’étouffer'} ,
{title:'Parents : communiquer avec son enfant adulte',image:'data:image/jpeg;base64,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',description:'La communication entre les parents et les enfants à l’âge adulte n’est pas toujours aisée. Souvent, certaines remarquent qui naissent d’un sentiment d’amour '} ,
{title:'Trier ses affaires : quel effet sur le moral ?',image:'https://test.psychologies.com/var/tests/storage/images/6/5/1/7/7156-1-fre-FR/3508_thumb_434_265.jpg',description:'La méthode de rangement mise au point par la Japonaise Marie Kondo fait des adeptes dans le monde entier. Mais comment le simple fait de ranger ses affaires peutil avoir des '} ,
{title:'5 astuces pour se réveiller de bonne humeur',image:'https://static1.terrafemina.com/articles/7/32/65/57/@/465387-recuperer-son-retard-de-sommeil-953x0-2.jpg',description:'5 astuces pour se réveiller de bonne humeur Donner du sens à son quotidien, trouver du bonheur dans nos souvenirs, cultiver le sentiment de reconnaissance, privilégier les bonnes nouvelles et s’oxygéner dès le matin permet de commencer la journée en bonne forme morale. '} ,
{title:'Quoi faire en cas de négativité pendant les fêtes',image:'https://i-sam.unimedias.fr/2018/12/31/istock-627724082.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050',description:'Culpabilité, colère et ressentiment peuvent être au rendez-vous pendant la période des fêtes. Vous n’êtes pas seul·e, et vous pouvez trouver des solutions en partageant votre état d’âme, en cherchant des compromis,'} ,
{title:'5 signes qui il est temps de calmer son rythme de vie',image:'https://images.assetsdelivery.com/compings_v2/vadimgozhda/vadimgozhda1503/vadimgozhda150300897.jpg',description:'Notre envie d’accomplir toujours plus de tâches au quotidien peut nous épuiser et nous dissiper. Certains signes d’alerte peuvent nous mettre la puce à l’oreille et nous aider à éliminer le superflu mental et physique de notre vie'} ,
{title:'5 bonnes résolutions pour accepter son corps',image:'data:image/jpeg;base64,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',description:'Changer le regard que nous portons sur notre corps et remettre en question nos préjugés inconscients n’est pas une affaire facile. Mais quelques bons réflexes peuvent nous aider à amorcer cette transformation, pour apprendre à mieux nous accepter et vivre sereinement.'} ,
{title:'Ce que l’argent révèle de votre personnalité…',image:'https://e.mcdn.fr/files/styles/pano_xxl/public/images/article/4/1/3/2704314/vignette-focus_0.jpg?itok=-SHpQqz7',description:'La manière dont vous gérez ou utilisez votre argent révèle votre personnalité. Elle révèle vos peurs, vos priorités ou simplement votre manière de fonctionner… Voici un petit décodage de différentes attitudes face à l’argent.'} ,
{title:'Envie de tout acheter… Pourquoi ? Et que faire ?',image:'https://images.spot.im/v1/production/faytercy0snfcpyllibu',description:'L’accro du shopping , vous connaissez ? Ce roman met en scène une acheteuse compulsive. Elle achète, achète, mettant en péril son compte en banque. Si ce roman est drôlissime, la réalité des acheteurs compulsifs l’est nettement moins !'} ,
{title:'Dépression : la maladie du siècle ?',image:'https://www.etat-depressif.com/wp-content/uploads/2018/10/depression-parler-soigner.jpg',description:'Un homme sur dix et une femme sur cinq souffrirait de dépression. Une souffrance qui peut toucher tout le monde : les plus jeunes comme les plus âgés ! Alors, comment sen sortir de ce cercle vicieux ?'} ,
{title:'Qu’est-ce qu’est la maladie bipolaire ?',image:'https://www.sante-sur-le-net.com/wp-content/uploads/2017/06/troubles-bipolaires.jpg',description:'Le trouble bipolaire (psychose maniaco-dépressive) fait partie des troubles de l’humeur auxquels appartient également la dépression récurrente (ou trouble unipolaire).Cest une maladie qui dans sa forme la plus typique comporte deux phases'} ,
{title:'La phobie : cette peur irrationnelle',image:'https://resize.prod.docfr.doc-media.fr/img/var/doctissimo/storage/images/media/images/phobie-d-impulsion-1/7786648-1-fre-FR/phobie-d-impulsion-1.jpg',description:'les phobies appartiennent au groupe des névroses. Au sens Freudien, le terme de névrose désigne une maladie de la personnalité expliquée par des facteurs essentiellement psychologiques.'} ,
{title:'Stop aux addictions !',image:'https://sante-pratique-paris.fr/wp-content/uploads/2018/06/addiction_AdobeStock_67171930_eyetronic.jpg',description:'Alcoolisme, toxicomanies, tabagisme... arrêter est possible. Découvrez comment en lisant nos articles.'} ,
{title:'Tout sur les troubles psychologiques',image:'https://files.sympa-sympa.com/files/news/part_13/135060/1572710-2017-03-2813-1490697576-650-bb422df6d4-1540472993.jpg',description:'Troubles du comportement ou de la personnalité : nos articles vous permettront de mieux les comprendre pour savoir comment agir.'}

]

const BlogPage = () => {
  return (
    <div className="px-5 pb-5"> 
         <div style={{
            backgroundImage: "url('https://previews.123rf.com/images/zagandesign/zagandesign1308/zagandesign130800164/21760680-ic%C3%B4ne-psychologie-fix%C3%A9-vecteur-abstrait.jpg')"
          }}> 
        <MDBRow>
          <MDBCol lg="5" className="align-self-center rgba-black-strong pl-5 white-text">          
            <h2 className="display-2 text-center purple-text pb-4">
             Psychologie
            </h2> 
            <p>   
            <span className="font-weight-bolder purple-text" style={{fontSize:'40px'}}>E</span>tre heureux, c’est d’abord être bien dans sa tête. Pas toujours facile, surtout face aux aléas de la vie.
             Dans cette rubrique, des spécialistes du développement personnel vous donnent toutes les clés pour mieux vous connaître, 
             affirmer votre personnalité, ou encore accepter vos imperfections…Pas simple non plus de se mettre dans la tête de l’un 
             de ses proches. </p>
             <p>  Nos dossiers « psycho enfant » et « psycho ado » vous aideront à décrypter les comportements, parfois drôles,
              tantôt agaçants, de votre
              progéniture. Vous découvrirez entre autres comment stopper une colère ou repérer un mal-être à l’adolescence.
            </p> 
          </MDBCol> 
          <MDBCol lg="7"> 
            <Documentation/>
          </MDBCol>
        </MDBRow> 
        </div>
        <hr className="my-5" />
        <MDBRow >
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Psycho couple
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Psycho couple</strong>
            </h3>
            <p>
            La psychologie tient une place prépondérante dans la vie d’un couple.
             De nombreuses questions sur le thème de la psychologie amoureuse ont été posées à nos experts.
              Comment mieux communiquer avec son ou sa chéri(e) ? Peut-on aimer sans être amoureux(se) ? 
            Comment savoir s’il m’aime pour mon argent ? 
            </p>
         
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Details 
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5" >
            <MDBView className="rounded-circle z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid rounded-circle"
                src="https://image.freepik.com/fotos-kostenlos/paar-sitzt-auf-gras-auf-einander-in-die-augen-schauen_1153-1933.jpg"
                alt="" 
                style={{width:'550px'}}
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded-circle z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid rounded-circle"
                src="http://blog.mass.gov/wp-content/uploads/2014/09/teenagers_talking.jpg"
                style={{width:'550px'}}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Psycho adolescent

              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Psycho adolescent </strong>
            </h3>
            <p>
            Les parents ont beau être passés eux aussi par la case adolescence, il leur est difficile de toujours bien comprendre ce qu’il se passe dans la tête de leurs enfants. Lunatique, renfermé, irritable… Les clichés sur l’ado ont la peau dure. Et ce n’est surtout pas 
            une raison pour vous résigner. 
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
            Details
            </MDBBtn>
          </MDBCol>
        </MDBRow> 
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Psycho enfants
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Psycho enfants </strong>
            </h3>
            <p>
            Votre rôle en tant que parents ? Aider votre enfant à bien grandir, quel que soit son caractère. Il est timide ? turbulent ? capricieux ? Il refuse d’obéir ? Il a peur du noir ? Qu’il s’agisse d’un petit chagrin ou d’un réel trouble du comportement, nos experts vous conseillent pour
             accompagner au mieux votre bout de chou dans son développement de 2 à 10 ans. 
            </p>
         
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Details
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded-circle z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                style={{width:'550px',height:'350px'}}
                 src="http://www.aloeveraforevergel.com/media/zoo/images/enfants_218d9a60de4dd22366a7e84c16449276.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow> 


        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded-circle z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid rounded-circle"
                style={{width:'550px',height:'350px'}}
                src="https://media.ooreka.fr/static/vert/intro/intro-psychotherapie.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Psychothérapie

              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Psychothérapie </strong>
            </h3>
            <p>

            Sigmund Freud et la psychanalyse, ça vous parle ? Eh bien, 
            c’est de ce génie autrichien que découle un grand nombre de psychothérapies. Ces soins de l’esprit s’appuyant sur le psychisme pour traiter divers maux passent par la parole du patient et une relation particulière d’alliance avec le thérapeute. 
            Et quand nous parlons de « divers maux »            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
            Details
            </MDBBtn>
          </MDBCol>
        </MDBRow> 
          
        <MDBRow> 
        <div className="d-flex mt-5 mb-5 align-items-end"> 
         <h1 className="display-5 font-weight-bold purple-text" style={{color:"#00c2c4"}}> Nos Tops Sujets psychologie </h1> 
         <hr className="text-left purple-text" style={{ backgroundColor:'purple',height:4,color:'purple',width:'700px'}} />
        </div> 
        <div className="d-flex flex-wrap"> 
        {listpsychologie.map((el,index)=> <PsychologieCard data={el} key={index}/>)}  
        </div>
        </MDBRow>   

      </div>
  );
}

export default BlogPage;