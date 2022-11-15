import { CooperativeSociety } from "./cooperative-society";
import { NominatedCandidates } from "./nominated-candidates";
import { RegisteredSocietyVoters } from "./registered-society-voters";

export class VotedList {
    public Id: number;
    public pollingDateTime: string; // changed to string

    //13 Nov
    // public society:CooperativeSociety = new CooperativeSociety();
    // public voter:RegisteredSocietyVoters = new RegisteredSocietyVoters();
    // public candidate:NominatedCandidates = new NominatedCandidates();
    public societyId:number;
    public candidateId:number;
    public voterId:number;
}
