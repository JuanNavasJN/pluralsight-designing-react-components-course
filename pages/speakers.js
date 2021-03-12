import React from "react";

import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Speakers from "../src/components/Speakers/Speakers";

import Layout from "../src/components/Layout/Layout";

export default function Index() {
    return (
        <Layout>
            <div>
                {/* <SpeakerSearchBar /> */}
                <Speakers />
            </div>
        </Layout>
    );
}
