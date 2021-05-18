import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import react,{Component} from 'react';
import Plan from './Plain';
class App extends Component{
  state={
    items:[],
    text:""
  }

  handleChange=(e)=>{
    this.setState({text: e.target.value})
  }

  handleSubmit=(e)=>{
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text]
      this.setState({items: items, text:""});
    } else {
      
    }
  }

  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">
              Todays Paln's
            </h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control"
                placeholder="Write Plan here" value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleSubmit}>ADD</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i)=>{
                      return <Plan value={value}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
