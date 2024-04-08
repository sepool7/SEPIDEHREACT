const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/man_r.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
          As a Blockchain and Full Stack Developer based in Italy, I bring four years of specialized experience in private and public blockchain technologies, Web3, and the development of innovative Dapps, including DeFi, Play-to-Earn, and RWA solutions. My expertise extends to crafting dynamic websites and Web2 applications, showcasing a robust blend of technical skills and creative vision. Leveraging a deep understanding of blockchain infrastructure and smart contract development, I excel in creating secure, scalable digital solutions that drive technological advancement.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 29
              </li>
              <li>
                <strong>Residence:</strong> Italy
              </li>
              <li>
                <strong>Address:</strong> Torino
              </li>
              <li>
                <strong>E-mail:</strong> ShahrdadNadafi1995@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
          <a href="./cv.pdf" className="btn hover-animated" download>
            <span className="circle"></span>
            <span className="lnk">Download CV</span>
          </a>
        </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
