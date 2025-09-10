import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function HomePage() {
    return (
        <main>
            <section className="mainHomeSection">
                <h1>
                    From idea to orbit.
                    <br />
                    We builds CubeSats that fit your vision.
                </h1>
                <ul>
                    <li>
                        <button>Learn more</button>
                    </li>
                    <li>
                        <button>Contact Us</button>
                    </li>
                </ul>
            </section>
            <section>
                <article>
                    <h3>Notre mission</h3>
                    <p>
                        Chez TDS company, nous voulons rendre l’espace
                        accessible à ceux qui ont des idées à concrétiser. Grâce
                        à nos CubeSats modulaires et personnalisables, nous
                        offrons une passerelle simple et fiable pour transformer
                        des concepts innovants en missions spatiales réelles.
                        Que vous soyez une startup, une école, une université ou
                        une entreprise technologique, l’orbite est désormais à
                        votre portée.
                    </p>
                </article>
                <article>
                    <h3>Des CubeSats pensés pour vous</h3>
                    <p>
                        Nos CubeSats sont conçus pour s’adapter à vos besoins,
                        pas l’inverse. De 1U à 6U, nous proposons des
                        plateformes légères, robustes et prêtes à embarquer vos
                        capteurs, charges utiles ou expériences. Qu’il s’agisse
                        de recherche scientifique, d’IoT spatial, de
                        communication ou d’observation de la Terre, nous avons
                        une solution technique pensée pour votre mission.
                    </p>
                </article>
            </section>
            <section className="secondHomeSectionn">
                <h3>Pourquoi choisir TDS company ?</h3>
                <ul>
                    <li>Des CubeSats fiables et évolutifs</li>
                    <li>Un accompagnement personnalisé de A à Z</li>
                    <li>Des solutions accessibles, claires et concrètes</li>
                    <li>Une vraie volonté de démocratiser l’espace</li>
                </ul>
            </section>
            <section>
                <article>
                    <h3>Une solution clé en main</h3>
                    <p>
                        Pas besoin d’être un expert spatial pour lancer un
                        satellite. Chez TDS company, nous vous accompagnons à
                        chaque étape : définition de votre mission, sélection du
                        CubeSat adapté, intégration de votre charge utile,
                        lancement et suivi post-déploiement. Nous vous
                        simplifions le spatial, pour que vous puissiez vous
                        concentrer sur l’essentiel : votre mission.
                    </p>
                </article>
                <article>
                    <h3>Transparence et accessibilité</h3>
                    <p>
                        L’univers spatial est complexe, mais l’accès ne doit pas
                        l’être. Sur notre plateforme, vous trouverez des
                        informations claires : fiches produits, guides
                        techniques, simulateurs de mission (à venir), devis
                        estimatifs et accompagnement personnalisé. Nous croyons
                        à la transparence et à l'accessibilité pour permettre à
                        chacun de passer de l’idée à l’orbite.
                    </p>
                </article>
            </section>
        </main>
    );
}

function Contact() {
    return (
        <main>
            <section className="mainSection">
                <h1>Contact Us</h1>
            </section>
            <section>
                <article>
                    <p>
                        Whether you're exploring CubeSat options, need technical
                        advice, or just want to start a conversation, our team
                        will get back to you as quickly as possible. Fill out
                        the form below and we’ll guide you from idea to orbit.
                    </p>
                </article>
            </section>
            <form action="">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email adress here"
                    id="emailInput"
                />
                <label htmlFor="object">Object</label>
                <textarea
                    name="object"
                    id="object"
                    placeholder="Enter your message here"
                ></textarea>
                <ul>
                    <li>
                        <input type="checkbox" name="natureRequest" />
                        <label htmlFor="natureRequest">
                            I confirm that I understand the nature of my request
                            and have a clear idea of what I want to achieve.
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label htmlFor="agreeTerms">
                            I agree to the <strong>Terms</strong> of Use and{" "}
                            <strong>Privacy Policy</strong> regarding the
                            handling of my personal data.
                        </label>
                    </li>
                </ul>
                <button id="done">Done</button>
            </form>
            <section id="contactInfo">
                <ul>
                    <li>
                        <strong>Email:</strong> contact@tdscompany.com
                    </li>
                    <li>
                        <strong>Phone:</strong> +1 555 321 9876
                    </li>
                    <li>
                        <strong>Office:</strong> 1247 SpaceTech Avenue, Suite
                        300, Los Angeles, CA 90012
                    </li>
                </ul>
            </section>
        </main>
    );
}

function About() {
    return (
        <main>
            <section className="mainSection">
                <h1>About</h1>
            </section>
            <section>
                <div id="divAbout">
                    <h2>this is About page </h2>
                </div>
            </section>
        </main>
    );
}

function Services() {
    return (
        <main>
            <section className="mainSection">
                <h1>Services</h1>
            </section>
            <section id="services">
                <h2>Terms of Use</h2>
                <p>Last updated: 25 June 2025</p>
                <p>
                    Welcome to the website of <strong>TDS company</strong>. By
                    accessing and using this site, you agree to the following
                    terms and conditions:
                </p>

                <h3>1. Use of Website</h3>
                <p>
                    This website is intended to present our products, services,
                    and contact information. You may browse the site freely, but
                    any attempt to disrupt, modify, or misuse the content is
                    strictly prohibited.
                </p>

                <h3>2. Intellectual Property</h3>
                <p>
                    All content (text, images, designs, logos) is the
                    intellectual property of <strong>TDS company</strong> unless
                    stated otherwise. You may not copy, reproduce, or distribute
                    any content without written permission.
                </p>

                <h3>3. Accuracy of Information</h3>
                <p>
                    While we strive to keep information up-to-date, we do not
                    guarantee that all product descriptions, availability, or
                    technical details are always accurate. Please contact us for
                    confirmation before relying on the information provided.
                </p>

                <h3>4. External Links</h3>
                <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for their content or privacy practices.
                </p>

                <h3>5. Modifications</h3>
                <p>
                    We reserve the right to change or update these Terms at any
                    time. Any updates will be posted on this page with the date
                    of revision.
                </p>

                <h2>Privacy Policy</h2>
                <p>
                    <strong>TDS company</strong> is committed to protecting your
                    privacy. This policy explains how we collect, use, and store
                    your personal data.
                </p>

                <h3>1. Data We Collect</h3>
                <p>
                    We may collect the following information through our contact
                    form:
                </p>
                <ul>
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Company or organization</li>
                    <li>Project details</li>
                    <li>Any files or attachments you upload</li>
                </ul>
                <p>
                    We also collect non-identifiable data such as browser type
                    and page views for analytics.
                </p>

                <h3>2. How We Use Your Data</h3>
                <p>We use your information to:</p>
                <ul>
                    <li>Respond to your inquiries</li>
                    <li>Understand your project needs</li>
                    <li>Improve our services and website</li>
                    <li>Send updates if you opt-in to our newsletter</li>
                </ul>
                <p>We never sell or rent your data.</p>

                <h3>3. Legal Basis (GDPR Compliance)</h3>
                <p>
                    If you are located in the EU, we process your data based on
                    your consent (<strong>Article 6.1.a</strong>) and/or
                    legitimate interest (<strong>Article 6.1.f</strong>).
                </p>

                <h3>4. Data Storage and Retention</h3>
                <p>
                    Your data is stored securely and retained only as long as
                    necessary for the purpose of your request, or as required by
                    law.
                </p>

                <h3>5. Your Rights</h3>
                <p>You may:</p>
                <ul>
                    <li>Request access to your data</li>
                    <li>Ask for corrections or deletion</li>
                    <li>Withdraw consent at any time</li>
                </ul>
                <p>
                    📧 Contact us at:{" "}
                    <a href="mailto:privacy@tdscompany.com">
                        privacy@tdscompany.com
                    </a>
                </p>

                <h3>6. Cookies</h3>
                <p>
                    We use basic cookies to improve your browsing experience and
                    understand how visitors interact with our site. You can
                    manage cookie preferences via your browser settings.
                </p>
            </section>
        </main>
    );
}

function NotFound() {
    return (
        <main>
            <section className="mainSection">
                <h1>404 not found</h1>
            </section>
        </main>
    );
}

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <h2>The Deafiaa Space</h2>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
            </ul>
        </nav>
    );
}

function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <h3>
                        <strong>TDS</strong> Company
                    </h3>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Legal Notice / Terms & conditions</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Information</h3>
                    <ul>
                        <li>Email: contact@tdscompany.com</li>
                        <li>Phone: +1 555 321 9876</li>
                        <li>Adress: 299 Spacetech street, suite 300</li>
                        <li>Los Angeles, CA 90291</li>
                        <li>United States</li>
                    </ul>
                </div>
                <div>
                    <h3>Follow us on</h3>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
            </section>
            <h4>The Deafiaa Space Comagny All Right Reserved</h4>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={`/`} element={<HomePage />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/contact`} element={<Contact />} />
                <Route path={`/services`} element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}
