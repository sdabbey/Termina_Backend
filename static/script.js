const languageDropdown = document.getElementById('language-dropdown');
const sections = document.querySelectorAll('.section'); // Select all section elements
const aboutTitle = document.getElementById('about-title');
const aboutContent = document.getElementById('about-content');

let currentLanguage = 'en'; // Default language is English

const translations = {
    en: {
        "about-title": "About",
        "about-content": "Welcome to TOTO, the leader in information. With unparalleled expertise and a strong reputation, we are driven to deliver innovative solutions that redefine the way businesses approach business challenges. Our passion for excellence and commitment to quality sets us apart, as does our diverse portfolio of successful projects across diverse industries.",
        "our-process": {
            "Title": "Our Process",
            "Content": "Our operational process is inspired by industry best practices. By following methodologies such as Boan and Tighrnim, we ensure seamless collaboration and efficient project implementation. We are committed to delivering results-driven solutions, combining technical expertise with a customer-focused approach to deliver top quality, on-time deliverables."
        },
        "our-approach": {
            "Title": "Our Approach",
            "Content": "Our approach is based on the synergy between technical expertise and in-depth understanding of our customers' needs. we take a holistic approach, emphasizing innovation and personalization. Each project is an opportunity to create tailor-made solutions that meet the specific challenges of our customers."
        },
        "our-goal": {
            "Title": "Our Goal",
            "Content": "Our goal is clear: to be the trusted partner for our customers in various sectors. Inspired by visionary companies, we aspire to deliver solutions that not only drive growth, but also ensure safety and sustainability at every step of our joint journey with our customers."
        },
        "our-mission": {
            "Title": "Our Mission",
            "Content": "Our mission is to shape the future by delivering breakthrough solutions. We believe that each project is an opportunity to demonstrate our expertise, our agility and our commitment to delivering exceptional results that exceed expectations."
        },
        "our-process": {
            "Title": "Our Process",
            "Content": "Our operational process is inspired by industry best practices. By following methodologies such as Boan and Tighrnim, we ensure seamless collaboration and efficient project implementation. We are committed to delivering results-driven solutions, combining technical expertise with a customer-focused approach to deliver top quality, on-time deliverables."
        }
        // Add translations for more sections as needed
    },
    es: {
        "about-title": "Acerca de",
        "about-content": "Bienvenido a TOTO, el líder en información. Con una experiencia sin igual y una sólida reputación, nos impulsan a ofrecer soluciones innovadoras que redefinen la forma en que las empresas abordan los desafíos comerciales. Nuestra pasión por la excelencia y el compromiso con la calidad nos distinguen, al igual que nuestra diversa cartera de proyectos exitosos en diversas industrias.",
        "our-process": {
            "Title": "Nuestro Proceso",
            "Content": "Contenido original para Nuestro Proceso..."
        },
        "our-approach": {
            "Title": "Nuestro Enfoque",
            "Content": "Nuestro enfoque se basa en la sinergia entre la experiencia técnica y la comprensión profunda de las necesidades de nuestros clientes. adoptamos un enfoque holístico, enfatizando la innovación y la personalización. Cada proyecto es una oportunidad para crear soluciones a la medida que respondan a los desafíos específicos de nuestros clientes."
        },
        "our-goal": {
            "Title": "Nuestro Objetivo",
            "Content": "Nuestro objetivo es claro: ser el socio de confianza de nuestros clientes en diversos sectores. Inspirándonos en empresas visionarias, aspiramos a ofrecer soluciones que no solo impulsen el crecimiento, sino que también garanticen la seguridad y la sostenibilidad en cada paso de nuestro viaje conjunto con nuestros clientes."
        },
        "our-mission": {
            "Title": "Nuestra Misión",
            "Content": "Nuestra misión es dar forma al futuro ofreciendo soluciones innovadoras. Creemos que cada proyecto es una oportunidad para demostrar nuestra experiencia, nuestra agilidad y nuestro compromiso de brindar resultados excepcionales que superen las expectativas."
        },
        "our-process": {
            "Title": "Nuestro Proceso",
            "Content": "Nuestro proceso operativo está inspirado en las mejores prácticas de la industria. Al seguir metodologías como Boan y Tighrnim, aseguramos una colaboración fluida y una implementación eficiente del proyecto. Estamos comprometidos a brindar soluciones basadas en resultados, combinando la experiencia técnica con un enfoque centrado en el cliente para entregar productos de alta calidad y a tiempo."
        }
        // Add translations for more sections as needed
    },
    fr: {
        "about-title": "A propos",
        "about-content": "Bienvenue chez TOTO, leader dans le domaine de l'information. Avec une expertise inégalée et une réputation solide, nous sommes déterminés à fournir des solutions innovantes qui redéfinissent la façon dont les entreprises abordent les défis. Notre passion pour l'excellence et notre engagement envers la qualité nous distinguent, tout comme notre portefeuille diversifié de projets réussis dans les secteurs divers.",
        "our-process": {
            "Title": "Notre Processus",
            "Content": "Contenu original pour Notre Processus..."
        },
        "our-approach": {
            "Title": "Notre Approche",
            "Content": "Notre approche repose sur la synergie entre expertise technique et compréhension approfondie des besoins de nos clients. nous adoptons une approche holistique, en mettant l'accent sur l'innovation et la personnalisation. Chaque projet est une opportunité de créer des solutions sur mesure qui répondent aux défis spécifiques de nos clients."
        },
        "our-goal": {
            "Title": "Notre But",
            "Content": "Notre objectif est clair : être le partenaire de confiance pour nos clients dans les secteurs divers. Inspirés par des sociétés visionnaires, nous aspirons à apporter des solutions qui non seulement favorisent la croissance, mais qui garantissent également la sécurité et la durabilité à chaque étape de notre parcours conjoint avec nos clients."
        },
        "our-mission": {
            "Title": "Notre Mission",
            "Content": "Notre mission est de façonner l'avenir en offrant des solutions révolutionnaires.  Nous croyons que chaque projet est une occasion de démontrer notre expertise, notre agilité et notre engagement à fournir des résultats exceptionnels qui dépassent les attentes."
        },
        "our-process": {
            "Title": "Notre Processus",
            "Content": "Notre processus opérationnel est inspiré par les meilleures pratiques de l'industrie. En suivant des méthodologies telles que Boan et le Tighrnim, nous assurons une collaboration transparente et une mise en œuvre efficace des projets. Nous nous engageons à fournir des solutions axées sur les résultats, en combinant expertise technique et approche axée sur le client pour obtenir des livrables de qualité supérieure, dans les délais impartis."
        }
        // Add translations for more sections as needed
    },
    ru: {
        "about-title": "О нас",
        "about-content": "Добро пожаловать в TOTO, лидера в области информации. Обладая непревзойденным опытом и прочной репутацией, мы стремимся предоставлять инновационные решения, которые меняют подход компаний к решению бизнес-задач. Наша страсть к совершенству и приверженность качеству отличают нас, как и наш разнообразный портфель успешных проектов в различных отраслях.",
        "our-process": {
            "Title": "Наш процесс",
            "Content": "Наш рабочий процесс основан на лучших отраслевых практиках. Следуя таким методологиям, как Boan и Tighrnim, мы обеспечиваем бесперебойное сотрудничество и эффективную реализацию проектов. Мы стремимся предоставлять решения, ориентированные на результат, сочетая технические знания с клиентоориентированным подходом для предоставления высококачественных и своевременных результатов."
        },
        "our-approach": {
            "Title": "Наш подход",
            "Content": "Наш подход основан на синергии между техническими знаниями и глубоким пониманием потребностей наших клиентов. мы используем целостный подход, делая упор на инновации и персонализацию. Каждый проект — это возможность создавать индивидуальные решения, отвечающие конкретным задачам наших клиентов."
        },
        "our-goal": {
            "Title": "Наша цель",
            "Content": "Наша цель ясна: быть надежным партнером для наших клиентов в различных секторах. Вдохновленные дальновидными компаниями, мы стремимся предоставлять решения, которые не только стимулируют рост, но и обеспечивают безопасность и устойчивость на каждом этапе нашего совместного пути с нашими клиентами."
        },
        "our-mission": {
            "Title": "Наша миссия",
            "Content": "Наша миссия — формировать будущее, предлагая революционные решения. Мы считаем, что каждый проект — это возможность продемонстрировать наш опыт, нашу гибкость и нашу приверженность достижению исключительных результатов, превосходящих ожидания."
        },
        "our-process": {
            "Title": "Наш процесс",
            "Content": "Наш рабочий процесс основан на лучших отраслевых практиках. Следуя таким методологиям, как Boan и Tighrnim, мы обеспечиваем бесперебойное сотрудничество и эффективную реализацию проектов. Мы стремимся предоставлять решения, ориентированные на результат, сочетая технические знания с клиентоориентированным подходом для предоставления высококачественных и своевременных результатов."
        }
        // Add translations for more sections as needed
    }
    // Add translations for more languages and sections as needed
};

languageDropdown.addEventListener('change', () => {
    currentLanguage = languageDropdown.value;
    updateContent();
});

function updateContent() {
    const currentTranslations = translations[currentLanguage];

    if (currentTranslations["about-title"]) {
        const translatedAboutTitle = currentTranslations["about-title"];
        const translatedAboutContent = currentTranslations["about-content"];

        aboutTitle.textContent = translatedAboutTitle;
        aboutContent.textContent = translatedAboutContent;
    }

    sections.forEach(section => {
        const sectionId = section.getAttribute('data-section-id');

        if (currentTranslations[sectionId]) {
            const translatedTitle = currentTranslations[sectionId].Title;
            const translatedContent = currentTranslations[sectionId].Content;

            section.querySelector('h3').textContent = translatedTitle;
            section.querySelector('p').textContent = translatedContent;
        }
    });
}

// Initial content update
updateContent();
