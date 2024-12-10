

export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === "down" ? 70 : direction === "up" ? -70 : 0,
            x: direction === "right" ? 70 : direction === "left" ? -70 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "tween",
                delay: delay,
            },
        },
    }
}

export const delayAnimation = {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
}