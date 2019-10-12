import { Injectable } from '@nestjs/common';
import {Challenge} from '../challenge/challenge.model';

@Injectable()
export class ChallengeService {
    challengeMap: Map<string, Challenge> = new Map();

    getAllChallenges(): any[] {
        return Array.from(this.challengeMap.entries());
    }

    createChallenge(challenge) {
        const newChallenge = new Challenge(
            challenge.title,
            challenge.duration,
            challenge.coins,
            challenge.description,
            challenge.image,
            challenge.creator,
            challenge.isProofRequired,
            challenge.completionImage,
        );
        while (this.challengeMap.has(newChallenge.id)) {
            newChallenge.setId();
        }
        this.challengeMap.set(newChallenge.id, newChallenge);
    }

    approveChallenge(challengeId) {
        const challenge = this.challengeMap.get(challengeId);
        challenge.setApproved(true);
        this.challengeMap.set(challengeId, challenge);
    }

    deleteCallenge(data) {
        const challengeId = data.challengeId;
        this.challengeMap.delete(challengeId);
    }

    completeChallenge(data) {
        const challengeId = data.challengeId;
        const challenge = this.challengeMap.get(challengeId);
        challenge.setCompleted(true);
        this.challengeMap.set(challengeId, challenge);
    }
}
