let userCardContainer = document.querySelector('.suggestion-container');
let nxtArrow =document.querySelector('.nxt-arrow');
let preArrow =document.querySelector('.pre-arrow');

let containerDimensions = userCardContainer.getBoundingClientRect();
let containerWidth = containerDimensions.width;

nxtArrow.addEventListener('click',()=>{
    userCardContainer.scrollLeft += containerWidth;
})
preArrow.addEventListener('click',()=>{
    userCardContainer.scrollLeft -= containerWidth;
})


const userPosts = [...document.querySelectorAll('.posts-container .post')];
let popupPost = document.querySelector('.post-popup');
let closePopup = document.querySelector('.close-overlay');
let popPostImg = document.querySelector('.posts-conatiner.post .post-img-container .img');
userPosts.map(post=>{
    post.addEventListener('click',()=>{
        let img = post.querySelector('.post-img');
        popPostImg.src = img.src;
        popupPost.classList.add('show'); 
    })
})
closePopup.addEventListener('click',()=>popupPost.classList.remove('show'));

posts = [...document.querySelectorAll('.post-popup .post')];
posts.map(post => addInteractionsToPost(post));