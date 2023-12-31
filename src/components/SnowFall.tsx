'use client'
import React, { useEffect, useRef, useState } from 'react'
import Snowfall from 'react-snowfall'
import { StaticImageData } from 'next/image';
import cherry1 from '../../public/images/cherries/cherry-blossom1.png'
import cherry2 from '../../public/images/cherries/cherry-blossom2.png'
import cherry3 from '../../public/images/cherries/cherry-blossom3.png'
import cherry4 from '../../public/images/cherries/cherry-blossom4.png'
import { useTheme } from 'next-themes';

async function staticImageDataToCanvasImageSource(imageData: StaticImageData): Promise<CanvasImageSource | null> {
    const image = new Image();
    image.src = imageData.src;

    return new Promise((resolve) => {
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(image, 0, 0);
                resolve(canvas);
            } else {
                resolve(null);
            }
        };
        image.onerror = () => {
            resolve(null);
        };
    });
}

const CanvasWithImage = (image: StaticImageData) => {
    const [canvasImageSource, setCanvasImageSource] = useState<CanvasImageSource | null>(null);

    useEffect(() => {
        const fetchCanvasImageSource = async () => {
            const imageSource = await staticImageDataToCanvasImageSource(image);
            setCanvasImageSource(imageSource);
        };

        fetchCanvasImageSource();
    }, []);

    return canvasImageSource;
};

const SnowFallComponent = () => {
    const { theme } = useTheme()
    const images = [CanvasWithImage(cherry1), CanvasWithImage(cherry2), CanvasWithImage(cherry3), CanvasWithImage(cherry4)]
    const snowfall = {
        radius: [0.5, 3.0],
        snowflakeCount: 50,
        images: undefined,
        speed: [4.0, 4.3],
        wind: [3.5, 4.4]
    }
    const cherry = {
        radius: [40, 50],
        snowflakeCount: theme === 'dark' ? snowfall.snowflakeCount : 30,
        images: images as CanvasImageSource[],
        speed: theme === 'dark' ? snowfall.speed : [1.0, 1.1],
        wind: theme === 'dark' ? snowfall.wind :[-1.0, 1]
    }
    return (
        <div>
            {/* {theme === 'dark' ? */}
                {/* <Snowfall radius={[snowfall.radius[0], snowfall.radius[1]]} snowflakeCount={snowfall.snowflakeCount} images={snowfall.images} speed={[snowfall.speed[0], snowfall.speed[1]]} wind={[snowfall.wind[0], snowfall.wind[1]]} style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1
                }} />
                :      */}
                <Snowfall radius={[cherry.radius[0], cherry.radius[1]]} snowflakeCount={cherry.snowflakeCount} images={cherry.images} speed={[cherry.speed[0], cherry.speed[1]]} wind={[cherry.wind[0], cherry.wind[1]]} style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1
                }} />       
            {/* } */}
        </div>
    )
}

export default SnowFallComponent