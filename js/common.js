
document.addEventListener('DOMContentLoaded',()=>{
  const year=document.querySelectorAll('.year'); year.forEach(x=>x.textContent=new Date().getFullYear());
  document.querySelectorAll('form[data-demo]').forEach(f=>{
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const out=f.querySelector('.result');
      if(out) out.textContent='Заявка принята в учебном прототипе. Мы свяжемся с вами.';
      f.reset();
    });
  });
  const calc=document.querySelector('#calc');
  if(calc){
    const amount=document.querySelector('#amount'), days=document.querySelector('#days'), rate=document.querySelector('#rate'), res=document.querySelector('#calcResult');
    const run=()=>{let a=+amount.value||0,d=+days.value||0,r=+rate.value||0; let interest=a*(r/100)*d/30; res.textContent='Ориентировочно к возврату: '+Math.round(a+interest)+' ₽';};
    [amount,days,rate].forEach(x=>x.addEventListener('input',run)); run();
  }
  const reviewForm=document.querySelector('#reviewForm');
  const reviews=document.querySelector('#reviews');
  if(reviewForm&&reviews){
    let arr=JSON.parse(localStorage.getItem('lombardReviews')||'[]');
    const render=()=>{reviews.innerHTML=arr.map(r=>`<div class="card"><b>${r.name}</b><p>${r.text}</p></div>`).join('')||'<p>Пока отзывов нет.</p>'};
    render();
    reviewForm.addEventListener('submit',e=>{
      e.preventDefault();
      arr.unshift({name:reviewForm.name.value,text:reviewForm.text.value});
      localStorage.setItem('lombardReviews',JSON.stringify(arr)); reviewForm.reset(); render();
    });
  }
});
