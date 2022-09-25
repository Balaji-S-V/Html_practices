function temp()
{
    var temp =[55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,93,87,80,78,79,72,68,61,59,55,65];
    pleasant = document.getElementById("pleasant")
    hot=document.getElementById("hot")
    cold = document.getElementById("cold")
    table = document.getElementById("table")
    var count1 =0;
    var count2 =0;
    var count3 =0;
    var i;
    for(i=0;i<temp.length;i++)
    {
    if (temp[i] > 85) 
    {
        count1+=1
        
    } 
    else if(temp[i]>60 && temp[i]<84) 
    {
        count2+=1;
        
    } 
    else if(temp[i]<60) 
    {
        count3+=1;
        
    }
    }
    hot.innerHTML = count1;
    pleasant.innerHTML = count2;
    cold.innerHTML = count3;
    table.style.display="block";
}
