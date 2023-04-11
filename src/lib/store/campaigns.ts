import { writable, derived, readable } from "svelte/store";

export interface Campaign {
    id: string;
    name: string;
    description: string;
    objects: CampaignObject[]
    archived: boolean;
    expired: boolean;
}

export interface CampaignObject {
    id: string;
    imageUrl: string;
}

const _campaigns: Campaign[] = [
    {
        id: "1",
        name: 'Monday motivation',
        description:
            'We want to select 6 out of 12 motivational quotes for our new meeting room',
        objects: [
            {
                id: "discipline",
                imageUrl: "https://drive.google.com/uc?id=1b8IZhUA2TVTVst9zu2Cwc8ECe1FNTGFd"
            },
            {
                id: "proud",
                imageUrl: "https://drive.google.com/uc?id=1KTe9L_XSoZ17JQ7W9uefoc1GoQpVeSmb"
            },
            {
                id: "oops",
                imageUrl: "https://drive.google.com/uc?id=1b6J8D-j1MUXKwwzOUX-0qCn9oeu_Hu_J"
            },
            {
                id: "ready",
                imageUrl: "https://drive.google.com/uc?id=1r3mAH5GJkvdTtSlUO-rNxRe6_qK0bIl1"
            },
            {
                id: "influence",
                imageUrl: "https://drive.google.com/uc?id=1Hzj-FdxGo6n0xADJj7xLlKg_gifbcRLV"
            },
            {
                id: "schedule",
                imageUrl: "https://drive.google.com/uc?id=1LgA9XUBFmPTysAXAkg_zUgVldYOWzuFw"
            },
            {
                id: "shit",
                imageUrl: "https://drive.google.com/uc?id=1ofKrqbWqSJ1x97mtaxF67ANqvPERt--1"
            },
            {
                id: "focus",
                imageUrl: "https://drive.google.com/uc?id=1Zr-v2PTUAvV-hkJKCwZeWd_jKZDwUakT"
            },
            {
                id: "change",
                imageUrl: "https://drive.google.com/uc?id=1WprPWpWPSUjUBm922Hh5JmGDq_1Hy0Ph"
            },
            {
                id: "opportunity",
                imageUrl: "https://drive.google.com/uc?id=1gNjYaBQqggSgV7TQscmaXCW9YAx82kew"
            },
            {
                id: "grow",
                imageUrl: "https://drive.google.com/uc?id=1aZvMwtSBO1iV6f6rsZnKz2rmIZRvxInk"
            },
            {
                id: "startbordel",
                imageUrl: "https://drive.google.com/uc?id=1xIJyIRmRxH1UuBowKzywUIGPM26f8ubS"
            }
        ],
        archived: false,
        expired: false,
    },
    {
        id: "2",
        name: 'Series to watch together',
        description: 'In what order should we watch these?',
        objects: [
            {
                id: "kaamelott",
                imageUrl: "https://drive.google.com/uc?id=1HY5ztxljx4FLJChbu6sbX6kllFuzW6GV"
            },
            {
                id: "highcastle",
                imageUrl: "https://drive.google.com/uc?id=1AX7qlikbk9y27xvkdLpDRYmRAd4M7UUm"
            },
            {
                id: "theend",
                imageUrl: "https://drive.google.com/uc?id=18D2QjlFGI0grfxFtD0Vi81RyEWU0oaW6"
            },
            {
                id: "southpark",
                imageUrl: "https://drive.google.com/uc?id=1V8tGBW_3OvTAxwx6fK0euwol5xD0SOpb"
            },
            {
                id: "marcopolo",
                imageUrl: "https://drive.google.com/uc?id=1ITfimfiLz5o2M81ajBMat0uRIFG192mg"
            },
            {
                id: "madmen",
                imageUrl: "https://drive.google.com/uc?id=1xNtkCv_J2Q0rXkfTKyFqlQYmKGLotjK6"
            },
            {
                id: "saul",
                imageUrl: "https://drive.google.com/uc?id=13QjODy176inV1OWM3SNPFMv26OWf1Mfx"
            },
            {
                id: "breakingbad",
                imageUrl: "https://drive.google.com/uc?id=1R778nyWJMTM8NJbUHXKwhixcTN6DQ2t3"
            },
            {
                id: "handmaid",
                imageUrl: "https://drive.google.com/uc?id=1pBU4cY4x8whM0dSJKWHXDVTxlwZTO--T"
            }
        ],
        archived: false,
        expired: false,
    },
    {
        id: "vreozeopv",
        name: 'Campaign n°3',
        description: 'Laborum sint ullamco est sit officia qui Lorem et.',
        objects: [{
            id: "lcksdlvdkl",
            imageUrl: "https://img.freepik.com/photos-gratuite/concept-bureau-affaires-minimaliste-angle-eleve_23-2149073016.jpg?w=2000"
        },
        {
            id: "d:v;dv:;",
            imageUrl: "https://cdn.create.vista.com/api/media/small/240763084/stock-photo-workplace-green-plant-photo-frame"
        },
        {
            id: "sjegkdhge",
            imageUrl: "https://cdn.shopify.com/s/files/1/2268/9819/products/MD019-White-1-AGTC_Computer_Desk_White_A_3744x.jpg?v=1619537177"
        },
        {
            id: "kzdevazaaa",
            imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2t8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id: "pofpooooo",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYidFadplZdDqXkGY85UD3ToybEfc8sAgog&usqp=CAU"
        }],
        archived: false,
        expired: true,
    },
    {
        id: "ckazelgklm",
        name: 'Campaign n°4',
        description:
            'Do cupidatat sint tempor ex labore consequat in incididunt eiusmod excepteur deserunt sit.',
        objects: [{
            id: "lcksdlvdkl",
            imageUrl: "https://img.freepik.com/photos-gratuite/concept-bureau-affaires-minimaliste-angle-eleve_23-2149073016.jpg?w=2000"
        },
        {
            id: "d:v;dv:;",
            imageUrl: "https://cdn.create.vista.com/api/media/small/240763084/stock-photo-workplace-green-plant-photo-frame"
        },
        {
            id: "sjegkdhge",
            imageUrl: "https://cdn.shopify.com/s/files/1/2268/9819/products/MD019-White-1-AGTC_Computer_Desk_White_A_3744x.jpg?v=1619537177"
        },
        {
            id: "kzdevazaaa",
            imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2t8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id: "pofpooooo",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYidFadplZdDqXkGY85UD3ToybEfc8sAgog&usqp=CAU"
        }],
        archived: true,
        expired: false,
    }
];

function createCampaignsStore() {
    const campaigns = readable(_campaigns);
    const showArchivedCampaigns = writable(false);
    const showExpiredCampaigns = writable(false);
    const selectedCampaign = writable(_campaigns[0]);
    const filteredCampaigns = derived([campaigns, showArchivedCampaigns, showExpiredCampaigns], ([$campaigns, $showArchivedCampaigns, $showExpiredCampaigns]) => {
        return $campaigns
            .filter(c => ($showArchivedCampaigns || c.archived === false))
            .filter(c => ($showExpiredCampaigns || c.expired === false));
    });

    return {
        campaigns: filteredCampaigns,
        selectedCampaign,
        selectCampaign: (campaignToSelect: Campaign) => selectedCampaign.set(campaignToSelect),
        showArchivedCampaigns,
        showExpiredCampaigns
    };
}

const campaignsStore = createCampaignsStore();

export { campaignsStore };
