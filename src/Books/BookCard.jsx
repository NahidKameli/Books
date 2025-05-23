import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import styles from "./BookCard.module.css";

function BookCard({ data, handleLikedList }) {

    const { title, auther, language, image, pages } = data;

    const [like, setLike] = useState(false);
    const likeHandler = () => {
        handleLikedList(data, like)
        setLike(like => !like);
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{auther}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages} pages</span>
                </div>
            </div>
            <button onClick={likeHandler}>
                <AiFillHeart color={like ? 'red' : "white"} fontSize="1.8rem" /></button>
        </div>
    )
}

export default BookCard