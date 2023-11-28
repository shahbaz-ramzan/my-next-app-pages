import styles from "./hero.module.css"
import Image from 'next/image'

export default function Hero() {
return (
<>

    <body className={styles.wrapper}>
        <header className={styles.header}>
            <h2>QUAID-E-AZAM</h2>
        </header>

        <div className={styles.content}>
            <div className={styles.textarea}>
                <p>Father of the Nation Quaid-e-Azam Muhammad Ali Jinnah’s achievement as the founder of Pakistan,
                    dominates everything else he did in his long and crowded public life spanning some 42 years. Yet, by
                    any standard, his was an eventful life, his personality multidimensional and his achievements in
                    other fields were many, if not equally great. Indeed, several were the roles he had played with
                    distinction: at one time or another, he was one of the greatest legal luminaries India had produced
                    during the first half of the century, an `ambassador of Hindu-Muslim unity, a great
                    constitutionalist, a distinguished parliamentarian, a top-notch politician, an indefatigable
                    freedom-fighter, a dynamic Muslim leader, a political strategist and, above all one of the great
                    nation-builders of modern times. What, however, makes him so remarkable is the fact that while
                    similar other leaders assumed the leadership of traditionally well-defined nations and espoused
                    their cause, or led them to freedom, he created a nation out of an inchoate and down-trodden
                    minority and established a cultural and national home for it. And all that within a decade. For over
                    three decades before the successful culmination in 1947, of the Muslim struggle for freedom in the
                    South-Asian subcontinent, Jinnah had provided political leadership to the Indian Muslims: initially
                        as one of the leaders, but later, since 1947, as the only prominent leader- the Quaid-e-Azam.
                </p>
                 <p>
                    For over thirty years, he had guided their affairs; he had given expression, coherence and direction
                    to their legitimate aspirations and cherished dreams; he had formulated these into concrete demands;
                    and, above all, he had striven all the while to get them conceded by both the ruling British and the
                    numerous Hindus the dominant segment of India’s population. And for over thirty years he had fought,
                    relentlessly and inexorably, for the inherent rights of the Muslims for an honorable existence in
                    the subcontinent. Indeed, his life story constitutes, as it were, the story of the rebirth of the
                    Muslims of the subcontinent and their spectacular rise to nationhood, phoenixlike.
                </p>
            </div>
            <div className={styles.image}>
                <Image src="/quid-e-azam.jpeg" className={styles.responsive} alt="alt-picture" width={400} height={500} />
            </div>

        </div>
        
    </body>

</>

)
}