

const btns = document.querySelectorAll(' button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.addEventListener('click', () =>{
//     alert('Click');
// });

// btn.addEventListener('click', () =>{
//     alert('Second Click');
// });

i = 0;

const deletElement = (e) =>{
  console.log(e.target);
  console.log(e.type);
};

// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);

btns.forEach(btn => {
  btn.addEventListener('cick', deletElement);
});

const link = document.querySelector('a');
link.addEventListener('click',(event) =>{
  event.preventDefault();

  console.log(event.target);
});




 
      