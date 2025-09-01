// Basic contact form handler (works without server if using Formspree/Netlify forms)
const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', (e)=>{
e.preventDefault();
alert('Thanks! Your message is ready to be sent.\nYou can wire this to Formspree or Netlify Forms for real delivery.');
form.reset();
});
}


// Add to cart sample behavior (local only)
document.querySelectorAll('.add-to-cart').forEach(btn=>{
btn.addEventListener('click', ()=>{
alert('Added to cart (demo). To enable cart + checkout, integrate a payment provider or use Shopify / Snipcart.');
});
});