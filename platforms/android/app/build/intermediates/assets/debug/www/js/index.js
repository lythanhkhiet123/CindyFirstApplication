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

    callAlert: function () {

        // We care selecting the input box based on id

       var txt= document.getElementById("txtname");

        // Shwoing the value of the input box
        alert("Text was extracted : : " + txt.value);
    },
    doneButton: function(){

    },
    deleteButton: function(){
      // Click on a close button to hide the current list item
      alert("Delete is pressed");


    },


    onDeviceReady: function () {
        alert("Device is Ready!");
        var element = document.getElementById("header");

        // Create a "close" button and append it to each list item
        var myNodelist = document.getElementsByTagName("LI");

        var i;
        for (i = 0; i < myNodelist.length; i++) {
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

          myNodelist[i].appendChild(span);
          myNodelist[i].appendChild(span2);
          myNodelist[i].appendChild(span3);
          // Click on a close button to hide the current list item

        }
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
            var inputValue = document.getElementById("myInput").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);


            li.appendChild(span);
            li.appendChild(span2);
            li.appendChild(span3);

            if (inputValue === '') {
              alert("You must write something!");
            } else
            {
              document.getElementById("myUL").appendChild(li);
              document.getElementById("myInput").value = "";
            }


            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
              close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
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

          }
        }

        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
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




        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
          }
        }, false);
        //  Adding Button click event
        document.getElementById("clickAdd").addEventListener('click', this.myFunction.bind(this), false);
        document.getElementById("btnClick").addEventListener('click', this.callAlert.bind(this), false);





    }
};

app.initialize();
