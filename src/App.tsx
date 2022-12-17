import './App.css';
import {gsap, Expo} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import FAQ from './Components/faq_Component/faq_Component';
import TeamCard from './Components/member-card/member-card';
import Gallery from './Components/gallery/Gallery';
import Header from './Components/header/Header';
import {Footer} from './Components/footer/footerComponent';

import { UtiliteCard } from './Components/utilties/utilite-card';
import { Snippets } from './Components/gallery/slider';
import {GiChampions} from 'react-icons/gi'


function App() {

  gsap.registerPlugin(ScrollTrigger);

//  const [hamburgerisActive, setHamburgerisActive] = useState(false);

useEffect(
  ()=> {


    initialAnimations();
    initScrollAnimations();
     
  }
);





 function initScrollAnimations(): void {
    
    gsap.fromTo('.paragraph',{}, {
      scrollTrigger: {
        trigger: '.paragraph',
        start: '50% center',
        scrub: true,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      duration: 0.5,
      color: '#ff1111',
       invalidateOnRefresh: true
    });
      gsap.fromTo('#story', {
        opacity: 0,
        // duration: 0.5,
        y: -150,
        ease: Expo.easeInOut,
      }, { 
        scrollTrigger: {
          trigger: '#story',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        } as ScrollTrigger.Vars,
        opacity: 1,
        duration: 0.5,
        y: 0,});
    gsap.fromTo('#story-line', {
      y: -150,
      ease: Expo.easeInOut,
    }, {
      scrollTrigger: {
        trigger: '#story-line',
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      } as ScrollTrigger.Vars,
      duration: 0.5,
      y:0,
    });

    gsap.fromTo('#full-story', {
      
      opacity: 0,
      
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: '#full-story',
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 13,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      opacity:1,
      duration: 0.5,
    });
    
    gsap.fromTo('#road-map', {
      
      opacity: 0,
      
      y: -150,
     
    }, {
      scrollTrigger: {
        trigger: '#road-map',
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 14,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      duration: 0.4,
      opacity:1,
      y:0,
       ease: Expo.easeInOut,
    });

    gsap.fromTo('#phase-1', {
     
      opacity: 0,
      
      ease: Expo.easeInOut,

      x: -300,
    },{
       scrollTrigger: {
        trigger: '#phase-1',
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 15,
        invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      duration: 0.4,
      opacity:1,
      x:0

    });

    gsap.fromTo('#phase-2', {
     
      opacity: 0,
     
      x: 300,
      ease: Expo.easeInOut,
    }, 
    {
       scrollTrigger: {
        trigger: '#phase-2',
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 15,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
       duration: 0.4,
       opacity:1,
       x:0
    });

    gsap.fromTo("#phase-3", {
      
      opacity: 0,
      
      x: -300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-3",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 15,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      duration: 0.5,
      opacity:1,
      x:0
    });
    gsap.fromTo("#phase-4", {
      opacity: 0,

      
      x: 300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-4",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 15,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      duration: 0.4,
      opacity:1,
      x:0
    });
    gsap.fromTo("#phase-5", {
      
      opacity: 0,
      x: -300,
      ease: Expo.easeInOut,
       
    },{
      scrollTrigger: {
        trigger: "#phase-5",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        // refreshPriority: 15,
        // invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
      duration: 0.4,
      opacity:1,
      x:0
    });

    gsap.fromTo("#phase-6", {
      
      opacity: 0,
      
      x: 300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-6",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },duration: 0.4,
      x:0,
      opacity:1,
    });
    gsap.fromTo("#phase-7", {
      
      opacity: 0,
      
      x: -300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-7",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },
      duration: 0.4,
      x:0,
      opacity:1
    });
    gsap.fromTo("#phase-8", {
     
      opacity: 0,
      
      x: 300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
              trigger: "#phase-8",
              start: 'top 90%',
              end: 'top 60%',
              scrub: true,
            
            },
            duration: 0.4,
            x:0,
            opacity:1
    });
    gsap.fromTo("#phase-9", {
      opacity: 0,
      x: -300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-9",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },
      duration: 0.4,
      x:0,
      opacity:1
    });
    gsap.fromTo("#phase-10", {
      
      opacity: 0,
      
      x: 300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-10",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },
      duration: 0.4,
      x:0,
      opacity:1,
    });
    gsap.fromTo("#phase-11", {
      
      opacity: 0,
      
      x: -300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-11",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },
      duration: 0.4,
      x:0,
      opacity:1,

    });

     gsap.fromTo("#phase-12", {
      
      opacity: 0,
      
      x: 300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-12",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },
      duration: 0.4,
      x:0,
      opacity:1,

    });

     gsap.fromTo("#phase-13", {
      
      opacity: 0,
      
      x: -300,
      ease: Expo.easeInOut,
    },{
      scrollTrigger: {
        trigger: "#phase-13",
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
       
      },
      duration: 0.4,
      x:0,
      opacity:1,

    });
    gsap.fromTo("#family-line", {
      
      opacity: 0,
      
      x: -250,
      ease: Expo.easeInOut,
    },{
        scrollTrigger: {
                trigger: "#family-line",
                start: 'top 85%',
                end: 'top 35%',
                scrub: true,
              
              } as ScrollTrigger.Vars,
              duration: 2,
              opacity:1,
              x:0
    });
    gsap.fromTo('#t-card-1',{
      opacity: 0, 
      y: 200
    },{
      scrollTrigger:{
        trigger:'#t-card-1',
        start:'top 85%',
        end:'top 35%',
        scrub: true
      },
      duration:1 ,
      opacity:1,
      y:0
    });
    gsap.fromTo('#t-card-2',{
      
      opacity: 0, 
    
      
      y: 200
    },{
      scrollTrigger:{
        trigger:'#t-card-2',
        start:'top 85%',
        end:'top 35%',
        scrub: true
      },
      opacity:1,
      y:0,
      duration:1 ,
      delay:1,
    });
    gsap.fromTo('#t-card-3',{
      
      opacity: 0, 
         
      y: 200
    },{
        scrollTrigger:{
                trigger:'#t-card-3',
                start:'top 85%',
                end:'top 35%',
                scrub: true
              },
              duration:1 ,
              opacity:1,
              y:0
    });
    gsap.fromTo('#t-card-4',{
      opacity: 0, 
      y: 200
    },{
       scrollTrigger:{
        trigger:'#t-card-4',
        start:'top 85%',
        end:'top 35%',
        scrub: true
      },
      duration:1 ,
      delay:1,
      opacity:1,
      y:0,
    });

     gsap.fromTo('#secTeam1', {
     
      opacity: 0,
      
      ease: Expo.easeInOut,

      x: -500,
    },{
       scrollTrigger: {
        trigger: '#secTeam1',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        // refreshPriority: 15,
        invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
     
      opacity:1,
      x:0,
      ease: Expo.easeInOut

    });


     gsap.fromTo('#secTeam2', {
     
      opacity: 0,
      
      ease: Expo.easeInOut,

      x: 500,
    },{
       scrollTrigger: {
        trigger: '#secTeam2',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        // refreshPriority: 15,
        invalidateOnRefresh: true,
      } as ScrollTrigger.Vars,
     
      opacity:1,
      x:0,
      ease: Expo.easeInOut

    });

    gsap.fromTo('.faq-title',{
      opacity: 0, 
      x: 200
    },
    {
      scrollTrigger:{
        trigger:'.faq-title',
        start:'top 85%',
        end:'top 35%',
        scrub: true
      },
      duration:1.5 ,
      opacity:1,
      x:0
    });
    gsap.fromTo('.FAQ',{
      
      opacity: 0, 
      
      y: 200
    },{
      scrollTrigger:{
        trigger:'.FAQ',
        start:'top 95%',
        end:'top 35%',
        scrub: true,
              },
      duration:0.8 ,
      y:0,
      opacity:1,
      ease:Expo.easeInOut
    });
    gsap.fromTo('.gallery-title-container',{
     
      opacity: 0, 
      x: -200
    },{
       scrollTrigger:{
        trigger:'.gallery-title-container',
        start:'top 85%',
        end:'top 35%',
        scrub: true
      },
      duration:1.5 ,
      opacity:1,
      x:0
    })
    
    gsap.fromTo('.sslider',{
      
      opacity: 0, 
      y:400
      
      
    },{
      scrollTrigger:{
        trigger:'.sslider',
        start:'-100% 95%',
        end:'top 55%',
        scrub: true
      },
      duration:1.6 ,
      opacity:1,
      y:0, 
      ease:Expo.easeInOut
    });
    gsap.fromTo('.u-title',{
      
      opacity: 0, 
      
      x: 200
    },{
      scrollTrigger:{
        trigger:'.u-title',
        start:'top 85%',
        end:'top 35%',
        scrub: true
      },
      duration:1.5 ,
      opacity:1,
      x:0
    });
    gsap.fromTo('.u-card',{
      
      opacity: 0, 
      
      y: 200,
     
      
      
    },{
      scrollTrigger:{
        trigger:'.u-card',
        start:'top 85%',
        end:'top 35%',
        scrub: true,
        
      },
      duration:1.5 ,
       stagger:0.6,
       opacity:1,
       y:0
    }); 

    ScrollTrigger.clearMatchMedia()
   

  }

 function initialAnimations(): void {


    gsap.timeline().to(' .overlay ', {
      duration: 2,
      top: '-100%',
      delay:1,
      y: -100,
      ease: Expo.easeInOut,
    }, 1).from('.menu_item', {
      opacity: 0,
      duration: 1,
      left: '-100%',

      y: -20,
      stagger: 0.2,
      ease: Expo.easeInOut,
    }, 3).from('.img-container', {
      opacity: 0,
      x:-500,
      duration:1.4,

      ease: Expo.easeInOut,
    },2.5).from('.fa-brands', {
      opacity: 0,
      duration: 1,
      bottom: '-100%',

      y: -600,
      stagger: 0.2,
      ease: Expo.easeInOut,
    },2.8).from('.icon', {
      opacity: 0,
      duration: 1,
      top: '-100%',

      y: 600,
      stagger: 0.2,
      ease: Expo.easeInOut,
    },4).from('.btn',{
      x:400,
      opacity:0,
      duration:1,
      ease:Expo.easeInOut,

    }, 3 ).from('.heading-1', {
      duration: 1.5,
      opacity: 0,
    },3).from('.heading-3', {
      duration: 1.5,
      opacity: 0,
      y: -20,
    },3).from('.paragraph', {
      duration: 1.5,
      opacity: 0,
      y: -80,
      delay:1
    },2)
    .then((v)=>v.kill());
    
  }


  // const menuClick = ()=>{
  // setHamburgerisActive(!hamburgerisActive);
 
  //  }



  return (
    <div className="App">
     <div className="main">
  <div className="overlay"></div>
   <Header/>
 
  <section className="first-section">

      <div className="img-container"><img src={require("./assets/main-gif.gif")} alt="UMF" className="frist-section-img"/>
      </div>

      <div className="info">
        <h3 className="heading-3">UNKNOWN</h3>
        <h1 className="heading-1"> META FIGHT </h1>
        <div className="paragraph-container">
          <p className="paragraph">
            <h4>We are a community based project <br />
                  Break the silence…..! <br />
                  Break the boredom……!
             </h4><br />
              The first realistic simulation club of a real fight on metaverse on solana with unknown identities for the fighters.

              Owning NFT from the first phase gives you unlimited access to our <strong><a href="#utilities">utilities</a></strong>.
            <h4>Here we go..!</h4><br />
            </p><br />

      </div>
      <a href="https://discord.gg/5tDgtbYSn9" target="_blank" className="btn btn--start">Join Our Discord</a>
      <div className="social-icons">
        <a className="icon" href="https://twitter.com/UMF_NFT"  target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="icon" href="https://discord.gg/5tDgtbYSn9" target="_blank">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a className="icon" href="https://www.instagram.com/umf_nft/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>


  </section>

 <section className="gallery-section" id='SneakPeak'>
    <div className="gallery-title-container">
      <h3 className="title">Sneak Peaks</h3>
    </div>
     <Snippets/>
    {/* <Gallery/> */}
  </section>


  <section className="utilities-section" id='utilities'>
    <div className='u-title'>
      <h3 className="title" >Utilities</h3>
    </div>

    <div className="utilities-wrapper">
      <UtiliteCard title='Championships'
       content='Your fighter will be your ticket to attend our fights and championships.' 
      icon="tournament" bgColor='black' />
      <UtiliteCard title='Special Discounts'
       content='Owning a fighter in your wallet will give you the opportunity to get endless discounts on 
       our special and exclusive products from our online store..' 
      icon='discount' bgColor='black' />
      <UtiliteCard title='Cash gifts'
       content=' Owning a UMF will give you the chance to participate in our monthly 
       draws which will be chosen randomly with integrity.' 
      icon='salary' bgColor='black' />
      <UtiliteCard title='Revenue'
       content='Lucky Fighters will get a particular percentage of the project revenue Based on the rarity of the trait in your
        fighters which will be announced by the end of the mint.' 
      icon='money-bag' bgColor='black' />
      <UtiliteCard title='Betting'
       content='As known in the fighting world there is a winner and a loser and the technical analysts who have the ability to predict which fighter will win,
        based on your prediction you will win in a fair wagering system.' 
      icon='dice' bgColor='black' />
      <UtiliteCard title='Learning'
       content='The world of NFT is full of opportunities
        and making profits, but on the condition that
         he follows the correct learning steps in this field to
          avoid risks and loss of money.. Therefore,
        we will take care of this part with our great community.' 
      icon='elearning' bgColor='black' />
      <UtiliteCard title='Access to the city'
       content='One of the confidential info of 
       UMF Team is the second project which is going to be a 
       Metaverse city and the Fighters Club will be a part of this
        city, all of the meta 
       fighters will be whitelisted for the city NFTs.' 
      icon='location' bgColor='black' />

       <UtiliteCard title='Donations'
       content='We all know the power of world charities and while we are getting developed
        and grown we shouldn’t forget other people so UMF Team will make proven donations for 
        charities which will be chosen by the fighters to fight together Hunger, homelessness,
         disability, etc..
' 
      icon='donation' bgColor='black' />

    </div>
  </section>


  <section className="story-section">
    <div className="box" >
      <h3 className="title" id="story">The Story</h3>
    </div>
    <div className="story-line-container">
      <h1 id="story-line">After the advent of the metaverse</h1>
    </div>
    <div className="info-1">
      <div className="info-1-text">

        <p id="full-story">
            it has become an
        embodiment of real life by default, characterised by being
        easy and secure in a way that is difficult to penetrate.
        There are many available activities such as work,
        education and entertainment, and this has led to
        facilitating life completely, and this is contrary to our
        human instinct of hunting and fighting, and this is what
        humans have grown up on, so we created a game to strip
        people From the boredom of an ideal life of work, and
        giving men a goal, they strive to reach, and to form a large
        number of people who are able to protect the city.
        </p>

      </div>

    </div>

  </section>

  <section className="roadmap-section">


    <div className="roadmap">
      <h3 className="title" id="road-map">Road Map</h3>
    </div>


    <div className="card" id="phase-1">
      <div className="counter">
        <h1 className="counter-num">I</h1>
      </div>
      <div className="content">
        <h3 className="card-title"> Whitelist mint phase of 1333 fighters .</h3>
        <p className="card-info">
          </p>
      </div>
    </div>


    <div className="card" id="phase-2">
      <div className="counter">
        <h1 className="counter-num">II</h1>
      </div>
      <div className="content">
        <h3 className="card-title">gold mint phase of 1333 fighters.</h3>
        <p className="card-info"></p>
      </div>
    </div>


     <div className="card" id="phase-3">
      <div className="counter">
        <h1 className="counter-num">III</h1>
      </div>
      <div className="content">
        <h3 className="card-title">diamond mint phase of 1000 fighters.</h3>
        <p className="card-info"></p>
      </div>
    </div>

     <div className="card" id="phase-4">
      <div className="counter">
        <h1 className="counter-num">IV</h1>
      </div>
      <div className="content">
        <h3 className="card-title">public mint phase of 3000 fighters.</h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-5">
      <div className="counter">
        <h1 className="counter-num">V</h1>
      </div>
      <div className="content">
        <h3 className="card-title"> Third phase of 66 special 
        fighters with uncommon traits and totally
         rare for our celebrities and the community
          heroes only.</h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-6">
      <div className="counter">
        <h1 className="counter-num">VI</h1>
      </div>
      <div className="content">
        <h3 className="card-title">Signing all the minted NFTs.</h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-7">
      <div className="counter">
        <h1 className="counter-num">VII</h1>
      </div>
      <div className="content">
        <h3 className="card-title"> Getting listed on the biggest marketplaces to make it easy to trade for our meta fighters (Magic Eden, Solana art, Sol sea…..)
        </h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-8">
      <div className="counter">
        <h1 className="counter-num">VIII</h1>
      </div>
      <div className="content">
        <h3 className="card-title">Announcement about our realistic game and the betting system.
      </h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-9">
      <div className="counter">
        <h1 className="counter-num">IX</h1>
      </div>
      <div className="content">
        <h3 className="card-title">Announcement about our marketplace to buy
         fighter weapons and clothes and anything
         related to improve the power
          and the fighting performance in the battles.
      </h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-10">
      <div className="counter">
        <h1 className="counter-num">X</h1>
      </div>
      <div className="content">
        <h3 className="card-title"> Announcement about the champions system.
      </h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-11">
      <div className="counter">
        <h1 className="counter-num">XI</h1>
      </div>
      <div className="content">
        <h3 className="card-title">Start the first experimental 
        game for the holder's visibility only.

      </h3>
        <p className="card-info"></p>
      </div>
    </div>


    <div className="card" id="phase-12">
      <div className="counter">
        <h1 className="counter-num">XII</h1>
      </div>
      <div className="content">
        <h3 className="card-title">Announcement about our token Chakras.

      </h3>
        <p className="card-info"></p>
      </div>
    </div>

     <div className="card" id="phase-13">
      <div className="counter">
        <h1 className="counter-num">XIII</h1>
      </div>
      <div className="content">
        <h3 className="card-title">To Be Continued….!

      </h3>
        <p className="card-info"></p>
      </div>
    </div>

  </section>
  <section className="family-section">
    <div className="our-family">
      <h3 className="title" id="family-line">Our Family
      </h3>
    </div>
    <div className="family-wrapper">

        <TeamCard id="t-card-1" img_path='/assets/kraij.png' mName='Kralj' mDescription=' Founder'
         mP=' Strategist and Operations Manager.'
         insta='https://www.instagram.com/umf_nft/' twitter='https://twitter.com/Kralj_m6'/>
      
        <TeamCard id="t-card-2" img_path='/assets/noah.png' mName='Noah' mDescription='Founder' mP='Digital Artist and Metaverse Expert.' 
        insta='https://www.instagram.com/noah_umf/' 
        twitter='https://twitter.com/Noah_UMF'
        />
    </div>
    <div className="family-wrapper2">
      <TeamCard id="t-card-3" img_path='/assets/raijin.png' mName='Raijin' mDescription='The Dev Master' 
        mP='Full stack and Web3 developerr' insta='https://www.instagram.com/umf_nft/' twitter='https://twitter.com/RaijinUmf'/>
      
    </div>

    <div className='secTeam-container' id='secTeam1'>
      <div className="secTeam-box">
        <span></span>
        <div className="secTeam-contant">
          <h2>Marketing Team :</h2>
          <h4>A team of 3 experienced NFT marketers.</h4>
          <p>
            <strong>Inapt</strong> : Community Manager <br />
           <strong>Antonio</strong> : Marketing director and Strategist. <br />
           <strong>Ryan</strong> : Social Media Manager.
          </p>
        </div>
        </div>
    </div>

        <div className='secTeam-container' id='secTeam2'>
      <div className="secTeam-box">
        <span></span>
        <div className="secTeam-contant">
          <h2>Game Development Team :</h2>
          <h4>A great team of 2 Web3 Game developers.</h4>
          <p>
           <strong>Ethan & Marco</strong> :Developing design and gaming protocols for our fighting game on metaverse
          </p>
        </div>
        </div>
    </div>
    
  </section>
  <section id="faqs">
    <div className="faq-title">
      <h3 className="title" >FAQ
      </h3>
    </div>
   
    <FAQ title=' What is the UMF..?' content="We are a fully integrated
     fighting club, A club where you can attend and participate in our exclusive
      champions and you can take part of our betting system and level up your fighter"/>
    <FAQ title='How can I be a META FIGHTER ?' content="There are two ways to be one of the fighters, 
    first our public sale or be one of our first fighters through 
    the first three phases  Whitelist , gold mint and diamond mint"/>
    <FAQ title='How can I be whitelisted for the
        presale?' content="Join our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a> for our incredible
        giveaways."/>
    <FAQ title=' What can I do with UMF..?' content="Check our
        <a href='#utilities'>utilities</a> above."/>
        <FAQ title=' What licences are available for my fighter after minting..?'
         content="All the meta fighters are under a non-exclusive licence."/>
    <FAQ title=' When will the UMF start presale
        minting..?' content="To be announced on our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a>
        server."/>
    <FAQ title=' When will the UMF start public
        minting..?' content="To be announced on our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a>
        server."/>
    <FAQ title=' How much does it cost to mint in presale,
        Whitelist and the public sale?' content="To be announced on our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a>
        server."/>
    <FAQ title=' Why are secondary sales royalties
        important..?' content="The royalties from the secondary sales will
        help us to improve the project ,go through
        our roadmap and will be a share for our
        active community members as mentioned in our <a href='#utilities'>utilities</a>"/>
    <FAQ title='Which Marketplaces can I use for the
        secondary market..?' content="We will do our best to
        be listed on the biggest marketplaces to
        make it easy to trade for the holders like
        Magic Eden, Solana Art, Solsea, etc…"/>
  </section>

  <Footer/>

  


  <section>
   
  </section>


 

  



</div>
    </div>
  );
}



export default App;
