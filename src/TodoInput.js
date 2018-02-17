import React, { Component } from "react"
class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCar: ""
        }
        this.addClicked = this.addClicked.bind(this)
    }

    addClicked() {
        let { onAddCar } = this.props
        onAddCar(this.state.newCar)
        this.setState({
            newCar: ""
        })
    }
    render() {
        let { newCar } = this.state
        return (
            <div>


                <div class="row">
                
                    <div class="col-sm-4">
                        <input class="form-control" placeholder="กรอกข้อมูลรถ" value={newCar} onChange={(e) => this.setState({ newCar: e.target.value })} />
                    </div>
                    <div class="col-sm-4">
                        <button class="btn btn-outline-primary" onClick={this.addClicked}> เพิ่ม</button>
                    </div>
                </div>
                {
                    //this.state.newCar
                }
            </div>

        )
    }
}
export default TodoInput