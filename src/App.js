import {Styles} from './style';
import logo from './logo.svg';

function SharingStyleComponents() {
  return (
    <div style={Styles.Body}>
      <div style={Styles.Body1}>
        <div style={Styles.Title}>
          <h3>Sharing Components</h3>
        </div>
        <div style={Styles.Container}>
          <div style={Styles.LoginTitle}>
            <h3>Login Form</h3>
          </div>
          <div>
            <div style={Styles.BodyContainer}>
              <form>
                  <input style={Styles.Input} type="email" placeholder="Email Address" />
                  <input style={Styles.Input} type="password" placeholder="Password" />
                  <button style={Styles.Button}>LOGIN</button>
              </form>
              <div style={Styles.Half}>
                <div style={Styles.Horizontal}>
                  <hr></hr>
                </div>
                <div>
                  <p style={Styles.Opacity}>OR</p>
                </div>
                <div style={Styles.Horizontal}>
                  <hr></hr>
                </div>
              </div>
              <div style={Styles.LogoArrangement}>
                <a href="#"><img style={Styles.Logo} src={logo}></img></a>
               
              </div>
              <div style={Styles.Footer}>
                <p>No Account? <a href = "#">Create Account Here!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SharingStyleComponents;


