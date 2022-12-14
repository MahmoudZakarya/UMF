import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { FiPlus } from "react-icons/fi";


export default function FAQ({title,content} : {title:string, content:string}) {
  const [active, setActive] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current!.style.maxHeight = active
      ? `${contentRef.current!.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>

      <div className="FAQ">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  {title}
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p className="answer-style" dangerouslySetInnerHTML={{__html:content}}>{}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}