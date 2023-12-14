import React, { useState } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";


const App = () => {
  const [textToCopy, setTextToCopy ] = useState();

  const [isCopied, setCopied] = useClipboard(textToCopy);

  const StartListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className="container">
        <h2>Speech - Text Converter</h2>
        <br />
        <p>
          " A web app which is developed in React_Js that converts speech to text and copies the text into the clipboard to be pasted into any file required. "
        </p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied !" : "Copy To Clipboard "}
          </button>
          <button onClick={StartListening}>Start Listenning</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listenning</button>
        </div>

      </div>
    </>
  );
}

export default App;