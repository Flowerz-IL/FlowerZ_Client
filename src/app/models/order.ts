export interface Order{
    _id:String,
    userId:String,
    orderAddress:{
        name: String,
        city: String,
        street: String,
        houseNumber: String,
        floorNumber: number,
        aptNumber: number
    },
    orderFrequency:number,
    isOrderActive:false,
    orderFlowerBouquetIds:[String],
    orderTotalSum:number,
    providerId:String


}