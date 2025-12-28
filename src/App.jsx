  import { useEffect, useState } from "react";
  import { FaGithub, FaInstagram, FaFacebookF, FaTelegramPlane, FaEnvelope, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

  import "./App.css";

  import logo from "./assets/logo.png";
  import profile from "./assets/profile.png";
  import formal from "./assets/formal.jpg";

  export default function App() {
    const [isOn, setIsOn] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const onResize = () => {
        if (window.innerWidth > 980) setMenuOpen(false);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const prefix = "Aspiring ";
    const roles = ["QA Professional and Front-End Developer"];

    const [roleIndex, setRoleIndex] = useState(0);
    const [typedRole, setTypedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
    const currentRole = roles[roleIndex];

    const typeSpeed = 70;
    const deleteSpeed = 45;
    const pauseAfterTyped = 3000;

    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));

        if (typedRole.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseAfterTyped);
        }
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));

        if (typedRole.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }, deleteSpeed);
    }

      return () => clearTimeout(timer);
    }, [typedRole, isDeleting, roleIndex]);

    useEffect(() => {
    const els = document.querySelectorAll(
      ".hero, .aboutSection, .skillsSection, .projectsSection, .footer, .projectCard, .skillCard, .aboutCard"
    );

    els.forEach((el) => el.classList.add("reveal"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealShow");
        });
      },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      els.forEach((el) => obs.observe(el));

      return () => obs.disconnect();
    }, []);

    useEffect(() => {
      document.documentElement.classList.toggle("dark", isOn);
    }, [isOn]);

    useEffect(() => {
      const onScroll = () => setShowTop(window.scrollY > 300);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    

    const projects = [
      {
        title: "Claudy Nails",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        description:
          "This is a student project website for a nail salon that showcases services, nail designs, pricing, and a simple online booking feature for scheduling appointments.",
        images: [
          "PROJECT2/cn1.png",
          "PROJECT2/cn2.png",
          "PROJECT2/cn3.png",
          "PROJECT2/cn4.png",
          "PROJECT2/cn5.png",
          "PROJECT2/cn6.png",
          "PROJECT2/cn7.png",
          "PROJECT2/cn8.png",
          "PROJECT2/cn9.png",
          "PROJECT2/cn10.png",
          "PROJECT2/cn11.png",
          "PROJECT2/cn12.png",
        ],
      },
      {
        title: "Twice Fandom Website",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        description:
          "This is a project fan website dedicated to the K-pop group TWICE, featuring member profiles, albums, songs, and media content for fans to explore and enjoy.",
        images: [
          "PROJECT3/fw1.png",
          "PROJECT3/fw2.png",
          "PROJECT3/fw3.png",
          "PROJECT3/fw4.png",
          "PROJECT3/fw5.png",
          "PROJECT3/fw6.png",
          "PROJECT3/fw7.png",
          "PROJECT3/fw8.png",
          "PROJECT3/fw9.png",
          "PROJECT3/fw10.png",
          "PROJECT3/fw11.png",
          "PROJECT3/fw12.png",
        ],
      },
      {
        title: "INFINITY ESTATE",
        tags: ["PHP", "HTML", "CSS", "JavaScript"],
        description:
          "INFINITY ESTATE is a project e-commerce website for real estate listings, allowing users to browse properties, view details and prices, and contact agents easily.",
        images: [
          "PROJECT1/1.png",
          "PROJECT1/2.png",
          "PROJECT1/3.png",
          "PROJECT1/4.png",
          "PROJECT1/5.png",
          "PROJECT1/6.png",
          "PROJECT1/7.png",
          "PROJECT1/8.png",
          "PROJECT1/9.png",
          "PROJECT1/10.png",
          "PROJECT1/11.png",
          "PROJECT1/12.png",
          "PROJECT1/13.png",
          "PROJECT1/14.png",
          "PROJECT1/15.png",
          "PROJECT1/16.png",
          "PROJECT1/17.png",
        ],
      },
      {
        title: "ICA ID Scanner",
        tags: ["Laravel", "JavaScript", "HTML", "Tailwind"],
        description:
          "A capstone project designed to scan and extract information from IDs for quick verification, attendance monitoring and data entry.",
        images: [
          "CAPSTONE/1.png",
          "CAPSTONE/2.jpg",
          "CAPSTONE/3.png",
          "CAPSTONE/4.jpg",
          "CAPSTONE/5.png",
          "CAPSTONE/6.png",
          "CAPSTONE/7.png",
          "CAPSTONE/8.png",
          "CAPSTONE/9.png",
          "CAPSTONE/10.png",
          "CAPSTONE/11.png",
          "CAPSTONE/12.png",
          "CAPSTONE/13.png",
          "CAPSTONE/14.png",
          "CAPSTONE/15.png",
          "CAPSTONE/16.png",
          "CAPSTONE/17.png",
          "CAPSTONE/18.png",
          "CAPSTONE/19.png",
          "CAPSTONE/20.png",
          "CAPSTONE/21.png",
          "CAPSTONE/22.png",
          "CAPSTONE/23.png",
          "CAPSTONE/24.png",
          "CAPSTONE/25.png",
        ],
      },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [activeImage, setActiveImage] = useState(0);

    const openProjectGallery = (projectIndex, imageIndex = 0) => {
      setActiveProject(projectIndex);
      setActiveImage(imageIndex);
      setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const prevImage = () => {
      const imgs = projects[activeProject].images;
      setActiveImage((i) => (i - 1 + imgs.length) % imgs.length);
    };

    const nextImage = () => {
      const imgs = projects[activeProject].images;
      setActiveImage((i) => (i + 1) % imgs.length);
    };

    useEffect(() => {
      if (!isModalOpen) {
        document.documentElement.classList.remove("modalOpen");
        document.body.classList.remove("modalOpen");
        return;
      }
      document.documentElement.classList.add("modalOpen");
      document.body.classList.add("modalOpen");
      return () => {
        document.documentElement.classList.remove("modalOpen");
        document.body.classList.remove("modalOpen");
      };
    }, [isModalOpen]);

    return (
      <div className="page">
        {/* navbar */}
        <header className="headerWrap">
          <nav className="navPill">
            <a href="#home" onClick={closeMenu}>
              <img className="logo" src={logo} alt="Rose logo" />
            </a>

            <ul className="navLinks">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="navActions">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isOn}
                  onChange={(e) => setIsOn(e.target.checked)}
                />
                <span className="slider" />
              </label>

              <button
                className={`hamburger ${menuOpen ? "isOpen" : ""}`}
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                aria-controls="mobileMenu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div
              id="mobileMenu"
              className={`mobileMenu ${menuOpen ? "open" : ""}`}
              role="menu"
            >
              <a href="#about" onClick={closeMenu} role="menuitem">About</a>
              <a href="#skills" onClick={closeMenu} role="menuitem">Skills</a>
              <a href="#project" onClick={closeMenu} role="menuitem">Project</a>
              <a href="#contact" onClick={closeMenu} role="menuitem">Contact</a>
            </div>
          </nav>
        </header>

        {/* home */}
        <main id="home" className="hero">
          <div className="heroLeft">
            <h1 className="title">
              Hi, I’m <span className="titleAccent">Rose!</span>
            </h1>

            <p className="subtitle typing">
              {prefix}
              <strong>{typedRole}</strong>
              <span className="caret">|</span>
            </p>

            <a className="ctaLink" href="#project">
              Dive more into my projects →
            </a>
          </div>

          <div className="heroRight">
            <div className="photoFrame">
              <img className="photo" src={profile} alt="Rose portrait" />
            </div>
            <p className="quote">“Learning to create reliable web experiences”</p>
          </div>
        </main>

        {/* about */}
        <section className="aboutSection" id="about">
          <h2 className="aboutHeading">About Me</h2>

          <div className="aboutGrid">
            <img className="aboutPhoto" src={formal} alt="Formal portrait" />

            <div className="aboutContent">
              <p className="aboutText">
                Hi, I am Rose Ann S. Bajo, a 4th-year IT student aspiring to be a
                skilled QA professional and front-end developer. I have experience
                in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and ReactJS for
                building responsive and user-friendly web interfaces. I am also
                developing my skills in software testing, including manual testing,
                writing test cases, and identifying bugs to improve system quality.
              </p>

              <div className="aboutCards">
                <div className="aboutCard">
                  <h3>Front-End Development</h3>
                  <p>
                    Building responsive and accessible interfaces using modern web
                    technologies.
                  </p>
                </div>

                <div className="aboutCard">
                  <h3>Quality Assurance</h3>
                  <p>Manual testing, test case writing, and bug identification.</p>
                </div>
              </div>

              <a className="downloadBtn" href="BAJO_CV.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* skills */}
        <section id="skills" className="skillsSection">
          <h2 className="skillsHeading">My Tech Stacks</h2>

          <div className="skillsIntro">
            I build a responsive and user-friendly interface using HTML5, CSS3,
            JavaScript, Bootstrap, Tailwind CSS, and ReactJS
            <div className="skillsIcons">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
            </div>
          </div>

          <h2 className="skillsHeading secondary">My Skills</h2>

          <div className="skillsCards">
            <div className="skillCard">
              <h3>Front-End Development</h3>
              <p>
                Building clean and structured code for maintainable and scalable
                projects.
              </p>
            </div>

            <div className="skillCard">
              <h3>Responsive Design</h3>
              <p>Creating layouts that adapt seamlessly to any device or screen size.</p>
            </div>

            <div className="skillCard">
              <h3>UI/UX Design</h3>
              <p>
                Designing intuitive user interfaces focused on usability and visual
                consistency.
              </p>
            </div>

            <div className="skillCard">
              <h3>Quality Assurance</h3>
              <p>
                Ensuring web applications function correctly by manual testing,
                creating test cases, and identifying bugs to improve reliability.
              </p>
            </div>
          </div>
        </section>

        {/* projects */}
        <section id="project" className="projectsSection">
          <h2 className="projectsHeading">My Projects</h2>

          <div className="projectsPanel">
            <div className="projectsGrid">
              {projects.map((p, idx) => (
                <article className="projectCard" key={p.title}>
                  <button
                    className="projectImageBtn"
                    type="button"
                    onClick={() => openProjectGallery(idx, 0)}
                    aria-label={`Open gallery for ${p.title}`}
                  >
                    <img className="projectImage" src={p.images[0]} alt={p.title} />
                  </button>

                  <div className="projectBody">
                    <div className="projectTags">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="projectTitle">{p.title}</h3>
                    <p className="projectDesc">{p.description}</p>

                    <button
                      className="projectBtn"
                      type="button"
                      onClick={() => openProjectGallery(idx, 0)}
                    >
                      View Project
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* image modal */}
        {isModalOpen && (
          <div
            className="modalOverlay"
            role="dialog"
            aria-modal="true"
            aria-label="Project gallery preview"
            onMouseDown={(e) => {
              if (e.target.classList.contains("modalOverlay")) closeModal();
            }}
          >
            <button className="modalClose" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <div className="modalShell" onMouseDown={(e) => e.stopPropagation()}>
              <button
                className="modalArrow left"
                onClick={prevImage}
                aria-label="Previous image"
                type="button"
              >
                ‹
              </button>

              <div className="modalContent">
                <img
                  className="modalImage"
                  src={projects[activeProject].images[activeImage]}
                  alt={`${projects[activeProject].title} - ${activeImage + 1}`}
                />
                <div className="modalCounter">
                  {activeImage + 1} / {projects[activeProject].images.length}
                </div>
              </div>

              <button
                className="modalArrow right"
                onClick={nextImage}
                aria-label="Next image"
                type="button"
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* footer/contact */}
        <footer id="contact" className="footer">
          <div className="footerInner">
            <div className="footerCol">
              <h3 className="footerTitle">Rose’s Portfolio</h3>
              <p className="footerQuote">
                I believe success comes from continuous learning, dedication, and
                the courage to keep improving — one line of code at a time.
              </p>
            </div>

            <div className="footerCol">
              <h3 className="footerTitle">Quick Links</h3>
              <ul className="footerLinks">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footerCol">
              <h3 className="footerTitle">Contact Me</h3>

              <div className="footerSocial">
                <a
                  className="socialBtn"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  className="socialBtn"
                  href="https://www.facebook.com/ese.mel.7330"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={22} />
                </a>

                <a
                  className="socialBtn"
                  href="https://web.telegram.org/k/#@pangschoolpurposes"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane size={22} />
                </a>

                <a
                  className="socialBtn"
                  href="https://www.instagram.com/cheezikimbap/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
              </div>

              <div className="footerContact">
                <div className="footerRow">
                  <FaEnvelope className="footerIcon" aria-hidden="true" />
                  <a href="mailto:rasbajo.18@gmail.com">rasbajo.18@gmail.com</a>
                </div>

                <div className="footerRow">
                  <FaPhoneAlt className="footerIcon" aria-hidden="true" />
                  <a href="tel:+639766468006">+63 976 646 8006</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            © 2025 Rose Ann Bajo. All rights reserved.
          </div>
        </footer>

        {showTop && (
          <button
            className="toTopBtn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp size={22} />
          </button>
        )}
      </div>
    );
  }
