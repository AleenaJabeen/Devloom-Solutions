import React from 'react';
import styles from '../../css/HomeStyles/LatestProjects.module.css';
import { useNavigate } from 'react-router-dom';


function ProjectCard(props) {
  const navigate=useNavigate();
  return (
    <>
      <div className={styles.projectCard} onClick={()=>navigate('/projectdetail')}>
<div className={styles.projectImg}><div className={styles.projectNo}>
    {props.projectNo}
</div><img src={props.image} alt="Mobile App" />
<div className={styles.projects}>Projects</div></div>
<div className={styles.projectInfo}>
    <h3>Mobile App</h3>
    <p>lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum  </p>
</div>
      </div>
    </>
  )
}

export default ProjectCard
