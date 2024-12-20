import styles from "./Body.module.css"

const Body = () => {
    return (
        <div className = {styles.bodyContainer}>
         <div className = {styles.bodyMainContainer}>
            <div className = {styles.bodyfirstContainer}>
                <h1 className = {styles.bodyfirstheading}>
                Let us find your
                </h1>
                <h1 className = {styles.bodysecondheading}>
                Forever Food.
                </h1>
                <p className = {styles.bodypara}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
                <div className= {styles.btndiv}>
                    <button className = {styles.leftbtn}>Search now</button>
                    <button className = {styles.rightbtn}>Know more</button>

                </div>

            </div>
         </div>
         <div className = {styles.bodySecondContainer}>
            <div className= {styles.secondContainerleftside}>
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            </div>
            <div className= {styles.secondContainerrightside}>
                <p className = {styles.seconddivfirstpara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</p>
                <p className = {styles.seconddivsecondpara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button className= {styles.seconddivbutton}>Get in Touch</button>
            </div>

         </div>
         </div>
    )
}

export default Body; 