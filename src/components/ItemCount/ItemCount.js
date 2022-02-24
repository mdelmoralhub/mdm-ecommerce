import React from 'react';
import { Button } from 'semantic-ui-react';

//Aqui se utilizaron a proposito los viejos componentes de tipo class de react en lugar de los componentes
//de tipo funcion, solo con fines orientados al aprendizaje. En caso de implementacion real, este componente
//sera correctamente refactoreado para utilizar componentes de tipo funcion.

class ItemCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          stock: props.stockInitial,
          counter: props.initial
      };
    }
    handleIncCounter = () => {
        if(this.state.counter < this.state.stock && this.state.stock > 0){
            this.setState({ counter: this.state.counter + 1 });
        }  
    };
    handleDecCounter = () => {
        if(this.state.counter > 0) this.setState({ counter: this.state.counter - 1 });
    };
    onAdd = () => {
        if(this.state.counter > 0) {
            this.setState({ stock: this.state.stock - this.state.counter });
            alert(`Se han agregado ${this.state.counter} productos al carrito`);
            this.setState({ counter: 0 });
        }
    }
    render() {
        return(
            <div>
                <Button onClick={this.handleDecCounter}>-</Button>  {this.state.counter}  <Button primary onClick={this.handleIncCounter}>+</Button>
                <div className="primary"><Button onClick={this.onAdd}> Agregar al Carrito </Button></div>
                <p>Stock: {this.state.stock} unidades</p>
            </div>
        );
    }
}

export default ItemCount;