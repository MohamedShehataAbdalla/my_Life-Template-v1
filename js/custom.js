
// $(function () {
//   'use strict';
//   $('.info-list li').click(function (){
//     $(this).addClass('selected').siblings('li').removeClass('selected');
//   });
// });

let list = document.querySelectorAll('.information ul li'),
    div  = document.querySelectorAll('.information .info-content > div');
list.forEach(ele => {
  ele.addEventListener('click', function(e){
    list.forEach(ele => {
      ele.classList.remove('selected');
    });
    e.target.classList.add('selected');

    div.forEach(ele => {
      ele.style.display = 'none';
    })

    document.querySelectorAll(e.target.dataset.class).forEach(ele => {
      ele.style.display = 'block';
    })

    


  });
});
