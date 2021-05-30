import React from 'react';
import "@lottiefiles/lottie-player";

export const LottieLoadings = () => 

    <lottie-player
        autoplay
        loop
        mode="normal"
        src={window.location.origin + "/loadings.json"}
        >
    </lottie-player>