import type { CampaignObject } from '$lib/store';

/**
 * Pick randomly 2 proposals in a list of proposals.
 * @param allProposals The array with all proposals.
 * @returns The picked proposal.
 */
const pick1RandomProposal = (array: Array<CampaignObject>) => array[Math.random() * array.length | 0]

/**
 * Pick randomly 2 proposals in a list of proposals.
 * @param allProposals The array with all proposals.
 * @returns An new array with 2 proposals.
 */
const pick2RandomProposals = (allProposals:  Array<CampaignObject>) => {
    const pick1 = pick1RandomProposal(allProposals)
    let pick2;
    do {
        pick2 = pick1RandomProposal(allProposals)
    } while (pick1.id === pick2.id)

    return [pick1, pick2];
}

export { pick2RandomProposals };