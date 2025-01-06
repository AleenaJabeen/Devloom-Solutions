import styles from '../../css/PortfolioStyles/Features.module.css';
import { Feature1,Feature2,Feature3,Feature4,Feature5,Feature6,Feature7,Feature8,Feature9 } from '../../Assets';
const Features = () => {
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
    },
    {
      title: "Brand customization",
      description:
        "Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.",
      imgSrc: Feature4,
    },
    {
      title: "Stage Kit",
      description:
        "Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.",
      imgSrc: Feature5,
    },
    {
      title: "Green Room",
      description:
        "Invite speakers to a private waiting room to meet and prep to go on stage.",
      imgSrc: Feature6,
    },
    {
      title: "Brand customization",
      description:
        "Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.",
      imgSrc: Feature7,
    },
    {
      title: "Stage Kit",
      description:
        "Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.",
      imgSrc: Feature8,
    },
    {
      title: "Green Room",
      description:
        "Invite speakers to a private waiting room to meet and prep to go on stage.",
      imgSrc: Feature9,
    },
  ];

  return (
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
  );
};

export default Features;