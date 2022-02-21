import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Rating, Chip, Button, BottomSheet, ListItem, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import { setBookmark, setBookDetails } from '../Redux/reduxSlice'

export function SelectedBook({ selected, allBooks, goBack }) {

    const [showBookData, setShowBookData] = useState([])
    const [showSynopsis, setShowSynopsis] = useState(false)
    const [openSheet, setOpenSheet] = useState(false)
    const [selectedOption, setSelectedOption] = useState(-1)

    const bookMark = useSelector((state) => state.books.bookmark)
    const bookDetails = useSelector((state) => state.books.bookdetails)

    const dispatch = useDispatch()

    let bookOptions = ['Want to Read', 'Start Reading', 'Read', 'Cancel']

    useEffect(() => {
        let titleIndex = selected.indexOf("by");
        // console.log(titleIndex)
        let selectedBookData = []
        if (titleIndex === -1) {
            selectedBookData = allBooks.filter((book) => book.volumeInfo.title === selected)
        } else {
            let bookTitle = selected.substr(0, titleIndex - 1)
            // console.log(bookTitle)
            // console.log(allBooks)
            selectedBookData = allBooks.filter((book) => book.volumeInfo.title === bookTitle)
            // console.log(selectedBookData)
        }
        if (selectedBookData.length > 1) {
            selectedBookData.splice(1, 1)
        }
        setShowBookData(selectedBookData)
    }, [])

    const showFullSynopsis = () => {
        setShowSynopsis(!showSynopsis)
        // console.log('message: ', bookMark)
    }

    const saveBookmark = (i) => {
        setOpenSheet(false)
        if (i !== 3) {
            setSelectedOption(i)
        }
        dispatch(setBookmark(bookOptions[i]))
        dispatch(setBookDetails([...bookDetails, showBookData[0]]))
        // dispatch(setBookDetails({...bookDetails, current: showBookData[0]}))
    }

    const displayBookInfo = (book) => {
        // console.log(book.item.volumeInfo.description.length)

        return (
            <View style={styles.flatList}>
                <View style={styles.bookContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: book.item.volumeInfo.imageLinks.smallThumbnail,
                            }}
                        />
                    </View>
                    <View style={styles.titleInfo}>
                        <Text style={styles.title}>{book.item.volumeInfo.title}</Text>
                        <Text style={styles.author}>by {book.item.volumeInfo.authors}</Text>
                        <Chip title={book.item.volumeInfo.categories[0]} containerStyle={{ marginVertical: 10 }} />
                        <View style={styles.rating}>
                            <Rating
                                type="star"
                                startingValue={book.item.volumeInfo.averageRating}
                                readonly
                                imageSize={30}
                                style={{ paddingVertical: 10 }}
                            />
                            <Text style={styles.ratingNumber}>{book.item.volumeInfo.averageRating} ({book.item.volumeInfo.ratingsCount} ratings)</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.synopsis}>Synopsis</Text>
                        {!showSynopsis && <Text>{book.item.volumeInfo.description.substr(0, 450)}...
                            <TouchableOpacity onPress={() => showFullSynopsis()}>
                                <Text style={styles.showMore}>Show more</Text>
                            </TouchableOpacity>
                        </Text>}
                        {showSynopsis && <Text>{book.item.volumeInfo.description}
                            <TouchableOpacity onPress={() => showFullSynopsis()}>
                                <Text style={styles.showMore}>Show less</Text>
                            </TouchableOpacity></Text>}
                    </View>
                    <View style={styles.bottomContent}>
                        <Text><Text style={styles.bottom}>Published:</Text> {book.item.volumeInfo.publishedDate}</Text>
                        <Text><Text style={styles.bottom}>Pages:</Text> {book.item.volumeInfo.pageCount}</Text>
                    </View>
                    <View style={styles.yourRating}>
                        <Text>Rate the book</Text>
                        <Rating
                            type="star"
                            startingValue={0}
                            imageSize={30}
                            style={{ paddingVertical: 10 }}
                        />
                        <Button
                            title={'Write a Review'}
                            containerStyle={{
                                width: 200,
                                marginHorizontal: 50,
                                marginVertical: 10,
                            }}
                            onPress={goBack}
                        />
                        <Button
                            title={selectedOption === -1 ? 'Save to My Books' : bookOptions[selectedOption]}
                            containerStyle={{
                                width: 200,
                                marginHorizontal: 50,
                                marginVertical: 10,
                            }}
                            onPress={() => setOpenSheet(true)}
                        />
                        <BottomSheet modalProps={{}} isVisible={openSheet}>
                            {bookOptions.map((l, i) => (
                                <ListItem
                                    key={i}
                                    // containerStyle={l.containerStyle}
                                    onPress={() => saveBookmark(i)}
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            <View style={styles.bottomSheet}>
                                                <Text>{l}</Text> 
                                                {i !==3 && selectedOption === i ? <Text><Icon name='done' color="green" /></Text> :
                                                i === 3 ? <Text><Icon name='close' color="red" /></Text> : <></>}
                                            </View>
                                        </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            ))}
                        </BottomSheet>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {showBookData.length > 0 && <FlatList
                data={showBookData}
                renderItem={(book) => displayBookInfo(book)}
                showsVerticalScrollIndicator={false}
            ></FlatList>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // padding: 20
    },
    tinyLogo: {
        width: 190,
        height: 270,
    },
    flatList: {
        paddingBottom: 60
    },
    bookContainer: {
        // padding: 20,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 20
    },
    titleInfo: {
        alignItems: 'center',
        padding: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    author: {
        color: 'grey',
        fontSize: 14
    },
    rating: {
        display: 'flex',
        flexDirection: 'row'
    },
    ratingNumber: {
        padding: 15
    },
    synopsis: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10
    },
    showMore: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 14,
    },
    bottomContent: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    bottom: {
        fontWeight: 'bold'
    },
    yourRating: {
        alignItems: 'center',
        padding: 30
    },
    bottomSheet: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 400
    },
})