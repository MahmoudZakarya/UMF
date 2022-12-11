var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import FAQ from './Components/faq_Component/faq_Component';
import TeamCard from './Components/member-card/member-card';
import Header from './Components/header/Header';
import { Footer } from './Components/footer/footerComponent';
import { UtiliteCard } from './Components/utilties/utilite-card';
import { Snippets } from './Components/gallery/slider';
function App() {
    gsap.registerPlugin(ScrollTrigger);
    var tln = gsap.timeline();
    //  const [hamburgerisActive, setHamburgerisActive] = useState(false);
    useEffect(function () {
        initialAnimations();
        initScrollAnimations();
    });
    function initScrollAnimations() {
        gsap.fromTo('.paragraph', {}, {
            scrollTrigger: {
                trigger: '.paragraph',
                start: '50% center',
                scrub: true,
                // invalidateOnRefresh: true,
            },
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
            },
            opacity: 1,
            duration: 0.5,
            y: 0,
        });
        gsap.fromTo('#story-line', {
            y: -150,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: '#story-line',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.5,
            y: 0,
        });
        gsap.fromTo('#full-story', {
            opacity: 0,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: '#full-story',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // refreshPriority: 13,
                // invalidateOnRefresh: true,
            },
            opacity: 1,
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
            },
            duration: 0.4,
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut,
        });
        gsap.fromTo('#phase-1', {
            opacity: 0,
            ease: Expo.easeInOut,
            x: -300,
        }, {
            scrollTrigger: {
                trigger: '#phase-1',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // refreshPriority: 15,
                invalidateOnRefresh: true,
            },
            duration: 0.4,
            opacity: 1,
            x: 0
        });
        gsap.fromTo('#phase-2', {
            opacity: 0,
            x: 300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: '#phase-2',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // refreshPriority: 15,
                // invalidateOnRefresh: true,
            },
            duration: 0.4,
            opacity: 1,
            x: 0
        });
        gsap.fromTo("#phase-3", {
            opacity: 0,
            x: -300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-3",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // refreshPriority: 15,
                // invalidateOnRefresh: true,
            },
            duration: 0.5,
            opacity: 1,
            x: 0
        });
        gsap.fromTo("#phase-4", {
            opacity: 0,
            x: 300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-4",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // refreshPriority: 15,
                // invalidateOnRefresh: true,
            },
            duration: 0.4,
            opacity: 1,
            x: 0
        });
        gsap.fromTo("#phase-5", {
            opacity: 0,
            x: -300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-5",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // refreshPriority: 15,
                // invalidateOnRefresh: true,
            },
            duration: 0.4,
            opacity: 1,
            x: 0
        });
        gsap.fromTo("#phase-6", {
            opacity: 0,
            x: 300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-6",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            }, duration: 0.4,
            x: 0,
            opacity: 1,
        });
        gsap.fromTo("#phase-7", {
            opacity: 0,
            x: -300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-7",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1
        });
        gsap.fromTo("#phase-8", {
            opacity: 0,
            x: 300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-8",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1
        });
        gsap.fromTo("#phase-9", {
            opacity: 0,
            x: -300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-9",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1
        });
        gsap.fromTo("#phase-10", {
            opacity: 0,
            x: 300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-10",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1,
        });
        gsap.fromTo("#phase-11", {
            opacity: 0,
            x: -300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-11",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1,
        });
        gsap.fromTo("#phase-12", {
            opacity: 0,
            x: 300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-12",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1,
        });
        gsap.fromTo("#phase-13", {
            opacity: 0,
            x: -300,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#phase-13",
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
            },
            duration: 0.4,
            x: 0,
            opacity: 1,
        });
        gsap.fromTo("#family-line", {
            opacity: 0,
            x: -250,
            ease: Expo.easeInOut,
        }, {
            scrollTrigger: {
                trigger: "#family-line",
                start: 'top 85%',
                end: 'top 35%',
                scrub: true,
            },
            duration: 2,
            opacity: 1,
            x: 0
        });
        gsap.fromTo('#t-card-1', {
            opacity: 0,
            y: 200
        }, {
            scrollTrigger: {
                trigger: '#t-card-1',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            duration: 1,
            opacity: 1,
            y: 0
        });
        gsap.fromTo('#t-card-2', {
            opacity: 0,
            y: 200
        }, {
            scrollTrigger: {
                trigger: '#t-card-2',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1,
        });
        gsap.fromTo('#t-card-3', {
            opacity: 0,
            y: 200
        }, {
            scrollTrigger: {
                trigger: '#t-card-3',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            duration: 1,
            opacity: 1,
            y: 0
        });
        gsap.fromTo('#t-card-4', {
            opacity: 0,
            y: 200
        }, {
            scrollTrigger: {
                trigger: '#t-card-4',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            duration: 1,
            delay: 1,
            opacity: 1,
            y: 0,
        });
        gsap.fromTo('#secTeam1', {
            opacity: 0,
            ease: Expo.easeInOut,
            x: -500,
        }, {
            scrollTrigger: {
                trigger: '#secTeam1',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                // refreshPriority: 15,
                invalidateOnRefresh: true,
            },
            opacity: 1,
            x: 0,
            ease: Expo.easeInOut
        });
        gsap.fromTo('#secTeam2', {
            opacity: 0,
            ease: Expo.easeInOut,
            x: 500,
        }, {
            scrollTrigger: {
                trigger: '#secTeam2',
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                // refreshPriority: 15,
                invalidateOnRefresh: true,
            },
            opacity: 1,
            x: 0,
            ease: Expo.easeInOut
        });
        gsap.fromTo('.faq-title', {
            opacity: 0,
            x: 200
        }, {
            scrollTrigger: {
                trigger: '.faq-title',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            duration: 1.5,
            opacity: 1,
            x: 0
        });
        gsap.fromTo('.FAQ', {
            opacity: 0,
            y: 200
        }, {
            scrollTrigger: {
                trigger: '.FAQ',
                start: 'top 95%',
                end: 'top 35%',
                scrub: true,
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        });
        gsap.fromTo('.gallery-title-container', {
            opacity: 0,
            x: -200
        }, {
            scrollTrigger: {
                trigger: '.gallery-title-container',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            duration: 1.5,
            opacity: 1,
            x: 0
        });
        gsap.fromTo('.sslider', {
            opacity: 0,
            y: 400
        }, {
            scrollTrigger: {
                trigger: '.sslider',
                start: '-100% 95%',
                end: 'top 55%',
                scrub: true
            },
            duration: 1.6,
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut
        });
        gsap.fromTo('.u-title', {
            opacity: 0,
            x: 200
        }, {
            scrollTrigger: {
                trigger: '.u-title',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true
            },
            duration: 1.5,
            opacity: 1,
            x: 0
        });
        gsap.fromTo('.u-card', {
            opacity: 0,
            y: 200,
        }, {
            scrollTrigger: {
                trigger: '.u-card',
                start: 'top 85%',
                end: 'top 35%',
                scrub: true,
            },
            duration: 1.5,
            stagger: 0.6,
            opacity: 1,
            y: 0
        });
        ScrollTrigger.clearMatchMedia();
    }
    function initialAnimations() {
        gsap.timeline().to(' .overlay ', {
            duration: 2,
            top: '-100%',
            delay: 1,
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
            x: -500,
            duration: 1.4,
            ease: Expo.easeInOut,
        }, 2.5).from('.fa-brands', {
            opacity: 0,
            duration: 1,
            bottom: '-100%',
            y: -600,
            stagger: 0.2,
            ease: Expo.easeInOut,
        }, 2.8).from('.icon', {
            opacity: 0,
            duration: 1,
            top: '-100%',
            y: 600,
            stagger: 0.2,
            ease: Expo.easeInOut,
        }, 4).from('.btn', {
            x: 400,
            opacity: 0,
            duration: 1,
            ease: Expo.easeInOut,
        }, 3).from('.heading-1', {
            duration: 1.5,
            opacity: 0,
        }, 3).from('.heading-3', {
            duration: 1.5,
            opacity: 0,
            y: -20,
        }, 3).from('.paragraph', {
            duration: 1.5,
            opacity: 0,
            y: -80,
            delay: 1
        }, 2)
            .then(function (v) { return v.kill(); });
    }
    // const menuClick = ()=>{
    // setHamburgerisActive(!hamburgerisActive);
    //  }
    return (_jsx("div", __assign({ className: "App" }, { children: _jsxs("div", __assign({ className: "main" }, { children: [_jsx("div", { className: "overlay" }, void 0), _jsx(Header, {}, void 0), _jsxs("section", __assign({ className: "first-section" }, { children: [_jsx("div", __assign({ className: "img-container" }, { children: _jsx("img", { src: require("./assets/main-gif.gif"), alt: "UMF", className: "frist-section-img" }, void 0) }), void 0), _jsxs("div", __assign({ className: "info" }, { children: [_jsx("h3", __assign({ className: "heading-3" }, { children: "UNKNOWN" }), void 0), _jsx("h1", __assign({ className: "heading-1" }, { children: " META FIGHT " }), void 0), _jsxs("div", __assign({ className: "paragraph-container" }, { children: [_jsxs("p", __assign({ className: "paragraph" }, { children: [_jsxs("h4", { children: ["We are a community based project ", _jsx("br", {}, void 0), "Break the silence\u2026..! ", _jsx("br", {}, void 0), "Break the boredom\u2026\u2026!"] }, void 0), _jsx("br", {}, void 0), "The first realistic simulation club of a real fight on metaverse on solana with unknown identities for the fighters. Owning NFT from the first phase gives you unlimited access to our ", _jsx("strong", { children: _jsx("a", __assign({ href: "#utilities" }, { children: "utilities" }), void 0) }, void 0), ".", _jsx("h4", { children: "Here we go..!" }, void 0), _jsx("br", {}, void 0)] }), void 0), _jsx("br", {}, void 0)] }), void 0), _jsx("a", __assign({ href: "https://discord.gg/5tDgtbYSn9", target: "_blank", className: "btn btn--start" }, { children: "Join Our Discord" }), void 0), _jsxs("div", __assign({ className: "social-icons" }, { children: [_jsx("a", __assign({ className: "icon", href: "https://twitter.com/UMF_NFT", target: "_blank" }, { children: _jsx("i", { className: "fa-brands fa-twitter" }, void 0) }), void 0), _jsx("a", __assign({ className: "icon", href: "https://discord.gg/5tDgtbYSn9", target: "_blank" }, { children: _jsx("i", { className: "fa-brands fa-discord" }, void 0) }), void 0), _jsx("a", __assign({ className: "icon", href: "https://www.instagram.com/umf_nft/", target: "_blank" }, { children: _jsx("i", { className: "fa-brands fa-instagram" }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0), _jsxs("section", __assign({ className: "gallery-section", id: 'SneakPeak' }, { children: [_jsx("div", __assign({ className: "gallery-title-container" }, { children: _jsx("h3", __assign({ className: "title" }, { children: "Sneak Peaks" }), void 0) }), void 0), _jsx(Snippets, {}, void 0)] }), void 0), _jsxs("section", __assign({ className: "utilities-section", id: 'utilities' }, { children: [_jsx("div", __assign({ className: 'u-title' }, { children: _jsx("h3", __assign({ className: "title" }, { children: "Utilities" }), void 0) }), void 0), _jsxs("div", __assign({ className: "utilities-wrapper" }, { children: [_jsx(UtiliteCard, { title: 'Championships', content: 'Your fighter will be your ticket to attend our fights and championships.', icon: "tournament", bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Special Discounts', content: 'Owning a fighter in your wallet will give you the opportunity to get endless discounts on \n       our special and exclusive products from our online store..', icon: 'discount', bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Cash gifts', content: ' Owning a UMF will give you the chance to participate in our monthly \n       draws which will be chosen randomly with integrity.', icon: 'salary', bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Revenue', content: 'Lucky Fighters will get a particular percentage of the project revenue Based on the rarity of the trait in your\n        fighters which will be announced by the end of the mint.', icon: 'money-bag', bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Betting', content: 'As known in the fighting world there is a winner and a loser and the technical analysts who have the ability to predict which fighter will win,\n        based on your prediction you will win in a fair wagering system.', icon: 'dice', bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Learning', content: 'The world of NFT is full of opportunities\n        and making profits, but on the condition that\n         he follows the correct learning steps in this field to\n          avoid risks and loss of money.. Therefore,\n        we will take care of this part with our great community.', icon: 'elearning', bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Access to the city', content: 'One of the confidential info of \n       UMF Team is the second project which is going to be a \n       Metaverse city and the Fighters Club will be a part of this\n        city, all of the meta \n       fighters will be whitelisted for the city NFTs.', icon: 'location', bgColor: 'black' }, void 0), _jsx(UtiliteCard, { title: 'Donations', content: 'We all know the power of world charities and while we are getting developed\n        and grown we shouldn\u2019t forget other people so UMF Team will make proven donations for \n        charities which will be chosen by the fighters to fight together Hunger, homelessness,\n         disability, etc..\n', icon: 'donation', bgColor: 'black' }, void 0)] }), void 0)] }), void 0), _jsxs("section", __assign({ className: "story-section" }, { children: [_jsx("div", __assign({ className: "box" }, { children: _jsx("h3", __assign({ className: "title", id: "story" }, { children: "The Story" }), void 0) }), void 0), _jsx("div", __assign({ className: "story-line-container" }, { children: _jsx("h1", __assign({ id: "story-line" }, { children: "After the advent of the metaverse" }), void 0) }), void 0), _jsx("div", __assign({ className: "info-1" }, { children: _jsx("div", __assign({ className: "info-1-text" }, { children: _jsx("p", __assign({ id: "full-story" }, { children: "it has become an embodiment of real life by default, characterised by being easy and secure in a way that is difficult to penetrate. There are many available activities such as work, education and entertainment, and this has led to facilitating life completely, and this is contrary to our human instinct of hunting and fighting, and this is what humans have grown up on, so we created a game to strip people From the boredom of an ideal life of work, and giving men a goal, they strive to reach, and to form a large number of people who are able to protect the city." }), void 0) }), void 0) }), void 0)] }), void 0), _jsxs("section", __assign({ className: "roadmap-section" }, { children: [_jsx("div", __assign({ className: "roadmap" }, { children: _jsx("h3", __assign({ className: "title", id: "road-map" }, { children: "Road Map" }), void 0) }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-1" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "I" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: " Whitelist mint phase of 1333 fighters ." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-2" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "II" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "gold mint phase of 1333 fighters." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-3" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "III" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "diamond mint phase of 1000 fighters." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-4" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "IV" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "public mint phase of 3000 fighters." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-5" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "V" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: " Third phase of 66 special fighters with uncommon traits and totally rare for our celebrities and the community heroes only." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-6" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "VI" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "Signing all the minted NFTs." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-7" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "VII" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: " Getting listed on the biggest marketplaces to make it easy to trade for our meta fighters (Magic Eden, Solana art, Sol sea\u2026..)" }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-8" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "VIII" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "Announcement about our realistic game and the betting system." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-9" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "IX" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "Announcement about our marketplace to buy fighter weapons and clothes and anything related to improve the power and the fighting performance in the battles." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-10" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "X" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: " Announcement about the champions system." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-11" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "XI" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "Start the first experimental game for the holder's visibility only." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-12" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "XII" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "Announcement about our token Chakras." }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "card", id: "phase-13" }, { children: [_jsx("div", __assign({ className: "counter" }, { children: _jsx("h1", __assign({ className: "counter-num" }, { children: "XIII" }), void 0) }), void 0), _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h3", __assign({ className: "card-title" }, { children: "To Be Continued\u2026.!" }), void 0), _jsx("p", { className: "card-info" }, void 0)] }), void 0)] }), void 0)] }), void 0), _jsxs("section", __assign({ className: "family-section" }, { children: [_jsx("div", __assign({ className: "our-family" }, { children: _jsx("h3", __assign({ className: "title", id: "family-line" }, { children: "Our Family" }), void 0) }), void 0), _jsxs("div", __assign({ className: "family-wrapper" }, { children: [_jsx(TeamCard, { id: "t-card-1", img_path: '/assets/kraij.png', mName: 'Kralj', mDescription: ' Founder', mP: ' Strategist and Operations Manager.', insta: 'https://www.instagram.com/umf_nft/', twitter: 'https://twitter.com/Kralj_m6' }, void 0), _jsx(TeamCard, { id: "t-card-2", img_path: '/assets/noah.png', mName: 'Noah', mDescription: 'Founder', mP: 'Digital Artist and Metaverse Expert.', insta: 'https://www.instagram.com/noah_umf/', twitter: 'https://twitter.com/Noah_UMF' }, void 0)] }), void 0), _jsx("div", __assign({ className: "family-wrapper2" }, { children: _jsx(TeamCard, { id: "t-card-3", img_path: '/assets/raijin.png', mName: 'Raijin', mDescription: 'The Dev Master', mP: 'Full stack and Web3 developerr', insta: 'https://www.instagram.com/umf_nft/', twitter: 'https://twitter.com/RaijinUmf' }, void 0) }), void 0), _jsx("div", __assign({ className: 'secTeam-container', id: 'secTeam1' }, { children: _jsxs("div", __assign({ className: "secTeam-box" }, { children: [_jsx("span", {}, void 0), _jsxs("div", __assign({ className: "secTeam-contant" }, { children: [_jsx("h2", { children: "Marketing Team :" }, void 0), _jsx("h4", { children: "A team of 3 experienced NFT marketers." }, void 0), _jsxs("p", { children: [_jsx("strong", { children: "Inapt" }, void 0), " : Community Manager ", _jsx("br", {}, void 0), _jsx("strong", { children: "Antonio" }, void 0), " : Marketing director and Strategist. ", _jsx("br", {}, void 0), _jsx("strong", { children: "Ryan" }, void 0), " : Social Media Manager."] }, void 0)] }), void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: 'secTeam-container', id: 'secTeam2' }, { children: _jsxs("div", __assign({ className: "secTeam-box" }, { children: [_jsx("span", {}, void 0), _jsxs("div", __assign({ className: "secTeam-contant" }, { children: [_jsx("h2", { children: "Game Development Team :" }, void 0), _jsx("h4", { children: "A great team of 2 Web3 Game developers." }, void 0), _jsxs("p", { children: [_jsx("strong", { children: "Ethan & Marco" }, void 0), " :Developing design and gaming protocols for our fighting game on metaverse"] }, void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0), _jsxs("section", __assign({ id: "faqs" }, { children: [_jsx("div", __assign({ className: "faq-title" }, { children: _jsx("h3", __assign({ className: "title" }, { children: "FAQ" }), void 0) }), void 0), _jsx(FAQ, { title: ' What is the UMF..?', content: "We are a fully integrated\n     fighting club, A club where you can attend and participate in our exclusive\n      champions and you can take part of our betting system and level up your fighter" }, void 0), _jsx(FAQ, { title: 'How can I be a META FIGHTER ?', content: "There are two ways to be one of the fighters, \n    first our public sale or be one of our first fighters through \n    the first three phases  Whitelist , gold mint and diamond mint" }, void 0), _jsx(FAQ, { title: 'How can I be whitelisted for the\n        presale?', content: "Join our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a> for our incredible\n        giveaways." }, void 0), _jsx(FAQ, { title: ' What can I do with UMF..?', content: "Check our\n        <a href='#utilities'>utilities</a> above." }, void 0), _jsx(FAQ, { title: ' What licences are available for my fighter after minting..?', content: "All the meta fighters are under under a non-exclusive licence." }, void 0), _jsx(FAQ, { title: ' When will the UMF start presale\n        minting..?', content: "To be announced on our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a>\n        server." }, void 0), _jsx(FAQ, { title: ' When will the UMF start public\n        minting..?', content: "To be announced on our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a>\n        server." }, void 0), _jsx(FAQ, { title: ' How much does it cost to mint in presale,\n        Whitelist and the public sale?', content: "To be announced on our <a href='https://discord.gg/5tDgtbYSn9' target='_blank'>discord</a>\n        server." }, void 0), _jsx(FAQ, { title: ' Why are secondary sales royalties\n        important..?', content: "The royalties from the secondary sales will\n        help us to improve the project ,go through\n        our roadmap and will be a share for our\n        active community members as mentioned in our <a href='#utilities'>utilities</a>" }, void 0), _jsx(FAQ, { title: 'Which Marketplaces can I use for the\n        secondary market..?', content: "We will do our best to\n        be listed on the biggest marketplaces to\n        make it easy to trade for the holders like\n        Magic Eden, Solana Art, Solsea, etc\u2026" }, void 0)] }), void 0), _jsx(Footer, {}, void 0), _jsx("section", {}, void 0)] }), void 0) }), void 0));
}
export default App;
