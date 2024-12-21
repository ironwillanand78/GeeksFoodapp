import styles from "./Card.module.css";

const Card = () => {
    return (
        <div className={styles.maincard}>
            <div className={styles.cardpara}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga odio similique eaque non iusto voluptatem error vel iste nobis vitae maiores architecto, omnis facere nesciunt illum vero aperiam iure doloribus!
            </div>
            <div className={styles.cardlastdiv}>
                <img
                    src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                    alt="User"
                />
                <div className={styles.designationdiv}>
                    <h5>Gladis Lennon</h5>
                    <h6>Head of SEO</h6>
                </div>
            </div>
        </div>
    );
};

export default Card;
