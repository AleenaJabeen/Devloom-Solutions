import React from 'react';
import {HDProject} from '../../Assets';
import styles from '../../css/PortfolioStyles/OurProjects.module.css';


function ChatProject() {
  return (
    <>
    <div className={styles.chatProject}>
        <img src={HDProject}alt="HD VIDEO Project" />
        <div className={styles.hdprojectText}>
<h3>Chat</h3>
<p>Chat is where engagement happens. With a slack-like experience, attendees can use emojis, reactions, and gifs to express themselves.</p>
</div>
    </div>
      
    </>
  )
}

export default ChatProject;
