import React from 'react';
import Highlighted from './Highlighted';
import Topics from './Topics';
import { Text } from '@chakra-ui/react';
export default function Result({transcript}){
    return (
        <div>
           <Text>
            {transcript.sentiment_analysis_results.map(result => (
                <Highlighted text = {result.text} sentiment = {result.sentiment} entities = {transcript.entities}/>
            ))}
           </Text>
           <Topics transcript={transcript}/>
        </div>

    );
}