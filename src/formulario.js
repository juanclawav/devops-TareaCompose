import React, { Component } from 'react';
import axios from 'axios';
import './autoForm.css'; // Importa el archivo CSS

class AutoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelo: '',
      anho: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { modelo, anho } = this.state;

    axios.post('http://localhost:5000/perritos', { modelo, anho})
      .then(() => alert('Auto añadido correctamente'))
      .catch(() => alert('Error añadiendo auto'));
  };

  render() {
    return (
      <div>
        <h1>Formulario de Auto</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="modelo">Modelo::</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={this.state.nombre}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="anho">Año:</label>
            <input
              type="text"
              id="anho"
              name="anho"
              value={this.state.raza}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default AutoForm;