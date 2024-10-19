

import { ScheduledEvent } from "@/infrastructure/ServiceAPI";
import "./ResultsSection.style.scss";

interface ResultsSectionProps {
  scheduledEvents: ScheduledEvent[];
  addEvent: (event: ScheduledEvent) => void;
}

function ResultsSection({ scheduledEvents, addEvent }: ResultsSectionProps) {
  return (
    <div className="ResultsSection no-dark-mode">
      <div className="ResultsSection__topbar no-dark-mode">
        <div className="ResultsSection__topbar__item ResultsSection__add"></div>
        <div className="ResultsSection__topbar__item ResultsSection__crn">CRN</div>
        <div className="ResultsSection__topbar__item ResultsSection__subject">Subject</div>
        <div className="ResultsSection__topbar__item ResultsSection__section">Section</div>
        <div className="ResultsSection__topbar__item ResultsSection__title">Title</div>
        <div className="ResultsSection__topbar__item ResultsSection__credit">Credits</div>
        <div className="ResultsSection__topbar__item ResultsSection__type">Schedule</div>
        <div className="ResultsSection__topbar__item ResultsSection__instructor">Instructor</div>
      </div>
      <div className="ResultsSection__results">
        {scheduledEvents.map((event, index) => (
          <div
            key={index}
            className={`ResultsSection__result ${
              index % 2 === 0 ? "ResultsSection__result--gray" : "ResultsSection__result--light-gray"
            }`}
          >
            <div className="ResultsSection__result__topbar">
              <div className="ResultsSection__add">
                <button onClick={() => addEvent(event)} aria-label={`Add ${event.course.shortTitle}`}>
                  Add
                </button>
              </div>
              <div className="ResultsSection__crn no-dark-mode">
                <a  className="no-dark-mode" href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.crn}
                </a>
              </div>
              <div className="ResultsSection__subject no-dark-mode">
                <a className="no-dark-mode" href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.subjectCode} {event.course.courseCode}
                </a>
              </div>
              <div className="ResultsSection__section no-dark-mode">{event.section}</div>
              <div className="ResultsSection__title no-dark-mode">
                <a className="no-dark-mode" href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.course.shortTitle}
                </a>
              </div>
              <div className="ResultsSection__credit no-dark-mode">{event.credit}</div>
              <div className="ResultsSection__type no-dark-mode">{event.type}</div>
              <div className="ResultsSection__instructor no-dark-mode">{event.instructor}</div>
            </div>
            <div className="ResultsSection__result__content no-dark-mode">
              <div>
                <strong>Days:</strong> {event.days}, <strong>Time:</strong> {event.startTime} - {event.endTime}
              </div>
              <div>
                <strong>Section Information:</strong> {event.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsSection;
