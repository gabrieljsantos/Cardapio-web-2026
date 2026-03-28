// ========== DADOS ==========

var WHATSAPP = '5579999003081';

var ovosColher = [
  {
    nome: 'Dueto',
    preco: 95,
    casca: 'Casca: escolher (ao leite ou branca)',
    desc: 'Combinação perfeita de chocolate ao leite e chocolate branco, com recheio cremoso dos dois chocolates. Finalizado com brigadeiros.'
  },
  {
    nome: 'Morango',
    preco: 95,
    casca: 'Casca: escolher (ao leite ou branca)',
    desc: 'Creme suave de morango, finalizado com morangos.'
  },
  {
    nome: 'Brigadeiro',
    preco: 90,
    casca: 'Casca de chocolate ao leite',
    desc: 'Recheada com brigadeiro cremoso e finalizada com brigadeiros gourmet.'
  },
  {
    nome: 'Morango com Chocolate',
    preco: 100,
    casca: 'Casca de chocolate ao leite',
    desc: 'Recheada com creme de morango e chocolate, finalizado com brigadeiro e morango.'
  },
  {
    nome: 'Kinder Bueno',
    preco: 115,
    casca: 'Casca ao leite (ou branca)',
    desc: 'Recheio cremoso inspirado no Kinder Bueno, com creme de avelã e chocolate ao leite. Finalizado com Kinder Bueno.'
  },
  {
    nome: 'Ferrero Rocher',
    preco: 115,
    casca: 'Casca ao leite',
    desc: 'Creme de avelã com chocolate, pedaços crocantes e finalizado no estilo Ferrero Rocher.'
  },
  {
    nome: 'Prestígio',
    preco: 90,
    casca: 'Casca meio amargo',
    desc: 'Recheio de coco cremoso com chocolate ao leite, clássico e irresistível. Finalizado com Prestígio.'
  },
  {
    nome: 'Maracujá com Brigadeiro',
    preco: 95,
    casca: 'Casca meio amargo',
    desc: 'Creme de maracujá levemente azedinho combinado com brigadeiro cremoso, finalizado com brigadeiro.'
  },
  {
    nome: 'Chokito',
    preco: 90,
    casca: 'Casca ao leite',
    desc: 'Creme crocante com chocolate, no estilo Chokito. Delicioso e irresistível.'
  },
  {
    nome: 'KitKat',
    preco: 110,
    casca: 'Casca ao leite',
    desc: 'Chocolate cremoso com pedaços crocantes de wafer tipo KitKat. Finalizado com KitKat.'
  },
  {
    nome: 'Matilde',
    preco: 100,
    casca: 'Casca meio amargo',
    desc: 'Creme de chocolate com bolo Matilde, finalizado com chocolate.'
  }
];

var trufadosSabores = [
  'Ninho com Nutella',
  'Brigadeiro',
  'Castanha',
  'Prestígio',
  'Morango'
];
var trufadoPreco = 90;

var tradicionais = [
  { peso: 'aprox. 250g', preco: 25 },
  { peso: 'aprox. 350g', preco: 60 }
];

// ========== HELPERS ==========

function linkZap(texto) {
  return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto);
}

function svgZap(w) {
  var s = w || 16;
  return '<svg viewBox="0 0 32 32" width="' + s + '" height="' + s + '" fill="currentColor"><path d="M16.01 2.93A13.07 13.07 0 0 0 2.93 16a12.94 12.94 0 0 0 1.74 6.53L2.84 29.16l6.83-1.79A13.06 13.06 0 1 0 16.01 2.93zm0 23.93a10.82 10.82 0 0 1-5.52-1.51l-.4-.23-4.05 1.06 1.08-3.94-.26-.41a10.87 10.87 0 1 1 9.15 5.03zm5.96-8.13c-.33-.16-1.93-.95-2.23-1.06s-.52-.16-.73.17-.84 1.06-1.03 1.28-.38.25-.71.08a8.93 8.93 0 0 1-2.64-1.63 9.87 9.87 0 0 1-1.82-2.26c-.19-.33 0-.5.14-.67.14-.15.33-.38.49-.58s.22-.33.33-.55a.6.6 0 0 0-.03-.58c-.08-.16-.73-1.76-.99-2.41s-.52-.55-.73-.56h-.62a1.2 1.2 0 0 0-.87.41 3.64 3.64 0 0 0-1.13 2.71 6.34 6.34 0 0 0 1.33 3.37 14.53 14.53 0 0 0 5.57 4.92 18.7 18.7 0 0 0 1.86.69 4.47 4.47 0 0 0 2.06.13 3.36 3.36 0 0 0 2.2-1.55 2.71 2.71 0 0 0 .19-1.55c-.08-.14-.3-.22-.63-.38z"/></svg>';
}

// ========== MENSAGEM DO WHATSAPP REFORMULADA ==========

function msgPedido(nomeItem) {
  return 'Olá! Gostaria de pedir um:\n*' + nomeItem + '*\ne meu nome é:';
}

// ========== RENDER OVOS DE COLHER ==========

function renderColher() {
  var container = document.getElementById('ovos-colher');
  if (!container) return;

  ovosColher.forEach(function(item, i) {
    var msg = msgPedido('Ovo de Colher - ' + item.nome + ' (R$' + item.preco + ')');
    var href = linkZap(msg);

    var div = document.createElement('div');
    div.className = 'card-sabor fade-up';
    div.style.transitionDelay = (i * 0.06) + 's';

    div.innerHTML =
      '<span class="pedir-hint">Toque para pedir</span>' +
      '<div class="card-sabor-top">' +
        '<a href="' + href + '" target="_blank" rel="noopener" class="sabor-nome" title="Clique para pedir ' + item.nome + '">' + item.nome + '</a>' +
        '<span class="sabor-preco">R$ ' + item.preco + '</span>' +
      '</div>' +
      '<div class="sabor-casca">' + item.casca + '</div>' +
      '<div class="sabor-desc">' + item.desc + '</div>' +
      '<a href="' + href + '" target="_blank" rel="noopener" class="sabor-link-pedir">' +
        svgZap(16) +
        ' Pedir agora' +
      '</a>';

    container.appendChild(div);
  });
}

// ========== RENDER OVOS TRUFADOS ==========

function renderTrufados() {
  var container = document.getElementById('ovos-trufados');
  if (!container) return;

  // Preço destaque
  var precoDiv = document.createElement('div');
  precoDiv.className = 'trufados-preco-destaque fade-up';
  precoDiv.textContent = 'R$ ' + trufadoPreco;
  container.appendChild(precoDiv);

  // Subtítulo
  var sub = document.createElement('p');
  sub.style.cssText = 'text-align:center;margin-bottom:0.85rem;font-size:0.92rem;color:#526947;';
  sub.textContent = 'Escolha seu sabor e clique para pedir:';
  sub.className = 'fade-up';
  container.appendChild(sub);

  // Grid de sabores
  var grid = document.createElement('div');
  grid.className = 'trufados-sabores-grid';

  trufadosSabores.forEach(function(sabor, i) {
    var msg = msgPedido('Ovo Trufado - ' + sabor + ' (R$' + trufadoPreco + ')');
    var href = linkZap(msg);

    var card = document.createElement('a');
    card.href = href;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'card-trufado-sabor fade-up';
    card.style.textDecoration = 'none';
    card.style.transitionDelay = (i * 0.07) + 's';
    card.title = 'Clique para pedir ' + sabor;

    card.innerHTML =
      '<span class="trufado-sabor-nome">🍫 ' + sabor + '</span>' +
      '<span class="trufado-pedir-link">' +
        svgZap(14) +
        ' Pedir' +
      '</span>';

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// ========== RENDER OVOS TRADICIONAIS ==========

function renderTradicionais() {
  var container = document.getElementById('ovos-tradicionais');
  if (!container) return;

  var grid = document.createElement('div');
  grid.className = 'tradicionais-grid';

  tradicionais.forEach(function(item, i) {
    var msg = msgPedido('Ovo Tradicional (' + item.peso + ' - R$' + item.preco + ')');
    var href = linkZap(msg);

    var card = document.createElement('div');
    card.className = 'card-tradicional fade-up';
    card.style.transitionDelay = (i * 0.1) + 's';

    card.innerHTML =
      '<div class="trad-peso">' + item.peso + '</div>' +
      '<div class="trad-preco">R$ ' + item.preco + '</div>' +
      '<a href="' + href + '" target="_blank" rel="noopener" class="trad-pedir-link" title="Clique para pedir">' +
        svgZap(15) +
        ' Pedir agora' +
      '</a>';

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// ========== ANIMAÇÃO DE SCROLL ==========

function initScrollAnim() {
  var els = document.querySelectorAll('.fade-up, .anim-slide-up, .anim-zoom-in, .anim-slide-left, .anim-slide-right');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  els.forEach(function(el) { observer.observe(el); });
}

// ========== BOTÃO WHATSAPP FIXO ==========

function initBtnZap() {
  var btn = document.getElementById('btn-whatsapp-fixo');
  if (!btn) return;
  var msg = msgPedido('(escolha do cardápio)');
  btn.href = linkZap(msg);
}

// ========== INIT ==========

document.addEventListener('DOMContentLoaded', function() {
  renderColher();
  renderTrufados();
  renderTradicionais();
  initBtnZap();

  // Delay para animação funcionar após render
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      initScrollAnim();
    });
  });
});