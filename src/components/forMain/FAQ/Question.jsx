import '../../../App.css';

function Question(props) {
  return (
    <div>
      <div class="AccordionStyles__AccordionStyle-sc-11dasyk-0 jLmTCe boxOfFAQ">
        <div
          type="button"
          role="button"
          id="react-collapsed-toggle-undefined"
          aria-controls="react-collapsed-panel-undefined"
          aria-expanded="true"
          tabindex="0"
          class="AccordionStyles__AccordionSummaryStyle-sc-11dasyk-1 hQnZHr boxOfFAQ_titleBox">
          <div class="AccordionStyles__AccordionTitleStyle-sc-11dasyk-2 ARXxN boxOfFAQ_title">
            {props.title}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="AccordionStyles__AccordionArrowStyle-sc-11dasyk-3 caoPyP">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.707 9.293a1 1 0 00-1.414 0L12 12.586 8.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
            />
          </svg>
        </div>
        <div
          id="react-collapsed-panel-undefined"
          aria-hidden="false"
          style={{ boxSizing: 'border-box' }}>
          <div class="AccordionStyles__AccordionContentStyle-sc-11dasyk-4 iRgpCW boxOfFAQ_textBox">
            <div class="sc-5a67ebfb-0 iFRSXJ boxOfFAQ_text">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
