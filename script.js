const PASSWORD = 'GANADORES';
const CATEGORIES = {
  'Gym': [
    'El hierro no miente: te devuelve exactamente lo que le das.',
    'Entrena aunque no tengas ganas; ahí nace el físico serio.',
    'Tu cuerpo cambia cuando tu rutina deja de negociar.',
    'Cada repetición buena es una deuda menos con tu futuro.',
    'Nadie ve las 5 a.m., pero todos ven los resultados.',
    'El espejo premia constancia, no excusas.',
    'Sudor hoy, respeto mañana.',
    'Disciplina es terminar la serie que querías soltar.',
    'Haz del cansancio tu señal de crecimiento.',
    'Construyes fuerza cuando otros están dormidos.',
    'Más peso mental, menos ruido exterior.',
    'Si no arde, no transforma.',
    'Tu mejor versión se entrena en silencio.',
    'No busques motivación; busca un horario y cúmplelo.',
    'El físico se esculpe con días aburridos bien hechos.',
    'La barra enseña humildad y carácter.',
    'No falles dos días seguidos.',
    'La disciplina también se nota en tu postura.',
    'Hoy duele, mañana domina.',
    'Tu límite suele ser una historia mal contada.',
    'Más técnica, más progreso, menos ego.',
    'No entrenes para likes; entrena para legado.',
    'La constancia pesa más que cualquier mancuerna.',
    'No pares cuando estés cansado, para cuando termines.',
    'Cada gota de sudor es un voto por tu nuevo yo.'
  ],
  'Dios': [
    'Dios abre caminos donde tu lógica solo ve paredes.',
    'Ora, trabaja y confía: ese orden cambia vidas.',
    'La fe firme también se entrena en días grises.',
    'Dios no llega tarde; llega exacto.',
    'Cuando no entiendas el proceso, cuida tu obediencia.',
    'La paz de Dios no depende del algoritmo.',
    'Tu batalla no te define; tu confianza sí.',
    'Si Dios te sostuvo ayer, hoy también puede.',
    'Hay puertas que solo se abren con paciencia.',
    'Menos ansiedad, más oración con acción.',
    'Dios corrige por amor, no por abandono.',
    'La fe real camina incluso sin aplausos.',
    'No confundas silencio con ausencia divina.',
    'Tu propósito es más grande que tu miedo.',
    'Dios honra al que persiste con corazón limpio.',
    'Donde termina tu fuerza, empieza su gracia.',
    'No te rindas: tal vez estás a una oración de distancia.',
    'Dios resta orgullo para sumar propósito.',
    'La promesa tarda, pero no falla.',
    'Agradece en el proceso, no solo en la meta.',
    'La fe madura cuando el resultado aún no llega.',
    'Dios no te trajo hasta aquí para soltarte ahora.',
    'Camina recto, incluso cuando nadie mire.',
    'Tu historia con Dios no necesita aprobación humana.',
    'El cielo responde a corazones perseverantes.'
  ],
  'Mentalidad': Array.from({length:25}, (_,i)=>[
    'Tu estándar define tu destino, no tu estado de ánimo.',
    'Piensa en años, actúa en horas.',
    'Si controlas tu enfoque, controlas tu semana.',
    'La claridad llega cuando dejas de postergar.',
    'Menos drama interno, más decisiones concretas.',
    'No eres tus impulsos; eres tus hábitos repetidos.',
    'La mente fuerte corta excusas en segundos.',
    'No todo merece respuesta, sí merece estrategia.',
    'Avanzar lento sigue siendo avanzar.',
    'La incomodidad es matrícula de crecimiento.',
    'Tu futuro depende de cómo te hablas hoy.',
    'Ganar empieza por ordenar la cabeza.',
    'Si te distraes fácil, te dominan fácil.',
    'Tu atención es tu activo más caro.',
    'Menos opinión ajena, más ejecución diaria.',
    'No busques ser entendido; busca ser efectivo.',
    'La mente elite no improvisa su mañana.',
    'Discute menos, construye más.',
    'La identidad precede al resultado.',
    'La paciencia estratégica también es poder.',
    'Céntrate: lo urgente roba tu gran meta.',
    'Tu narrativa interna puede salvarte o sabotearte.',
    'La consistencia vence cualquier arranque explosivo.',
    'Decidir bien cansa menos que arrepentirse.',
    'Tu mentalidad es el software de tu destino.'
  ][i]),
  'Dinero': [
    'Haz dinero en silencio y deja que facture tu paz.',
    'No gastes para impresionar; invierte para respirar tranquilo.',
    'Rico no es el que aparenta, es el que controla su flujo.',
    'Si no sabes vender, alguien te venderá su versión de éxito.',
    'El ingreso sube cuando tu valor se vuelve evidente.',
    'Dinero ama la claridad, no la improvisación eterna.',
    'Tu sueldo cambia cuando cambias tu skill.',
    'Cobrar bien empieza por resolver problemas reales.',
    'Primero capital, luego caprichos.',
    'No le cuentes tus metas financieras a quien vive endeudado.',
    'Libertad financiera: menos ruido, más opciones.',
    'El efectivo rápido distrae del patrimonio largo.',
    'Mide todo: lo que no mides te domina.',
    'Aprende a cerrar ventas antes de buscar socios.',
    'Haz que tu dinero trabaje turnos dobles.',
    'No rompas tu presupuesto por una emoción de 10 minutos.',
    'La mejor compra es conocimiento aplicable.',
    'Vender transforma talento en ingreso.',
    'Quien domina oferta domina mercado.',
    'No busques atajos; construye sistemas.',
    'Factura primero, celebra después.',
    'Tu marca personal también es activo financiero.',
    'El lujo real es no depender de una quincena.',
    'Menos consumo impulsivo, más inversión disciplinada.',
    'La riqueza se construye cuando nadie aplaude.'
  ],
  'Obsesión': [
    'Obsesión no es locura: es enfoque sin permiso.',
    'Mientras dudan, tú ejecuta.',
    'Modo guerra: menos explicación, más resultados.',
    'Silencio táctico, progreso brutal.',
    'El promedio descansa; la obsesión afina.',
    'No pares por cansancio mental: respira y vuelve.',
    'Haz que tu nombre sea sinónimo de cumplimiento.',
    'Tu competencia también duerme: tú decide.',
    'La obsesión correcta tiene calendario.',
    'Repite hasta que parezca talento.',
    'Nadie te debe impulso; créalo.',
    'Cero victimismo, cien por ciento ejecución.',
    'Obsesión elegante: intensidad con estrategia.',
    'Sin disciplina, la pasión se disipa.',
    'Volumen de trabajo vence inspiración pasajera.',
    'Tu hambre se nota en lo que terminas.',
    'El ruido social mata procesos serios.',
    'Hazlo cansado, pero hazlo.',
    'No negocies con tu meta de largo plazo.',
    'La obsesión construye cuando el ego obedece.',
    'Una más, una mejor, una diaria.',
    'El éxito extremo exige prioridad extrema.',
    'Obsesión: convertir promesas en evidencia.',
    'No compitas por hablar; compite por cumplir.',
    'Si importa de verdad, se agenda y se hace.'
  ],
  'Frases cortas': [
    'Nadie viene a salvarte.', 'Hazlo hoy.', 'Modo guerra.', 'Sin excusas.', 'Silencio productivo.',
    'Disciplina diaria.', '1% mejor.', 'Más enfoque.', 'Menos ruido.', 'Cumple tu palabra.',
    'Piensa largo.', 'Actúa ahora.', 'Fe y acción.', 'Constancia brutal.', 'Sin miedo.',
    'Duele, crece.', 'Haz dinero.', 'Sigue firme.', 'Todo suma.', 'No negocies.',
    'Marca personal.', 'Código interno.', 'Nada de drama.', 'Ejecución total.', 'Ganar en silencio.'
  ],
  'Frases oscuras': [
    'El dolor de quedarte igual pesa más que el de cambiar.',
    'Tu sombra crece cuando huyes de tu verdad.',
    'El miedo se alimenta de decisiones aplazadas.',
    'Noche larga, mente fría, paso firme.',
    'No todos merecen entrar a tu proceso.',
    'El silencio también es una frontera.',
    'A veces perder personas es ganar enfoque.',
    'Lo roto enseña donde lo cómodo adormece.',
    'Sonríe menos, observa más.',
    'El caos revela quién manda en tu mente.',
    'Tu versión débil también sabe hablar bonito.',
    'No hay luz sin atravesar sombras propias.',
    'La traición enseña filtros, no venganza.',
    'El vacío se llena con propósito, no con ruido.',
    'Hay guerras que se ganan sin testigos.',
    'Quien teme estar solo aún no se conoce.',
    'Frío por fuera, fuego en objetivos.',
    'No toda cicatriz pide explicación.',
    'El carácter nace cuando se cae el personaje.',
    'Menos promesas, más mirada firme.',
    'Lo oscuro no siempre es malo; a veces enfoca.',
    'No confíes en aplausos fáciles.',
    'Tu paz vale más que pertenecer.',
    'Calla, mejora, reaparece.',
    'El respeto llega cuando dejas de rogarlo.'
  ],
  'TikTok viral': [
    'POV: te cansaste de empezar cada lunes y hoy sí cumpliste.',
    'Si este video te incomoda, era para ti.',
    'Nadie te odia; solo no soportan tu consistencia.',
    'Mírate en un año si no te rindes hoy.',
    'Guárdalo para cuando quieras abandonar.',
    'Este audio + esta mentalidad = resultados.',
    'No era falta de tiempo, era falta de prioridad.',
    'Sube el volumen: tu excusa favorita se acaba hoy.',
    'Si te dolió, compártelo con tu yo de ayer.',
    'No soy duro, soy honesto con mi futuro.',
    'Checklist del día: entrenar, crear, facturar, repetir.',
    'Hazlo por ti, no por validación digital.',
    'Hoy no hay mood, hay misión.',
    'Si nadie te apoya al inicio, vas bien.',
    'La versión cara de ti depende de lo que hagas ahora.',
    'Esto no es motivación, es recordatorio.',
    'Si lo viste completo, te toca ejecutarlo.',
    'Te falta suerte o te falta constancia?',
    'Hazte viral por disciplina, no por drama.',
    'El algoritmo respeta a quien no se detiene.',
    'Una meta clara vale más que mil tendencias.',
    'No subas todo: construye en privado.',
    'Tus hábitos también generan views en tu vida real.',
    'Convierte scroll en estrategia.',
    'Si guardas esto, cúmplelo mañana temprano.'
  ],
  'Motivación extrema': [
    'Tu futuro no perdona excusas repetidas.',
    'El día que te domines, cambia todo.',
    'No esperes permiso para volverte imparable.',
    'Conviértete en quien tu meta necesita.',
    'Haz del sacrificio tu lenguaje diario.',
    'El talento sin disciplina es ruido caro.',
    'Decide, ejecuta, corrige, vuelve a ejecutar.',
    'No llores por presión: úsala de combustible.',
    'Hazlo con miedo, pero hazlo completo.',
    'Cada día tibio te aleja años.',
    'No pidas menos carga; pide más carácter.',
    'Si te caes, que sea hacia adelante.',
    'Tu apellido puede convertirse en marca.',
    'Resultados extremos nacen de hábitos simples innegociables.',
    'No naciste para sobrevivir en modo automático.',
    'Corta distracciones como si fueran deudas.',
    'La disciplina vence a la motivación.',
    'Haz lo incómodo hasta que sea identidad.',
    'Tu energía sigue a tu propósito.',
    'Sin estructura, la ambición se derrama.',
    'No falles por falta de valentía cotidiana.',
    'La cima respeta a quien insiste.',
    'No abandones en el capítulo que te forma.',
    'La acción masiva corrige dudas pequeñas.',
    'Hoy defines si mañana mandas o te quejas.'
  ]
};

const state = { activeCategory: Object.keys(CATEGORIES)[0], query: '', favorites: JSON.parse(localStorage.getItem('textospro_favs') || '[]') };
const el = id => document.getElementById(id);

function showToast(msg){ const t = el('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800); }
function saveFavs(){ localStorage.setItem('textospro_favs', JSON.stringify(state.favorites)); el('favCount').textContent = state.favorites.length; }
function toggleFavorite(text){
  const idx = state.favorites.indexOf(text);
  if(idx>=0){ state.favorites.splice(idx,1); showToast('Favorito eliminado'); }
  else { state.favorites.push(text); showToast('Añadido a favoritos'); }
  saveFavs(); renderCards();
}
function shareText(text){
  const shareData = { title: 'TEXTOS PRO 👑', text };
  if(navigator.share){ navigator.share(shareData).catch(()=>{}); }
  else { navigator.clipboard.writeText(text); showToast('Compartir no disponible. Texto copiado.'); }
}
function getFiltered(){
  const list = CATEGORIES[state.activeCategory] || [];
  return list.filter(t => t.toLowerCase().includes(state.query.toLowerCase()));
}
function renderTabs(){
  const tabs = el('tabs'); tabs.innerHTML='';
  Object.keys(CATEGORIES).forEach(cat=>{
    const b=document.createElement('button'); b.textContent=cat;
    if(cat===state.activeCategory) b.classList.add('active');
    b.onclick=()=>{ state.activeCategory=cat; renderTabs(); renderCards(); };
    tabs.appendChild(b);
  });
}
function renderCards(){
  const data = getFiltered();
  el('totalCount').textContent = Object.values(CATEGORIES).reduce((a,c)=>a+c.length,0);
  const grid = el('cardsGrid'); grid.innerHTML='';
  if(!data.length){ grid.innerHTML='<p>No hay resultados con ese filtro.</p>'; return; }
  data.forEach((text, i)=>{
    const card=document.createElement('article'); card.className='card';
    card.innerHTML=`<p>${text}</p><small>#${i+1} · ${state.activeCategory}</small>
      <div class="card-actions">
      <button class="copy">Copiar</button>
      <button class="favorite ${state.favorites.includes(text)?'active':''}">★ Favorito</button>
      <button class="share">Compartir</button></div>`;
    card.querySelector('.copy').onclick=()=>navigator.clipboard.writeText(text).then(()=>showToast('Texto copiado ✅'));
    card.querySelector('.favorite').onclick=()=>toggleFavorite(text);
    card.querySelector('.share').onclick=()=>shareText(text);
    grid.appendChild(card);
  });
}
function clockTick(){ el('clock').textContent = new Date().toLocaleTimeString('es-ES'); }

el('loginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const pass = el('password').value.trim();
  if(pass!==PASSWORD){ el('loginError').textContent='Acceso denegado: contraseña premium incorrecta.'; return; }
  el('loginError').textContent='';
  el('loginView').classList.remove('active');
  setTimeout(()=>{ el('appView').classList.add('active'); renderTabs(); renderCards(); saveFavs(); },300);
});
el('searchInput').addEventListener('input', e=>{ state.query=e.target.value; renderCards(); });
setInterval(clockTick,1000); clockTick();

(function particles(){
  const cvs=el('particlesCanvas'),ctx=cvs.getContext('2d');
  const pts=[]; let w,h;
  function resize(){ w=cvs.width=innerWidth; h=cvs.height=innerHeight; }
  addEventListener('resize', resize); resize();
  for(let i=0;i<90;i++) pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.8+0.5});
  function loop(){
    ctx.clearRect(0,0,w,h);
    for(const p of pts){ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(0,229,255,.7)'; ctx.fill(); }
    requestAnimationFrame(loop);
  }
  loop();
})();

addEventListener('mousemove', e=>{ const g=el('mouseGlow'); g.style.left=e.clientX+'px'; g.style.top=e.clientY+'px'; });
