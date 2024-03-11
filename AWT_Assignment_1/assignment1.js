const arr1=[1,2,3,4,5];
const arr2=[5,4,3,2,1];
let count;
function check_sort(arr)
{
   for(i=0;i<arr.length;i++)
   {
     if(arr[i] < arr[i+1])
     {  
        count=1;
     }
     else if(arr[i] > arr[i+1])
     {
        count=-1;
     }
    

   }
}
 check_sort(arr1);
 console.log(count);
if(count == 1)
{
      console.log("ASCENDING ");
}
else if(count == -1){
    console.log("DESCENDING ");
}
else{
    console.log("NOT SORTED ");
}