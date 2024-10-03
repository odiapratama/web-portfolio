/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Odia Pratama's Portfolio",
  description:
    "Experienced Android Engineer with a strong passion for crafting innovative mobile applications. Skilled in Java, Kotlin, and Android SDK, I excel in delivering high-performance, user-friendly apps. Continuously learning and adapting to new technologies, I possess strong analytical and problem-solving abilities. Let's build your next mobile success together.",
  og: {
    title: "Odia Pratama Portfolio",
    type: "website",
    url: "http://odiapratama-portfolio.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Odia Pratama",
  logo_name: "Odia Pratama",
  nickname: "odi",
  subTitle:
    "As an experienced Android Engineer, I excel in analytics and precision, navigating the full software development lifecycle with mastery in Agile Scrum. My commitment to innovation drives me to continually integrate cutting-edge technologies and best practices, enhancing the developer experience.",
  resumeLink: "https://odiapratama.github.io",
  portfolio_repository: "https://odiapratama.github.io",
  githubProfile: "https://github.com/odiapratama",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github,
  // linkedin,
  // gmail,
  // gitlab,
  // facebook,
  // twitter,
  // instagram

  {
    name: "Github",
    link: "https://github.com/odiapratama",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/odiapratama/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:odiapratama.pro@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/odiapratamaa",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "FullStackImg",
      skills: [
        "• Deep Understanding of Android Framework: A solid grasp of the Android SDK, components, and architecture is essential for building robust and efficient apps.",
        "• Proficiency in Kotlin or Java: Mastery of these programming languages is crucial for developing Android applications.",
        "• UI/UX Design Expertise: The ability to create intuitive and visually appealing user interfaces is key to delivering exceptional user experiences.",
        "• Performance Optimization: Understanding how to optimize app performance, including memory management and efficient resource usage, is vital.",
        "• Problem-Solving and Debugging Skills: The ability to identify and resolve complex issues is a valuable asset in Android development."
      ],
      softwareSkills: [
        {
          skillName: "Android Development",
          fontAwesomeClassname: "logos:android-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "devicon:androidstudio",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "DesignImg",
      skills: [
        "• Effective Communication: The ability to clearly convey ideas, expectations, and updates to team members and stakeholders is crucial for project success.",
        "• Strong Leadership: Effective project managers can inspire and motivate teams to achieve project goals.",
        "• Risk Management: The ability to identify potential risks and develop strategies to mitigate them is essential for project success.",
        "• Problem-Solving: Project managers must be able to effectively address challenges and find solutions.",
        "• Time Management: The ability to prioritize tasks and manage time effectively is essential for meeting project deadlines."
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "devicon:jira",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Treloo",
          fontAwesomeClassname: "logos:trello",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Exacalidraw",
          fontAwesomeClassname: "vscode-icons:file-type-excalidraw",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google Sheets",
          fontAwesomeClassname: "simple-icons:googlesheets",
          style: {
            backgroundColor: "transparent",
            color: "#0F9D58",
          },
        },
        {
          skillName: "Google Slides",
          fontAwesomeClassname: "simple-icons:googleslides",
          style: {
            backgroundColor: "transparent",
            color: "#F4B400",
          },
        },
      ],
    },
    {
      title: "Data Analytics",
      fileName: "DataScienceImg",
      skills: [
        "• Statistical Proficiency: A strong understanding of statistical concepts and methods is essential for data analysis.",
        "• Data Cleaning and Preparation: The ability to clean, organize, and prepare data for analysis is a crucial skill.",
        "• Data Visualization: Effective data visualization techniques can help communicate insights and findings clearly.",
        "• Problem-Solving and Critical Thinking: The ability to analyze data, identify patterns, and draw meaningful conclusions is essential.",
        "• Programming Skills: Proficiency in programming languages like Python or R is often required for data analysis tasks."
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            color: "#276DC3",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "• Cloud Platforms: Understanding of major cloud provider like GCP, including their services and pricing models.",
        "• Networking: Knowledge of networking concepts such as VPCs, subnets, load balancing, and firewalls.",
        "• Compute: Familiarity with different compute options like EC2 instances, virtual machines, and serverless functions.",
        "• Storage: Understanding of storage types such as block, object, and file storage, and their use cases.",
        "• Security: Knowledge of cloud security best practices, including IAM, encryption, and vulnerability management."
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "devicon:googlecloud",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/odiapratama",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Telkom University",
      subtitle: "B.Sc. in Informatics Engineering",
      logo_path: "telu_logo.png",
      alt_name: "Telkom University",
      duration: "2015 - 2019",
      descriptions: [
        "• Strong foundation in programming languages: Proficient in languages like Java, Python, or C++.",
        "• Deep understanding of basic data structures and algorithms: Ability to design and analyze efficient algorithms for problem-solving.",
        "• Specialized knowledge in machine learning and artificial intelligence: Expertise in algorithms, techniques, and applications for data-driven learning and intelligent systems.",
        "• Comprehensive understanding of computer systems: Familiarity with operating systems, networks, databases, and software engineering principles.",
        "• Interdisciplinary skills: Exposure to human-computer interaction, systems analysis, and project management."
      ],
      website_link: "https://telkomuniversity.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Advance Data Analytics",
      subtitle: "- Google x Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/f8ae5646147e4c88bef984499bd82c4a",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Anlytics",
      subtitle: "- Google x Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/a3209a28265a18b62d50537adbb39cea",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Project Management",
      subtitle: "- Google x Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/505e56a1bd110898a4a32da51538ece0",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Cloud Practitioner Essentials",
      subtitle: "- Dicoding",
      logo_path: "dicoding_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1cPZrwbKBiSf175hDUWSE5w60cxovRAJ6/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#FFFFFF",
    },
    {
      title: "Solid Principles",
      subtitle: "- Dicoding",
      logo_path: "dicoding_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12GH9HI_m6zzLQplC-s6cGqvA7o7LickS/view?usp=drive_link",
      alt_name: "Dicoding",
      color_code: "#FFFFFF",
    },
    {
      title: "Build, Deploy & Test with Jenkins",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-W5MKVORJ/",
      alt_name: "Udemy",
      color_code: "#f2f2f2",
    },
    {
      title: "The Complete Android + Kotlin Developer Course",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-GYPWW0LZ/",
      alt_name: "Udemy",
      color_code: "#f2f2f2",
    },
    {
      title: "Android App Development using Kotlin",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-NK6DTCVB/",
      alt_name: "Udemy",
      color_code: "#f2f2f2",
    },
    {
      title: "Data Science, Deep Learning, & Machine Learning with Python",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-YF34KNSY/",
      alt_name: "Udemy",
      color_code: "#f2f2f2",
    },
    {
      title: "Learn Flutter Beginner Course",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4UVYHFMB/",
      alt_name: "Udemy",
      color_code: "#f2f2f2",
    },
    {
      title: "The Online Marketing Fundamentals",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Qq7boluL9YUb1MewGdPd5jZ58MjFITHU/view?usp=drive_link",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "GCP Course",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/331bcd4c-c1d7-4b26-b616-6cbd79d07bdf",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Journey of my career",
  description:
    "With a diverse range of experiences, I have honed my skills in both professional and volunteer settings. At INAISDEV, I gained invaluable hands-on experience through an internship, where I contributed to Web & Apps development. My subsequent role at UrsaByte & Telkom Indonesia allowed me to further develop my expertise and take on more responsibilities. Additionally, my volunteer work at both Gigih and Bangkit has provided me with opportunities to give back to the community and strengthen my interpersonal skills. These experiences have equipped me with a solid foundation and a passion in software engineering.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mobile Engineer - Android",
          company: "Telkom Indonesia.",
          company_url: "https://www.telkom.co.id/",
          logo_path: "telkom_logo.png",
          duration: "Mei 2020 - Present",
          location: "Jakarta, Indonesia",
          description:
            "A seasoned Android Engineer with over 4 years of experience, I have a proven track record of designing, developing, and launching high-performance mobile applications. My expertise lies in Mobile Development, Kotlin, Jetpack Compose, Coroutine and also Unit Testing. I have successfully led teams, mentored junior developers, and delivered complex projects within tight deadlines. My ability to architect scalable solutions, optimize app performance, and ensure a seamless user experience has consistently exceeded expectations. I am passionate about staying up-to-date with the latest trends in Android development and leveraging emerging technologies to drive innovation.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "UrsaByte",
          company_url: "https://www.ursabyte.com/",
          logo_path: "ursabyte_logo.png",
          duration: "Oktober 2018 - 1 Januari 2020",
          location: "Bandung, Indonesia",
          description:
            "As a Junior Software Engineer, I have gained valuable experience in developing web, mobile, and backend applications. I have worked on projects involving Android Development, Kotlin, Angular, Java. My responsibilities have included writing clean, efficient code, collaborating with cross-functional teams, and learning from experienced developers.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Intern",
          company: "INAISDEV",
          company_url: "https://www.google.com/en/",
          logo_path: "pwa.png",
          duration: "Mar 2018 - Aug 2018",
          location: "Bandung, Indonesia",
          description:
            "As a Software Engineering intern, I had the opportunity to work on a chatbot development project using Natural Language Processing (NLP) and Python. I was involved in various stages of the project, including data collection, preprocessing, feature extraction, and model training. I gained hands-on experience with popular NLP libraries like NLTK and TensorFlow, and learned how to build and fine-tune machine learning models for tasks such as intent classification and entity extraction. This internship provided me with valuable insights into the field of AI and solidified my interest in pursuing a career in software engineering.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Advisor & Instructor",
          company: "Bangkit",
          company_url: "https://about.google/",
          logo_path: "bangkit_logo.jpg",
          duration: "Sep 2023 - Present",
          location: "Indonesia",
          description:
            "As a Project Advisor and Android Instructor at Bangkit, I have had the rewarding experience of guiding and mentoring aspiring software engineers. In my role as a Project Advisor, I have provided technical guidance, problem-solving support, and project management advice to teams working on various Android development projects. I have also had the opportunity to share my knowledge and expertise as an Android Instructor, teaching students the fundamentals of Android development, best practices, and industry trends. Through these experiences, I have fostered a collaborative and supportive learning environment and helped students develop their skills as Android developers.",
          color: "#4285F4",
        },
        {
          title: "Coach & Class Fascilitator",
          company: "GoTo Impact Foundation",
          company_url: "https://grow.google/intl/id_id/bangkit/",
          logo_path: "gigih_logo.jpg",
          duration: "Jul 2023 - Dec 2023",
          location: "Indonesia",
          description:
            "As an Internship Coach and Android Class Facilitator at Gigih, I have been instrumental in guiding and supporting aspiring software engineers in their professional development. In my role as an Internship Coach, I provide mentorship, career advice, and interview preparation to help interns secure meaningful internships and land their dream jobs. As an Android Class Facilitator, I lead workshops and training sessions on Android development, covering topics such as UI/UX design, app architecture, and best practices. My goal is to equip students with the necessary skills and knowledge to excel in the field of Android development and achieve their career aspirations.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Some of my projects that I have worked on are listed below. These projects showcase my skills and expertise in Android Development, Kotlin, and other technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "sample",
    //   name: "sample",
    //   createdAt: "2023-10-06T00:00:00Z",
    //   description: "sample",
    //   url: "https:/sample.com",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_animated.png",
    description:
    "I am an Android Engineer with a strong passion for crafting innovative mobile applications. Skilled in Java, Kotlin, and Android SDK, I excel in delivering high-performance, user-friendly apps. Continuously learning and adapting to new technologies, I possess strong analytical and problem-solving abilities. Let's build your next mobile success together.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
