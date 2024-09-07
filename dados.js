let dados = [
    // IAs Multimodais
    {
        titulo: "Google Gemini",
        descricao: "O Google Gemini é a mais recente e avançada família de modelos de linguagem da gigante da tecnologia. Essa inteligência artificial multimodal é capaz de processar e gerar diferentes tipos de conteúdo, como texto, código, áudio e vídeo.",
        aplicacao: "Tradução, Resumo, Geração de texto, Geração de imagens, Criação de código, Análise de sentimentos, Resolução de problemas, Aprendizado contínuo",
        gratuita: "Sim",
        site: "https://gemini.google.com/",
        tags: "gratuita gratuito grátis traduzir resumir ilimitado ilimitada"
    },
    // IAs de Tradução
    {
        titulo: "Google Translate",
        descricao: "O Google Tradutor é uma ferramenta online gratuita que permite traduzir textos, frases e até mesmo páginas da web para diversos idiomas. Sua interface intuitiva e a vasta gama de idiomas suportados o tornam uma ferramenta indispensável para quem precisa se comunicar em diferentes línguas.",
        aplicacao: "Tradução",
        gratuita: "Sim",
        site: "https://translate.google.com/",
        tags: "gratuita gratuito grátis traduzir ilimitado ilimitada"
    },
    {
        titulo: "DeepL Translator",
        descricao: "O DeepL Translator é um serviço de tradução automática online que se destaca pela qualidade excepcional de suas traduções. Utilizando tecnologia de ponta em inteligência artificial, o DeepL consegue produzir resultados muito mais precisos e naturais do que muitos outros tradutores disponíveis no mercado.",
        aplicacao: "Tradução",
        gratuita: "Sim (com limitações)",
        site: "https://www.deepl.com/",
        tags: "gratuita gratuito grátis traduzir limitado limitada"
    },
    {
        titulo: "Microsoft Translator",
        descricao: "O Microsoft Translator é um serviço de tradução automática desenvolvido pela Microsoft que oferece uma ampla gama de recursos para facilitar a comunicação entre diferentes idiomas. Integrado a diversos produtos da Microsoft, como Bing, Office, Skype e Edge, o Microsoft Translator é uma ferramenta versátil e acessível para traduzir textos, conversas, documentos e muito mais.",
        aplicacao: "Tradução",
        gratuita: "Sim (com limitações)",
        site: "https://www.microsoft.com/en-us/translator/",
        tags: "gratuita gratuito grátis traduzir limitado limitada"
    },
    {
        titulo: "Yandex Translate",
        descricao: "O Yandex Translate é um serviço de tradução automática online desenvolvido pela Yandex, uma das maiores empresas de internet da Rússia. Conhecido por sua precisão, especialmente em idiomas eslavos e turcos, o Yandex Translate oferece uma alternativa interessante aos tradutores mais populares como Google Translate e DeepL.",
        aplicacao: "Tradução",
        gratuita: "Sim (com limitações)",
        site: "https://translate.yandex.com/",
        tags: "gratuita  gratuito grátis traduzir limitado limitada precisa"
    },
    //IAs de Resumo
    {
        titulo: "QuillBot",
        descricao: "O QuillBot é uma ferramenta online que utiliza inteligência artificial para te ajudar a aprimorar seus textos. Ele funciona como um assistente de escrita, oferecendo diversos recursos para você reescrever, parafrasear, resumir e até mesmo corrigir a gramática dos seus textos.",
        aplicacao: "Resumo",
        gratuita: "Sim (com limitações)",
        site: "https://quillbot.com/",
        tags: "gratuita gratuito grátis resumir sumarização sumarizar limitado limitada"
    },
    {
        titulo: "SummarizeBot",
        descricao: "O SummarizeBot é um bot, ou seja, um programa de computador que interage com os usuários de forma automatizada, com a função principal de resumir textos. Ele utiliza técnicas de processamento de linguagem natural (PLN) para analisar grandes quantidades de texto e extrair as informações mais relevantes, apresentando-as de forma concisa e clara.",
        aplicacao: "Resumo",
        gratuita: "Não",
        site: "https://www.summarizebot.com/", // Verifique se há versão gratuita ou trial
        tags: "paga pago resumir sumarizar sumarização"
    },
    {
        titulo: "TL;DR This",
        descricao: "TL;DR This é uma ferramenta online e extensão para navegadores que se tornou popular para quem busca uma forma rápida e eficiente de entender o conteúdo principal de textos longos. O nome, que em inglês significa 'muito longo, não vou ler', já indica a proposta da ferramenta: fornecer um resumo conciso de artigos, documentos e páginas da web.",
        aplicacao: "Resumo",
        gratuita: "Sim",
        site: "https://tldrthis.com/",
        tags: "gratuita gratuito grátis resumir sumarizar ilimitado ilimitada sumarização"
    },
    // IAs de Geração de texto
    {
        titulo: "ChatGPT",
        descricao: "O ChatGPT é um modelo de linguagem de grande porte desenvolvido pela OpenAI, capaz de gerar textos semelhantes aos humanos em conversas. Em termos simples, é um chatbot extremamente avançado que pode responder a uma ampla variedade de perguntas e realizar diversas tarefas relacionadas à linguagem.",
        aplicacao: "Geração de texto",
        gratuita: "Sim (com limitações)",
        site: "https://chat.openai.com/",
        tags: "gratuita gratuito grátis resumir sumarizar conversar limitado limitada"
    },
    {
        titulo: "Jasper.ai",
        descricao: "O Jasper.ai é uma ferramenta poderosa de inteligência artificial projetada para auxiliar na criação de diversos tipos de conteúdo. Pensado para profissionais de marketing, escritores e qualquer pessoa que precise gerar textos de qualidade, o Jasper utiliza algoritmos avançados de aprendizado de máquina para gerar ideias, escrever rascunhos e até mesmo finalizar textos completos.",
        aplicacao: "Geração de texto",
        gratuita: "Não",
        site: "https://jasper.ai/",
        tags: "pago paga"
    },
    {
        titulo: "Copy.ai",
        descricao: "O Copy.ai é uma ferramenta de inteligência artificial (IA) que se destaca na criação de diversos tipos de textos, especialmente aqueles com um foco em marketing e vendas. Ele funciona como um assistente virtual que te ajuda a gerar ideias, escrever rascunhos e até mesmo finalizar textos completos, otimizados para diferentes canais e objetivos.",
        aplicacao: "Geração de texto",
        gratuita: "Sim (com limitações)",
        site: "https://www.copy.ai/",
        tags: "gratuita gratuito grátis limitada limitado"
    },
    {
        titulo: "Rytr.io",
        descricao: "O Rytr.io é uma ferramenta de inteligência artificial (IA) que auxilia na criação de diversos tipos de conteúdo de forma rápida e eficiente. Pensado para profissionais de marketing, escritores de conteúdo, empreendedores e qualquer pessoa que precise gerar textos de qualidade, o Rytr utiliza algoritmos avançados de aprendizado de máquina para gerar ideias, escrever rascunhos e até mesmo finalizar textos completos.",
        aplicacao: "Geração de texto",
        gratuita: "Sim (com limitações)",
        site: "https://rytr.io/",
        tags: "gratuita gratuito grátis limitada limitado"
    },
    // IAs de Geração de Imagem
    {
        titulo: "Midjourney",
        descricao: "Midjourney é uma ferramenta de inteligência artificial que cria imagens a partir de descrições textuais. Ela é conhecida por gerar imagens artísticas e abstratas de alta qualidade.",
        aplicacao: "Geração de imagem",
        gratuita: "Não",
        site: "https://www.midjourney.com/",
        tags: "paga pago"
    },
    {
        titulo: "Stable Diffusion",
        descricao: "Stable Diffusion é um modelo de difusão latente de código aberto para geração de imagens. Ele permite que usuários criem imagens realistas e artísticas a partir de descrições textuais.",
        aplicacao: "Geração de imagem",
        gratuita: "Não",
        site: "https://stablediffusionweb.com/",
        tags: "paga pago"
    },
    {
        titulo: "DALL-E 2",
        descricao: "DALL-E 2 é um modelo de IA desenvolvido pela OpenAI que gera imagens realistas e artísticas a partir de descrições textuais. Ele é capaz de criar imagens complexas e originais.",
        aplicacao: "Geração de imagem",
        gratuita: "Não",
        site: "https://openai.com/dall-e-2",
        tags: "paga pago"
    },
    {
        titulo: "Adobe Firefly",
        descricao: "Adobe Firefly é uma família de modelos de IA generativos da Adobe que permitem aos usuários criar imagens, vídeos e outros conteúdos criativos a partir de texto. Ele se integra perfeitamente às ferramentas da Adobe Creative Cloud.",
        aplicacao: "Geração de imagem",
        gratuita: "Sim (com limitações)",
        site: "https://www.adobe.com/br/products/firefly.html",
        tags: "gratuita gratuito grátis limitada limitado"
    },
];