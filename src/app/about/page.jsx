import Image from "next/image"
import styles from "./about.module.css"
export default function AboutUs() {
return (
<>
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1>About Us</h1>
            <p>
                Welcome to [Company Name], where passion meets innovation. Established with a vision to redefine
                excellence, we are a dynamic team dedicated to delivering exceptional solutions and services.
            </p>
            <h4>Our Mission</h4>
            <p>
                At [Company Name], our mission is to empower individuals and businesses through cutting-edge technology
                and unparalleled customer service. We strive to create impactful solutions that drive success and foster
                lasting relationships with our clients.
            </p>
            <h4>Our Team</h4>
            <p>
                Our diverse team of experts brings together a wealth of experience and expertise from various
                backgrounds. From visionary developers to customer-oriented support staff, every member of our team
                plays a crucial role in our success story.
            </p>
                <Image src="/aboutus.jpeg" width="600" height={430} className={styles.responsive} />
            <h4>Get in Touch</h4>
            <p>
                We are always excited to connect with new partners, clients, and collaborators. If you share our vision
                and values or want to explore how we can work together, reach out to us today!
            </p>
        </div>
    </div>
</>
)
}