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
                     <div className={styles.inputfieldsClass}>
                        <label>Name</label>
                          <input type="text" />
                          <label>Email</label>
                          <input type="text" />
                          <label>Age</label>
                          <input type="text" />
                          <label>Which option best describe you ?</label>
                          <select>
                              <option value=""></option>
                              <option value="hi">hi</option>
                              <option value="hello">hello</option>
                              <option value="why">why</option>
                              <option value="by">by</option>
          
                          </select>
                    </div>
                
                <br />
                <div className={styles.checkboxClass}>
                    <label>Would you recommed to you friend ?</label>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Yes</label>

                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>No</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Maybe</label>
                    </div>
                    <label>Language and frameworks known (check all that apply)</label>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>C</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>C++</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>C#</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Java</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Python</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Javascript</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>React</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Angular</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Django</label>
                    </div>
                    <div className={styles.eachCheckbox}>
                        <input type="checkbox" />
                        <label>Spring</label>
                    </div>

                </div>
                    <div className={styles.commentClass}>
                      <label>Any comments and suggestion</label>
                      <textarea rows="4" cols="50" name="comment" form="usrform" /> 
                    </div>
                <button type="submit">Submit</button>
            </div>
        </div>
    </div>
</>
)
}