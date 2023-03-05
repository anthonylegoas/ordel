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
        id: "kjgksjferlfk",
        name: 'Campaign n°1',
        description:
            'Sit voluptate ex nisi excepteur magna proident labore est nulla qui aute occaecat nisi officia.',
        objects: [
            {
                id: "lcksdlvdkl",
                imageUrl: "https://img.freepik.com/photos-gratuite/concept-bureau-affaires-minimaliste-angle-eleve_23-2149073016.jpg?w=2000"
            },
            {
                id: "d:v;dv:;",
                imageUrl: "https://cdn.create.vista.com/api/media/small/240763084/stock-photo-workplace-green-plant-photo-frame"
            }
        ],
        archived: false,
        expired: false,
    },
    {
        id: "mamqsvmldfb",
        name: 'Campaign n°2',
        description: 'Incididunt ea est ea deserunt quis labore elit.',
        objects: [
            {
                id: "lcksdlvdkl",
                imageUrl: "https://img.freepik.com/photos-gratuite/concept-bureau-affaires-minimaliste-angle-eleve_23-2149073016.jpg?w=2000"
            },
            {
                id: "d:v;dv:;",
                imageUrl: "https://cdn.create.vista.com/api/media/small/240763084/stock-photo-workplace-green-plant-photo-frame"
            }
        ],
        archived: false,
        expired: false,
    },
    {
        id: "vreozeopv",
        name: 'Campaign n°3',
        description: 'Laborum sint ullamco est sit officia qui Lorem et.',
        objects: [],
        archived: false,
        expired: true,
    },
    {
        id: "ckazelgklm",
        name: 'Campaign n°4',
        description:
            'Do cupidatat sint tempor ex labore consequat in incididunt eiusmod excepteur deserunt sit.',
        objects: [],
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
