import { useState } from "react";
import yorkshire from '../assets/yorkshire.webp';
import pomeranian from '../assets/pomeranian.avif';
import pug from '../assets/pug.jpg';
import chihuahua from '../assets/chihuahua.webp';
import dalmatian from '../assets/dalmatian.webp';
import golden from '../assets/golden.webp';
import labrador from '../assets/labrador.jpg';
import poodle from '../assets/poodle.jpg';

export default function ForwardPage() {
    const [facts, setFacts] = useState({
        small: null,
        long_fur: null,
        silky_fur: null,
        rolls: null,
        curly_fur: null,
        spots: null
    });

    const askQuestion = (fact) => {
        if (fact === 'small') {
            return (
                <div key={fact}>
                    <p>Is the dog {fact.replace('_', ' ')}?</p>
                    <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Yes</button>
                    <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
                </div> 
            )
        } else {
            return (
                <div key={fact}>
                <p>Does the dog have {fact.replace('_', ' ')}?</p>
                <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Yes</button>
                <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
                </div>
            );
        }
    }

    const forwardChain = () => {
        if(facts.small === null){
            return askQuestion('small');
        } else if (facts.long_fur === null) {
            return askQuestion('long_fur');
        } else if (facts.small === 'Yes' && facts.long_fur === 'Yes' && facts.silky_fur === null) {
            return askQuestion('silky_fur');
        } else if (facts.small === 'Yes' && facts.long_fur === 'No' && facts.rolls === null) {
            return askQuestion('rolls');
        } else if (facts.small === 'No' && facts.long_fur === 'Yes' && facts.curly_fur === null) {
            return askQuestion('curly_fur');
        } else if (facts.small === 'No' && facts.long_fur === 'No' && facts.spots === null) {
            return askQuestion('spots');
        }

        let dog = '';
        let conclusion = 'Based on the facts: ';
        let image = '';

        if (facts.small === 'Yes' && facts.long_fur === 'Yes' && facts.silky_fur === 'Yes') {
            dog = 'The dog Yorkshire Terrier.';
            conclusion += 'small dog, long and silky fur.';
            image = yorkshire;
        } else if (facts.small === 'Yes' && facts.long_fur === 'Yes') {
            dog = 'The dog Pomeranian.';
            conclusion += 'small dog, long and fluffy fur.';
            image = pomeranian;
        } else if (facts.small === 'Yes' && facts.rolls === 'Yes') {
            dog = 'The dog Pug.'
            conclusion += 'small dog, short fur, rolls.';
            image = pug;
        } else if (facts.small === 'Yes') {
            dog = 'The dog Chihuahua.';
            conclusion += 'small dog, short fur, no rolls';
            image = chihuahua;
        } else if (facts.long_fur === 'Yes' && facts.curly_fur === 'Yes') {
            dog = 'The dog Poodle';
            conclusion += 'big dog, long and curly fur.';
            image = poodle;
        } else if (facts.long_fur === 'Yes') {
            dog = 'The dog Golden Retriever.';
            conclusion += 'big dog, long and straight/wavy fur.';
            image = golden;
        } else if (facts.spots === 'Yes') {
            dog = 'The dog Dalmatian.';
            conclusion += 'big dog, short fur, spots.';
            image = dalmatian;
        } else {
            dog = 'The dog Labrador.';
            conclusion += 'big dog, short fur, no spots.';
            image = labrador;
        }

        return (
            <div>
                <h3>{dog}</h3>
                <p>{conclusion}</p>
                <img src={image} alt={dog} style={{width: "500px", height: "auto"}}/>
            </div>
        )
    }
    return (
        <div>
            <h1>Forward Chain: Dog Breed Identification</h1>
            {forwardChain()}
        </div>
    )
}