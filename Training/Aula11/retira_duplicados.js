

var head = [56,256,-2,-2,-1,-1,-1,1, 1, 2, 2, 2, 2 ,3,3,3,3,3,4,4,4,4,4,5,5,5,6,7,8,9,9,9,9,9,9,45,45,56,56,86,86,89,96];

head.sort((a,b) => a-b)
lista=[]
for (let i=0; i<=head.length; i++)  {
    if (i==0){
        x = head[i]
        lista.push(x)
    } else if (x < head[i]){
        x = head[i]
        lista.push(x)
    }
   
}
head=lista
console.log(head);
