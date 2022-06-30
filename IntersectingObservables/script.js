const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver(entries =>{
    
    /* Will add the translate animation when the card is intersecting
     or visible in the screen for the user and remove as soon as goes off 
     the screen.
    */
     entries.forEach((entry) =>{
        entry.target.classList.toggle("show",entry.isIntersecting);

        // if(entry.isIntersecting)
        //   observer.unobserve(entry.target);
     })

},
{
    threshold:1,

}
)

// lazy loading
const lastCardObserver = new IntersectionObserver(entries =>{
    
  const lastCard = entries[0];
  if(!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"))
})

cards.forEach((card)=>{
    observer.observe(card);

})

lastCardObserver.observe(document.querySelector(".card:last-child"));

function loadNewCards(){
    for(let i=0;i<10;i++)
    {
        const card = document.createElement("div");
        card.textContent="New Card";
        card.classList.add("card");
        observer.observe(card);
        cardContainer.append(card);
    }
}
