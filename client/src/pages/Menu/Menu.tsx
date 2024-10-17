import { Central as Layout } from "@/layouts";
import { CabinetSection } from "./CabinetSection";
import "./Menu.style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout title={"Main Menu"}>
      <br />
      <motion.div
        className="card-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Personal Information Section */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CabinetSection
            title="Personal Information"
            lineItems={[
              <Link to="/404" key="self-id-survey">
                <b>Self Identification Survey</b>
              </Link>,
              <Link to="/404" key="update-addresses">
                Update addresses and phone numbers
              </Link>,
              <Link to="/404" key="view-name-change">
                View name change information
              </Link>,
              <Link to="/404" key="emergency-contact">
                Personal Emergency Contact Information
              </Link>,
              <span key="campus-card">
                <b>Campus Card:</b> The CampusCard online services can now be
                accessed through the{" "}
                <a href="https://wcc.carleton.ca/student/welcome.php">
                  CampusCard Web Center
                </a>
              </span>,
              <Link to="/404" key="account-info">
                MyCarletonOne Account information and Carleton Email address
              </Link>,
              <Link to="/404" key="travel-registry">
                Travel Registry
              </Link>,
              <Link to="/404" key="manage-email">
                Manage Email Communications
              </Link>,
              <Link to="/404" key="chosen-name">
                Chosen Name
              </Link>,
              <Link to="/404" key="pronouns">
                Pronouns
              </Link>,
              <Link to="/404" key="sin-submit">
                Submit Social Insurance Number (SIN)
              </Link>,
            ]}
          />
        </motion.div>

        {/* Student Records Section */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CabinetSection
            title="Student Records"
            lineItems={[
              <span key="grad-admissions">
                <b>Graduate Admissions:</b> Graduate Admissions and Graduate
                In-Program Revisions.
              </span>,
              <Link to="/404" key="admissions">
                <b>Admissions</b> Review admission application, View Holds and
                Conditions of Offer, Internal Application for Admission
              </Link>,
              <Link to="/404" key="grades">
                <b>myGrades</b> Display grades
              </Link>,
              <Link to="/404" key="progress">
                <b>myProgress (ACE: Academic Continuation Evaluation)</b>
              </Link>,
              <Link to="/404" key="exam-schedule">
                <b>myExam Schedule</b>
              </Link>,
              <Link to="/404" key="transfer-credit">
                <b>myTransferCredit (credit from previous studies)</b>
              </Link>,
            ]}
          />
        </motion.div>

        {/* Registration Section */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CabinetSection
            title="Registration"
            lineItems={[
              <span key="registration">
                <b>Registration: </b>
                <Link to="/404">Getting Started</Link>,{" "}
                <Link to="/timetables/build">Build Your Timetable/Registration</Link>,
                <Link to="/timetables">Student Timetables</Link>,
                <Link to="/404">Display Holds</Link>,
                <Link to="/404">Registration Override Requests</Link>
              </span>,
              <span key="other">
                Other: <Link to="/404">Add/Drop Classes</Link>,{" "}
                <Link to="/404">French Placement Test</Link>,{" "}
                <Link to="/404">Purchase Books</Link>
              </span>,
              <span key="student-accounts">
                <Link to="/404">
                  <b>Student Accounts: </b>
                </Link>
                <Link to="/404">Calculate Amount To Pay</Link>,{" "}
                <Link to="/404">International Currency Payment</Link>,{" "}
                <Link to="/404">Refund Request</Link>,{" "}
                <Link to="/404">Print tax receipts (T2202, RL-8)</Link>
              </span>,
            ]}
          />
        </motion.div>

        {/* Academic Progress Section */}
        <motion.div
          className="card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CabinetSection
            title="Academic Progress"
            lineItems={[
              <span key="my-audit">
                <b>myAudit:</b> View academic audit.
              </span>,
              <Link to="/404" key="my-progress">
                <b>myProgress:</b> ACE (Academic Continuation Evaluation).
              </Link>,
            ]}
          />
        </motion.div>
      </motion.div>
    </Layout>
  );
}

export default Menu;
