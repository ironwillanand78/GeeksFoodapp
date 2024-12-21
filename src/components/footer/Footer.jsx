import styles from "./Footer.module.css"


<div className = {styles.footerdiv}>
    <div className= {styles.footerImg}>
        <img src="./src\components\footer\Footer-assets\footerimg-removebg-preview.png" />
    </div>
    <div className = {styles.footerPara}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
    </div>
    <div className= {styles.footerList}>
        <ul>
            <li>About</li>
            <li>Carrers</li>
            <li>History</li>
            <li>Services</li>
            <li>Project</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className= {styles.footerIcons}></div>
</div>




export default Footer;