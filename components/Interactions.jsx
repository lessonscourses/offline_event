'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Parallax, reveal on scroll, lightbox, clocks, countdowns, schedule progress, mobile menu, invite form.
// Plain DOM code so the markup stays simple JSX with data-attributes.
export default function Interactions() {
  const pathname = usePathname();
  useEffect(() => {
    const cleanups = [];
    const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); cleanups.push(() => t.removeEventListener(ev, fn, o)); };
    const every = (fn, ms) => { const id = setInterval(fn, ms); cleanups.push(() => clearInterval(id)); };
    run(on, every);
    return () => cleanups.forEach((f) => f());
  }, [pathname]);
  return null;
}

function run(on, every) {

    var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    function $(s,r){return (r||document).querySelector(s)}
    function $$(s,r){return [].slice.call((r||document).querySelectorAll(s))}

    /* header */
    var h=$('.hdr'),bg=$('.burger'),m=$('.mnav');
    on(window,'scroll',function(){h&&h.classList.toggle('scrolled',scrollY>10)},{passive:true});
    if(bg)on(bg,'click',function(){var o=m.classList.toggle('open');document.body.style.overflow=o?'hidden':''});
    $$('.mnav a').forEach(function(a){on(a,'click',function(){m.classList.remove('open');document.body.style.overflow=''})});

    /* reveal */
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    $$('.rv,.tour').forEach(function(el){io.observe(el)});

    /* parallax: [data-speed] moves relative to viewport centre */
    var px=$$('[data-speed]');
    function para(){
      if(!reduce){var vh=innerHeight;
        px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();var c=r.top+r.height/2-vh/2;var s=parseFloat(el.dataset.speed);
          var x=el.dataset.axis==='x';el.style.transform=x?'translate3d('+(-c*s)+'px,0,0)':'translate3d(0,'+(c*s)+'px,0)'});}
      schedProg();
    }
    on(window,'scroll',function(){requestAnimationFrame(para)},{passive:true});on(window,'resize',para);para();

    /* schedule progress */
    function schedProg(){var L=$('.sched-list');if(!L)return;var r=L.getBoundingClientRect(),mid=innerHeight*.55;
      var p=Math.max(0,Math.min(1,(mid-r.top)/r.height));$('.prog',L).style.height=(p*(r.height-20))+'px';
      $$('li',L).forEach(function(li){var t=li.getBoundingClientRect().top;li.classList.toggle('on',t<mid&&t>mid-li.offsetHeight-40)})}

    /* live local clocks */
    function clocks(){$$('[data-tz]').forEach(function(el){try{el.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:el.dataset.tz,hour:'2-digit',minute:'2-digit'}).format(new Date())}catch(e){}})}
    clocks();every(clocks,20000);

    /* countdowns */
    function cds(){$$('[data-count]').forEach(function(el){var d=Math.max(0,new Date(el.dataset.count)-Date.now());
      var v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];
      $$('b',el).forEach(function(b,i){var t=String(v[i]).padStart(2,'0');if(b.textContent!==t)b.textContent=t})});
      $$('[data-days]').forEach(function(el){el.textContent=Math.max(0,Math.ceil((new Date(el.dataset.days)-Date.now())/864e5))})}
    cds();every(cds,1000);

    /* lightbox */
    var items=$$('[data-lb]'),lb=$('.lb'),st=$('.lb-stage'),ct=$('.lb .ct'),cur=0;
    function show(i){cur=(i+items.length)%items.length;var it=items[cur],src=it.dataset.lb;
      st.innerHTML=it.dataset.type==='video'?'<video src="'+src+'" controls autoplay playsinline></video>':'<img src="'+src+'" alt="">';
      ct.textContent=(cur+1)+' / '+items.length}
    function open(i){show(i);lb.classList.add('open');document.body.style.overflow='hidden'}
    function close(){lb.classList.remove('open');st.innerHTML='';document.body.style.overflow=''}
    items.forEach(function(it,i){on(it,'click',function(){open(i)})});
    if(lb){$('.lb .x').onclick=close;$('.lb .pv').onclick=function(){show(cur-1)};$('.lb .nx').onclick=function(){show(cur+1)};
      on(lb,'click',function(e){if(e.target===lb)close()});
      on(window,'keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)})}

    /* invite form (prototype) */
    var f=$('#inviteForm');if(f)on(f,'submit',function(e){e.preventDefault();$('#fBody').style.display='none';$('#fDone').classList.add('on')});
    var back=$('#fBack');if(back)back.onclick=function(){$('#fBody').style.display='';$('#fDone').classList.remove('on')};

}
