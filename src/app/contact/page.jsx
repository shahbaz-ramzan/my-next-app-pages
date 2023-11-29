import Image from "next/image"
import styles from "./contact.module.css"
export default function ContactUs() {
return (
<>
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <di className={styles.parentDiv}>
                <div className={styles.childDiv}>
                    <Image src="/phone-call.svg" width="50" height="50" />
                    <h4>BY PHONE</h4>
                    <p>
                        <strong>(Monday to Friday, 9am to 4am PST)</strong>
                        <br></br>
                        <span> North America Toll-Free:</span>
                        <br></br>
                        <span>1-877-930-7483</span>
                        <br></br>
                        <span>International:</span>
                        <br></br>
                        <span>1-604-637-0780</span>
                    </p>
                </div>
                <div className={styles.childDiv}>
                    <Image src="/newfolder.svg" width="50" height="50" />
                    <h4>START A NEW CASE</h4>
                    <p>
                        Just send us your questions or concerns by starting a new case and we will give you the help you
                        need.
                    </p>
                    <button>START HERE</button>
                </div>
                <div className={styles.childDiv}>
                    <Image src="/chat.svg" width="50" height="50" />
                    <h4>LIVE CHAT</h4>
                    <p>
                        Chat with a member of our in-house team.
                    </p>
                    <button>START CHAT</button>
                </div>
            </di>
        </div>
    </div>
</>
)
}