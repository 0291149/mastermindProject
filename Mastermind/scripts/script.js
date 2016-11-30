/**
 * Created by inet2005 on 11/30/16.
 */

(function(){

    function insertSolutionTable()
    {
        //grab the div
        var solutionDiv = document.getElementById("solution");

        //create table
        var table = document.createElement("table");

        //add table to div
        solutionDiv.appendChild(table);

        //create one row (and for blocks for the solution to appear) for the solution to be contained.
        var row = document.createElement("tr");
        var block1 = document.createElement("td");
        var block2 = document.createElement("td");
        var block3 = document.createElement("td");
        var block4 = document.createElement("td");

        //add row and blocks to table
        table.appendChild(row);
        row.appendChild(block1);
        row.appendChild(block2);
        row.appendChild(block3);
        row.appendChild(block4);

        //add class to the solution table, row, and cells (blocks)

        var solutionTable = document.getElementsByTagName("table")[0];
        solutionTable.className = "solutionTable";

        var solutionRow = document.getElementsByTagName("tr")[0];
        solutionRow.className = "solutionRow";

        var solutionCells = document.getElementsByTagName("td");
        for(var i=0; i<solutionCells.length; i++)
        {
            solutionCells[i].className = "solutionCell";
        }

    }

    function insertChoicesMadeTable()//rowsExpected)
    {
        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentTables = document.getElementsByTagName("table").length;
        var amountOfCurrentRows = document.getElementsByTagName("tr").length;
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        //grab the div
        var choicesDiv = document.getElementById("choicesMade");

        //create table
        var table = document.createElement("table");

        //add table to div
        choicesDiv.appendChild(table);

        for(var i=0; i<8; i++)//rowsExpected; i++)
        {
            //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
            var row = document.createElement("tr");
            var block1 = document.createElement("td");
            var block2 = document.createElement("td");
            var block3 = document.createElement("td");
            var block4 = document.createElement("td");

            //add row and blocks to table
            table.appendChild(row);
            row.appendChild(block1);
            row.appendChild(block2);
            row.appendChild(block3);
            row.appendChild(block4);

        }


        //add class to the solution table, row, and cells (blocks)

        var choicesTable = document.getElementsByTagName("table")[amountOfCurrentTables];
        choicesTable.className = "choicesTable";

        var choicesRow = document.getElementsByTagName("tr");
        for(var i=amountOfCurrentRows; i<choicesRow.length; i++)
        {
            choicesRow[i].className = "choicesRow";
        }

        var choicesCells = document.getElementsByTagName("td");
        for(var i=amountOfCurrentCells; i<choicesCells.length; i++)
        {
            choicesCells[i].className = "choicesCell";
        }

    }

    function insertAreYouRightTable()//rowsExpected)
    {

        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentTables = document.getElementsByTagName("table").length;
        var amountOfCurrentRows = document.getElementsByTagName("tr").length;
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        //grab the div
        var rightDiv = document.getElementById("areYouRight");

        //create table
        var table = document.createElement("table");

        //add table to div
        rightDiv.appendChild(table);



        for(var i=0; i<8; i++)//rowsExpected; i++)
        {
            //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
            var row = document.createElement("tr");
            var block1 = document.createElement("td");
            var block2 = document.createElement("td");
            var block3 = document.createElement("td");
            var block4 = document.createElement("td");

            //add row and blocks to table
            table.appendChild(row);
            row.appendChild(block1);
            row.appendChild(block2);
            row.appendChild(block3);
            row.appendChild(block4);

        }


        //add class to the solution table, row, and cells (blocks)

        var rightTable = document.getElementsByTagName("table")[amountOfCurrentTables];
        rightTable.className = "rightTable";

        var rightRow = document.getElementsByTagName("tr");
        for(var i=amountOfCurrentRows; i<rightRow.length; i++)
        {
            rightRow[i].className = "rightRow";
        }

        var rightCells = document.getElementsByTagName("td");
        for(i=amountOfCurrentCells; i<rightCells.length; i++)
        {
            rightCells[i].className = "rightCell";
        }

    }

    function insertOptions()
    {

        //colour choices
        var colours = ["blue", "green", "yellow", "orange", "red", "purple"];

        //figure initial amounts of (tables, rows, cells)
        var amountOfCurrentTables = document.getElementsByTagName("table").length;
        var amountOfCurrentRows = document.getElementsByTagName("tr").length;
        var amountOfCurrentCells = document.getElementsByTagName("td").length;

        //grab the div
        var optionalDiv = document.getElementById("optionalChoices");

        //create table
        var table = document.createElement("table");

        //add table to div
        optionalDiv.appendChild(table);

        //create multiples rows (and for blocks for the solution to appear) for the solution to be contained.
        var row = document.createElement("tr");
        var block1 = document.createElement("td");
        var block2 = document.createElement("td");
        var block3 = document.createElement("td");
        var block4 = document.createElement("td");
        var block5 = document.createElement("td");
        var block6 = document.createElement("td");

        //add row and blocks to table
        table.appendChild(row);
        row.appendChild(block1);
        row.appendChild(block2);
        row.appendChild(block3);
        row.appendChild(block4);
        row.appendChild(block5);
        row.appendChild(block6);


        //add class to the solution table, row, and cells (blocks)
        var choicesTable = document.getElementsByTagName("table")[amountOfCurrentTables];
        choicesTable.className = "optionalTable";

        var choicesRow = document.getElementsByTagName("tr")[amountOfCurrentRows];
        choicesRow.className = "optionalRow";

        var choicesCells = document.getElementsByTagName("td");
        for(var i=amountOfCurrentCells; i<choicesCells.length; i++)
        {
            //grab the colour at the index of i - what was initially there (to get 0-5)
            var colour = colours[i-amountOfCurrentCells];
            choicesCells[i].className = "optionalCell " + colour;
            /*choicesCells[i].id = colour;*/
        }

    }

    function buildDefaults()
    {
        insertSolutionTable();
        insertChoicesMadeTable();
        insertAreYouRightTable();
        insertOptions();
    }

    buildDefaults();

})();