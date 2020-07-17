
// the function is feet to mile
function feetToMile(feet)
{

    if(feet<0)return "lengeth can never be zero";
    return feet*0.00018939393 ;
}

// the function is woodCalculator
function woodCalculator(chair,table,bed)
{
    if(chair<0||table<0||bed<0)return "Quantity can never be zero";
    var totall=(chair)+(table*3)+(bed*5);
    return (chair)+(table*3)+(bed*5);
}


// the function is brickCalculator
function brickCalculator(flatFloor)
{
    var brick=0;
   if(flatFloor>20)
   {
       brick+=(flatFloor-20)*10000;
       flatFloor=20;
   }
   if(flatFloor>10)
   {
    brick+=(flatFloor-10)*12000;
    flatFloor=10;
   }
   
   return brick+=(flatFloor)*15000;

}


// the function is find tiny friends
function tinyFriend(name)
{
         var tiny=Infinity;
        
        for(var i=0;i<name.length;i++)
    {
        var temp=name[i].length;
        if(temp<tiny&&name[i]!=" ")
        {
            tiny=temp;
            result=i;
        }
    }
 return name[result];
}





