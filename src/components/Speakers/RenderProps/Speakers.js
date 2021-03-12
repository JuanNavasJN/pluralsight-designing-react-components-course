import React from "react";
import SpeakersRenderProps from "./SpeakersRenderProps";

function Speakers() {
    return (
        <SpeakersRenderProps>
            {({ speakers }) => {
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
                </div>;
            }}
        </SpeakersRenderProps>
    );
}

export default Speakers;
