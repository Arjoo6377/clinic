import './App.css'

const slides = [
  {
    eyebrow: 'Complete Family Healthcare',
    title: 'Trusted general physician care for every age',
    text: 'From preventive checkups to managing ongoing health concerns, we provide personalized primary care for individuals and families.',
    cta: 'Explore Our Services',
    image:
      'https://healthflex.plethorathemes.com/pediatrician/wp-content/uploads/sites/5/2016/06/AdobeStock_79719976-Copy.jpeg',
  },
  {
    eyebrow: 'Friendly approach',
    title: 'A visit to the Doctor can be fun!',
    text: "We make sure our little friends feel right at home, comfortable, and safe.",
    cta: 'Learn More',
    image:
      'https://healthflex.plethorathemes.com/pediatrician/wp-content/uploads/sites/5/2016/06/AdobeStock_79720920-Copy.jpeg',
  },
  {
    eyebrow: 'Well baby visits',
    title: 'Comprehensive health guidelines',
    text: 'Pediatrician visits are just as important for healthy children and preventive care.',
    cta: 'Learn More',
    image:
      'https://healthflex.plethorathemes.com/pediatrician/wp-content/uploads/sites/5/2016/06/AdobeStock_97852214.jpeg',
  },
]

const services = [
  {
    title: 'General Consultation',
    subtitle: 'Diagnosis and treatment for common illnesses',
    icon: '🩺',
    tone: 'skin',
  },
  {
    title: 'Preventive Health Checkups',
    subtitle: 'Routine screenings and wellness monitoring',
    icon: '✅',
    tone: 'secondary',
  },
  {
    title: 'Chronic Disease Management',
    subtitle: 'Care plans for diabetes, BP, and thyroid',
    icon: '💙',
    tone: 'dark',
  },
  {
    title: 'Request an Appointment',
    subtitle: "Let's schedule your visit!",
    icon: '📅',
    tone: 'black',
  },
]

const hours = [
  ['MONDAY', '09:00-20:00'],
  ['TUESDAY', '09:00-21:00'],
  ['WEDNESDAY', '09:00-20:00'],
  ['THURSDAY', '24-HOUR SHIFT'],
  ['FRIDAY', '09:00-21:00'],
  ['SATURDAY', '09:00-18:00'],
  ['SUNDAY', '11:00-19:00'],
]

const stats = [
  ['12+', 'Years Experience'],
  ['10k+', 'Patients Served'],
  ['24/7', 'Emergency Support'],
  ['4.9', 'Average Rating'],
]

function App() {
  const heroSlide = slides[0]

  return (
    <div className="site">
      <header className="topbar">
        <div className="top-links">
          <a href="#appointment">C 25, 40 Feet Rd, Block G, Molar band Extension, Badarpur, New Delhi, Delhi 110044</a>
          <a href="#insurance">Insurances Accepted</a>
          <a href="#appointment">Request an Appointment</a>
        </div>
        <p>
          Emergency Line <strong>92115 95888</strong>
        </p>
      </header>
      <nav className="mainbar">
        <a href="#" className="brand" aria-label="Clinic home">
          <img src="/image1.jpeg" alt="Clinic logo" />
        </a>
        <ul>
          <li>Home</li>
          <li>The Doctor</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>More</li>
        </ul>
        <button type="button" className="book-btn">
          Online Booking
        </button>
      </nav>

      <main>
        <section className="slider">
          <article className="slide">
            <video className="slide-video" autoPlay muted loop playsInline>
              <source src="/banner.mp4" type="video/mp4" />
            </video>
            <div className="slide-overlay" />
            <div className="slide-card">
              <p className="slide-top">{heroSlide.eyebrow}</p>
              <h1>{heroSlide.title}</h1>
              <p>{heroSlide.text}</p>
              <a href="#services" className="btn-primary">
                {heroSlide.cta}
              </a>
            </div>
          </article>
        </section>

        <section className="highlights">
          {stats.map(([value, label]) => (
            <article key={label} className="highlight-card">
              <h3>{value}</h3>
              <p>{label}</p>
            </article>
          ))}
        </section>

        <section className="services" id="services">
          {services.map((service, index) => (
            <article key={service.title} className={`service-card ${service.tone}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <a href="#" className={`more-btn ${index % 2 ? 'primary' : 'secondary'}`}>
                More
              </a>
            </article>
          ))}
        </section>

        <section className="about">
          <div>
            <h2>Comprehensive care for your everyday health</h2>
            <p className="about-sub">
              A modern general physician practice focused on prevention, early diagnosis, and long-term wellness.
            </p>
            <p>
              We treat common infections, fever, cough, digestive issues, body pain, and seasonal
              illnesses while guiding patients with clear treatment plans and practical lifestyle advice.
            </p>
            <h2>Modern Medical Facilities</h2>
            <p>
              Our clinic offers evidence-based care with digital health records, preventive screening,
              and referral support for specialist treatment whenever needed.
            </p>
            <a href="#services" className="text-link">
              Check all General Physician Services
            </a>
          </div>
          <div className="doctor-card">
            <div className="doctor-photo" />
            <div className="doctor-body">
              <h3>Dr. Praveer Kumar</h3>
              
            </div>
          </div>
        </section>

        <section className="schedule" id="appointment">
          <div>
            <h2>Comfortable and patient-friendly clinic environment</h2>
            <p>
              We provide thoughtful, professional care so patients feel supported at every visit.
            </p>
            <div className="mosaic" />
          </div>
          <div>
            <h3>Working Hours</h3>
            <table>
              <tbody>
                {hours.map(([day, time]) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Fees &amp; Insurance</h3>
            <p>
              We support direct insurance billing with major providers and offer clear consultation
              charges with no hidden costs.
            </p>
          </div>
        </section>

        <section className="cta" id="insurance">
          <h2>Need a trusted doctor for your next checkup?</h2>
          <p>Call now at 92115 95888 to book your consultation.</p>
          <p>C 25, 40 Feet Rd, Block G, Molar band Extension, Badarpur, New Delhi, Delhi 110044</p>
          <a href="#appointment" className="btn-success">
            Request an Appointment
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
