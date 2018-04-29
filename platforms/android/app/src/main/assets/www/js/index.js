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
      // Click on a close button to hide the current list item
      alert("Delete is pressed");


    },


    onDeviceReady: function () {
      var taskList = [];
      taskList[0] = "undefined";
      taskList[1] = "Pay bills";
      taskList[2] = "Meet George";
      taskList[3] = "Buy eggs";
      taskList[4] = "Read a book";
      taskList[5] = "Organize office";
var element = document.getElementById("header");
      var array = [];

      var db = window.sqlitePlugin.openDatabase({name: 'taskList.db', location: 'default'});
      db.transaction(function(tr) {
        // tr.executeSql('CREATE TABLE IF NOT EXISTS listTable (id INTEGER PRIMARY KEY AUTOINCREMENT, list)');
        // tr.executeSql('DELETE FROM listTable');
        // tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[0]+'")');
        // tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[1]+'")');
        // tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[2]+'")');
        // tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[3]+'")');
        // tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[4]+'")');
        // tr.executeSql('INSERT INTO listTable (list) VALUES ("'+taskList[5]+'")');
          tr.executeSql('SELECT * FROM listTable', [], function(tr, rs) {

            for(var number=0;number<rs.rows.length;number++)
            {

              array[number] = rs.rows.item(number).list;






              var span = document.createElement("SPAN");
              var txt = document.createTextNode("Delete");

              var span2 = document.createElement("SPAN");
              var txt2 = document.createTextNode("Done");

              var span3 = document.createElement("SPAN");
              var txt3 = document.createTextNode("Doing");

              span.className = "close";
              span.appendChild(txt);

              span2.className = "done";
              span2.appendChild(txt2);

              span3.className = "doing";
              span3.appendChild(txt3);
              //
              var li = document.createElement("li");
              var text = document.createTextNode(array[i]);
              li.appendChild(text);
              li.appendChild(span);
              li.appendChild(span2);
              li.appendChild(span3);
              document.getElementById("myUL").appendChild(li);

              var close = document.getElementsByClassName("close");

              for (var i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentElement;

                  alert(div.childNodes[0].data);

  db.transaction(function(tr) {
     tr.executeSql('DELETE FROM listTable WHERE list = "'+div.childNodes[0].data+'"');
  });

                  document.getElementById("myUL").removeChild(div);
                }
              }
              var done = document.getElementsByClassName("done");

              for (var i = 0; i < done.length; i++) {
                done[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.textDecoration = "line-through";
                }
              }
              var doing = document.getElementsByClassName("doing");

              for (var i = 0; i < doing.length; i++) {
                doing[i].onclick = function() {
                  var div = this.parentElement;
                  div.style.textDecoration = "underline";
                }
              }


            }
            alert(array.length);
          });
        });


          alert("Device is Ready!");

        var span4 = document.createElement("SPAN");
        var txt4 = document.createTextNode("Add");

        span4.className = "add";
        span4.appendChild(txt4);

        element.appendChild(span4);

        var add = document.getElementsByClassName("add");
        var i;
        for (i = 0; i < add.length; i++) {
          add[i].onclick = function() {
            var div = this.parentElement;
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("Delete");

            var span2 = document.createElement("SPAN");
            var txt2 = document.createTextNode("Done");

            var span3 = document.createElement("SPAN");
            var txt3 = document.createTextNode("Doing");

            span.className = "close";
            span.appendChild(txt);

            span2.className = "done";
            span2.appendChild(txt2);

            span3.className = "doing";
            span3.appendChild(txt3);

            var li = document.createElement("li");
            var inputValue;
        //
            for(i=0;i<100000;i++)
            {
              if(array[i] == null)
              {
                inputValue = document.getElementById("myInput").value;
                db.transaction(function(tr) {

                   tr.executeSql('INSERT INTO listTable (list) VALUES ("'+inputValue+'")');
                });

                var t = document.createTextNode(inputValue);
                li.appendChild(t);
        //
        //
                li.appendChild(span);
                li.appendChild(span2);
                li.appendChild(span3);

                if (inputValue === '') {
                  alert("You must write something!");
                   break;
                } else
                {
                  document.getElementById("myUL").appendChild(li);
                  document.getElementById("myInput").value = "";
                  var close = document.getElementsByClassName("close");
                  var i;
                  for (i = 0; i < close.length; i++) {
                    close[i].onclick = function() {var div = this.parentElement;

                    alert(div.childNodes[0].data);

                    db.transaction(function(tr) {
                       tr.executeSql('DELETE FROM listTable WHERE list = "'+div.childNodes[0].data+'"');
                    });

                    document.getElementById("myUL").removeChild(div);
                    }
                  }
                  var done = document.getElementsByClassName("done");
                  var i;
                  for (i = 0; i < done.length; i++) {
                    done[i].onclick = function() {
                      var div = this.parentElement;
                      div.style.textDecoration = "line-through";
                    }
                  }
                  var doing = document.getElementsByClassName("doing");
                  var i;
                  for (i = 0; i < doing.length; i++) {
                    doing[i].onclick = function() {
                      var div = this.parentElement;
                      div.style.textDecoration = "underline";
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
