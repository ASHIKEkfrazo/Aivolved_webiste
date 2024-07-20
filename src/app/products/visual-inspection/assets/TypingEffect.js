import { useEffect, useState } from 'react';
import styles from './TypingEffect.module.css';

const TypingEffect = ({ typingSpeed = 110, typingDelay = 1100, words = "Better,Bigger,Faster" }) => {
    const wordsArray = words.split(',');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const handleType = () => {
            const wordToType = wordsArray[currentWordIndex % wordsArray.length];

            if (!isErasing && currentCharacterIndex < wordToType.length) {
                setText(wordToType.slice(0, currentCharacterIndex + 1));
                setCurrentCharacterIndex(currentCharacterIndex + 1);
            } else if (isErasing && currentCharacterIndex > 0) {
                setText(wordToType.slice(0, currentCharacterIndex - 1));
                setCurrentCharacterIndex(currentCharacterIndex - 1);
            } else if (!isErasing && currentCharacterIndex === wordToType.length) {
                setTimeout(() => setIsErasing(true), typingDelay);
            } else if (isErasing && currentCharacterIndex === 0) {
                setIsErasing(false);
                setCurrentWordIndex((currentWordIndex + 1) % wordsArray.length);
            }
        };

        const timeoutId = setTimeout(handleType, isErasing ? typingSpeed / 2 : typingSpeed);
        return () => clearTimeout(timeoutId);
    }, [currentCharacterIndex, isErasing, typingSpeed, typingDelay, wordsArray, currentWordIndex]);

    return (
        <div className={styles.container}>
            <h1 className=' text-[40px] font-semibold'>Visual Inspection AI With&nbsp;<span className='text-[#cf2e2e] transition-all font-semibold'>{text}<span className={styles.blinkingCursor}></span></span></h1>
        </div>
    );
};

export default TypingEffect;
