document.addEventListener("DOMContentLoaded", () => {
    
    const data = {
      "cv": {
        "metadata": {
          "version": "1.0",
          "language": "pt-BR",
          "lastUpdated": "2026-11-17"
        },
        "personalInformation": {
          "fullName": "Kauê Manoel Silva Santana",
          "professionalTitle": "Desenvolvedor Back-End",
          "profilePhoto": "foto.jpeg.jpeg",
          "email": "kauesillva2308@gmail.com",
          "phone": "11921944190",
          "whatsapp": "11921944190",
          "location": {
            "city": "Suzano",
            "state": "SP",
            "country": "Brasil",
            "address": "Rua baruel 108"
          },
          "linkedin": "https://linkedin.com",
          "github": "https://github.com/Kauee212",
          "portfolio": "",
          "website": ""
        },
        "professionalSummary": {
          "description": "Estudante de tecnologia no Centro Universitário Piaget (UNIPIAGET), com foco em desenvolvimento de software Back-End e programação em Java. Possuo conhecimentos sólidos em lógica de programação, estruturação de dados e desenvolvimento web com HTML, CSS e JavaScript.",
          "yearsOfExperience": 0,
          "mainSpecialization": "Java / Back-End",
          "careerObjective": "Meu objetivo é atuar como Engenheiro de Software com foco em desenvolvimento Back-End, buscando oportunidades de carreira e atuação no mercado internacional."
        },
        "professionalExperience": [],
        "education": [
          {
            "institution": "Centro Universitário Piaget (UNIPIAGET)",
            "degree": "Ensino Superior em Desenvolvimento de Sistemas",
            "fieldOfStudy": "Desenvolvimento de Sistemas",
            "level": "Superior",
            "startDate": "2026",
            "endDate": "Presente",
            "current": true,
            "description": "Formação acadêmica voltada para tecnologia e desenvolvimento de sistemas."
          }
        ],
        "skills": {
          "technical": [
            {
              "name": "Java",
              "level": "Foco principal de estudos para desenvolvimento Back-End."
            },
            {
              "name": "JavaScript",
              "level": "Lógica de programação e manipulação de dados."
            },
            {
              "name": "HTML5",
              "level": "Estruturação semântica de páginas web."
            },
            {
              "name": "CSS3",
              "level": "Estilização e criação de layouts responsivos."
            }
          ],
          "behavioral": ["Trabalho em equipe", "Resolução de problemas"],
          "tools": ["Git", "GitHub"],
          "methodologies": ["Programação Orientada a Objetos (POO)"]
        },
        "languages": [
          {
            "name": "Português",
            "proficiency": "Nativo"
          },
          {
            "name": "Inglês",
            "proficiency": "Básico"
          }
        ],
        "certifications": [],
        "projects": [
          {
            "name": "Estoque_objt",
            "description": "Aplicação web desenvolvida com foco em manipulação de objetos e estruturação de dados utilizando JavaScript, HTML e CSS.",
            "role": "Desenvolvedor",
            "technologies": ["HTML", "CSS", "JavaScript"],
            "url": "https://github.com/Kauee212/Estoque_objt",
            "startDate": "2026",
            "endDate": "2026"
          },
          {
            "name": "Calculadora de Desconto",
            "description": "Aplicação web desenvolvida para calcular descontos de forma rápida e prática, utilizando lógica de programação em JavaScript.",
            "role": "Desenvolvedor",
            "technologies": ["JavaScript", "HTML", "CSS", "Git"],
            "url": "https://github.com/Kauee212/Calculadora-de-Desconto",
            "startDate": "2026",
            "endDate": "2026"
          },
          {
            "name": "Lista_de_nome",
            "description": "Aplicação web desenvolvida para listar e gerenciar nomes de forma dinâmica utilizando lógica em JavaScript, HTML e CSS.",
            "role": "Desenvolvedor",
            "technologies": ["JavaScript", "HTML", "CSS"],
            "url": "https://github.com/Kauee212/Lista_de_nome",
            "startDate": "2026",
            "endDate": "2026"
          }
        ],
        "courses": [],
        "additionalInformation": {
          "availability": "Imediata",
          "workModel": "Remoto / Híbrido",
          "travelAvailability": false,
          "additionalNotes": "Foco em oportunidades voltadas para o mercado internacional."
        },
        "preferences": {
          "targetPositions": ["Desenvolvedor Back-End", "Engenheiro de Software Júnior"],
          "targetIndustries": ["Tecnologia", "Desenvolvimento de Software"],
          "preferredLocations": ["Remoto", "Suzano / SP"],
          "preferredWorkModel": "Remoto"
        }
      }
    };

    const cv = data.cv;

    document.getElementById("header-name").textContent = cv.personalInformation.fullName;
    document.getElementById("profile-title").textContent = cv.personalInformation.professionalTitle;
    document.getElementById("profile-img").src = cv.personalInformation.profilePhoto;
    document.getElementById("info-email").textContent = cv.personalInformation.email;
    document.getElementById("info-location").textContent = `${cv.personalInformation.location.city} / ${cv.personalInformation.location.state}`;
    
    document.getElementById("link-linkedin").href = cv.personalInformation.linkedin;
    document.getElementById("link-github").href = cv.personalInformation.github;
    document.getElementById("btn-github-full").href = cv.personalInformation.github;

    document.getElementById("summary-desc").textContent = cv.professionalSummary.description;
    document.getElementById("summary-objective").textContent = cv.professionalSummary.careerObjective;

    // Formação
    const eduContainer = document.getElementById("education-container");
    eduContainer.innerHTML = "";
    cv.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="timeline-item">
                <h3>${edu.degree} (${edu.startDate} - ${edu.endDate})</h3>
                <p class="institution">${edu.institution}</p>
            </div>
        `;
    });

    // Idiomas
    const langContainer = document.getElementById("languages-container");
    langContainer.innerHTML = "";
    cv.languages.forEach(lang => {
        langContainer.innerHTML += `
            <div class="lang-item">
                <strong>${lang.name}</strong>
                <p>${lang.proficiency}</p>
            </div>
        `;
    });

    // Projetos
    const projContainer = document.getElementById("projects-container");
    projContainer.innerHTML = "";
    cv.projects.forEach(proj => {
        projContainer.innerHTML += `
            <div class="timeline-item">
                <div class="project-header">
                    <h3>${proj.name} (${proj.startDate})</h3>
                    <a href="${proj.url}" target="_blank" class="repo-link"><i class="fab fa-github"></i> Repositório</a>
                </div>
                <p class="role-sub">${proj.role}</p>
                <p class="desc">${proj.description}</p>
            </div>
        `;
    });

    // Tecnologias
    const techContainer = document.getElementById("tech-container");
    techContainer.innerHTML = "";
    cv.skills.technical.forEach(tech => {
        let iconClass = "devicon-java-plain colored";
        const nameLower = tech.name.toLowerCase();
        if (nameLower.includes("html")) iconClass = "devicon-html5-plain colored";
        else if (nameLower.includes("css")) iconClass = "devicon-css3-plain colored";
        else if (nameLower.includes("javascript")) iconClass = "devicon-javascript-plain colored";

        techContainer.innerHTML += `
            <div class="tech-card">
                <i class="${iconClass} tech-icon"></i>
                <div>
                    <h4>${tech.name}</h4>
                    <p>${tech.level}</p>
                </div>
            </div>
        `;
    });
});