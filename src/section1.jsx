
import React from "react";
import "./index.css";
function Section1() {
    return (
        <>
            <div className="notice-board">
                <p>Notice :</p>
                <marquee direction="left">
                    <ul>
                        <li>welcome to kk wagh institute of Engineering and research,Nashik</li>
                        <li>Addmission open for first year B.tech</li>
                    </ul>
                </marquee>
            </div>
            <section className="section1">
                <div className="welcometext">
                    <h1>WELCOME</h1>
                    <h1>TO</h1>
                    <h1 >K.K. Wagh College Of Engineering & Research, Nashik</h1>
                </div>
            </section >
        </>
    )
}
function Section2() {
    return (
        <>
            <section className="section_2">
                <h1>OUR RECRUITERS</h1>
                <div className="recruiters">
                    <img src="Images/datamatics_logo.jpeg" alt="" />
                    <img src="Images/infosys_logo.jpeg" alt="" />
                    <img src="Images/tcs_logo.jpeg" alt="" />
                    <img src="Images/wipro_logo.jpeg" alt="" />
                    <img src="Images/narola_logo.jpeg" alt="" />
                    <img src="Images/datamatics_logo.jpeg" alt="" />
                    <img src="Images/infosys_logo.jpeg" alt="" />
                    <img src="Images/tcs_logo.jpeg" alt="" />
                    <img src="Images/wipro_logo.jpeg" alt="" />
                    <img src="Images/narola_logo.jpeg" alt="" />
                </div>
            </section>
        </>
    )
}

function Section3() {
    return (
        <>
            <section className="section_3">
               <h1>ABOUT K.K WAGH INSTITUTE</h1>

                <p className="about">The institute was established in the year 1984 at Bhausahebnagar Tal. Niphad, Dist. Nashik and shifted to Nashik City in September 1986.
                     A land of 8.2 hectares was generously donated by Shri. Kakusheth Udesi of Hirabai Haridas Chariteble Trust, Mumbai. 
                     The Society started building infrastructure at this campus (known as Hirabai Haridas Vidya Nagari) in the year 1987.
                      As on date it is fully developed and provides accommodation for College building, office, classrooms, drawing halls, laboratories, workshops etc. Building with built up area of 32,199 Sq.m. is one of the largest buildings in the City.
                       All laboratories, classrooms etc are designed as per the needs of the students. The institution has a good collection of reference books and textbooks, periodicals and journals.</p>
    
                    <div className="text">
                        <div className="vision-mission">
                        <h2>VISION</h2>
                          <p>1.To be a valuable resource for industry and society through quality education and research in engineering and management</p>
                           <h2>MISSION</h2>
                         <p><ol>
                            <li>Impart quality education by nurturing a conducive learning environment through continuous improvement.</li>
                            <li>Promote socially relevant research and development (R&D) in collaboration with industry and research institutes.</li>
                            <li>Facilitate R&D based innovation to meet emerging needs of society.</li>
                            </ol></p>
                        </div>
                    <img alt="img" src="images\naac_logo.jpeg"></img>
                    </div>
        
            </section>
        </>
    )
}
function Footer()
{
    return(
         <div className="footer">
             <h3>Design By : Chetan Patil</h3>
             <h4>Email : chetanpatil@gmail.com</h4>
         </div>
    )
}

export { Section1, Section2,Section3 ,Footer};