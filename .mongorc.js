// Works similar to MySQL's ( show databases like '%DBNAME%' )
// Examples : 
// showDBLike()             # Displays all databases
// showDBLike("")           # Displays all databases
// showDBLike("DBNAME")     # Displays all databases contains string "DBNAME"

function showDBsLike(like) {
        like = (typeof like !== 'undefined') ? like : "";
        var dbs = [];
        
        var databases = db.getMongo().getDBNames();
        databases.forEach(function(dbName){
                if(dbName.indexOf(like) > -1){
                        dbs.push(dbName);
                }
        });

        print(dbs.join("\n"));
        print("\n");

}
