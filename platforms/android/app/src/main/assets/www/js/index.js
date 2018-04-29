var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("pause", this.onPause.bind(this), false);
        document.addEventListener("resume", this.onResume.bind(this), false);
    },
    onPause: function () {

      alert("onPause CALLED");
    },
    onResume: function () {

      alert("onResume CALLED");


    },


    doneButton: function(){

    },
    deleteButton: function(){

      alert("Delete is pressed");
    },
    onDeviceReady: function () {
      //loading page
      var taskList = [];
      taskList[0] = "item 1";
      taskList[1] = "item 2";
      taskList[2] = "item 3";
      taskList[3] = "item 4";
      taskList[4] = "item 5";
var element = document.getElementById("myDiv");
      var array = [];
//creating the database
      var db = window.sqlitePlugin.openDatabase({name: 'taskList.db', location: 'default'});
      db.transaction(function(tr) {
        tr.executeSql('CREATE TABLE IF NOT EXISTS listTable (id INTEGER PRIMARY KEY AUTOINCREMENT, list)');
        tr.executeSql('DELETE FROM listTable');
        tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[0]+'")');
        tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[1]+'")');
        tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[2]+'")');
        tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[3]+'")');
        tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[4]+'")');
        tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[5]+'")');
          tr.executeSql('SELECT * FROM listTable', [], function(tr, rs) {

            for(var number=0;number<rs.rows.length;number++)
            {
              array[number] = rs.rows.item(number).list;
              //create the button
              var span = document.createElement("SPAN");
              var txt = document.createTextNode("Remove");

              var span2 = document.createElement("SPAN");
              var txt2 = document.createTextNode("-");

              span.className = "remove";
              span.appendChild(txt);

              span2.className = "check";
              span2.appendChild(txt2);


              //but the button in the list
              var li = document.createElement("li");
              var text = document.createTextNode(array[i]);
              li.appendChild(text);
              li.appendChild(span);
              li.appendChild(span2);

              document.getElementById("myList").appendChild(li);

              var remove = document.getElementsByClassName("remove");

              for (var i = 0; i < remove.length; i++) {
                remove[i].onclick = function() {
                  var div = this.parentElement;
//Delete item from database
  db.transaction(function(tr) {
     tr.executeSql('DELETE FROM listTable WHERE list = "'+div.childNodes[0].data+'"');
  });

                  document.getElementById("myList").removeChild(div);
                }
              }
              var check = document.getElementsByClassName("check");

              for (var i = 0; i < check.length; i++) {
                check[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.textDecoration = "line-through";
                }
              }

            }

          });
        });
        //Create the add button
        var span3 = document.createElement("SPAN");
        var txt3 = document.createTextNode("+");

        span3.className = "add";
        span3.appendChild(txt3);

        element.appendChild(span3);
        // create the add function
        var add = document.getElementsByClassName("add");
        var i;
        for (i = 0; i < add.length; i++) {
          add[i].onclick = function() {
            var div = this.parentElement;
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("Remove");

            var span2 = document.createElement("SPAN");
            var txt2 = document.createTextNode("-");

            span.className = "remove";
            span.appendChild(txt);

            span2.className = "check";
            span2.appendChild(txt2);

            var li = document.createElement("li");
            var inputValue;
        //
            for(i=0;i<100000;i++)
            {
              if(array[i] == null)
              {
                inputValue = document.getElementById("inputNewTask").value;
                db.transaction(function(tr) {

                   tr.executeSql('INSERT INTO listTable (list) VALUES ("'+inputValue+'")');
                });

                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                li.appendChild(span);
                li.appendChild(span2);


                if (inputValue === '') {
                  alert("Text box is empty!");
                   break;
                } else
                {
                  document.getElementById("myList").appendChild(li);
                  document.getElementById("inputNewTask").value = "";
                  var remove = document.getElementsByClassName("remove");
                  var i;
                  for (i = 0; i < remove.length; i++) {
                    remove[i].onclick = function() {var div = this.parentElement;



                    db.transaction(function(tr) {
                       tr.executeSql('DELETE FROM listTable WHERE list = "'+div.childNodes[0].data+'"');
                    });

                    document.getElementById("myList").removeChild(div);
                    }
                  }
                  var check = document.getElementsByClassName("check");
                  var i;
                  for (i = 0; i < check.length; i++) {
                    check[i].onclick = function() {
                      var div = this.parentElement;
                      div.style.textDecoration = "line-through";
                    }
                  }

                  break;
                }

              }
            }

          }
        }


        //  Adding Button click event
        document.getElementById("clickAdd").addEventListener('click', this.myFunction.bind(this), false);
    }
};

app.initialize();
