import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Rating, Chip, Button } from 'react-native-elements';
import { SelectedBook } from './SelectedBook';

export function ViewAllBooks({ allBooks }) {

    const [listAll, setListAll] = useState([{}])
    const [selectedBook, setSelectedBook] = useState('')
    const [showSelected, setShowSelected] = useState(false)

    useEffect(() => {
        let getAllData = []
        allBooks.forEach(element => {
            // listAll.push(`${element.volumeInfo.title} by ${element.volumeInfo.authors}`)
            // allImages.push(element.volumeInfo.imageLinks.smallThumbnail)
            getAllData.push({
                title: element.volumeInfo.title,
                author: element.volumeInfo.authors,
                image: element.volumeInfo.imageLinks.smallThumbnail,
                rating: element.volumeInfo.averageRating
            })
        })
        setListAll(getAllData)
    }, [allBooks])

    const displaySelectedBook = (title) => {
        setSelectedBook(title)
        setShowSelected(true)
    }

    const displayBooks = (books) => {
        console.log('books: ', books)
        return (
            <View>
                <View style={styles.listContainer}>
                    <View>
                        <Image
                            style={styles.bookLogo}
                            source={{
                                uri: books.item.image,
                            }}
                        />
                    </View>
                    <View style={styles.bookInfo}>
                        <Text style={styles.title}>{books.item.title}</Text>
                        <Text style={styles.author}>by {books.item.author}</Text>
                        <Rating
                            type="star"
                            startingValue={books.item.rating}
                            readonly
                            imageSize={25}
                            style={{ paddingVertical: 20, paddingRight: 30 }}
                        />
                        <Button
                            title={'View this Book'}
                            containerStyle={{
                                width: 160,
                                marginVertical: 20,
                            }}
                            onPress={() => displaySelectedBook(books.item.title)}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
           {!showSelected && <><Text style={styles.top10}>Top 10 results</Text>
            <View style={styles.resultsContainer}>
                <FlatList
                    data={listAll}
                    renderItem={(books) => displayBooks(books)}
                    keyExtractor={(books, index) => index.toString()}
                ></FlatList>
            </View></>}
            {showSelected && <SelectedBook selected={selectedBook} allBooks={allBooks} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },
    top10: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10
    },
    bookLogo: {
        width: 120,
        height: 200
    },
    bookInfo: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    author: {
        color: 'grey'
    }
})