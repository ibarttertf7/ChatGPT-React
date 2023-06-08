import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";
import Image from "./components/Image";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState(0);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    setResult("")
    setLoading(true);
    const response = await openai.createCompletion(object);
    setLoading(false);
    setResult(response.data.choices[0].text);
  };

  const onBack = () => {
    setOption(0)
    setResult("")
  }

  return (
    <div className="App">
      {option !== 0 ? <div className="back-btn" onClick={onBack}>Back</div> : null}
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        !option.image ? <Translation doStuff={doStuff} setInput={setInput} result={result} /> : <Image />
      )}
      {loading 
      ? (
        <>
          <h2>Generating witty response...</h2>
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) 
      : null}
    </div>
  );
}

export default App;
