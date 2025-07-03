document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    // --- Header Component ---
    const headerHTML = `
    <header>
      <a href="#" class="menu" onclick="ToggleNav();">
        <ion-icon name="menu-outline"></ion-icon>
      </a>
      <a href="index.html" class="logo">
        <img src="images/Logobig.png" alt="Gracie Barra Canoinhas Logo">
      </a>
      <div class="search">
        <input type="text" placeholder="Pesquisar...">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // --- Banner (Swiper) ---
    const bannerHTML = `
    <div class="banner">
      <ul class="nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="story.html">História</a></li>
        <li><a href="structure.html">Estrutura</a></li>
        <li><a href="programs.html">Programas</a></li>
      </ul>
      <div class="swiper custom-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="images/Logobig.png" alt="" class="bjj-img">
          </div>
          <!-- outros slides -->
        </div>
        <div class="control">
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>`;
    document.querySelector('header').insertAdjacentHTML('afterend', bannerHTML);

    const slideImg = document.querySelector('.swiper-slide img.bjj-img');

if (slideImg) {
  if (currentPage === 'story.html' || currentPage === 'historia.html') {
    slideImg.src = 'images/GbHistory.png'; // imagem da história
  } else if (currentPage === 'structure.html') {
    slideImg.src = ''; // imagem da estrutura
  } else {
    slideImg.src = ''; // imagem padrão (home ou outras)
  }
}

    // --- Content Component ---
    const defaultContent = `
    <div class="content">
      <h2>SUA JORNADA COMEÇA AQUI</h2>
      <p>
        Aprenda jiu-jitsu com professores qualificados em um ambiente acolhedor, seguro e disciplinado.
        Desenvolva seu corpo e mente com uma metodologia reconhecida mundialmente.
      </p>
      <a href="https://wa.me/16993932405?text=Quero%20fazer%20uma%20aula%20experimental%20na%20Gracie%20Barra!" target="_blank">
        Fale conosco
      </a>
    </div>`;
    const storyContent = `
    <section class="story-content">
      <h2>Nossa História</h2>
      <h1> O Legado que Moldou o Jiu-Jitsu Moderno </h1>
      <p>
  Fundada em 1986 pelo Grão-Mestre Carlos Gracie Jr., a Gracie Barra nasceu no coração do Rio de Janeiro como um farol de inovação e tradição. Herdeira direta dos ensinamentos de Carlos Gracie (criador da dieta Gracie e arquiteto da estratégia de BJJ) e Hélio Gracie (pioneiro das técnicas de alavancas), nossa escola transformou-se na maior rede de jiu-jitsu do mundo – presente em 6 continentes e mais de 800 escolas.

  <span class="highlight">FILOSOFIA</span>
  <strong class="quote">"Compartilhar o Jiu-Jitsu com o maior número de pessoas possível"</strong>
  Um chamado que transcende competição: arte marcial como ferramenta de crescimento humano.

  <span class="highlight">METODOLOGIA REVOLUCIONÁRIA</span>
  O primeiro currículo estruturado de BJJ (Programas GB1, GB2, GB3), dividido por níveis e faixas etárias – democratizando o aprendizado.

  <span class="highlight">COMUNIDADE GLOBAL</span>
  Da criança ao idoso, do atleta ao praticante casual: construímos uma família unida por valores como respeito, humildade e excelência.

  <span class="highlight">🥋 1983:</span> Carlos Gracie Jr. assume a academia da Barra da Tijuca (RJ), berço do "Método Gracie Barra"

  <span class="highlight">🌎 2005:</span> Expansão internacional com a primeira unidade nos EUA

  <span class="highlight">🏆 Domínio competitivo:</span> 27 títulos mundiais de equipe (IBJJF) e formação de lendas como Romulo Barral e Kyra Gracie

  <strong class="quote">"Não formamos apenas faixas-preta, formamos seres humanos melhores"  
  (Carlos Gracie Jr.)</strong>
</p>
    </section>`;

    const structureContent = `
    <div class="structure-container">
                <div class="structure-header">
                    <h1>Nossa Estrutura</h1>
                    <p>Venha nos visitar e conheça nossa academia completa!</p>
                </div>
                
                <div class="structure-content">
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.089635782115!2d-50.3837203!3d-26.5167924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e713ad4cb6854d%3A0x6ac8c4bca9a031f2!2sGracie%20Barra%20Canoinhas!5e0!3m2!1spt-BR!2sbr!4v1711993925789!5m2!1spt-BR!2sbr" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    
                    <div class="contact-info">
                        <h2>Informações de Contato</h2>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div class="contact-text">
                                <h3>Endereço</h3>
                                <p>Rua Duque de Caxias, 469 - Centro<br>Canoinhas, SC - 89460-102</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>
                            <div class="contact-text">
                                <h3>Telefone</h3>
                                <p><a href="tel:+5547999999999">(47) 99999-9999</a></p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div class="contact-text">
                                <h3>Email</h3>
                                <p><a href="mailto:contato@graciebarracanoinhas.com.br">contato@graciebarracanoinhas.com.br</a></p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <ion-icon name="time-outline"></ion-icon>
                            </div>
                            <div class="contact-text">
                                <h3>Horário de Funcionamento</h3>
                                <ul class="hours-list">
                                    <li><span class="hours-day">Segunda a Sexta:</span> <span>6:30 - 21:00</span></li>
                                    <li><span class="hours-day">Sábado:</span> <span>9:00 - 18:00</span></li>
                                    <li><span class="hours-day">Domingo:</span> <span>Fechado</span></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </div>
                            <div class="contact-text">
                                <h3>WhatsApp</h3>
                                <p><a href="https://wa.me/5547999999999?text=Olá,%20gostaria%20de%20mais%20informações" target="_blank">Envie uma mensagem</a></p>
                           <div class="cta-section">
                    <div class="cta-content">
                        <a href="https://wa.me/16993932405?text=Quero%20fazer%20uma%20aula%20experimental%20na%20Gracie%20Barra!" 
                           target="_blank" 
                           class="cta-button">
                            <ion-icon name="calendar-outline"></ion-icon>
                            Agendar Aula Experimental
                        </a>
                    </div>
                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const programsContent = `
  <div class="programs-container">
    <div class="programs-header">
      <h1>Programas</h1>
      <p>Conheça as modalidades que a Gracie Barra Canoinhas oferece</p>
    </div>
    <div class="programs-list">
      <div class="program-item">
        <img src="images/GbAdult.jpeg" alt="GB1">
        <h3>GB1</h3>
        <p>Adultos – todos os níveis</p>
      </div>
      <div class="program-item">
        <img src="images/GBChampion.jpg" alt="GB2">
        <h3>GB2</h3>
        <p>Adultos – Faixa Branca (3º grau) e acima</p>
      </div>
      <div class="program-item">
        <img src="images/GBKIDSalt.jpg" alt="GBK">
        <h3>GBK</h3>
        <p>Pequenos Campeões</p>
      </div>
    </div>
  </div>
`;
    

    const contentContainer = document.querySelector('.custom-content');
    if (contentContainer) {
      if (currentPage === 'historia.html' || currentPage === 'story.html') {
        // Conteúdo da história (mantido)
        contentContainer.innerHTML = storyContent;
      } else if (currentPage === 'estrutura.html' || currentPage === 'structure.html') {
        // Conteúdo da estrutura (novo)
        contentContainer.innerHTML = structureContent;
      } else if (currentPage === 'programs.html' || currentPage === 'programas.html') {
        // Conteúdo dos programas (mantido)
        contentContainer.innerHTML = programsContent;
      } else {
        // Conteúdo padrão (home)
        contentContainer.innerHTML = defaultContent;
      }
    }

    // --- Inicialização do Swiper ---
    new Swiper('.custom-swiper', {
      loop: true,
      autoplay: { delay: 5000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    // --- Ativar Item de Menu ---
    document.querySelectorAll('.nav a').forEach(item => {
      if (item.getAttribute('href').split('/').pop() === currentPage) {
        item.classList.add('active');
      }
    });
});
