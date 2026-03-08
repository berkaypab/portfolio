import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://berkaypb.github.io/portfolio", // update if you have a custom domain
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Berkay Pabuççu",
    title: "Software QA Team Lead",
    headline: "QA Automation · Team Leadership · Java · Playwright/Selenium",
    // avatar can be a string, an object with { url, label }, or an array of those.
    avatar: [
      // use public root path so Vite serves the static asset from /public/profile.jpg
      { url: "./profile.jpg", label: "" },
      { url: "./profile1.jpg", label: "" },
    ],
    summary:
      "A seasoned Software QA Team Lead and SDET with over 4 years of solid experience in designing, executing, and managing automated and manual testing processes. Proven expertise in building robust test automation frameworks using Java, Selenium, Playwright, and Appium, alongside establishing effective CI/CD pipelines. Strong background in functional, regression, and API testing, leading QA teams to deliver high-quality digital products in agile environments.",
    // optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary:
        "Software QA Team Lead & SDET. I design resilient test frameworks, build reliable CI/CD pipelines, and ensure smooth delivery of complex web and mobile applications using modern automation tools.",
    },
    contact: {
      email: "berkaypabuccu@outlook.com",
      phone: "+90 535 916 12 76",
      location: "Kadıköy, Istanbul, Turkey",
      website: "https://berkaypab.github.io/portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/berkaypb/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/berkaypab",
          icon: "SiGithub",
        }
      ],
    },
  },
  highlights: [
    "QA Automation Engineer / SDET at Turkish Airlines",
    "Extensive experience with Java, Selenium, Appium, and API Automations",
    "Proficient in CI/CD pipeline integration, BDD testing, and Object-Oriented frameworks",
  ],
  skills: [
    {
      title: "Test Automation",
      skills: [
        {
          name: "Java",
          level: 95,
          icon: "SiJava",
          category: "automation",
          years: 4,
          note: "Primary language for test automation and OOP frameworks",
        },
        {
          name: "Selenium WebDriver",
          level: 95,
          icon: "SiSelenium",
          category: "automation",
          years: 4,
          note: "Extensive E2E web automation using Page Factory model",
        },
        {
          name: "Appium",
          level: 85,
          icon: "SiAppium",
          category: "automation",
          years: 3,
          note: "Mobile application automation",
        },
        {
          name: "Playwright",
          level: 80,
          icon: "SiPlaywright",
          category: "automation",
          years: 2,
        },
        {
          name: "RestAssured / Postman",
          level: 90,
          icon: "SiPostman",
          category: "automation",
          years: 4,
          note: "API integrations and backend functional testing",
        },
      ],
    },
    {
      title: "Frameworks & Methodology",
      skills: [
        {
          name: "Cucumber / BDD Gauge",
          level: 90,
          icon: "SiCucumber",
          category: "tooling",
          years: 4,
          note: "Behavior-Driven Development and Gherkin specs",
        },
        {
          name: "JUnit / TestNG",
          level: 90,
          icon: "SiJunit5", // Or another appropriate icon if SiJunit5 isn't available
          category: "tooling",
          years: 4,
        },
        {
          name: "Maven",
          level: 85,
          icon: "SiApachemaven",
          category: "tooling",
          years: 4,
        },
        {
          name: "Agile Testing",
          level: 95,
          icon: "SiJira",
          category: "tooling",
          years: 4,
          note: "Test planning, Regression, and Sprint management",
        },
      ],
    },
    {
      title: "CI/CD & Core",
      skills: [
        {
          name: "Jenkins",
          level: 85,
          icon: "SiJenkins",
          category: "cicd",
          years: 4,
          note: "Pipeline creation and automated test executions",
        },
        {
          name: "Git",
          level: 90,
          icon: "SiGit",
          category: "tooling",
          years: 5,
        },
        {
          name: "SQL",
          level: 75,
          icon: "SiPostgresql",
          category: "database",
          years: 3,
        },
        {
          name: "JMeter",
          level: 70,
          icon: "SiApachejmeter", // Attempting a standard Si icon for Apache JMeter
          category: "tooling",
          years: 2,
        },
      ],
    },
  ],
  experience: [
    {
      id: "turkish-airlines-qa",
      title: "QA Automation Engineer / SDET",
      company: "Turkish Airlines",
      location: "Istanbul, Turkey",
      date: { start: "2025-02", present: true }, // Tarihi yaklaşık veriyorum, isterseniz düzelteyim
      summary:
        "Developing and maintaining test automation frameworks and ensuring the software quality of critical airline operations and customer-facing applications.",
      bullets: [
        "Designing scalable test automation architectures.",
        "Integrating automated test suites with CI/CD pipelines.",
        "Ensuring smooth application behavior for global user traffic.",
      ],
      tech: [
        "Test Automation",
        "Framework Design",
        "CI/CD",
        "Quality Assurance",
      ],
    },
    {
      id: "turkuvaz-medya-qa-lead",
      title: "Software QA Team Lead",
      company: "Turkuvaz Medya",
      location: "Istanbul, Turkey",
      date: { start: "2024-02", end: "2025-02" }, // Başlangıç/bitişleri tahmini düzenledim
      summary:
        "Leading the QA Team at Turkuvaz Medya, ensuring the highest level of software quality across multiple media platforms through advanced testing strategies and team mentoring.",
      bullets: [
        "Manage and mentor a team of QA engineers, setting testing standards and best practices.",
        "Design and implement comprehensive test strategies for both manual grading and automated pipelines.",
      ],
      tech: [
        "Team Leadership",
        "Test Strategy",
        "Quality Assurance",
        "Agile",
      ],
    },
    {
      id: "ata-express-sdet",
      title: "Software Development Engineer in Test",
      company: "Ata Express (Tıkla Gelsin & Tıklapay)",
      location: "Istanbul, Turkey",
      date: { start: "2022-07", end: "2025-02" },
      summary:
        "Led testing processes for the Tıklapay payment infrastructure, developing robust object-oriented test frameworks and automating complex integration testing flows.",
      bullets: [
        "Conducted integration tests for Craftgate payment gateway and Sipay digital wallet system.",
        "Led the testing processes during the development of Tıklapay, the company's payment infrastructure.",
        "Prepared functional test cases using test designing, validation concepts, Unit test cases, and Regression suites.",
        "Responsible for planning regression test stories, generating reports, performing re-tests, and debugging to fix QA defects.",
        "Built and maintained high-quality object-oriented code for testing using Unit Test Frameworks like TestNG and JUnit following industry standards.",
        "Automated Mobile applications using Appium and performed API integrations targeting payment flows.",
      ],
      tech: [
        "Java",
        "Appium",
        "TestNG",
        "JUnit",
        "API Testing",
        "Payment Gateways",
      ],
    },
    {
      id: "anadolu-sigorta-qa",
      title: "Software QA Automation Engineer",
      company: "Anadolu Sigorta",
      location: "Istanbul, Turkey",
      date: { start: "2021-01", end: "2022-07" },
      summary:
        "Automated regression sets and web services testing within a BDD framework, significantly improving the delivery speed of the QA lifecycle.",
      bullets: [
        "Created automation test scripts using Selenium, Java, Maven, BDD framework and Page Factory model.",
        "Conducted Functional testing and Regression Testing using Selenium with Behavior-Driven frameworks, writing step definitions with Gherkin.",
        "Utilized Jenkins to execute test scripts and complex locators (XPath) for UI validations.",
        "Tested Web Services HTTP parameters/bodies using RestAssured, Swagger, and Postman.",
        "Handled Selenium Synchronization problems using Explicit & Implicit waits during regression testing.",
      ],
      tech: ["Selenium", "Java", "BDD", "Cucumber", "Jenkins", "RestAssured", "Postman", "Maven"],
    },
    {
      id: "optiim-business-qa-intern",
      title: "Software Test Engineer Intern",
      company: "OPTIIM Business Solutions",
      location: "Istanbul, Turkey",
      date: { start: "2020-08", end: "2020-12" },
      summary:
        "Started QA journey by automating GUI testing using Page Object Model and heavily engaging in manual and black-box testing techniques.",
      bullets: [
        "Automated test cases using appropriate tools by studying requirements. Experience in implementing the Page Object Model.",
        "Verified and regressed bug fixes, monitored active issues using Jira, and maintained predefined technical documentation.",
        "Performed manual GUI testing and black-box testing methodologies.",
      ],
      tech: ["Jira", "Manual Testing", "Black Box Testing", "Page Object Model", "GUI Testing"],
    },
  ],
  projects: [
    {
      id: "hepsiburada-qa-case-study",
      title: "Hepsiburada QA Case Study",
      description:
        "E2E automated testing framework developed for Hepsiburada QA automation challenges. Demonstrates proficiency in TypeScript and Playwright.",
      tags: ["Playwright", "TypeScript", "Automation", "Testing"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      href: "https://github.com/berkaypab/hepsiburada-qa-case-study",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/berkaypab/hepsiburada-qa-case-study",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "selenium-cucumber-fw",
      title: "Selenium Framework with Cucumber",
      description:
        "Comprehensive Behavior-Driven Development (BDD) testing framework using Java, Selenium WebDriver, and Cucumber.",
      tags: ["Selenium", "Cucumber", "Java", "BDD"],
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc5dDY1c2ZnOGs0ODF0eDkwbzBvMHZ2ZXJvYml2amRmdzN2dnZueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AFQj6uviWpwudbOWg/giphy.gif",
      href: "https://github.com/berkaypab/SeleniumFramework-Cucumber-",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/berkaypab/SeleniumFramework-Cucumber-",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "rest-assured-booking",
      title: "RestAssured API Automation",
      description:
        "Automated API testing suite built with Java and RestAssured. Validates endpoints, response structures, and HTTP statuses for booking services.",
      tags: ["API Testing", "RestAssured", "Java", "Automation"],
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpqYWFhbnBraWt3ZXhvajZsdjg5andyMGZzY2VibGg3bXE0MWxwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2PuPWxuLV1FGyh03Ja/giphy.gif",
      href: "https://github.com/berkaypab/RestAssuredApiAutomationBooking-master",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/berkaypab/RestAssuredApiAutomationBooking-master",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    }
  ],
  education: [
    {
      degree: "B.Sc., Computer Engineering",
      school: "Karabuk University",
      date: "Graduated",
      summary: "GPA: 3.0",
    }
  ],
  certifications: [],
  extras: {
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "Professional working proficiency" }
    ],
    interests: ["Designing Websites", "Learning languages", "Football", "Cycling"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  // SDET / QA Specific Tags
  Playwright: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Java: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  Selenium: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Cucumber: "bg-lime-100 text-lime-800 dark:bg-lime-900/40 dark:text-lime-300",
  Automation: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  Testing: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
  "API Testing": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  RestAssured: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  BDD: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};
