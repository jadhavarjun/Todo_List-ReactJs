import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import react,{Component} from 'react';
class App extends Component{
  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg">
            <h1 className="text-center">
              Todays Paln's
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
