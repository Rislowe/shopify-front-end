import React from 'react';
import './App.css';

function App() {

  const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };

   //Test function that would allow me to post to the openAI API
   //Status: Failed. Fetch will fail due to Network Error. Checked Google, nothing came up.
  let submitPrompt = ()=>
  {
    let holder = fetch("https://cors-anywhere.herokuapp.com/https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAPI_SECRET}`,
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(data =>console.log(data))
      .catch(error => console.error(error));

      console.log(holder);
    
  }

  return (
    <div id='app'>
      <div id="flex-container">

        <header><h1>Fun with AI</h1></header>
        <form itemID="promptForm" method="get">
            <label htmlFor="promptArea">Enter prompt</label>
            <br/>
            <textarea itemID="promptArea" name="promptArea" rows="5" cols="50"></textarea>
            <br/>
            <button id="submitButton" onClick={()=> submitPrompt()}>Submit</button>
        </form>

        <div className='responses'>
            <h2>Responses</h2>
            <p>{process.env.REACT_APP_OPENAPI_SECRET}</p>
            <div className="responseResults">
                <ul itemID="responseList">
                    
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
