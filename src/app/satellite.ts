
//Part 1: Define and Create Satellites
export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {

    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;

}


//Part 6: Highlight Space Debris
shouldShowWarning(): boolean {
    return (this.type.trim().toLowerCase() === "space debris");
}

}
