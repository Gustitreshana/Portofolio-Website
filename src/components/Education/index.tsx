import Card from "../Card";

const Education = () => {
  return (
    <div id="education" className="flex flex-col gap-20 h-screen">
        <div className="flex justify-center items-center pt-20">
            <h2 className="text-6xl font-bold">My <span className="text-emerald-600">Education</span></h2>
        </div>
      <div className="flex flex-col gap-4 w-[50%] mx-auto">
        <Card
          title="University of LIA Jakarta - English Linguistics"
          description="I am studying the principles of English language structure, gaining knowledge in phonetics and phonology, and engaging in
        projects to enhance communication and analytical skills while analyzing dialects and regional variations.
          "
          date="Oct, 2023 – Present"
        />
        <Card
          title="RevoU - Full-Stack Software Engineering"
          description="I have been learning front-end and back-end development fundamentals, web application architecture and design, database
        management, API development, version control and collaboration tools.
        "
          date="Oct, 2023 – Mar, 2024"
        />
        <Card
          title="Aero Flyer Institute - Fixed Wing Pilot"
          description="I underwent comprehensive training in flight operations and aircraft handling. I studied aviation theory, including meteorology,
        navigation, and aerodynamics. I conducted solo and supervised flight hours to build practical flying experience and learned
        about aviation safety protocols and emergency procedures.
        "
          date="Sep, 2016 – Jan, 2019"
        />
      </div>
    </div>
  );
};

export default Education;
