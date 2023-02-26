// QUESTION 1
// function instagramPost(handleOfAuthor,content,imageLinkOfThePost,numberOfViews,numberOfLikes) {
//     this.handleOfAuthor = handleOfAuthor;
//     this.content = content;
//     this.imageLinkOfThePost = imageLinkOfThePost;
//     this.numberOfViews = numberOfViews;
//     this.numberOfLikes = numberOfLikes;
// }
// // QUESTION 2

// let post1 = new instagramPost('Limallahly','audio Content','https://drive.google.com/gallery/d/1LaFb_123',678,2368)
// console.log(post1);

// let post2 = new instagramPost('Limah','text Content','https://drive.google.com/document/d/1LaFb:980',698,3780)
// console.log(post2);

// QUESTION 3a
// function createPerson(fullName,age,location){
//     return {
//     fullName:fullName,
//     age:age,
//     location:location,
//     }  
// }
// const Musa = createPerson("Musa Dawodu", "19yrs", "Lekki Lagos");
// console.log(Musa);
// const MusaJambScore()

// QUESTION 3b
// const JambScores ={
//     ENG: 70,
//     GOVT: 85,
//     LIT: 82,
//     CRK: 94,
// }
// console.log(JambScores);

// const MusaJambScore = JambScores
// console.log(MusaJambScore);

// QUESTION 4

// USING object.assign({});
// const house1 ={
//     type: "Bungalow",
//     units: "4 Bedrooms Detach",
//     features: "Swimming pool",
//     price: "45 million",
// };
// const house2 = Object.assign({}, house1);
// console.log(house1);
// console.log(house2);

// USING SPREAD SYNTAX
// const house3 ={ ...house1 };
// house3.type = "5 Bedroom Terrace";
// console.log({house1});
// console.log({house3});

// USING JSON PARSE (JSON stringify())
// const house4 = JSON.parse;
// house4.title = "3 Bedroom Duplex";
// console.log({house1});
// console.log({house4});

// QUESTION 5
// const presidentialCandidates = {
//     AAC: 'Omoleye Sowore',
//     ACCORD: 'Christopher Imumolen',
//     APC: 'Bola Ahmed Tinubu',
//     LP: 'Peter Obi',
//     NNPP: 'Rabiu Kwankwaso',
//     PDP: 'Atiku Abubakar',
// }

// // let o = presidentialCandidates['LP'];
// // console.log(o.toUpperCase());
// for (const key in presidentialCandidates) {
//     console.log(presidentialCandidates[key] + ' is the presedential candidate of ' + key);
//   }