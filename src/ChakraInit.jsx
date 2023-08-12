import * as React from 'react'
import {createContext, useState} from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import App from "./App";
import Controls from "./Controls";

export const SliderContext = createContext();

function ChakraInit() {
    const [sliderValueX, setSliderValueX] = useState(5);
    const [sliderValueY, setSliderValueY] = useState(4);
    const [sliderValueZ, setSliderValueZ] = useState(6);
    const [seed, setSeed] = useState(50);

    return (
        <ChakraProvider>
            <SliderContext.Provider value={{sliderValueX, setSliderValueX, sliderValueY,setSliderValueY,sliderValueZ,setSliderValueZ, seed,setSeed}}>
                <Box w='80%' h='100%'>
                    <App/>
                </Box>
                <Controls/>
            </SliderContext.Provider>
        </ChakraProvider>
    )
}

export default ChakraInit;