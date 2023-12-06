import EducationDetails from "./components/EducationDetails";
import Header from "./components/Header";
import ProfileDetails from "./components/ProfileDetails";
import Projects from "./components/Projects";
import SectionHeader from "./components/SectionHeader";
import TechnicalAndSoftSkills from "./components/TechnicalSkills";

function App() {
  const techSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Redux-Saga",
    "React-Router",
    "Ant Design",
    "Tailwindcss",
    "Data Structure and Algorithms",
    "Python",
    "Flask",
    "Java",
    "Core",
    "Java",
    "MySQL",
    "JDBC",
    "Hibernate",
    "API",
    "Spring",
    "Boot",
    "Flutter",
    "GitHub",
  ];
  const softSkills = [
    "Quick Lerner",
    "Problem Solving",
    "Eager to learn new skills",
    "Communication skills",
    "Time management",
    "Teamwork and Collaboration",
  ];

  return (
    <div className="border-2 m-0 p-7 box-border border-blue-900 w-10/12 mx-auto text-sky-950">
      <Header></Header>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/561/561845.png"}
        sectionName={"Profile"}
      ></SectionHeader>
      <ProfileDetails></ProfileDetails>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/114/114806.png"}
        sectionName={"Education"}
      ></SectionHeader>
      <EducationDetails
        title={"Bachelor of Engineering"}
        desc={"Marathwada Mitra Mandal Institute of Technology, Pune"}
        date={"07/2017 – 07/2021 | Pune"}
      ></EducationDetails>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/114/114806.png"}
        sectionName={"Certification"}
      ></SectionHeader>
      <EducationDetails
        title={"Full Stack Web Development"}
        desc={"PW Skills"}
        date={"11/2023 – present | Pune"}
        duration={"Duration: 9 Months"}
      ></EducationDetails>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/3078/3078951.png"}
        sectionName={"Technical Skills"}
      ></SectionHeader>
      <TechnicalAndSoftSkills skillss={techSkills}></TechnicalAndSoftSkills>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/896/896875.png"}
        sectionName={"Soft Skills"}
      ></SectionHeader>
      <TechnicalAndSoftSkills skillss={softSkills}></TechnicalAndSoftSkills>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/3502/3502880.png"}
        sectionName={"Organizations"}
      ></SectionHeader>
      <EducationDetails
        title={"Metamind System Private Limited"}
        desc={"Software Developer"}
        date={"02/2023 – present | Pune"}
      ></EducationDetails>
      <SectionHeader
        image={"https://cdn-icons-png.flaticon.com/128/2915/2915423.png"}
        sectionName={"Projects"}
      ></SectionHeader>
      <Projects
        title={"File Management System"}
        duration="07/2023 - Present"
        place={"Metamind System Private Limited"}
        description={
          "Led the end-to-end development of a comprehensive File Management System using React JS,focused on streamlining and digitizing map data. Solely responsible for the project, demonstrating strong individual initiative and technical expertise"
        }
        responsibilities={[
          "Developed and maintained a React JS frontend for a file management system used to digitize maps independently",
          "Implemented features to allow super admins to upload files, assign them to agencies, and then to employees",
          "Developed functionality for users to work on files and send them for digitization",
          "Added support for PDF creation, Excel file generation, and barcode reading",
        ]}
        accomplishments={[
          "Successfully delivered a complex and user-friendly file management system that has helped to improve the efficiency of the digitization process",
          "mplemented accessibility features following best practices, ensuring an inclusive user experience for individuals with disabilities",
          "Successfully worked independently on all aspects of the project, from design to implementation",
          "Successfully met all deadlines and requirements.",
        ]}
        techStack={[
          "ReactJs",
          "React Router",
          "Redux",
          "Redux Saga",
          "AntDesign",
          "SCSS",
          "JavaScript",
          "GitHub",
          "NPM",
        ]}
      ></Projects>
    </div>
  );
}

export default App;
