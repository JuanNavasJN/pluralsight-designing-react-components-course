import React, { useContext } from "react";

import SpeakerContext from "./SpeakerContext";

function Speakers() {
    const speakers = useContext(SpeakerContext);

    return (
        <div>
            {speakers.map(speaker => {
                const { imageSrc, name } = speaker;

                return (
                    <img
                        src={`/images/${imageSrc}.png`}
                        alt={name}
                        key={imageSrc}
                    />
                );
            })}
        </div>
    );
}

export default Speakers;
