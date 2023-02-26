import { writable, derived } from "svelte/store";

interface Campaign {
    id: string;
    name: string;
    description: string;
    objects: Number[]
    archived: boolean;
    expired: boolean;
}

const _campaigns: Campaign[] = [
    {
        id: "kjgksjferlfk",
        name: 'Campaign n°1',
        description:
            'Sit voluptate ex nisi excepteur magna proident labore est nulla qui aute occaecat nisi officia.',
        objects: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
        archived: false,
        expired: false,
    },
    {
        id: "mamqsvmldfb",
        name: 'Campaign n°2',
        description: 'Incididunt ea est ea deserunt quis labore elit.',
        objects: [1, 2, 3, 4, 5],
        archived: false,
        expired: false,
    },
    {
        id: "vreozeopv",
        name: 'Campaign n°3',
        description: 'Laborum sint ullamco est sit officia qui Lorem et.',
        objects: [1, 2, 3, 4],
        archived: false,
        expired: true,
    },
    {
        id: "ckazelgklm",
        name: 'Campaign n°4',
        description:
            'Do cupidatat sint tempor ex labore consequat in incididunt eiusmod excepteur deserunt sit.',
        objects: [1, 2, 3, 4, 5, 6, 7, 8],
        archived: true,
        expired: false,
    }
];

function createCampaignsStore() {
    const campaigns = writable(_campaigns);
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
