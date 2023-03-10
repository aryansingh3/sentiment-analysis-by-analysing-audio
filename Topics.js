import React from 'react';
import { Box,Heading,Tag } from '@chakra-ui/react';
export default function Topics({ transcript }){
    return (
        <div>
            <Heading size = "md" >Topics Detected: </Heading>
            <Box p ="3">
                {Object.keys(transcript.iab_categories_result.summary).filter(
                    topic => transcript.iab_categories_result.summary[topic] > 0.6
                ).map(topic => (
                    <Tag 
                    size = "md" 
                    colorScheme= "teal"
                     variant = "solid" 
                     borderRadius="full"
                     >
                        {topic.split('>').pop()}
                    </Tag>
                ))}
            </Box>
        </div>

    );
}