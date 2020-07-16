class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    } 
    getAvailableSeatCount () {
         return this.capacity - this.passengers.length
    }  
    
    join (traveler) {
         if (this.getAvailableSeatCount()> 0){
            this.passengers.push(traveler)
         }
        
    } 
    shouldQuarantine () {
           return this.passengers.some(traveler=> traveler.isHealthy === false)
           
    } 
    //users.some(t => t.company = "OVATION")
    //printKata('3', kata3)
    totalFood () {
       return this.passengers.reduce(function(total,traveler){
           return total + traveler.food
       }, 0) 
    } 
}

