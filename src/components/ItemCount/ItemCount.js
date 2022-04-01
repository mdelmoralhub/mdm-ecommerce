import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';

const ItemCount = ({item, onAdd}) => {
    const [counter, setCounter] = useState(0);
    const handleIncCounter = () => {
        if(counter < item.prodStock && item.prodStock > 0){
            return setCounter(counter + 1);
        }  
    };
    const handleDecCounter = () => {
        if(counter > 0) return setCounter(counter - 1);
    };
    const handleOnAdd = () => {
        console.log('ejecutando onAdd');
        onAdd(counter);
        return setCounter(0);
    }    
    return(
        <div>
            <Button onClick={handleDecCounter}>-</Button>  {counter ? counter : null}  <Button onClick={handleIncCounter}>+</Button>
            <div className="primary"><Button onClick={handleOnAdd}> Agregar al Carrito </Button></div>
            <p>Stock: {item.prodStock} unidades</p>
        </div>
    );
};

/*class ItemCount extends React.Component {
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
}*/

export default ItemCount;