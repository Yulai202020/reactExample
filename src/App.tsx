import React, { Component } from 'react';

type FormState = {
  inputText: string,
  textareaText: string,
  agePersion: string,
  showData: {
    name: string,
    text: string,
    age: string,
  }
}

const styles: React.CSSProperties = { display: 'block', marginBottom: '10px' };

class Form extends Component<{}, FormState> {
  
  state = {
    inputText: '',
    textareaText: '',
    agePersion: '18',
    showData: {
      name: '',
      text: '',
      age: '18',
    }
  }

  private rootRef = React.createRef<HTMLSelectElement>();

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value: inputText } } = e;
    this.setState({ inputText });
  };

  handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target: { value: textareaText } } = e;
    this.setState({ textareaText });
  };

  handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value: agePersion } } = e;
    this.setState({ agePersion });
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { inputText, textareaText, agePersion } = this.state;

    this.setState({
      inputText: '',
      textareaText: '',
      agePersion: '18',
      showData: {
        name: inputText,
        text: textareaText,
        age: agePersion
      }
    })
  };

  render() {
    const { inputText, textareaText, agePersion, showData } = this.state;
    const { name, text, age } = showData;

    return (
      <>
      <form>
        <label style={styles}>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input value={inputText} onChange={this.handleInputChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required></input>
        </label>

        <label style={styles}>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text:</label>
          <textarea value={textareaText} onChange={this.handleTextareaChange} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
        </label>

        <div className="relative">
          <input value={agePersion} onChange={this.handleAgeChange} type="number" id="quantity" name="quantity" min={18} max={65} />
        </div>

        <button onClick={this.handleShow}>Show Data</button>
      </form>
      <h2>{name}</h2>
      <h3>{text}</h3>
      <h3>{age}</h3>
      </>
    );
  }
}

const App:React.FC = () => <Form />;

export default App;
