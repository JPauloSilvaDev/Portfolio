
const language = {
    pt: {
        role: "Desenvolvedor Fullstack .Net/C# ",
        education: `Graduando em Análise e Desenvolvimento de Sistemas na 
              Universidade Estácio de Sá. Atualmente trabalhando com 
              desenvolvimento em .Net/C# há três anos.
              Sempre buscando melhorar como profissional na área
              visando manter, levantar requisitos de novas
              funcionalidades, Identificar e resolver falhas de aplicações
              desenvolvidas.`,
        experience: "",
        contact: "Informações de Contato",
        about: "Sobre Minha Pessoa",
        job2: `
 
        Comecei essa posição como trainee e fui promovido para junior em 7 meses. Na GR Negócios eu desenvolvia, efetuava manutenção de aplicações web e backend para melhorar sua 
        funcionalidade, preformance e garantir que as necessidades dos clientes e da empresa seriam supridas com tais alterações.
    utilizava uma vasta quantidade de tecnologias e frameworks, incluindo: 
                    
                   
                    <br>
                    - Back-End: Windows Forms, ASP.NET Framework, C#, MVC, .NET Core, REST APIs
                    
                    - Front-End: JavaScript (jQuery), AngularJS, HTML, CSS, Bootstrap
                    
                    - Databases: SQL Server, MySQL
                    
                    ORM: Entity Framework, Dapper
                    
                    Tools: GitLab, Jira, Confluence
                    
                    <h4> Projetos que trabalhei</h4>
                    <br>
                    <ul>
                    <li><b>GR Cobrança (Charging System WEB)</b>:
                      Developed a web application to assist employees in managing debt collection for clients, including negotiating payment plans and tracking agreements.</li>
                      Password Calling System (Developed specifically for brazillian navy)</li>
                    <li><b>GR Suíte (WEB ERP)</b></li>
                    <li><b>Credit Analysis System (SICACRED) added new features, corrected bugs and improved a system for analyzing client credit, enabling better decision-making for our clients.</li>
                    <li> Developed a .NET 6 ChatBot integrated with WhatsApp to automate debt collection processes</b>.
                          The ChatBot facilitated secure payment agreements, with all deals and values automatically synced to the GR Cobrança application to facilitate the companys employers management</li>
                    <li>Maintance and improvement of password calling system built specifically for the brazillian navy</li>
                    </ul>
                    
                   <h4>Key Achievements</h4>
                    
                    Successfully delivered multiple high-impact projects, improving operational efficiency and client satisfaction.
                    
                    Demonstrated rapid growth from Trainee to Junior Developer, showcasing adaptability and technical proficiency.
                    
                    Automated debt collection processes through the development of a WhatsApp ChatBot, reducing manual workload and improving response times.
                    
                    
                    Technologies Used
                    
                    Back-End: .NET, C#, ASP.NET MVC, .NET Core, REST APIs
                    
                    Front-End: JavaScript (jQuery), AngularJS, HTML, CSS and Bootstrap
                    
                    Databases: SQL Server, MySQL
                    
                    ORM: Entity Framework, Dapper
                    
                    Tools: Git, Jira, Confluence`
    },
    en: {
        role: "Fullstack Software Developer .Net/C#",
        education: `Graduating in Analysis and System development at
 Faculdade Estácio. Currently working with full stack
 development and maintance in web aplications,
 participate in meetings, always seeking to detect, correct
 and improve functionalities to attend to the necessities of
 the company and its clients.`,
        job2: ``,
        contact: "Contact Information",
        about: "About Me",
        job2: `              
                    
       
        <h4>Responsabilities</h4>
         <br>
       Started this position as a traineee and got promoted to Junior within 7 months. Developed and maintained web applications to enhance functionality, improve performance, and meet the evolving needs of the company and its clients.
                    
                    Utilized a wide range of technologies and frameworks, including:
                    <br>
                    - Back-End: Windows Forms, ASP.NET Framework, C#, MVC, .NET Core, REST APIs
                    
                    - Front-End: JavaScript (JQuery), AngularJS, HTML, CSS, Bootstrap
                    
                    - Databases: SQL Server, MySQL
                    
                    ORM: Entity Framework, Dapper
                    
                    Tools: GitLab, Jira, Confluence
                    <br>
                    <br>
                    <h4> Projects</h4>
                    <br>
                    <ul>
                    <li><b>GR Cobrança (Charging System WEB) (.net mvc/angularJS): </b>
                      Developed a web application to assist employees in managing debt collection for clients, including negotiating payment plans and tracking agreements.</li>
                      Password Calling System (Developed specifically for brazillian navy)</li>
                    <li><b>GR Suíte (WEB ERP) (.Net MVC/HTML, CSS, JavaScript): </b></li>
                    <li><b>Credit Analysis System (SICACRED): </b>
                     added new features, corrected bugs and improved a system for analyzing client credit, enabling better decision-making for our clients.</li>
                    <li><b>Whatsapp ChatBot: </b> Developed a .NET 6 ChatBot integrated with WhatsApp to automate debt collection processes.
                          The ChatBot facilitated secure payment agreements, with all deals and values automatically synced to the GR Cobrança application to facilitate the companys employees management</li>
                    <li><b> Navy Password Calling System: </b>Maintance and improvement of password calling system built specifically for the brazillian navy</li>
                    </ul>
                    
                   <h4>Key Achievements</h4>
                    
                    Successfully delivered multiple high-impact projects, improving operational efficiency and client satisfaction.
                    
                    Demonstrated rapid growth from Trainee to Junior Developer, showcasing adaptability and technical proficiency.
                    
                    Automated debt collection processes through the development of a WhatsApp ChatBot, reducing manual workload and improving response times.
                    
                    
                    <h4>Technologies Used</h4>
                    
                    Back-End: .NET, C#, ASP.NET MVC, .NET Core, REST APIs
                    
                    Front-End: JavaScript (jQuery), AngularJS, HTML, CSS and Bootstrap
                    
                    Databases: SQL Server, MySQL
                    
                    ORM: Entity Framework, Dapper
                    
                    Tools: Git, Jira, Confluence
            `
    },
 
};

$(document).ready(function() {

    const languageSelect = document.querySelector('#language-select');

    languageSelect.addEventListener('change', () => {
        
        const selectedLanguage = languageSelect.value; 

        if (selectedLanguage === 'pt') {
            
            document.getElementById('downloadResumeBtn').href = 'files/curriculo.pdf';

            document.getElementById('role').textContent = language.pt.role; 
            document.getElementById('experienceHeader').textContent = 'Experiência'; 
            document.getElementById('downloadResumeBtn').textContent = 'Baixar Currículo'; 
            document.getElementById('job2Paragraph').textContent = `I worked for two years, from 07/2022 to 09/2024, where I started as a trainee and, 
            after 7 months, was promoted to junior. My responsibilities included developing and maintaining web applications to fix and improve their functionality to better meet the 
            needs of the company and its clients. I also performed the following activities:`;
            document.getElementById('education').textContent = language.pt.education;
            document.getElementById('contactInfo').textContent = language.pt.contact;
            document.getElementById('aboutHeader').textContent = language.pt.about;
            document.getElementById('job2Paragraph').innerHTML = language.pt.job2;
           
        } else {
            
            document.getElementById('downloadResumeBtn').href = 'files/resume.pdf';
            
            document.getElementById('role').textContent = language.en.role; 
            document.getElementById('experienceHeader').textContent = 'Experience';
            document.getElementById('downloadResumeBtn').textContent = 'Download Resume'; 
            document.getElementById('education').textContent = language.en.education;
            document.getElementById('contactInfo').textContent = language.en.contact;
            document.getElementById('aboutHeader').textContent = language.en.about;
          
            document.getElementById('job2Paragraph').innerHTML = language.en.job2; 
        }
    });
});

