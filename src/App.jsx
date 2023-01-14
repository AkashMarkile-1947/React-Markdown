import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => (
  <div id="editor-container">
  <textarea value={content} onChange={handleTextareaChange} id="editor" />
 </div>
);

const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
);

const App = () => {
  const [content, setContent] = useState(defaultContent)
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div className="container">
      <div id="header">
      <h1 className="title-heading">Markdown 
       <span>&darr;</span> Editor</h1>
      </div>
    <div id="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
    </div>
  )
}
const defaultContent = `
# Hi there,
# My name is Akash! (aka Joy)
## A student and Front End Developer

For me, programmers / Developers are just 
> ##  **_"The Machines which converts coffee into code"_**

### **Ex:**

\`\`\`

//just another day :)
  function determineAction() {
      if (coffee) {
        return "Code🧑‍💻";
      } else {
        return "Sleep💤";
      }
    }

\`\`\`


![holy macbook](https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

**Socials**
[twitter](https://twitter.com/AkashMarkile)
[linkedin](https://www.linkedin.com/in/akash-markile-a9bba4236/)

- item 1
- item 2
\`<span><span>\`
`;


export default App
