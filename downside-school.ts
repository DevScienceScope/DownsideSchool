

/**
 * Start of creating soem custom blocks for Downside School
 */
//% weight=100 color=#D31245 icon="" block="Downside School"
namespace downside {
    /**
     * TODO: describe your function here
     * @param n is value of ASCII, eg: 90
     */
    //% block="getASCII %v"
    export function getASCII(n: number): string {
        // Add code here
        return String.fromCharCode(n);
    }
}
