const Team = () => {
  return (
    <div className="section team" id="section-team">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Our Team</div>
        </div>
        {/* team items */}
        <div className="team-items">
          <div className="team-col">
            <div className="team-item content-box">
              <div className="image">
                <img src="images/team1.jpg" alt="" />
              </div>
              <div className="desc">
                <div className="name">Shahrdad Nadafi</div>
                <div className="category">Web Developer</div>
                <div className="soc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shahrdadnadafi//"
                  >
                    <span className="icon fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team-col">
            <div className="team-item content-box">
              <div className="image">
                <img src="images/team2.jpg" alt="" />
              </div>
              <div className="desc">
                <div className="name">Peter Green</div>
                <div className="category">Back-end Developer</div>
                <div className="soc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shahrdadnadafi//"
                  >
                    <span className="icon fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
