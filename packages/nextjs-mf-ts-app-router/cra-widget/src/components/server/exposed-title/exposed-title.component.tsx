import React from 'react';
import styles from './exposed-title.module.css';

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const url = "http://random-word-api.herokuapp.com/word";
//     const response = await (await fetch(url)).json();
//     const randomWord = response[0];
//     console.log("Random word: " + randomWord);
//
//     // Pass data to the page via props
//     return { props: { randomWord } }
// }

//not works use getServerSideProps //const ExposedTitle = async ({text, randomWord}) => {
const CraExposedTitle = ({ text }: { text?: string }) => {
    // const url = "http://random-word-api.herokuapp.com/word";
    // const response = await (await fetch(url)).json();
    // const randomWord = response[0];
    // console.log("Random word: " + randomWord);

    return (
        <>
            <div className={styles.title}>CRA Server Title: {text}</div>
            {/*<div>Random word: {randomWord}</div>*/}
        </>
    );
};

export default CraExposedTitle;
