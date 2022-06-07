const maca= {
    value: 2,

}
const laranja ={
    value : 3,

}

function mapComthis(arr, thisarg){
    return arr.map(function(item){
   return item * this.value;
    }, thisarg);
}
const nums=[1,2];

console.log("this->maçã", mapComthis(nums,maca));
console.log("this->laranja", mapComthis(nums,laranja));




function mapSemthis(arr){
    arr.map(function(item){
        return item * 2;
    });
}

const nums=[2,4,6,8,10];

console.log(mapSemthis(nums));
console.log(nums);

