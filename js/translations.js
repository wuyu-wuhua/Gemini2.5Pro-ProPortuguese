// 翻译数据
const translations = {
    // 葡萄牙语翻译
    pt: {
        // 导航
    "subtitle": "Modelo GEMINI - Gemini 2.5 Pro Última Versão - Experiência Online",
    "nav-chat": "Chat",
    "nav-capabilities": "Capacidades",
    "nav-reviews": "Avaliações",
    "main-title": "Gemini 2.5 Pro Português",

    // 侧边栏菜单
    "menu-login": "Clique para fazer login",
    "menu-chat": "Chat",
    "menu-newchat": "Novo Chat",
    "menu-history": "Histórico de Chats",
    "menu-capabilities": "Capacidades",
    "menu-performance": "Desempenho",
    "menu-presets": "Predefinições",

    // 对话页面
    "welcome-message": "Olá! Sou o Gemini 2.5 Pro, o que posso fazer por você?",
    "input-placeholder": "Digite uma pergunta...",
    "scenarios-title": "Uso",
    "scenario-writing": "Ajuda para escrever",
    "scenario-learning": "Aprendizagem",
    "scenario-coding": "Ajuda para programar",
    "scenario-travel": "Planejamento de viagens",
    "scenario-image": "Análise de imagens",
    "scenario-summary": "Resumo",
    "scenario-fiction": "Ficção",
    "scenario-ml": "Aprendizado de Máquina",
    "scenario-social": "Marketing de Mídia",
    "scenario-scriptwriting-title": "Roteiros para cinema e séries",
    "scenario-scriptwriting-desc": "Ajuda na criação de roteiros",

    // 能力介绍页面
    "performance-title": "Desempenho",
    "mmlu-desc": "No teste de compreensão de linguagem multitarefa, o Gemini 2.5 Pro alcançou 90.0%, superando o nível de especialista.",
    "humaneval-desc": "No teste de geração de código, o Gemini 2.5 Pro alcançou 94.4%, superando significativamente os modelos anteriores.",
    "gsm8k-desc": "No teste de raciocínio matemático, o Gemini 2.5 Pro alcançou 97.7%, um novo recorde.",
    "core-capabilities": "Capacidades Essenciais",
    "core-capabilitie": "Capacidades Essenciais",
    "conversation-title": "Diálogos Multi-turno",
    "conversation-desc": "O Gemini 2.5 Pro pode manter diálogos longos e complexos, preservando a continuidade contextual e compreendendo intenções ocultas.",
    "multimodal-title": "Compreensão Multimodal",
    "multimodal-desc": "Pode processar entradas de texto, imagem, áudio e vídeo para entender e gerar conteúdo.",
    "code-title": "Código",
    "code-desc": "Suporta geração, depuração e otimização de código em várias linguagens de programação, bem como a compreensão de algoritmos complexos e arquiteturas de sistema.",
    "creative-title": "Pensamento Criativo",
    "creative-desc": "Possui pensamento criativo para gerar conteúdo original, escrita criativa e ajudar na criação de obras de arte.",
    "comparison-title": "2.5 Pro em comparação com versões anteriores",
    "table-capability": "Capacidades",
    "table-improvement": "Melhoria",
    "table-context": "Janela de Contexto",
    "table-multimodal": "Compreensão Multimodal",
    "table-basic": "Compreensão Básica",
    "table-advanced": "Compreensão Profunda e Raciocínio",
    "table-significant": "Melhoria Significativa",
    "table-reasoning": "Raciocínio",
    "table-good": "Bom",
    "table-expert": "Semelhante a um especialista",
    "table-code-gen": "Código",
    "table-knowledge": "Atualização de Conhecimento",
    "table-realtime": "Ano de 2024",
    "table-current": "Atualizado até",

    // 预设提示
    "presets-title": "Predefinições",
    "copyrightText": "Conteúdo gerado por IA, precisão não garantida, apenas para referência",

    //页脚
    "privacyPolicy": "Política de Proteção de Dados Pessoais",
    "contactUs": "Contate-nos",

    // 用户评价页面
    "user-reviews": "Avaliações Reais de Usuários",
    "filter-all": "Todas as avaliações",
    "filter-coding": "Código",
    "filter-understanding": "Compreensão",
    "filter-image": "Processamento de Imagens",
    "reviewer-zhang": "Zhang San",
    "review-1": "Como desenvolvedor experiente, estou impressionado com o código do Gemini 2.5 Pro. Ele não apenas gera código de alta qualidade, mas também entende arquiteturas de sistema complexas, oferecendo recomendações valiosas de refatoração. Ajudou-me a resolver um problema que tive por vários dias. A análise foi muito profunda.",
    "tag-coding-assistant": "Ajuda para programar",
    "tag-debugging": "Depuração de código",
    "tag-system-design": "Design de Sistema",
    "reviewer-wang": "Sem volta",
    "review-2": "O Gemini 2.5 Pro em programação multilíngue teve um desempenho muito bom. Usei-o para gerar código em Python, JavaScript e Rust, cuja qualidade era muito alta. Fiquei particularmente impressionado com o fato de ele ter dado recomendações valiosas sobre otimização de algoritmos, que me ajudaram a melhorar o desempenho de O(n²) para O(n log n).",
    "tag-algorithm": "Otimização de Algoritmos",
    "tag-multilingual": "Suporte Multilíngue",
    "reviewer-li": "Sujo",
    "review-3": "A função de criação de imagens do Gemini 2.5 Pro é impressionante! Só preciso descrever o conceito e obtenho imagens muito criativas e detalhadas. É perfeito para representação visual rápida ou criação de obras digitais únicas. Satisfaz completamente as minhas necessidades.",
    "tag-research": "Pesquisa",
    "tag-expertise": "Conhecimento Profissional",
    "tag-reasoning": "Raciocínio Lógico",
    "tag-tti": "Criação de Imagens a partir de Texto",
    "tag-creative-image": "Imagem Criativa",
    "tag-ai-art": "Arte IA",
    "reviewer-wu": "Coisa de ISFP",
    "review-iti-wu": "Costumo usar a função de criação de imagens do Gemini 2.5 Pro para editar e melhorar minhas obras de arte. Envio uma imagem e ela é facilmente convertida para um estilo artístico ou sofre ajustes finos, como alteração de iluminação ou adição de elementos. É muito útil para designers!",
    "tag-iti": "Criação de Imagens a partir de Imagem",
    "tag-image-edit": "Edição de Imagens",
    "tag-style-transfer": "Transferência de Estilo",
    "reviewer-qian": "sijer",
    "review-6": "Usar o Gemini 2.5 Pro para processamento de dados e geração de scripts Python é um prazer! Ele entende rapidamente necessidades analíticas complexas, gera código de alta qualidade e aumenta significativamente minha produtividade.",
    "tag-coding": "Código",
    "tag-data-analysis": "Análise de Dados",
    "tag-python": "Python",
    "reviewer-chen": "Este é um biscoitinho.",
    "review-4": "Uso o Gemini 2.5 Pro para ajudar no ensino e responder a perguntas. Ele pode se adaptar a diferentes níveis de compreensão dos alunos, simplificando conceitos complexos em analogias compreensíveis. Ele entende as perguntas com muita precisão, mesmo que sejam vagas ou obscuras.",
    "tag-education": "Educação",
    "tag-explanation": "Explicação",
    "reviewer-zhao": "Dr. Z",
    "review-5": "Na área de análise visual de imagens médicas, o Gemini 2.5 Pro teve um desempenho muito bom. Ele pode reconhecer características importantes em raios-X e tomografias computadorizadas e fornecer sugestões analíticas preliminares. Embora não possa substituir um diagnóstico profissional, como ferramenta auxiliar, sua precisão e detalhe são impressionantes.",
    "tag-image-analysis": "Análise de Imagens",
    "tag-design": "Ajuda em Design",
    "tag-creative": "Sugestões Criativas",
    "reviewer-zhou": "Este é um biscoitinho.",
    "review-6-alt": "A análise de imagens médicas do Gemini 2.5 Pro é notável. Ele identifica características chave em imagens de raios-X e CT, oferecendo insights analíticos primários. Embora não substitua o diagnóstico profissional, sua precisão como ferramenta de apoio é impressionantes.",
    "tag-medical": "Imagens Médicas",
    "tag-analysis": "Análise Profissional",
    "overall-rating": "Avaliação Geral",
    "rating-count": "Baseado em {1269} avaliações",
    "rating-coding": "Código",
    "rating-understanding": "Compreensão",
    "rating-image": "Processamento de Imagens",
    "rating-speed": "Resposta",
    "rating-creative": "Criatividade",
    "review-text-4": "O Gemini 2.5 Pro melhorou significativamente meu fluxo de trabalho. Sua capacidade de entender o contexto e fornecer informações relevantes é excepcional.",
    "reviewer-name-4": "Engenheiro de Software - Alex P.",
    "tag-workflow": "Fluxo de Trabalho",
    "tag-context": "Compreensão Contextual",
    "reviewer-name-5": "Escritor Criativo",
    "review-text-5": "O Gemini 2.5 Pro me ajudou muito na escrita! Ele consegue entender minhas ideias fantásticas e sugerir continuações e enredos muito interessantes, é simplemente excelente!",
    "tag-brainstorming": "Brainstorming",
    "reviewer-name-6": "Cientista de Dados - Li Hua",
    "review-text-6": "Usar o Gemini 2.5 Pro para processamento de dados e geração de scripts Python é um prazer. Ele entende rapidamente necessidades analíticas complexas, gera código de alta qualidade e aumenta significativamente minha produtividade.",
    "reviewer-name-7": "Fotógrafo - Wang Gang",
    "review-text-7": "Tentei usar o Gemini 2.5 Pro para analisar minhas fotografias. Ele identifica com precisão os elementos da composição e oferece recomendações muito profissionais sobre cor e iluminação. Embora não possa editar imagens diretamente, ajuda muito no processo de inspiração.",
    "tag-image-processing": "Processamento de Imagens",
    "tag-photography": "Fotografia",
    "rating-overall": "Avaliação Geral",
    "reviewer-scriptwriter-li":"Loja de vinhos Xinyue",
    "review-script-1":"O Gemini 2.5 Pro em programação multilíngue teve um desempenho muito bom. Usei-o para gerar código em Python, JavaScript e Rust, cuja qualidade era muito alta. Fiquei particularmente impressionado com o fato de ele ter dado recomendações valiosas sobre otimização de algoritmos, que me ajudaram a melhorar o desempenho de O(n²) para O(n log n).",
    "tag-scriptwriting":"Roteiros para cinema e séries",
    "tag-plot-generation":"Geração de Enredo",
    "tag-dialogue-writing":"Escrita de Diálogos",
    "reviewer-videographer-sun":"XinXinZi",
    "review-script-2":"Eu uso o Gemini 2.5 Pro para criar roteiros de vídeos curtos e ele sempre me dá algumas ideias criativas inesperadas. Especialmente para o design de reversão e carga, suas sugestões são muito atraentes.",
    "tag-video-editing":"Edição de Vídeos",
    "tag-reversal-design":"Design de Reversão",
    "tag-load-design":"Design de Carga",

    //个人信息保护规则
    "privacyPolicyPageTitle": "Política de Proteção de Dados Pessoais",
    "privacyPolicyIntro": "Bem-vindo ao Gemini 2.5 Pro! Valorizamos muito a sua privacidade e a proteção dos seus dados pessoais. Esta Política de Proteção de Dados Pessoais (doravante 'Política') destina-se a explicar como coletamos, usamos, armazenamos, compartilhamos e protegemos seus dados pessoais, e como você pode gerenciar seus dados pessoais. Por favor, leia e compreenda completamente esta política antes de usar nossos serviços.",
    "privacyPolicyInfoCollection": "1. Como coletamos e usamos seus dados pessoais",
    "privacyPolicyInfoCollectionDesc": "Ao usar nossos serviços, podemos coletar os seguintes tipos de dados pessoais:",
    "privacyPolicyInfoCollectionItem1": "Informações que você fornece: por exemplo, seu nome de usuário, endereço de e-mail quando você se registra para uma conta; texto, imagens que você carrega ao usar certas funções.",
    "privacyPolicyInfoCollectionItem2": "Informações que coletamos automaticamente: por exemplo, seu dispositivo, informações de log, endereço IP, logs de navegação.",
    "privacyPolicyInfoCollectionItem3": "Informações que obtemos de terceiros: por exemplo, quando você usa uma conta do Google, podemos obter algumas de suas informações públicas do Google.",
    "privacyPolicyInfoUsage": "Coletamos seus dados pessoais principalmente para fornecer, otimizar e garantir nossos serviços, incluindo:",
    "privacyPolicyInfoUsageItem1": "Fornecer, manter e melhorar nossos serviços.",
    "privacyPolicyInfoUsageItem2": "Oferecer conteúdo e produtos personalizados.",
    "privacyPolicyInfoUsageItem3": "Realizar análises de dados e pesquisas para melhorar nossos serviços.",
    "privacyPolicyInfoUsageItem4": "Garantir a segurança da conta, prevenir fraudes e atividades ilegais.",
    "privacyPolicyInfoUsageItem5": "Cumprir as leis, regulamentos e requisitos regulatórios aplicáveis.",
    "privacyPolicyInfoSharing": "2. Como compartilhamos, transferimos e divulgamos seus dados pessoais",
    "privacyPolicyInfoSharingDesc": "Podemos compartilhar, transferir ou divulgar seus dados pessoais aos seguintes terceiros:",
    "privacyPolicyInfoSharingItem1": "Com o seu consentimento explícito.",
    "privacyPolicyInfoSharingItem2": "Para atingir os objetivos especificados no item 1 desta política, podemos transferir seus dados pessoais para terceiros afiliados a nós, parceiros ou prestadores de serviços, mas exigiremos que eles cumpram esta política e tomem as medidas de proteção e segurança apropriadas.",
    "privacyPolicyInfoSharingItem3": "De acordo com os requisitos da legislação e de órgãos administrativos ou judiciais.",
    "privacyPolicyInfoTransfer": "Não transferimos seus dados pessoais para nenhuma empresa, organização ou indivíduo, exceto nos seguintes casos:",
    "privacyPolicyInfoTransferItem1": "Com o seu consentimento explícito.",
    "privacyPolicyInfoTransferItem2": "No caso de fusão, aquisição ou falência, se os dados pessoais forem transferidos, exigiremos que a nova empresa, organização que deterá seus dados pessoais continue a cumprir esta política.",
    "privacyPolicyInfoDisclosure": "Não divulgamos seus dados pessoais a nenhuma empresa, organização ou indivíduo, exceto nos seguintes casos:",
    "privacyPolicyInfoDisclosureItem1": "Com o seu consentimento explícito.",
    "privacyPolicyInfoDisclosureItem2": "De acordo com os requisitos da legislação e de órgãos administrativos ou judiciais.",
    "privacyPolicyInfoProtection": "3. Como protegemos seus dados pessoais",
    "privacyPolicyInfoProtectionDesc": "Usamos medidas de segurança padrão da indústria apropriadas para proteger seus dados pessoais contra acesso não autorizado, divulgação, uso, alteração, destruição ou perda. Tomamos todas as medidas razoáveis para proteger seus dados pessoais.",
    "privacyPolicyUserRights": "4. Seus direitos",
    "privacyPolicyUserRightsDesc": "De acordo com as leis chinesas, padrões e práticas internacionais, garantimos a você os seguintes direitos sobre seus dados pessoais:",
    "privacyPolicyUserRightsItem1": "Acessar e obter seus dados pessoais.",
    "privacyPolicyUserRightsItem2": "Corrigir ou complementar seus dados pessoais.",
    "privacyPolicyUserRightsItem3": "Excluir seus dados pessoais.",
    "privacyPolicyUserRightsItem4": "Restringir ou recusar o processamento de seus dados pessoais.",
    "privacyPolicyUserRightsItem5": "Cancelar a conta.",
    "privacyPolicyChildren": "5. Proteção de informações de menores",
    "privacyPolicyChildrenDesc": "Nossos produtos, sites e serviços são principalmente destinados a adultos. Se você for menor de idade, antes de usar nossos produtos e/ou serviços, você deve obter o consentimento do seu responsável. Protegemos os dados pessoais de menores de acordo com as normas legislativas nacionais.",
    "privacyPolicyUpdates": "6. Como atualizamos esta política",
    "privacyPolicyUpdatesDesc": "Podemos ajustar ou alterar esta política de tempos em tempos, quaisquer atualizações serão publicadas em nosso site com a data de atualização. Exceto por requisitos obrigatórios da legislação ou órgãos reguladores, quaisquer materiais atualizados ou alterados entram em vigor a partir do momento de sua publicação ou notificação. Se você continuar a usar nossos serviços após a atualização ou alteração das regras, isso significa que você leu, entendeu e aceitou completamente as regras atualizadas.",
    "privacyPolicyContact": "7. Como entrar em contato conosco",
    "privacyPolicyContactDesc": "Se você tiver alguma dúvida, sugestão ou feedback sobre esta política, pode entrar em contato conosco pelo endereço: ytsgabcde37@2925.com. Responderemos em um prazo razoável.",
    "privacyPolicyLastUpdated": "Data da última atualização: 22 de maio de 2025",
    "backToHomeFromPrivacy": "Voltar à página inicial",

    // New Review 8 (overall 10th review)
    "reviewer-name-8": "Estudante Li",
    "reviewer-ma": "Cavalo Solto",
    "review-text-8": "Usar o Gemini para aprender conceitos complexos é simplemente ótimo! Ele explica as complexidades em linguagem simples, muito mais interessante que os livros didáticos!",
    "tag-learning-tool": "Ferramenta de Aprendizagem",
    "tag-student-friendly": "Amigável para Estudantes",
    "tag-ai-learning": "Aprendizagem com IA",
    "tag-ai-tool": "Ferramenta de IA"
},
    // 添加了英文翻译作为示例，您可以根据需要替换或删除
    en: {
        // Navigation
        "subtitle": "GEMINI Model - Gemini 2.5 Pro Latest Version - Online Experience",
        "nav-chat": "Chat",
        "nav-capabilities": "Capabilities",
        "nav-reviews": "Reviews",
        "main-title": "Gemini 2.5 Pro English",

        // Sidebar Menu
        "menu-login": "Click to login",
        "menu-chat": "Chat",
        "menu-newchat": "New Chat",
        "menu-history": "Chat History",
        "menu-capabilities": "Capabilities",
        "menu-performance": "Performance",
        "menu-presets": "Presets",

        // Dialogue Page
        "welcome-message": "Hi! I'm Gemini 2.5 Pro, what can I do for you?",
        "input-placeholder": "Enter a question...",
        "scenarios-title": "Usage",
        "scenario-writing": "Writing assistance",
        "scenario-learning": "Learning",
        "scenario-coding": "Coding assistance",
        "scenario-travel": "Travel planning",
        "scenario-image": "Image analysis",
        "scenario-summary": "Summary",
        "scenario-fiction": "Fiction",
        "scenario-ml": "Machine Learning",
        "scenario-social": "Media Marketing",
        "scenario-scriptwriting-title": "Scripts for movies and series",
        "scenario-scriptwriting-desc": "Help with script creation",
         // ... other English translations
        "copyrightText": "Content generated by AI, accuracy not guaranteed, for reference only"
    }
};

// 函数：更改语言并更新内容
function changeLanguage(lang) {
    // 更新所有带有 data-translate 属性的元素
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 更新特定元素的 placeholder 和 title (如果适用)
    const inputElement = document.querySelector('.chat-input input[type="text"]');
    if (inputElement && translations[lang] && translations[lang]['input-placeholder']) {
        inputElement.placeholder = translations[lang]['input-placeholder'];
    }
    
    // 更新HTML文档的lang属性
    document.documentElement.lang = lang;

    // 更新主标题的data-translate属性值，以便在语言切换时也能正确翻译
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        mainTitle.setAttribute('data-translate', 'main-title'); // 确保key是正确的
        if (translations[lang] && translations[lang]['main-title']) {
            mainTitle.textContent = translations[lang]['main-title'];
        }
    }
    
    // 更新localStorage中的语言设置
    localStorage.setItem('selectedLanguage', lang);

    // 更新预设提示的标题
    const presetsTitle = document.getElementById('presets-title');
    if (presetsTitle && translations[lang] && translations[lang]['presets-title']) {
        presetsTitle.textContent = translations[lang]['presets-title'];
    }
    
    // 更新版权文本
    const copyrightText = document.getElementById('copyright-text');
    if (copyrightText && translations[lang] && translations[lang]['copyrightText']) {
        copyrightText.innerHTML = translations[lang]['copyrightText']; // 使用 innerHTML 以支持可能的 HTML 标签
    }
    
    // 更新预设提示的标题
    updatePresetsTitle(lang);

    // 更新用户评价页面的静态文本
    updateUserReviewsStaticText(lang);
    
    // 更新能力介绍页面的静态文本
    updateCapabilitiesStaticText(lang);
}

// 函数：更新预设提示的标题
function updatePresetsTitle(lang) {
    const presetsTitleElement = document.getElementById('presets-title');
    if (presetsTitleElement && translations[lang] && translations[lang]['presets-title']) {
        presetsTitleElement.textContent = translations[lang]['presets-title'];
    }
}

// 函数：更新用户评价页面的静态文本
function updateUserReviewsStaticText(lang) {
    const userReviewsTitle = document.querySelector('.reviews-container h2');
    if (userReviewsTitle && translations[lang] && translations[lang]['user-reviews']) {
        userReviewsTitle.textContent = translations[lang]['user-reviews'];
    }

    const filterAll = document.querySelector('.filter-btn[data-filter="all"]');
    if (filterAll && translations[lang] && translations[lang]['filter-all']) {
        filterAll.textContent = translations[lang]['filter-all'];
    }
    // ... 为其他过滤器按钮添加类似逻辑
    const filterCoding = document.querySelector('.filter-btn[data-filter="coding"]');
    if (filterCoding && translations[lang] && translations[lang]['filter-coding']) {
        filterCoding.textContent = translations[lang]['filter-coding'];
    }

    const filterUnderstanding = document.querySelector('.filter-btn[data-filter="understanding"]');
    if (filterUnderstanding && translations[lang] && translations[lang]['filter-understanding']) {
        filterUnderstanding.textContent = translations[lang]['filter-understanding'];
    }

    const filterImage = document.querySelector('.filter-btn[data-filter="image"]');
    if (filterImage && translations[lang] && translations[lang]['filter-image']) {
        filterImage.textContent = translations[lang]['filter-image'];
    }
    
    const overallRatingText = document.querySelector('.overall-rating-text');
    if (overallRatingText && translations[lang] && translations[lang]['overall-rating']) {
        overallRatingText.textContent = translations[lang]['overall-rating'];
    }

    const ratingCount = document.querySelector('.rating-count');
    if (ratingCount && translations[lang] && translations[lang]['rating-count']) {
        // 假设 {1269} 是一个占位符，需要替换为实际数字
        // 这里我们不直接修改数字，只翻译文本部分
        // 如果需要动态替换数字，需要在调用时传递数字
        ratingCount.textContent = translations[lang]['rating-count'].replace('{1269}', '1,269'); // 或者从其他地方获取这个数字
    }
    
    // 更新评分项的文本
    const ratingCoding = document.querySelector('.rating-item .rating-label[data-translate="rating-coding"]');
    if (ratingCoding && translations[lang] && translations[lang]['rating-coding']) {
        ratingCoding.textContent = translations[lang]['rating-coding'];
    }

    const ratingUnderstanding = document.querySelector('.rating-item .rating-label[data-translate="rating-understanding"]');
    if (ratingUnderstanding && translations[lang] && translations[lang]['rating-understanding']) {
        ratingUnderstanding.textContent = translations[lang]['rating-understanding'];
    }

    const ratingImage = document.querySelector('.rating-item .rating-label[data-translate="rating-image"]');
    if (ratingImage && translations[lang] && translations[lang]['rating-image']) {
        ratingImage.textContent = translations[lang]['rating-image'];
    }
    
    const ratingSpeed = document.querySelector('.rating-item .rating-label[data-translate="rating-speed"]');
    if (ratingSpeed && translations[lang] && translations[lang]['rating-speed']) {
        ratingSpeed.textContent = translations[lang]['rating-speed'];
    }
    
    const ratingCreative = document.querySelector('.rating-item .rating-label[data-translate="rating-creative"]');
    if (ratingCreative && translations[lang] && translations[lang]['rating-creative']) {
        ratingCreative.textContent = translations[lang]['rating-creative'];
    }
}


// 函数：更新能力介绍页面的静态文本
function updateCapabilitiesStaticText(lang) {
    // 更新核心能力部分的标题
    const coreCapabilitiesTitle = document.getElementById('core-capabilities-title');
    if (coreCapabilitiesTitle && translations[lang] && translations[lang]['core-capabilities']) {
        coreCapabilitiesTitle.textContent = translations[lang]['core-capabilities'];
    }
    
    // 更新性能对比表格的静态文本
    const comparisonTitle = document.getElementById('comparison-title');
    if (comparisonTitle && translations[lang] && translations[lang]['comparison-title']) {
        comparisonTitle.textContent = translations[lang]['comparison-title'];
    }
    // 表头
    const thCapability = document.querySelector('#comparison-table th[data-translate="table-capability"]');
    if (thCapability && translations[lang] && translations[lang]['table-capability']) {
        thCapability.textContent = translations[lang]['table-capability'];
    }
    const thGemini25Pro = document.querySelector('#comparison-table th:nth-child(2)'); // 第二列标题 "Gemini 2.5 Pro" - 通常不需要翻译，但如果需要也可以加key
    const thPreviousVersions = document.querySelector('#comparison-table th:nth-child(3)'); // 第三列标题 "Previous Versions"
    
    // 更新表格内容中的 data-translate 属性
    document.querySelectorAll('#comparison-table tbody td[data-translate]').forEach(td => {
        const key = td.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            td.textContent = translations[lang][key];
        }
    });
    
    // 更新"返回首页"按钮的文本
    const backButton = document.getElementById('back-to-home-button');
    if (backButton && translations[lang] && translations[lang]['nav-chat']) { // 通常返回到聊天页面
        backButton.textContent = translations[lang]['nav-chat'];
    }
    
    // 更新隐私政策页面的返回首页按钮
    const backFromPrivacyButton = document.getElementById('back-to-home-from-privacy');
    if (backFromPrivacyButton && translations[lang] && translations[lang]['backToHomeFromPrivacy']) {
        backFromPrivacyButton.textContent = translations[lang]['backToHomeFromPrivacy'];
    }
}


// 初始化页面时检查localStorage中保存的语言偏好
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh'; // 默认中文
    changeLanguage(savedLanguage);

    // 为语言切换按钮（如果存在）添加事件监听器
    // 假设你的语言切换按钮有特定的ID或类名，例如 .lang-switch-btn
    // document.querySelectorAll('.lang-switch-btn').forEach(button => {
    //     button.addEventListener('click', (event) => {
    //         const lang = event.target.getAttribute('data-lang');
    //         if (lang) {
    //             changeLanguage(lang);
    //         }
    //     });
    // });
});

// 如果有动态加载内容的部分，确保在内容加载后也调用 changeLanguage
// 例如，在加载聊天记录或用户评价后

// 暴露出changeLanguage函数，以便其他脚本可以调用（如果需要）
window.changeLanguage = changeLanguage;