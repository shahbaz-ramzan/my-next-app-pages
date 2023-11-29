import styles from "./survey.module.css"
export default function SurveyApp() {
  return (
      <>
          <div className={styles.wrapper}>
              <div className={styles.container}>
                  <div className={styles.header}>
                      <h1>Survey App</h1>
                  </div>
                  <div className={styles.formClass}>
                      <label >Name</label>
                      <input type="text" />
                      <label>Email</label>
                      <input type="text" />
                      <label>Age</label>
                      <input type="text" />
                      <label>Which option best describe you ?</label>
                      <select  >
                          <option value=""></option>
                          <option value="hi">hi</option>
                          <option value="hello">hello</option>
                          <option value="why">why</option>
                          <option value="by">by</option>

                      </select>
                  </div>
              </div>
          </div>
      </>
    )
}
