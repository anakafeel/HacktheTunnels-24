import { Central as Layout } from "@/layouts";
import { Section } from "./Section";
import { SearchSection } from "./SearchSection";
import { ResultsSection } from "./ResultsSection";
import { TimetableSection } from "./TimetableSection";
import { useState } from "react";
import { ServiceAPI } from "@/infrastructure";
import { ScheduledEvent } from "@/infrastructure/ServiceAPI";
/* import { WorksheetSection } from "./WorksheetSection"; */
import { useAccountContext } from "@/context";
import { useNavigate } from "react-router-dom";
import { scheduledEventToCalendarBlock } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "./BuildTimetable.style.scss";

function BuildTimetable() {
  const { jwt } = useAccountContext();
  const [scheduledEvents, setScheduledEvents] = useState<ScheduledEvent[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<ScheduledEvent[]>([]);
  const [timetableName, setTimetableName] = useState(""); 
  const navigate = useNavigate();

  const fetchScheduledEvents = async () => {
    const result = await ServiceAPI.fetchScheduledEvents();
    setScheduledEvents(result);
  };

  const createTimetable = async () => {
    const eventIds = selectedEvents
      .map((event) => event.id)
      .filter((id) => id !== null && id !== undefined);
    
    if (eventIds.length === 0) {
      console.error("No valid event IDs found.");
      return;
    }

    // Pass the timetable name to the service API
    const result = await ServiceAPI.createTimetable(
      timetableName, // Use the input name here
      eventIds.map((id) => id.toString()),
      jwt,
    );

    if (result && result.data && result.data.id) {
      navigate(`/timetables/${result.data.id}`);
    } else {
      alert("Failed to create timetable, Overlapping Timings");
    }
  };

  const handleModalSubmit = () => {
    if (!timetableName) {
      alert("Please enter a timetable name.");
      return;
    }
    
    createTimetable(); // Call the create timetable function
    setTimetableName(""); // Reset the timetable name
  };

  const addEvent = (event: ScheduledEvent) => {
    setSelectedEvents([...selectedEvents, event]);
  };

  return (
    <Layout title={"My Course Worksheet"}>
      <div className="BuildTimetable">
        <Section title="Search">
          <SearchSection onSearch={fetchScheduledEvents} />
        </Section>
        {scheduledEvents.length > 0 && (
          <Section title="Results">
            <ResultsSection
              scheduledEvents={scheduledEvents}
              addEvent={addEvent}
            />
          </Section>
        )}
        <Section title="Draft Timetable">
          <TimetableSection
            selectedEvents={selectedEvents.map((event: ScheduledEvent) =>
              scheduledEventToCalendarBlock(event),
            )}
          />
        </Section>

        {/* Dialog for timetable name input */}
        <Dialog>
          <DialogTrigger>
            <button className="btn">Create Timetable</button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enter Timetable Name</DialogTitle>
              <DialogDescription>
                Please enter a name for your timetable.
              </DialogDescription>
            </DialogHeader>
            <input
              type="text"
              placeholder="Enter your timetable name"
              value={timetableName}
              onChange={(e) => setTimetableName(e.target.value)} // Update state on change
              className="input" // Optional: Add a class for styling
            />
            <div className="dialog-footer">
              <button onClick={handleModalSubmit} className="btn">Create</button>
              <button onClick={() => setTimetableName("")} className="btn">Cancel</button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}

export default BuildTimetable;
