import React from "react";
import withData from "./withData";

function Speakers({ speakers }) {
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

const maxSpeakersToShow = 3;
export default withData(maxSpeakersToShow)(Speakers);
