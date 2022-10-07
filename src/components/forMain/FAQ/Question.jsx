import { useState } from 'react';
import '../../../App.css';

function Question(props) {
  const [stateOfQuestion, setStateOfQuestion] = useState(false);
  const [stateOfTransition, setStateOfTransition] = useState(false);

  const style2 = {
    boxSizing: 'bordeer-box',
    height: '102px',
    overflow: 'hidden',
    display: 'block',
    willChange: 'height',
    transition: 'height 301ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
  };

  const style1 = {
    boxSizing: 'bordeer-box',
    height: '0px',
    overflow: 'hidden',
    display: 'none',
    willChange: 'height',
    transition: 'height 301ms cubic-bezier(0.4, 0, 0.2, 1) 0s',
  };

  const style3 = {
    boxSizing: 'bordeer-box',
  };
  const openOrClose = () => {
    setStateOfQuestion(!stateOfQuestion);
    setStateOfTransition(!stateOfTransition);
  };

  const changeStateOfTransition = () => {
    setStateOfTransition(!stateOfTransition);
  };

  return (
    <div>
      <div class="AccordionStyles__AccordionStyle-sc-11dasyk-0 jLmTCe boxOfFAQ noselect">
        <div
          type="button"
          role="button"
          id="react-collapsed-toggle-undefined"
          aria-controls="react-collapsed-panel-undefined"
          aria-expanded={stateOfQuestion}
          tabindex="0"
          onClick={openOrClose}
          class="AccordionStyles__AccordionSummaryStyle-sc-11dasyk-1 hQnZHr boxOfFAQ_titleBox">
          <div class="AccordionStyles__AccordionTitleStyle-sc-11dasyk-2 ARXxN boxOfFAQ_title">
            {props.title}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class={`AccordionStyles__AccordionArrowStyle-sc-11dasyk-3 ${
              stateOfQuestion == false ? 'lcebZe' : 'caoPyP'
            }`}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.707 9.293a1 1 0 00-1.414 0L12 12.586 8.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
            />
          </svg>
        </div>
        {stateOfQuestion && (
          <div
            id="react-collapsed-panel-undefined"
            aria-hidden={stateOfQuestion}
            style={stateOfQuestion ? style2 && style3 : style2 && style1}
            className={`boxOfFAQ_transitionTextBox`}>
            <div class="AccordionStyles__AccordionContentStyle-sc-11dasyk-4 iRgpCW boxOfFAQ_textBox">
              <div class="sc-5a67ebfb-0 iFRSXJ boxOfFAQ_text">{props.text}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
