import styles from '../../css/PortfolioStyles/Features.module.css';
import { Feature1,Feature2,Feature3 } from '../../Assets';
const OtherProjects = () => {
  const featureData = [
    {
      title: "Brand customization",
      description:
        "Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.",
      imgSrc: Feature1,
    },
    {
      title: "Stage Kit",
      description:
        "Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.",
      imgSrc: Feature2,
    },
    {
      title: "Green Room",
      description:
        "Invite speakers to a private waiting room to meet and prep to go on stage.",
      imgSrc: Feature3,
    }
  ];

  return (
    <div style={{width:"95%", margin:"auto", padding:"3rem 0"}}>
    <h1 style={{fontFamily:"Audiowide", fontSize:"40px", fontWeight:"400", color:"#262F68"}}>Other Projects</h1>
    <div className={styles.container}>
      {featureData.map((feature, index) => (
        <div className={styles.featureCard} key={index}>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
          <img
            src={feature.imgSrc}
            alt={feature.title}
            className={styles.featureImage}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default OtherProjects;