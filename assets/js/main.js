const searchToggle=document.getElementById('searchToggle'),
    searchInput=document.getElementById('searchInput')

    if(searchToggle){
        searchToggle.addEventListener('click', ()=>{
            searchInput.classList.replace('hidden', 'block'),
            searchToggle.classList.add('hidden')
        })
    }
    if(searchInput){
        searchInput.addEventListener('focusout', ()=>{
            searchInput.classList.add('hidden')
            searchToggle.classList.remove('hidden')
        })
    }

    var swiper = new Swiper(".pageSwiper", {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      });

    var swiper = new Swiper(".authorSwiper", {
        loop:true,
        spaceBetween:8,
        breakpoints:{
            0:{
                slidesPerView: 1.3,
            }
        }
      });