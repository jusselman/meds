

// const one = {
//   template: ``
// }
//
// const two = {
//   template: ``
// }
//
// const three = {
//   template: `<section class="section-faq" section id="faq">
//     <div class="container">
//       <div class="row">
//           <div class="col-12">
//             <img src="img/faq.jpg">
//             <h2>Frequently Asked Questions about Glaucoma</h2>
//             <p>by H. George Tanaka, MD
//               Q: How common is glaucoma?
//
//               A: Glaucoma affects more than 3 million Americans. The scary part is that half
//               of those people don’t even know they have glaucoma. And with the number of aging
//               Americans expected to increase in the next century with the “baby-boomer” generation,
//               glaucoma will continue to be a major public health concern in the future.
//
//               Q: What is glaucoma, anyway?
//
//               A: Glaucoma is not just one disease, but a group of many different diseases. They all
//               have one thing in common – damage to the nerve that connects the eye to the brain,
//               called the optic nerve, which results in a gradual loss of vision. Many, but not all,
//               cases are associated with elevated pressure in the eye.
//
//               Q: Who is at risk for glaucoma?
//
//               A: The risk of developing glaucoma increases with a person’s age. Young adults and even
//               children can develop glaucoma, but this is very uncommon. People who have a blood relative
//               with glaucoma are more likely to develop glaucoma themselves. People who have taken steroid
//               medications for a long time (such as Prednisone or steroid eye drops), have seriously injured
//               their eyes, or have diabetes are at higher risk for glaucoma. Particular kinds of glaucoma
//               are more common in certain ethnic groups. African-Americans are at higher risk of developing
//                primary open-angle glaucoma. People of Scandinavian or Russian ancestry are more likely to
//                develop pseudoexfoliative glaucoma. Even the type of eyeglasses prescription you have predisposes
//                you to certain types of glaucoma. Near-sighted persons are more likely to acquire pigmentary
//                glaucoma. Far-sighted persons are more likely to develop angle-closure glaucoma.
//              </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>`
// }
//
// const four = {
//   template: `  <section class="sections-doctors" section id="doctors">
//       <div class="container">
//         <div class="row">
//
//             <div class="col-12">
//               <img class='doctorPortal' src="img/doctors.jpg">
//             </div>
//
//             <div class="col-12 col-md-4">
//               <img class="headshot" src="img/drlieberman.jpg">
//                 <h3>Marc F. Lieberman, M.D.EDUCATION</h3>
//             </div>
//
//             <div class="col-12 col-md-4">
//               <img class="headshot" src="img/drwong.jpg">
//               <h3>PATRICIA C. WONG, M.D.</h3>
//             </div>
//
//             <div class="col-12 col-md-4">
//               <img class="headshot" src="img/drtanaka.jpg">
//               <h3>H. GEORGE TANAKA, M.D.</h3>
//             </div>
//
//           </div>
//         </div>
//     </section>`
// }
//
// const five = {
//   template: `<section class="section-staff" section id="staff">
//     <div class="container">
//       <div class="row">
//           <div class="col-12">
//             <img src="img/ourstaff.jpg">
//             <p>Our team is fully committed to providing each and every patient with the highest quality of care.
//               Translators are available for Russian, Mandarin, Cantonese and Korean-speaking patients. To make
//               an appointment, please call our office at 415-771-4020. General inquiries can be sent to
//               irene711vanness@gmail.com.</p>
//           </div>
//         </div>
//       </div>
//   </section>`
// }
//
// const six = {
//   template: `<section class="section-media" section id="media">
//     <div class="container">
//       <div class="row">
//           <div class="col-12">
//             <img src="img/media.jpg">
//             <h3>Dr. Tanaka's recent segment on CNET can be found <a href="http://www.cnet.com/videos/smallest-human-implant-could-help-fight-blindness/"><span class="media-link">here</span></a>.</h3><br>
//             <p>Feel free to call our office requesting information on the new <br>i-stent procedure or our other glaucoma and cataract surgeries.<br>
//             T: (415)771-4020, F: (415)771-4095</p>
//
//           </div>
//         </div>
//       </div>
//   </section>`
// }
//
// const seven = {`


//
// const router = new VueRouter ({
//     routes: [
//       {
//           path: '/one',
//           component: one
//       },
//       {
//         path: '/two',
//         component: two
//       },
//       {
//         path: '/three',
//         component: three
//       },
//       {
//         path: '/four',
//         component: four
//       },
//       {
//         path: '/five',
//         component: five
//       },
//       {
//         path: '/six',
//         component: six
//       },
//       {
//         path: '/seven',
//         component: seven
//       }
//     ]
// })
//
// var routeTest = new Vue({
//     router,
//     el: '#app',
//     data: {
//
//     },
//     methods: {
//
//     }
//
// // CAROUSEL INTERVAL //
// }).$mount('#app');
//
// $('.carousel').carousel({
//   interval: 7000
// });



// // TITLE FADING IN AND OUT //
var faded_i = 0;
var faded_array = ["Glaucoma Specialists", "青光眼專科醫生", "Специалисты по глаукоме", "Especialistas en Glaucoma"];
var faded_elem;
faded_elem = document.getElementById('faded'); fadedSlide();
function fadedNext() {
  faded_i++;
  faded_elem.style.opacity = 0;
  if(faded_i > (faded_array.length - 1)) {
    faded_i = 0;
  }
  setTimeout('fadedSlide()', 1500)
}
function fadedSlide() {
  faded_elem.innerHTML = faded_array[faded_i];
  faded_elem.style.opacity = 1;
  setTimeout('fadedNext()',6000);
}


// FADE THE OF SAN FRANCISCO //
var faded_SF = 0;
var faded_arraySF = ["of San Francisco", "舊金山", "Сан-Франциско", "de San Francicso"];
var faded_elem2;
faded_elem2 = document.getElementById('fadedSF'); fadedSlideSF();
function fadedNextSF() {
  faded_SF++;
  faded_elem2.style.opacity = 0;
  if(faded_SF > (faded_arraySF.length - 1)) {
    faded_SF = 0;
  }
  setTimeout('fadedSlideSF()', 1500)
}
function fadedSlideSF() {
  faded_elem2.innerHTML = faded_arraySF[faded_SF];
  faded_elem2.style.opacity = 1;
  setTimeout('fadedNextSF()',6000);
}


// contact button  //
var faded_contact = 0;
var faded_arrayContact = ["Contact", "聯繫", "Kонтакт", "Contáctenos"];
var faded_elem3;
faded_elem3 = document.getElementById('fadedContact'); fadedSlideContact();
function fadedNextContact() {
  faded_contact++;
  faded_elem3.style.opacity = 0;
  if(faded_contact > (faded_arrayContact.length - 1)) {
    faded_contact = 0;
  }
  setTimeout('fadedSlideContact()', 1500)
}
function fadedSlideContact() {
  faded_elem3.innerHTML = faded_arrayContact[faded_contact];
  faded_elem3.style.opacity = 1;
  setTimeout('fadedNextContact()',6000);
}







// FADED THAT EYE LOGO //

function noImage() {
  var imgInvis = document.getElementById('fadedImg');
  var imgBlindArrow = document.getElementById('arrow')
  imgInvis.style.opacity = 0;
  imgBlindArrow.style.opacity = 0;
  setTimeout('yesImage()', 1500);


}

function yesImage() {
  var imgVis = document.getElementById('fadedImg');
  var imgArrow = document.getElementById('arrow')
  imgVis.style.opacity = 1;
  imgArrow.style.opacity = 1;
  setTimeout('noImage()', 6000);
}

noImage();
yesImage();
