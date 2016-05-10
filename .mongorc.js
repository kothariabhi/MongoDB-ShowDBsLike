// Works similar to MySQL's ( show databases like '%DBNAME%' )
// Examples : 
// showDBLike()             # Displays all databases
// showDBLike("")           # Displays all databases
// showDBLike("DBNAME")     # Displays all databases contains string "DBNAME"

function showDBsLike(like) {
        like = (typeof like !== 'undefined') ? like : "";
        obj = JSON.parse(JSON.stringify(db.adminCommand( { listDatabases: 1 } )));

        var dbs = [];
        var databases = obj.databases;

        databases.forEach(function(entry){
                dbName = entry.name;
                if(dbName.indexOf(like) > -1){
                        dbs.push(dbName);
                }
        });

        print(dbs.join("\n"));
        print("\n");

}
