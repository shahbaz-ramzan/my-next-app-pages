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
                      <br />
                      <label>Would you recommed to you friend ?</label>
                      <input type="checkbox" />
                      <label>Yes</label>
                      <input type="checkbox" />
                      <label>No</label>
                      <input type="checkbox" />
                      <label>Maybe</label>
                      <label>Language and frameworks known (check all that apply)</label>
                      <input type="checkbox" />
                      <label>C</label>
                      <input type="checkbox" />
                      <label>C++</label>
                      <input type="checkbox" />
                      <label>C#</label>
                      <input type="checkbox" />
                      <label>Java</label>
                      <input type="checkbox" />
                      <label>Python</label>
                      <input type="checkbox" />
                      <label>Javascript</label>
                      <input type="checkbox" />
                      <label>React</label>
                      <input type="checkbox" />
                      <label>Angular</label>
                      <input type="checkbox" />
                      <label>Django</label>
                      <input type="checkbox" />
                      <label>Spring</label>
                      <label>Any comments and suggestion</label>
                      <textarea rows="4" cols="50" name="comment" form="usrform" />
                      <button type="submit">Submit</button>
                  </div>
              </div>
          </div>
      </>
    )
}
