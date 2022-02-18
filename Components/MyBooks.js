import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import { useSelector, useDispatch } from 'react-redux'

export function MyBooks() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItems] = useState([])
    const bookMark = useSelector((state) => state.books.bookmark)
    const bookDetails = useSelector((state) => state.books.bookdetails)

    useEffect(async () => {
        // try {
        //     let filterSearchData = await fetch(`https://www.googleapis.com/books/v1/volumes?q=midlight+library :keyes&key=AIzaSyAajcnCCg4sfhvrnUV1RuQ-vmWBpejnqAs`)
        //     let filterResponse = await filterSearchData.json()
        //     // console.log('response: ', filterResponse.items)
        //     // setAllBooks(filterResponse.items)
        //     let carouselCards = []
        //     filterResponse.items.forEach(element => {
        //         carouselCards.push({
        //             image: element.volumeInfo.imageLinks.smallThumbnail,
        //             title: `${element.volumeInfo.title} by ${element.volumeInfo.authors}`
        //         })
        //         // allImages.push(element.volumeInfo.imageLinks.smallThumbnail)
        //     });
        //     // console.log('carouselCards: ', carouselCards)
        //     setCarouselItems(carouselCards)
        // }
        // // filteredTitles.push('View All 10 Results')
        // // setFilteredBooks(filteredTitles)
        // // setBookImage(allImages)
        // catch (error) {
        //     console.log(error)
        // }
        let carouselCards = []
        carouselCards.push({
            image: bookDetails[0].volumeInfo.imageLinks.smallThumbnail,
            title: `${bookDetails[0].volumeInfo.title} by ${bookDetails[0].volumeInfo.authors}`
        })
        setCarouselItems(carouselCards)
        console.log('show: ', bookDetails[0].volumeInfo.imageLinks.smallThumbnail)
    }, [bookMark, bookDetails])


    const _renderItem = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 220,
                width: 180,
                padding: 20,
                marginLeft: 55,
                marginRight: 25,
                alignItems: 'center'
            }}>
                <Image
                    style={styles.bookLogo}
                    source={{
                        uri: item.image,
                    }}
                />
                <Text style={{ fontSize: 15, paddingTop: 15 }}>{item.title}</Text>
                {/* <Text>{item.text}</Text> */}
            </View>

        )
    }

    return (
        <ScrollView>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={styles.carouselContainer}>
                    <Text style={styles.read}>Currently Reading (1)</Text>
                    <Carousel
                        layout={"stack"}
                        layoutCardOffset={9}
                        // ref={c => {
                        //     _carousel = c;
                        //   }}
                        data={carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={_renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                </View>

                <View style={styles.carouselContainer}>
                    <Text style={styles.read}>Want to Read (1)</Text>
                    <Carousel
                        layout={"stack"}
                        layoutCardOffset={9}
                        // ref={c => {
                        //     _carousel = c;
                        //   }}
                        data={carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={_renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                </View>

                <View style={styles.carouselContainer}>
                    <Text style={styles.read}>Read (1)</Text>
                    <Carousel
                        layout={"stack"}
                        layoutCardOffset={9}
                        // ref={c => {
                        //     _carousel = c;
                        //   }}
                        data={carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={_renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20
    },
    bookLogo: {
        width: 75,
        height: 120,
    },
    carouselContainer: {
        alignItems: 'center',
        padding: 20
    },
    read: {
        padding: 10
    }
})