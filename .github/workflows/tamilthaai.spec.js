/*
நீராரும் கடலுடுத்த நிலமடந்தைக் கெழிலொழுகும்
சீராரும் வதனமெனத் திகழ்பரதக் கண்டமிதில்
தெக்கணமும் அதிற்சிறந்த திராவிடநல் திருநாடும்
தக்கசிறு பிறைநுதலும் தரித்தநறும் திலகமுமே!
அத்திலக வாசனைபோல் அனைத்துலகும் இன்பமுற
எத்திசையும் புகழ்மணக்க இருந்தபெருந் தமிழணங்கே!
உன் சீரிளமைத் திறம்வியந்து செயல்மறந்து வாழ்த்துதுமே!
*/

it('play tamilthaai vaazhththu',()=>{
cy.visit('https://www.musicca.com/piano')
cy.get('#qc-cmp2-ui').should('be.visible')
cy.get('#qc-cmp2-ui').trigger('keydown', { keyCode: 27});
cy.wait(100);

cy.get(':nth-child(1) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(8) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(15) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(21) > .white-key').trigger("mousedown").wait(2000)

//E F# F#
//நீராரும்
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(450)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(350)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(400)
// //E E F# F# F#
// //கடலுடுத்த
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(300)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(300)
// //E E F# E F#
// //நிலமடந்தைக்
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(400)
// //E E F# E F# A F#
// //கெழிலொழுகும்
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(250)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(500)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(2500)
// //A F# F#
// //சீராரும் 
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(450)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(350)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(400)
// //E E F# E F#
// //வதனமெனத் 
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(300)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(300)
// //E E F# E F#
// //திகழ்பரதக் 
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(300)
// //D E B D 
// //கண்டமிதில்
cy.get(':nth-child(9) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(7) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(9) > .white-key').trigger("mousedown").wait(2500)
// // AAAA
// //தெக்கணமும் 
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(400)
// //F# A B A A 
// //அதிற்சிறந்த 
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(400)
// //F# A B A A 
// //திராவிடநல் 
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(400)
// //F# A B A D B
// //திருநாடும்
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(600)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(2500)
// //B D D D 
// //தக்கசிறு 
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(400)
// //A B A B B
// //பிறைநுதலும் 
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(400)
// //F# B A F# E
// //தரித்தநறும் 
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(300)
// //D D E F# A F# E D
// //திலகமுமே
cy.get(':nth-child(9) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(9) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(9) > .white-key').trigger("mousedown").wait(2500)
// //F# F# F#
//அத்திலக 
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(400)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(300)
// //E F# F# F#
// //வாசனைபோல்  
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(400)
// //E E F# F# F#
// //அனைத்துலகும்
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(400)
// //E F# E A F#
// //இன்பமுற
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(200)
cy.get(':nth-child(10) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(11) > .black-key').trigger("mousedown").wait(1500)
// //எத்திசையும் 
// //B B B B 
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(400)
// //புகழ்மணக்க 
// //A A B B B
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(300)
// //இருந்தபெருந் 
// //AA B A B
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(300)
//தமிழணங்கே!
//AA B A DB
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(13) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(300)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(1500)
//தமிழணங்கே!
//BB D B D
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(200)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(1500)
//உன் சீரிளமைத் 
//D BBDD
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(250)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(250)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(400)
//திறம்வியந்து 
//BD BDD
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(250)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(300)
//செயல்மறந்து 
//D D E D D
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(17) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(250)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(300)
//வாழ்த்துதுமே!
//D EDE
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(17) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(17) > .white-key').trigger("mousedown").wait(1000)
//வாழ்த்துதுமே!
//B DBD
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(14) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(16) > .white-key').trigger("mousedown").wait(1000)
//வாழ்த்துதுமே!
//E F#EF#
cy.get(':nth-child(17) > .white-key').trigger("mousedown").wait(400)
cy.get(':nth-child(18) > .black-key').trigger("mousedown").wait(150)
cy.get(':nth-child(17) > .white-key').trigger("mousedown").wait(150)
cy.get(':nth-child(18) > .black-key').trigger("mousedown").wait(1000)
})
