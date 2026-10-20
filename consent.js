const KEY='ofertacerta-analytics-consent';
function analyticsAllowed(){return localStorage.getItem(KEY)==='accepted'}
function trackPage(){if(analyticsAllowed())window.dispatchEvent(new CustomEvent('analytics-pageview',{detail:{url:location.href}}))}
function consent(){if(localStorage.getItem(KEY))return;const box=document.createElement('aside');box.className='consent-banner';box.innerHTML='<strong>Privacidade e analytics</strong><p>Usamos métricas anônimas somente após sua autorização. Nenhum dado pessoal é enviado.</p><button class="button button-primary" id="accept">Aceitar</button> <button class="button button-secondary" id="reject">Continuar sem analytics</button>';document.body.append(box);accept.onclick=()=>{localStorage.setItem(KEY,'accepted');box.remove();trackPage()};reject.onclick=()=>{localStorage.setItem(KEY,'rejected');box.remove()}}
document.addEventListener('DOMContentLoaded',()=>{consent();trackPage()});window.addEventListener('hashchange',trackPage);
