# ShowDBLike-MongoDB
Adding the ShowDBsLike function in your users .mongorc.js file enables you to display databases name which contains a particular string.   
It works similar to MySQL's ( show databases like '%%' ).   

Installation / Configuration:   

Copy the content of .mongorc.js file and paste it into your users .mongorc.js file.  
1. For Root users :   
        Path : /root/.mongorc.js   
2. For Normal users ( i.e. abhinandan )   
        Path : /home/abhinandan/.mongorc.js   


All the content(functions or objects) of .mongorc.js will get included whenever you start mongo shell.
