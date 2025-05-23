import React, { useState } from 'react'
import { books as bookData } from '../constant/mockData.js';
import BookCard from './BookCard.jsx';
import SideCard from '../components/SideCard.jsx';
import styles from './Books.module.css';
import SearchBox from '../components/SearchBox.jsx';

function Books() {

    const [liked, setLiked] = useState([]);
    const [search,setSearch]=useState([]);
    const [books,setBooks]=useState(bookData);

    const searchHandler=()=>{
        if(search){
            const newBooks=bookData.filter(book=>book.title.toLowerCase().includes(search));
            setBooks(newBooks);
        }else{
            setBooks(bookData);
        }
    }

    const handleLikedList = (book, status) => {
        if (status) {
            const newLikedList = liked.filter(item => item.id !== book.id);
            setLiked(newLikedList);
        } else {
            setLiked(liked => [...liked, book])
        }
    }
    return (

        <>
            <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
            
            <div className={styles.container}>
                <div className={styles.cards}>
                    {
                        books.map(book => (<BookCard key={book.id} data={book} handleLikedList={handleLikedList} />))
                    }
                </div>

                {
                    !!liked.length && <div className={styles.favorite}>
                        <h2>Favorites</h2>
                        {
                            liked.map(book => <SideCard key={book.id} data={book} />)
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Books